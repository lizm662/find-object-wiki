const data = window.WIKI_DATA;

const state = {
  category: "全部",
  tag: "",
  type: "全部",
  query: "",
  selectedId: "",
};

const accentFallback = "#0f766e";

const els = {
  search: document.querySelector("#searchInput"),
  categoryNav: document.querySelector("#categoryNav"),
  tagCloud: document.querySelector("#tagCloud"),
  statStrip: document.querySelector("#statStrip"),
  resultCount: document.querySelector("#resultCount"),
  typeFilters: document.querySelector("#typeFilters"),
  itemGrid: document.querySelector("#itemGrid"),
  detailPanel: document.querySelector("#detailPanel"),
  generatedAt: document.querySelector("#generatedAt"),
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function linkifyInline(value = "") {
  const escaped = escapeHtml(value);
  return escaped
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
      const safeHref = escapeHtml(href);
      return `<a href="${safeHref}" target="_blank" rel="noreferrer">${label}</a>`;
    });
}

function renderMarkdown(markdown = "") {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let inCode = false;
  let codeLines = [];
  let listType = "";
  let tableRows = [];

  const closeList = () => {
    if (listType) {
      html.push(`</${listType}>`);
      listType = "";
    }
  };

  const flushTable = () => {
    if (!tableRows.length) return;
    const rows = tableRows
      .filter((row) => !/^\|\s*-+/.test(row))
      .map((row, index) => {
        const cells = row
          .split("|")
          .slice(1, -1)
          .map((cell) => `<${index === 0 ? "th" : "td"}>${linkifyInline(cell.trim())}</${index === 0 ? "th" : "td"}>`)
          .join("");
        return `<tr>${cells}</tr>`;
      })
      .join("");
    html.push(`<table>${rows}</table>`);
    tableRows = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("```")) {
      flushTable();
      closeList();
      if (inCode) {
        html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
        inCode = false;
      } else {
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      continue;
    }

    if (/^\|.+\|$/.test(trimmed)) {
      closeList();
      tableRows.push(trimmed);
      continue;
    }

    flushTable();

    if (!trimmed) {
      closeList();
      continue;
    }

    const heading = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      html.push(`<h${level}>${linkifyInline(heading[2])}</h${level}>`);
      continue;
    }

    const unordered = trimmed.match(/^[-*]\s+(.+)$/);
    if (unordered) {
      if (listType !== "ul") {
        closeList();
        listType = "ul";
        html.push("<ul>");
      }
      html.push(`<li>${linkifyInline(unordered[1])}</li>`);
      continue;
    }

    const ordered = trimmed.match(/^\d+\.\s+(.+)$/);
    if (ordered) {
      if (listType !== "ol") {
        closeList();
        listType = "ol";
        html.push("<ol>");
      }
      html.push(`<li>${linkifyInline(ordered[1])}</li>`);
      continue;
    }

    if (trimmed.startsWith(">")) {
      closeList();
      html.push(`<blockquote>${linkifyInline(trimmed.replace(/^>\s?/, ""))}</blockquote>`);
      continue;
    }

    closeList();
    html.push(`<p>${linkifyInline(trimmed)}</p>`);
  }

  flushTable();
  closeList();
  return html.join("");
}

function getCategory(name) {
  return data.categories.find((category) => category.name === name) || { color: accentFallback };
}

function itemAccent(item) {
  return getCategory(item.category).color || accentFallback;
}

function normalize(value) {
  return String(value || "").toLowerCase();
}

function searchableText(item) {
  return [
    item.title,
    item.category,
    item.type,
    item.summary,
    item.path,
    item.status,
    item.tags?.join(" "),
    item.headings?.join(" "),
    item.content,
  ]
    .filter(Boolean)
    .join(" ");
}

function filteredItems() {
  const query = normalize(state.query).trim();
  return data.items.filter((item) => {
    const categoryMatch = state.category === "全部" || item.category === state.category;
    const tagMatch = !state.tag || item.tags?.includes(state.tag);
    const typeMatch = state.type === "全部" || item.type === state.type;
    const queryMatch = !query || normalize(searchableText(item)).includes(query);
    return categoryMatch && tagMatch && typeMatch && queryMatch;
  });
}

function byCount(values) {
  const counts = new Map();
  values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-CN"));
}

function renderStats() {
  const stats = data.stats || [
    ["设计页", data.items.length],
    ["主题", data.categories.length],
    ["关键系统", data.items.filter((item) => item.type === "系统说明").length],
    ["来源资料", data.sourceCount || 0],
  ];
  els.statStrip.innerHTML = stats
    .map(([label, value]) => `<div class="stat"><strong>${value}</strong><span>${label}</span></div>`)
    .join("");
  els.generatedAt.textContent = data.generatedAtLabel ? `更新时间：${data.generatedAtLabel}` : "";
}

function renderCategoryNav() {
  const counts = new Map(byCount(data.items.map((item) => item.category)));
  const allButton = categoryButton("全部", data.items.length, "#2f3b4c");
  const buttons = data.categories
    .map((category) => categoryButton(category.name, counts.get(category.name) || 0, category.color))
    .join("");
  els.categoryNav.innerHTML = allButton + buttons;
}

function categoryButton(name, count, color) {
  const active = state.category === name ? " is-active" : "";
  return `
    <button class="category-button${active}" data-category="${escapeHtml(name)}" style="--accent:${color}">
      <span class="category-dot"></span>
      <span class="category-name">${escapeHtml(name)}</span>
      <span class="category-count">${count}</span>
    </button>
  `;
}

function renderTagCloud(items = data.items) {
  const tags = byCount(items.flatMap((item) => item.tags || [])).slice(0, 18);
  els.tagCloud.innerHTML = tags
    .map(([tag, count]) => {
      const active = state.tag === tag ? " is-active" : "";
      return `<button class="chip-button${active}" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)} ${count}</button>`;
    })
    .join("");
}

function renderTypeFilters(items = data.items) {
  const types = [["全部", items.length], ...byCount(items.map((item) => item.type)).slice(0, 6)];
  els.typeFilters.innerHTML = types
    .map(([type, count]) => {
      const active = state.type === type ? " is-active" : "";
      return `<button class="type-button${active}" data-type="${escapeHtml(type)}">${escapeHtml(type)} ${count}</button>`;
    })
    .join("");
}

function renderGrid(items) {
  els.resultCount.textContent = `${items.length} 个知识条目`;
  if (!items.length) {
    els.itemGrid.innerHTML = `<div class="empty-state">没有匹配的条目。</div>`;
    els.detailPanel.innerHTML = "";
    return;
  }

  if (!items.some((item) => item.id === state.selectedId)) {
    state.selectedId = items[0].id;
  }

  els.itemGrid.innerHTML = items
    .map((item) => {
      const selected = item.id === state.selectedId ? " is-selected" : "";
      const accent = itemAccent(item);
      const tags = (item.tags || []).slice(0, 3).map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join("");
      const source = `<span class="pill source">${escapeHtml(item.type)}</span>`;
      return `
        <button class="item-card${selected}" data-id="${escapeHtml(item.id)}" style="--accent:${accent}">
          <div class="card-meta">${source}<span class="pill">${escapeHtml(item.category)}</span></div>
          <h2>${escapeHtml(item.title)}</h2>
          <p class="summary">${escapeHtml(item.summary || "暂无摘要")}</p>
          <div class="inline-tags">${tags}</div>
          <div class="card-foot">${escapeHtml(item.path || item.href || "")}</div>
        </button>
      `;
    })
    .join("");
}

function renderDetail() {
  const item = data.items.find((entry) => entry.id === state.selectedId);
  if (!item) return;
  const accent = itemAccent(item);
  const tags = (item.tags || []).map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join("");
  const modified = item.modified ? `<span class="pill">修改：${escapeHtml(item.modified)}</span>` : "";
  const sourceText = item.path || item.href || "";
  const sourceLabel = item.kind === "online" ? "打开主要来源" : "打开主要来源";
  const sourceLink = item.href ? `<a class="link-button" href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">${sourceLabel}</a>` : "";
  const fallbackNote =
    item.kind === "online"
      ? "详细规则以源文档为准；本页用于快速理解系统定位和关键设计点。"
      : "本页用于快速理解系统定位和关键设计点。";
  const content = item.content
    ? renderMarkdown(item.content)
    : renderMarkdown(
        [
          `# ${item.title}`,
          "",
          item.summary || "",
          "",
          item.status ? `- 状态：${item.status}` : "",
          item.modified ? `- 最后修改时间：${item.modified}` : "",
          item.href ? `- 来源链接：[${item.title}](${item.href})` : "",
          "",
          fallbackNote,
        ]
          .filter(Boolean)
          .join("\n")
      );

  els.detailPanel.innerHTML = `
    <p class="section-label" style="color:${accent}">${escapeHtml(item.category)}</p>
    <h2>${escapeHtml(item.title)}</h2>
    <div class="detail-meta">
      <span class="pill source">${escapeHtml(item.type)}</span>
      ${modified}
      ${tags}
    </div>
    <div class="detail-actions">${sourceLink}</div>
    <p class="detail-source">${escapeHtml(sourceText)}</p>
    <div class="markdown-body">${content}</div>
  `;
}

function render() {
  const items = filteredItems();
  const categoryScoped = state.category === "全部" ? data.items : data.items.filter((item) => item.category === state.category);
  renderCategoryNav();
  renderTagCloud(categoryScoped);
  renderTypeFilters(categoryScoped);
  renderGrid(items);
  renderDetail();
}

els.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

els.categoryNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  state.tag = "";
  state.type = "全部";
  render();
});

els.tagCloud.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tag]");
  if (!button) return;
  state.tag = state.tag === button.dataset.tag ? "" : button.dataset.tag;
  render();
});

els.typeFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-type]");
  if (!button) return;
  state.type = button.dataset.type;
  render();
});

els.itemGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-id]");
  if (!card) return;
  state.selectedId = card.dataset.id;
  render();
});

renderStats();
render();
