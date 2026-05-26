window.WIKI_DATA = {
  "generatedAt": "2026-05-11T10:54:40.951Z",
  "generatedAtLabel": "2026/5/11 18:54:40",
  "sourceCount": 23,
  "stats": [
    [
      "设计页",
      23
    ],
    [
      "主题",
      8
    ],
    [
      "关键系统",
      19
    ],
    [
      "来源资料",
      22
    ]
  ],
  "categories": [
    {
      "name": "先读这里",
      "color": "#315c9b"
    },
    {
      "name": "核心玩法",
      "color": "#b96f18"
    },
    {
      "name": "关卡与难度",
      "color": "#8a5a16"
    },
    {
      "name": "经济与资源",
      "color": "#0f766e"
    },
    {
      "name": "Meta 活动",
      "color": "#34784f"
    },
    {
      "name": "账号与展示",
      "color": "#b64b5a"
    },
    {
      "name": "商业化",
      "color": "#8f4b2e"
    },
    {
      "name": "交付参考",
      "color": "#6f5aa8"
    }
  ],
  "items": [
    {
      "id": "design-f055e1492c",
      "title": "3 分钟理解 Find Object",
      "category": "先读这里",
      "type": "总览",
      "kind": "local",
      "href": "../Docs/OnlineKnowledge/在线文档索引.md",
      "path": "../Docs/OnlineKnowledge/在线文档索引.md",
      "summary": "给非策划、新策划、研发、UI、QA 快速建立共同语境：这是一款以找宝藏单局为核心、用难度波动和 Meta 活动延长目标链的移动游戏。",
      "status": "",
      "modified": "",
      "tags": [
        "新人必读",
        "总览",
        "核心循环"
      ],
      "headings": [],
      "content": "# 3 分钟理解 Find Object\n\nFind Object 是移动端 Hidden Object / Find Object 项目。玩家在一张场景图中寻找宝藏，完成关卡后获得金币、宝箱、token 或活动进度，再被主线关卡、难度关、Meta 活动和商城资源拉回下一局。\n\n## 一句话核心循环\n\n进入关卡 → 在场景图中寻找宝藏 → 使用 hint 或承受生命 / 倒计时压力 → 成功结算或失败复活 → 获得金币、宝箱、token 或活动进度 → 回到首页继续推进主线和 Meta 活动。\n\n## 当前设计骨架\n\n- 核心玩法：背景图 + 宝藏列表 + 点击找宝藏 + hint + 生命 / 失败。\n- 难度层：Normal、Hard、SuperHard；Hard / SuperHard 承担难度波动、视觉提示和更高奖励。\n- 时间压力：限时关通过倒计时制造紧张感，可通过配置控制是否启用。\n- 资源经济：金币是主要价值锚点；hint、能量、无限能量、盲盒、token、卡片等组成奖励和消耗体系。\n- Meta 活动：进度宝箱、周榜、帆船竞速、爬塔连胜、每日任务、收集等系统提供长期目标。\n- 商业化：商城、礼包、IAA、IAP、无尽礼包独立说明，不和账号展示混在一起。\n\n## 新成员建议阅读路径\n\n- 研发：先看“单局找宝藏玩法”“失败、复活与结算”“能量系统”。\n- UI / 动效：先看“关卡难度与视觉反馈”“限时关体验”“失败、复活与结算”“账号展示”。\n- QA：先看“主线奖励与功能开放”“失败、复活与结算”“IAA 与 IAP 变现”。\n- 数值 / 商业化：先看“经济资源总览”“能量系统”“主线奖励与功能开放”“商业化总览”。\n- 新策划：按左侧从上到下读完，再进入源文档补细节。\n\n## 主要来源\n- [在线资料入口](../Docs/OnlineKnowledge/在线文档索引.md)\n- [术语统一口径](../Docs/补充记录/术语统一口径.md)\n- [数值表总览](../Docs/数值分析/00_数值表分析总览.md)"
    },
    {
      "id": "design-b1e1f37df8",
      "title": "玩家主路径与页面流",
      "category": "先读这里",
      "type": "流程",
      "kind": "local",
      "href": "../Docs/OnlineKnowledge/在线文档索引.md",
      "path": "../Docs/OnlineKnowledge/在线文档索引.md",
      "summary": "从首页、进关、单局、结算、失败到 Meta 导流的主流程说明，适合研发、QA 和新成员先建立页面地图。",
      "status": "",
      "modified": "",
      "tags": [
        "流程",
        "页面",
        "QA"
      ],
      "headings": [],
      "content": "# 玩家主路径与页面流\n\n## 主流程\n\n1. 进入 Home 首页。\n2. 点击关卡入口，必要时消耗能量。\n3. 进入单局找宝藏。\n4. 找齐宝藏后成功结算；失败时进入失败、复活、重试或退出流程。\n5. 结算后获得金币、宝箱、token 或活动进度。\n6. 回首页，继续主线或进入 Meta 活动。\n\n## 首页承担什么\n\n- 展示关卡入口和难度状态。\n- 展示金币、能量等资源。\n- 承接活动、商城、账号展示和排行榜入口。\n- 作为玩家完成一局后回流的主要场景。\n\n## 给项目成员的理解重点\n\n- 单局是核心体验，所有经济与活动最终都需要服务“继续玩下一关”。\n- 失败、复活、广告和金币消耗是核心循环中的关键转化点。\n- Meta 活动的设计重点是把“完成关卡”转化为不同外层目标进度。\n\n## 主要来源\n- [Hard 模式](https://docs.google.com/document/d/16xqeRJ_yNaPoZn5d4xLhgPcwr4e0NM20eNHjKT1Lv6M/edit?usp=drivesdk)\n- [限时关规则](https://docs.google.com/document/d/1lN0N63pSGGRlk6aFipKKprgG78ciui9Ug9-lAfTtfEo/edit?usp=drivesdk)\n- [失败弹窗和复活流程](https://docs.google.com/document/d/1DbjbHr0iL-RzWr9N09h0-wRF6RHfDXfzTBSo4fMSdx4/edit?usp=drivesdk)\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)"
    },
    {
      "id": "design-85080165cc",
      "title": "单局找宝藏玩法",
      "category": "核心玩法",
      "type": "玩法",
      "kind": "online",
      "href": "https://docs.google.com/document/d/16xqeRJ_yNaPoZn5d4xLhgPcwr4e0NM20eNHjKT1Lv6M/edit?usp=drivesdk",
      "path": "https://docs.google.com/document/d/16xqeRJ_yNaPoZn5d4xLhgPcwr4e0NM20eNHjKT1Lv6M/edit?usp=drivesdk",
      "summary": "说明单局的组成：场景、宝藏、宝藏列表、hint、生命、倒计时和组合宝藏。",
      "status": "",
      "modified": "",
      "tags": [
        "单局",
        "宝藏",
        "hint",
        "生命"
      ],
      "headings": [],
      "content": "# 单局找宝藏玩法\n\n## 单局由什么组成\n\n- 一张找宝藏场景图。\n- 一组需要被找到的宝藏。\n- 宝藏列表。\n- hint 道具。\n- 单局生命，用于点错扣除和失败。\n- 部分关卡存在倒计时或组合宝藏。\n\n## 宝藏类型\n\n- 普通宝藏：玩家根据列表找到并点击。\n- 组合宝藏：线上文档中有单独规则入口，属于核心玩法扩展。\n- 迷惑物：用于增加干扰和难度。\n\n## 设计注意点\n\n- 宝藏大小、遮挡、分散程度、迷惑物会影响关卡难度。\n- Hard 文档中提到制图标准为 30 个点，并可通过配置控制实际出现宝藏数。\n- 单局生命和全局能量要分开理解：生命影响单局失败，能量是关卡进入消耗。\n\n## 主要来源\n- [Hard 模式](https://docs.google.com/document/d/16xqeRJ_yNaPoZn5d4xLhgPcwr4e0NM20eNHjKT1Lv6M/edit?usp=drivesdk)\n- [组合宝藏规则](https://docs.google.com/document/d/1cM1vfNxgwVx5TkLzLXYxVt8qzKkfYp3vILr3v8xfIno/edit?usp=drivesdk)\n- [限时关规则](https://docs.google.com/document/d/1lN0N63pSGGRlk6aFipKKprgG78ciui9Ug9-lAfTtfEo/edit?usp=drivesdk)"
    },
    {
      "id": "design-39de7ebcdf",
      "title": "关卡难度与节奏",
      "category": "关卡与难度",
      "type": "玩法",
      "kind": "online",
      "href": "https://docs.google.com/document/d/16xqeRJ_yNaPoZn5d4xLhgPcwr4e0NM20eNHjKT1Lv6M/edit?usp=drivesdk",
      "path": "https://docs.google.com/document/d/16xqeRJ_yNaPoZn5d4xLhgPcwr4e0NM20eNHjKT1Lv6M/edit?usp=drivesdk",
      "summary": "Normal、Hard、SuperHard 的定位、开放节奏、奖励差异和难度构成。",
      "status": "",
      "modified": "",
      "tags": [
        "关卡",
        "Hard",
        "SuperHard",
        "奖励"
      ],
      "headings": [],
      "content": "# 关卡难度与节奏\n\n## 三层关卡\n\n- Normal：基础找宝藏关卡，承担主线推进。\n- Hard：更高难度波动，用于减少重复感，提供更高奖励。\n- SuperHard：更强挑战层，承担更高奖励和更强挑战感。\n\n## 功能开放节奏\n\n- hint：关卡 0。\n- Hard 关卡：关卡 15。\n- SuperHard 关卡：关卡 20。\n- 40/50 点：关卡 100。\n- 组合宝藏：关卡 175。\n- 限时关：关卡 250。\n\n## 奖励与价值感\n\n- Hard 模式文档要求 Hard / SuperHard 关有更明显奖励吸引力。\n- 文档中提到 Hard 奖励系数 3 倍、SuperHard 奖励系数 5 倍，并要求支持云控。\n- 数值分析中，主线基础金币口径为 Normal 10、Hard 30、SuperHard 50；激励倍率为 3。\n\n## 视觉反馈\n\n- 首页关卡按钮需要显示 Hard / SuperHard 难度。\n- Hard 使用橙色，SuperHard 使用红色。\n- Loading、局内和结算页都需要让玩家感知本关难度。\n\n## 主要来源\n- [Hard 模式](https://docs.google.com/document/d/16xqeRJ_yNaPoZn5d4xLhgPcwr4e0NM20eNHjKT1Lv6M/edit?usp=drivesdk)\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)\n- [Find object 数值](https://docs.google.com/spreadsheets/d/1q95A5fRdRYtXfzfAS7hFeldbzOZ_79z0qqEvTYP5Sqg/edit?usp=drivesdk)"
    },
    {
      "id": "design-2129428b17",
      "title": "组合宝藏",
      "category": "关卡与难度",
      "type": "玩法",
      "kind": "online",
      "href": "https://docs.google.com/document/d/1cM1vfNxgwVx5TkLzLXYxVt8qzKkfYp3vILr3v8xfIno/edit?usp=drivesdk",
      "path": "https://docs.google.com/document/d/1cM1vfNxgwVx5TkLzLXYxVt8qzKkfYp3vILr3v8xfIno/edit?usp=drivesdk",
      "summary": "组合宝藏是中后期出现的核心玩法扩展，用于在找宝藏规则中加入组合目标和更复杂的识别节奏。",
      "status": "",
      "modified": "",
      "tags": [
        "组合宝藏",
        "关卡",
        "宝藏",
        "中后期"
      ],
      "headings": [],
      "content": "# 组合宝藏\n\n## 系统定位\n\n组合宝藏是找宝藏单局的规则扩展。它不是独立于关卡外的 Meta 活动，而是进入关卡后影响玩家如何识别、理解和完成宝藏目标。\n\n## 开放节奏\n\n- 数值分析中，组合宝藏在关卡 175 开放。\n- 它应被放在“关卡与难度”下理解，和 Hard / SuperHard、40/50 点、限时关一起构成中后期关卡变化。\n\n## 体验作用\n\n- 增加同一场景内的目标理解成本。\n- 给高关卡提供不依赖单纯增加点位数量的变化。\n- 让宝藏列表、场景表现和点击反馈需要更清楚地表达“组合”关系。\n\n## 项目成员关注点\n\n- 研发：关注组合目标的配置读取、完成判定、点击反馈和结算兼容。\n- UI：关注宝藏列表如何表达组合关系，避免玩家把组合目标误解为普通宝藏。\n- QA：关注组合目标和 hint、生命扣除、失败、复活、限时关的组合情况。\n- 策划：具体组合规则、目标数量和关卡投放要回到线上文档与在线数值表核对。\n\n## 主要来源\n- [组合宝藏规则](https://docs.google.com/document/d/1cM1vfNxgwVx5TkLzLXYxVt8qzKkfYp3vILr3v8xfIno/edit?usp=drivesdk)\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)\n- [Find object 数值](https://docs.google.com/spreadsheets/d/1q95A5fRdRYtXfzfAS7hFeldbzOZ_79z0qqEvTYP5Sqg/edit?usp=drivesdk)"
    },
    {
      "id": "design-4214f14429",
      "title": "限时关体验",
      "category": "关卡与难度",
      "type": "玩法",
      "kind": "online",
      "href": "https://docs.google.com/document/d/1lN0N63pSGGRlk6aFipKKprgG78ciui9Ug9-lAfTtfEo/edit?usp=drivesdk",
      "path": "https://docs.google.com/document/d/1lN0N63pSGGRlk6aFipKKprgG78ciui9Ug9-lAfTtfEo/edit?usp=drivesdk",
      "summary": "限时机制用于强化 Hard / SuperHard 的紧张感，并通过配置控制启用、时长和复活加时。",
      "status": "",
      "modified": "",
      "tags": [
        "限时",
        "倒计时",
        "失败",
        "配置"
      ],
      "headings": [],
      "content": "# 限时关体验\n\n## 设计目的\n\n限时关给 Hard / SuperHard 增加时间压力，让高熟练玩家在高难关中感受到更明确的挑战差异。Normal 模式保持不限时。\n\n## 基础规则\n\n- 关卡配置表新增 time 列，单位为秒。\n- Hard / SuperHard 可以配置限时；time 为空时也允许不限时。\n- 云控 time_limit_mode 控制限时模式开关。\n- 进入关卡后出现时间挑战提示，玩家任意操作后开始计时。\n- 后台、道具购买、金币不足跳商城、失败弹窗、激励视频等场景暂停计时。\n\n## 当前确认口径\n\n- 从第 250 关起，所有 SuperHard 关均为限时关。\n- 40 个点为 6 分 30 秒，50 个点为 8 分钟。\n- 时间耗尽后可复活，复活恢复 120 秒。\n\n## UI / QA 关注点\n\n- 倒计时应避免干扰找宝藏画面，文档中倾向显示在宝藏栏上。\n- 剩余 30、20、10 秒时有红色闪烁或心跳放大反馈。\n- 失败页需要兼容时间失败和生命失败两类状态。\n\n## 主要来源\n- [限时关规则](https://docs.google.com/document/d/1lN0N63pSGGRlk6aFipKKprgG78ciui9Ug9-lAfTtfEo/edit?usp=drivesdk)\n- [失败弹窗和复活流程](https://docs.google.com/document/d/1DbjbHr0iL-RzWr9N09h0-wRF6RHfDXfzTBSo4fMSdx4/edit?usp=drivesdk)"
    },
    {
      "id": "design-5335cababd",
      "title": "失败、复活与结算",
      "category": "核心玩法",
      "type": "流程",
      "kind": "online",
      "href": "https://docs.google.com/document/d/1DbjbHr0iL-RzWr9N09h0-wRF6RHfDXfzTBSo4fMSdx4/edit?usp=drivesdk",
      "path": "https://docs.google.com/document/d/1DbjbHr0iL-RzWr9N09h0-wRF6RHfDXfzTBSo4fMSdx4/edit?usp=drivesdk",
      "summary": "说明玩家失败后的复活路径、金币消耗、时间恢复、生命恢复和成功结算奖励展示。",
      "status": "",
      "modified": "",
      "tags": [
        "失败",
        "复活",
        "结算",
        "金币"
      ],
      "headings": [],
      "content": "# 失败、复活与结算\n\n## 失败来源\n\n- 单局生命耗尽。\n- 限时关倒计时耗尽。\n- 主动退出关卡。\n\n## 复活口径\n\n- “续命”统一称为复活。\n- 复活消耗 500 金币。\n- 普通失败后复活生命回满。\n- 限时失败后复活恢复 120 秒。\n- 限时文档中提到复活次数不限制，但具体最终实现应以后续源文档和实机验证为准。\n\n## 成功结算\n\n- 结算需要区分 Normal、Hard、SuperHard 的奖励表达。\n- Hard / SuperHard 的奖励倍数和视觉反馈需要与关前按钮一致。\n- 结算流程需要处理金币、宝箱、token、活动进度和激励奖励。\n\n## 研发 / QA 关注点\n\n- 生命失败和时间失败弹窗状态不要混淆。\n- 复活后需要处理生命、时间、动画反馈和金币扣除。\n- 结算中需要确认激励奖励、活动进度和资源飞行动画的先后关系。\n\n## 主要来源\n- [失败弹窗和复活流程](https://docs.google.com/document/d/1DbjbHr0iL-RzWr9N09h0-wRF6RHfDXfzTBSo4fMSdx4/edit?usp=drivesdk)\n- [限时关规则](https://docs.google.com/document/d/1lN0N63pSGGRlk6aFipKKprgG78ciui9Ug9-lAfTtfEo/edit?usp=drivesdk)\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)"
    },
    {
      "id": "design-f49351faf4",
      "title": "经济资源总览",
      "category": "经济与资源",
      "type": "数值",
      "kind": "local",
      "href": "../Docs/数值分析/03_系统判断.md",
      "path": "../Docs/数值分析/03_系统判断.md",
      "summary": "金币、hint、能量、无限能量、盲盒、token、卡片等资源的定位和换算锚点。",
      "status": "",
      "modified": "",
      "tags": [
        "金币",
        "hint",
        "能量",
        "盲盒",
        "卡片"
      ],
      "headings": [],
      "content": "# 经济资源总览\n\n## 主要资源\n\n- 金币：表内核心价值单位，用于复活、补能量、商城等。\n- hint：有明确金币和美元价值锚点的道具资源。\n- 能量：测试中的全局关卡进入消耗，不等同单局生命。\n- 无限能量：一定时间内进关不消耗能量，时间可累加。\n- 普通盲盒 / 稀有盲盒：主线和多个活动中的奖励与收集来源。\n- token：Meta 活动中二级代币的通称。\n- 卡片、银、金、水晶：收集规划资源。\n\n## 价值锚点\n\n- 600 金币 = 1 美元。\n- 1 hint = 300 金币 = 0.5 美元。\n- 1 能量 = 9 金币 = 0.015 美元。\n- 能量 refill = 900 金币。\n- 复活 = 500 金币。\n\n## 需要谨慎理解\n\n- hint 当前没有单独售卖；表内价值更多用于换算和礼包识别。\n- 能量是测试中的全局系统，不向所有玩家开放。\n- 收集、每日任务当前仍有待确认口径，不要直接当成已实装规则。\n\n## 主要来源\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)\n- [数值表分析总览](../Docs/数值分析/00_数值表分析总览.md)\n- [Find object 数值](https://docs.google.com/spreadsheets/d/1q95A5fRdRYtXfzfAS7hFeldbzOZ_79z0qqEvTYP5Sqg/edit?usp=drivesdk)"
    },
    {
      "id": "design-87c3a025df",
      "title": "能量系统",
      "category": "经济与资源",
      "type": "系统说明",
      "kind": "online",
      "href": "https://docs.google.com/document/d/1J1TKMO2VBCTHeIThf4aiIQEXOqQ8IhUxt1IU3hvlmyk/edit?usp=drivesdk",
      "path": "https://docs.google.com/document/d/1J1TKMO2VBCTHeIThf4aiIQEXOqQ8IhUxt1IU3hvlmyk/edit?usp=drivesdk",
      "summary": "能量是关卡进入消耗，用于限制高玩无限推关，也可作为奖励投放和资源消耗入口。",
      "status": "",
      "modified": "",
      "tags": [
        "能量",
        "无限能量",
        "广告",
        "金币"
      ],
      "headings": [],
      "content": "# 能量系统\n\n## 系统定位\n\n能量是一种关卡进入消耗。玩家开始关卡时消耗能量，是否通关不影响这次消耗。它用于限制高玩无限推关，并提供金币消耗、广告恢复和奖励投放空间。\n\n## 基础规则\n\n- 有云控开关。\n- 有等级控制，默认第 1 关通关后开启。\n- 有默认上限；时间恢复不会超过上限。\n- 额外获得的固定能量可以超过上限。\n- 能量上限和恢复时间均可配置。\n\n## 无限能量\n\n- 一定时间内进关无需消耗能量。\n- 重复获得时，持续时间可累加。\n- 无限能量期间不影响原本能量的时间恢复。\n\n## 补充方式\n\n- 激励视频：能量小于单关消耗时显示，看广告恢复一定能量。\n- 金币补充：能量小于上限时显示，消耗金币恢复至上限。\n- 无限能量状态下不显示能量补充入口。\n\n## UI 状态\n\n- 满能量：不显示加号。\n- 未满能量：显示进度条、下一点恢复时间、广告/金币补充入口。\n- 无限能量：显示无限能量 icon 和剩余时间。\n\n## 主要来源\n- [能量系统](https://docs.google.com/document/d/1J1TKMO2VBCTHeIThf4aiIQEXOqQ8IhUxt1IU3hvlmyk/edit?usp=drivesdk)\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)"
    },
    {
      "id": "design-e7dc3d033c",
      "title": "主线奖励与功能开放",
      "category": "经济与资源",
      "type": "数值",
      "kind": "local",
      "href": "../Docs/数值分析/03_系统判断.md",
      "path": "../Docs/数值分析/03_系统判断.md",
      "summary": "从功能开启表和主线奖励表理解玩家早期、中期、后期会接触到哪些系统。",
      "status": "",
      "modified": "",
      "tags": [
        "功能开放",
        "奖励",
        "主线",
        "广告"
      ],
      "headings": [],
      "content": "# 主线奖励与功能开放\n\n## 开放节奏摘录\n\n- 关卡 0：hint、进度宝箱。\n- 关卡 1：能量系统。\n- 关卡 6：插屏。\n- 关卡 15：Hard 关卡、结算激励广告。\n- 关卡 20：SuperHard、周榜。\n- 关卡 35：爬塔连胜。\n- 关卡 39：无尽礼包。\n- 关卡 50：收集。\n- 关卡 70：帆船竞速。\n- 关卡 100：40/50 点。\n- 关卡 175：组合宝藏。\n- 关卡 250：限时关。\n\n## 主线奖励口径\n\n- Normal：基础金币 10，激励后 30。\n- Hard：基础金币 30，激励后 90。\n- SuperHard：基础金币 50，激励后 150，并有普通盲盒口径。\n\n## 读表提醒\n\n这页给的是当前数值分析快照。精确字段、最新参数和活动目标需要打开在线数值表核对。\n\n## 主要来源\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)\n- [Find object 数值](https://docs.google.com/spreadsheets/d/1q95A5fRdRYtXfzfAS7hFeldbzOZ_79z0qqEvTYP5Sqg/edit?usp=drivesdk)"
    },
    {
      "id": "design-ed36df32b4",
      "title": "Meta 活动系统总览",
      "category": "Meta 活动",
      "type": "系统说明",
      "kind": "local",
      "href": "../Docs/OnlineKnowledge/在线文档索引.md",
      "path": "../Docs/OnlineKnowledge/在线文档索引.md",
      "summary": "把进度宝箱、周榜、帆船竞速、爬塔连胜、每日任务、收集等作为独立玩法入口理解。",
      "status": "",
      "modified": "",
      "tags": [
        "Meta",
        "活动",
        "长期目标"
      ],
      "headings": [],
      "content": "# Meta 活动系统总览\n\nMeta 活动给主线关卡之外的目标，让玩家有“今天为什么继续玩”“这一周为什么继续玩”“完成关卡还能推进什么”的理由。本 Wiki 将这些玩法拆成独立条目，便于研发、UI、QA 和新策划分别查阅。\n\n## 当前资料中的活动群\n\n- 进度宝箱：用星星或 token 形成阶段奖励。\n- 周榜：围绕排名、奖励展示和周期目标。\n- 帆船竞速：竞速类活动目标。\n- 爬塔连胜：连胜爬塔类活动目标。\n- 每日任务：当前数值待确定，规划中口径需谨慎。\n- 收集：卡片、盲盒、银/金/水晶等资源规划，当前属于规划中。\n\n## 项目成员理解重点\n\n- 这些系统不是彼此孤立，核心作用都是把“完成关卡”转化为不同外层目标进度。\n- 研发和 QA 应关注活动入口、结算加进度、周期刷新、奖励领取和异常状态。\n- 数值和运营应关注活动周期、目标关卡数、奖励池和资源回流。\n\n## 主要来源\n- [进度宝箱源文档](https://docs.google.com/document/d/1PZF4TTm9YiurSxGsGiBsrVE_TNIls-pxoOXYiY3KF98/edit?usp=drivesdk)\n- [周榜](https://docs.google.com/document/d/1oduZJB5inQ1nhf6Il3ZkmNtWWeovScsEQbIxglkHEok/edit?usp=drivesdk)\n- [帆船竞速](https://docs.google.com/document/d/18fCop6d0UOJT1rc42QU3nGxJAavA-DUfsgeRR4yza0Q/edit?usp=drivesdk)\n- [爬塔连胜源文档](https://docs.google.com/document/d/1-7QF2OCtkL0skv_WYPJVM_Z7mWBAyYaprLZuQzu4NUA/edit?usp=drivesdk)\n- [每日任务](https://docs.google.com/document/d/1yPia_TFhggU7x0exT_WT3oVF4N62toTpcblFZJEcx9s/edit?usp=drivesdk)\n- [收集](https://docs.google.com/document/d/1w6lUaFF96T2YKnJLkaqAiR8152nVNYrYxdV5UOo2oVc/edit?usp=drivesdk)\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)"
    },
    {
      "id": "design-a877e2618b",
      "title": "进度宝箱",
      "category": "Meta 活动",
      "type": "系统说明",
      "kind": "online",
      "href": "https://docs.google.com/document/d/1PZF4TTm9YiurSxGsGiBsrVE_TNIls-pxoOXYiY3KF98/edit?usp=drivesdk",
      "path": "https://docs.google.com/document/d/1PZF4TTm9YiurSxGsGiBsrVE_TNIls-pxoOXYiY3KF98/edit?usp=drivesdk",
      "summary": "进度宝箱把关卡完成转化为阶段奖励，进度宝箱 new 表是当前优先口径。",
      "status": "",
      "modified": "",
      "tags": [
        "宝箱",
        "进度",
        "奖励",
        "token"
      ],
      "headings": [],
      "content": "# 进度宝箱\n\n## 系统定位\n\n进度宝箱用于把玩家完成关卡的行为转化为阶段奖励。它通常和星星、token、宝箱进度、奖励展示相关。\n\n## 当前口径\n\n- 进度宝箱源文档优先于初版文档。\n- 数值分析中，meta-进度宝箱new 是当前可见新表；旧 meta-进度宝箱 是隐藏旧表。\n- 进度宝箱为固定半周周期：周一到周四为一期，周五到周日为一期。\n- 表内出现无限能量、普通盲盒、稀有盲盒等奖励。\n\n## 注意点\n\n- 具体星星/token 产出、宝箱档位、奖励数量，需要以在线数值表最新字段为准。\n- UI/QA 需要关注进度满、领取、刷新、活动结束和补发状态。\n\n## 主要来源\n- [进度宝箱源文档](https://docs.google.com/document/d/1PZF4TTm9YiurSxGsGiBsrVE_TNIls-pxoOXYiY3KF98/edit?usp=drivesdk)\n- [Find object 数值](https://docs.google.com/spreadsheets/d/1q95A5fRdRYtXfzfAS7hFeldbzOZ_79z0qqEvTYP5Sqg/edit?usp=drivesdk)\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)"
    },
    {
      "id": "design-5e00476f4e",
      "title": "周榜",
      "category": "Meta 活动",
      "type": "系统说明",
      "kind": "online",
      "href": "https://docs.google.com/document/d/1oduZJB5inQ1nhf6Il3ZkmNtWWeovScsEQbIxglkHEok/edit?usp=drivesdk",
      "path": "https://docs.google.com/document/d/1oduZJB5inQ1nhf6Il3ZkmNtWWeovScsEQbIxglkHEok/edit?usp=drivesdk",
      "summary": "周榜是围绕周周期排名与奖励展示的独立玩法。",
      "status": "",
      "modified": "",
      "tags": [
        "周榜",
        "排行",
        "周期",
        "奖励"
      ],
      "headings": [],
      "content": "# 周榜\n\n## 系统定位\n\n周榜是周排行活动，用排名、周期目标和奖励展示给玩家提供一周维度的竞争目标。\n\n## 体验作用\n\n- 把玩家完成关卡的行为转化为排行进度。\n- 通过榜单名次、阶段奖励或周期结算制造持续目标。\n- 为账号名、头像、头像框和机器人名字提供展示场景。\n\n## 项目成员关注点\n\n- 研发：关注排行榜分组、分数同步、周期刷新、奖励发放和异常补偿。\n- UI：关注榜单名次、奖励预览、倒计时和玩家自身位置表达。\n- QA：关注开放条件、空榜、并列、断线重进、结算跨期和奖励领取状态。\n- 策划：具体分数口径、奖励档位和分组规则要回到在线文档与在线数值表核对。\n\n## 主要来源\n- [周榜](https://docs.google.com/document/d/1oduZJB5inQ1nhf6Il3ZkmNtWWeovScsEQbIxglkHEok/edit?usp=drivesdk)\n- [Find object 数值](https://docs.google.com/spreadsheets/d/1q95A5fRdRYtXfzfAS7hFeldbzOZ_79z0qqEvTYP5Sqg/edit?usp=drivesdk)\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)"
    },
    {
      "id": "design-90091a2c27",
      "title": "帆船竞速",
      "category": "Meta 活动",
      "type": "系统说明",
      "kind": "online",
      "href": "https://docs.google.com/document/d/18fCop6d0UOJT1rc42QU3nGxJAavA-DUfsgeRR4yza0Q/edit?usp=drivesdk",
      "path": "https://docs.google.com/document/d/18fCop6d0UOJT1rc42QU3nGxJAavA-DUfsgeRR4yza0Q/edit?usp=drivesdk",
      "summary": "帆船竞速是竞速类活动目标，强调阶段推进、对手感和活动期内的冲刺反馈。",
      "status": "",
      "modified": "",
      "tags": [
        "帆船竞速",
        "竞速",
        "活动"
      ],
      "headings": [],
      "content": "# 帆船竞速\n\n## 系统定位\n\n帆船竞速是竞速类活动目标。它把完成关卡后的进度转化为一段竞速旅程，强化活动期间的追赶、领先和冲刺感。\n\n## 当前口径\n\n- 数值表中存在帆船竞速相关表。\n- 数值分析提示该表存在“手填，需要同步修改”的维护风险，因此精确目标和奖励必须回到在线数值表核对。\n\n## 项目成员关注点\n\n- 研发：关注活动进度推进、对手状态、活动开始结束和奖励领取。\n- UI：关注船只位置、名次/距离表达、阶段奖励和活动倒计时。\n- QA：关注活动开放、进度变化、离线重进、跨期刷新和奖励状态。\n- 策划：目标长度、奖励节奏和对手强度不要脱离在线数值表。\n\n## 主要来源\n- [帆船竞速](https://docs.google.com/document/d/18fCop6d0UOJT1rc42QU3nGxJAavA-DUfsgeRR4yza0Q/edit?usp=drivesdk)\n- [Find object 数值](https://docs.google.com/spreadsheets/d/1q95A5fRdRYtXfzfAS7hFeldbzOZ_79z0qqEvTYP5Sqg/edit?usp=drivesdk)\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)"
    },
    {
      "id": "design-bad85c998c",
      "title": "爬塔连胜",
      "category": "Meta 活动",
      "type": "系统说明",
      "kind": "online",
      "href": "https://docs.google.com/document/d/1-7QF2OCtkL0skv_WYPJVM_Z7mWBAyYaprLZuQzu4NUA/edit?usp=drivesdk",
      "path": "https://docs.google.com/document/d/1-7QF2OCtkL0skv_WYPJVM_Z7mWBAyYaprLZuQzu4NUA/edit?usp=drivesdk",
      "summary": "爬塔连胜是连胜爬塔类目标，围绕连续通关、层数推进和存档点形成挑战。",
      "status": "",
      "modified": "",
      "tags": [
        "爬塔连胜",
        "连胜",
        "爬塔",
        "挑战"
      ],
      "headings": [],
      "content": "# 爬塔连胜\n\n## 系统定位\n\n爬塔连胜是连胜爬塔类活动目标，用连续通关、层数推进和阶段奖励制造更强挑战感。\n\n## 当前口径\n\n- 数值分析中存在爬塔连胜的目标、活动时间和存档点口径。\n- 功能开放节奏中，爬塔连胜在关卡 35 开放。\n\n## 体验作用\n\n- 鼓励玩家连续完成关卡。\n- 用层数、节点奖励和存档点表达挑战进度。\n- 在玩家失败或中断时提供明确的风险感和回流理由。\n\n## 项目成员关注点\n\n- 研发：关注连胜状态、失败处理、存档点、活动期刷新和奖励发放。\n- UI：关注层数路径、当前层、高风险状态、奖励预览和失败反馈。\n- QA：关注断线重进、跨期、失败后状态、存档点恢复和重复领取。\n\n## 主要来源\n- [爬塔连胜源文档](https://docs.google.com/document/d/1-7QF2OCtkL0skv_WYPJVM_Z7mWBAyYaprLZuQzu4NUA/edit?usp=drivesdk)\n- [Find object 数值](https://docs.google.com/spreadsheets/d/1q95A5fRdRYtXfzfAS7hFeldbzOZ_79z0qqEvTYP5Sqg/edit?usp=drivesdk)\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)"
    },
    {
      "id": "design-a344806a01",
      "title": "每日任务",
      "category": "Meta 活动",
      "type": "系统说明",
      "kind": "online",
      "href": "https://docs.google.com/document/d/1yPia_TFhggU7x0exT_WT3oVF4N62toTpcblFZJEcx9s/edit?usp=drivesdk",
      "path": "https://docs.google.com/document/d/1yPia_TFhggU7x0exT_WT3oVF4N62toTpcblFZJEcx9s/edit?usp=drivesdk",
      "summary": "每日任务是独立的日常目标系统，用于给玩家提供每天可完成的轻目标。",
      "status": "",
      "modified": "",
      "tags": [
        "每日任务",
        "日常",
        "规划中"
      ],
      "headings": [],
      "content": "# 每日任务\n\n## 系统定位\n\n每日任务用于给玩家提供每天可完成的轻目标，通常承担登录后的短期目标、资源回收和活跃引导。\n\n## 当前口径\n\n- 数值分析显示每日任务当前属于规划中。\n- 表内还存在不同目标口径，因此不要把其中某个数字直接当最终规则。\n\n## 项目成员关注点\n\n- 研发：关注任务刷新、任务完成判定、奖励领取和跨日处理。\n- UI：关注任务列表、完成进度、奖励预览、刷新状态和红点。\n- QA：关注跨日、重复领取、任务替换、未完成保留和活动共存。\n- 策划：任务类型、刷新规则、目标数值和奖励数量需要打开在线资料核对。\n\n## 主要来源\n- [每日任务](https://docs.google.com/document/d/1yPia_TFhggU7x0exT_WT3oVF4N62toTpcblFZJEcx9s/edit?usp=drivesdk)\n- [Find object 数值](https://docs.google.com/spreadsheets/d/1q95A5fRdRYtXfzfAS7hFeldbzOZ_79z0qqEvTYP5Sqg/edit?usp=drivesdk)\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)"
    },
    {
      "id": "design-3297422a3e",
      "title": "收集",
      "category": "Meta 活动",
      "type": "系统说明",
      "kind": "online",
      "href": "https://docs.google.com/document/d/1w6lUaFF96T2YKnJLkaqAiR8152nVNYrYxdV5UOo2oVc/edit?usp=drivesdk",
      "path": "https://docs.google.com/document/d/1w6lUaFF96T2YKnJLkaqAiR8152nVNYrYxdV5UOo2oVc/edit?usp=drivesdk",
      "summary": "收集是围绕卡片、盲盒和收集资源展开的长期目标系统，目前按规划中口径谨慎理解。",
      "status": "",
      "modified": "",
      "tags": [
        "收集",
        "卡片",
        "盲盒",
        "规划中"
      ],
      "headings": [],
      "content": "# 收集\n\n## 系统定位\n\n收集围绕卡片、普通盲盒、稀有盲盒、银/金/水晶等资源展开，用于提供主线关卡之外的长期成长与图鉴目标。\n\n## 当前口径\n\n- 功能开放节奏中，收集在关卡 50 开放。\n- 当前数值分析判断为规划中口径。\n- 盲盒、卡片稀有度、保底和内容池等规则不在本 Wiki 中推理补全。\n\n## 项目成员关注点\n\n- 研发：关注盲盒产出、卡片去重/转化、收集进度和奖励领取。\n- UI：关注图鉴、卡片稀有度、开盒反馈、缺卡状态和完成奖励。\n- QA：关注重复卡、资源不足、奖励领取、跨版本兼容和异常补发。\n- 策划：具体收集规则、资源比例和奖励池需要回到在线文档与在线数值表核对。\n\n## 主要来源\n- [收集](https://docs.google.com/document/d/1w6lUaFF96T2YKnJLkaqAiR8152nVNYrYxdV5UOo2oVc/edit?usp=drivesdk)\n- [Find object 数值](https://docs.google.com/spreadsheets/d/1q95A5fRdRYtXfzfAS7hFeldbzOZ_79z0qqEvTYP5Sqg/edit?usp=drivesdk)\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)"
    },
    {
      "id": "design-590567c387",
      "title": "账号、头像与成就展示",
      "category": "账号与展示",
      "type": "系统说明",
      "kind": "online",
      "href": "https://docs.google.com/document/d/1NCe98cGepDErvWlGLKRwvm11XguFLxEJlu_qDYlnQM0/edit?usp=drivesdk",
      "path": "https://docs.google.com/document/d/1NCe98cGepDErvWlGLKRwvm11XguFLxEJlu_qDYlnQM0/edit?usp=drivesdk",
      "summary": "账号系统覆盖名字、头像、头像框；成就用于长期目标和展示理解。",
      "status": "",
      "modified": "",
      "tags": [
        "账号",
        "头像",
        "成就",
        "展示"
      ],
      "headings": [],
      "content": "# 账号、头像与成就展示\n\n## 账号系统\n\n在线资料中账号系统覆盖名字、头像、头像框。\n\n## 机器人名字\n\n机器人名字池单独维护在在线表格中，通常服务排行榜、活动对手或展示型系统。\n\n## 成就\n\n成就相关资料包含成就系统说明和成就配置表。数值分析中也出现长期目标类型，例如 Active Days、Peak Level、Win Streak、Weekly Cup 等。\n\n## 理解重点\n\n- 账号展示服务于社交感、排行榜和活动对手感。\n- 成就可用于长期目标，但不要擅自扩展为完整 Meta 主系统。\n\n## 主要来源\n- [账号系统](https://docs.google.com/document/d/1NCe98cGepDErvWlGLKRwvm11XguFLxEJlu_qDYlnQM0/edit?usp=drivesdk)\n- [成就系统](https://docs.google.com/document/d/1QNWGBVWlEUcZ3DwjboKWX7X4cRjsrdp17Y4jB2Zke3k/edit?usp=drivesdk)\n- [成就配置](https://docs.google.com/spreadsheets/d/1S6mdFJpekiDvFfUlZsNhHAOHOgdcUh1D55uVd_LGXn0/edit?usp=drivesdk)\n- [机器人名字](https://docs.google.com/spreadsheets/d/1snZPsj-NYJXZbhXaAsJZ90yTRMF7o4HTRS0mcVL02JI/edit?usp=drivesdk)"
    },
    {
      "id": "design-ad259ebad2",
      "title": "商业化总览",
      "category": "商业化",
      "type": "商业化",
      "kind": "local",
      "href": "../Docs/数值分析/03_系统判断.md",
      "path": "../Docs/数值分析/03_系统判断.md",
      "summary": "商业化独立成组，覆盖商城、礼包、IAA、IAP、去广告和无尽礼包。",
      "status": "",
      "modified": "",
      "tags": [
        "商业化",
        "商城",
        "广告",
        "IAP",
        "礼包"
      ],
      "headings": [],
      "content": "# 商业化总览\n\n## 系统定位\n\n商业化不和账号展示混在一起理解。账号展示主要服务身份、排行榜和社交感；商业化关注玩家付费、广告观看、资源购买和礼包转化。\n\n## 当前商业化构成\n\n- 商城与礼包：金币售卖、礼包售卖、去广告等商品入口。\n- IAA：插屏、结算激励广告、能量恢复激励视频、激励结算放大奖励。\n- IAP：金币售卖、礼包、去广告、无尽礼包等付费入口。\n- 无尽礼包：作为单独条目说明，不并入普通礼包概述。\n\n## 读表边界\n\n- 当前 Wiki 只给项目成员建立结构理解。\n- 商品 ID、地区定价、购买限制、首购状态、广告频控和精确触发条件，需要打开在线数值表或配置文档核对。\n\n## 主要来源\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)\n- [Find object 数值](https://docs.google.com/spreadsheets/d/1q95A5fRdRYtXfzfAS7hFeldbzOZ_79z0qqEvTYP5Sqg/edit?usp=drivesdk)\n- [无尽礼包](https://docs.google.com/document/d/1O3O-t2pIHnwgHdvvpxuUjR19qfiOVzHyk6ybhUg-rNo/edit?usp=drivesdk)"
    },
    {
      "id": "design-a7b5cfabe2",
      "title": "商城与礼包",
      "category": "商业化",
      "type": "商业化",
      "kind": "local",
      "href": "../Docs/数值分析/03_系统判断.md",
      "path": "../Docs/数值分析/03_系统判断.md",
      "summary": "商城承接金币售卖、礼包售卖、去广告和各类资源组合，是商业化入口的集中展示。",
      "status": "",
      "modified": "",
      "tags": [
        "商城",
        "礼包",
        "金币",
        "去广告"
      ],
      "headings": [],
      "content": "# 商城与礼包\n\n## 系统定位\n\n商城是玩家购买金币、礼包和去广告等商品的集中入口。礼包用于把金币、hint、无限能量、盲盒等价值对象组合成更明确的购买理由。\n\n## 当前资料中的商品方向\n\n- 金币售卖：以金币作为核心价值锚点。\n- 礼包售卖：把多种资源组合成限时或常驻商品。\n- 去广告：礼包字段中存在对应口径，需要按线上表格确认最终商品形态。\n- 无尽礼包：有独立源文档和独立 Wiki 条目，不只作为普通礼包处理。\n\n## 项目成员关注点\n\n- 研发：关注商品配置、购买回调、发货、补单、重复购买限制和异常处理。\n- UI：关注商城入口、商品卡片、价格、折扣感、资源图标和购买反馈。\n- QA：关注商品可见条件、价格显示、断网、取消支付、补单和重复领取。\n- 策划：礼包内容、售价、限购、刷新和资源价值必须回到在线数值表核对。\n\n## 主要来源\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)\n- [Find object 数值](https://docs.google.com/spreadsheets/d/1q95A5fRdRYtXfzfAS7hFeldbzOZ_79z0qqEvTYP5Sqg/edit?usp=drivesdk)\n- [无尽礼包](https://docs.google.com/document/d/1O3O-t2pIHnwgHdvvpxuUjR19qfiOVzHyk6ybhUg-rNo/edit?usp=drivesdk)"
    },
    {
      "id": "design-f514163346",
      "title": "IAA 与 IAP 变现",
      "category": "商业化",
      "type": "商业化",
      "kind": "local",
      "href": "../Docs/数值分析/03_系统判断.md",
      "path": "../Docs/数值分析/03_系统判断.md",
      "summary": "拆分广告变现与内购变现，便于研发、QA 和商业化成员分别核对触发点与发奖逻辑。",
      "status": "",
      "modified": "",
      "tags": [
        "IAA",
        "IAP",
        "广告",
        "付费"
      ],
      "headings": [],
      "content": "# IAA 与 IAP 变现\n\n## IAA：广告变现\n\n当前资料中可以明确看到以下广告线索：\n\n- 插屏：功能开放表中关卡 6 开启。\n- 结算激励广告：功能开放表中关卡 15 开启。\n- 激励结算：主线奖励可被广告激励放大。\n- 能量恢复激励视频：能量不足时可通过激励视频补充。\n\n## IAP：内购变现\n\n当前资料中可以明确看到以下内购线索：\n\n- 金币售卖。\n- 礼包售卖。\n- 去广告。\n- 无尽礼包。\n\n## 项目成员关注点\n\n- 研发：IAA 关注展示时机、加载失败、冷却、奖励回调；IAP 关注支付回调、发货、补单和幂等。\n- UI：IAA 关注观看收益表达；IAP 关注价格、价值感、限购和购买结果反馈。\n- QA：分别覆盖看完广告、跳过广告、广告失败、支付成功、取消支付、支付失败、重复发货和断线重进。\n- 策划：广告频控、商品价格、奖励数量和触发条件需要回到在线数值表核对。\n\n## 主要来源\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)\n- [Find object 数值](https://docs.google.com/spreadsheets/d/1q95A5fRdRYtXfzfAS7hFeldbzOZ_79z0qqEvTYP5Sqg/edit?usp=drivesdk)"
    },
    {
      "id": "design-d6637a62dd",
      "title": "无尽礼包",
      "category": "商业化",
      "type": "商业化",
      "kind": "online",
      "href": "https://docs.google.com/document/d/1O3O-t2pIHnwgHdvvpxuUjR19qfiOVzHyk6ybhUg-rNo/edit?usp=drivesdk",
      "path": "https://docs.google.com/document/d/1O3O-t2pIHnwgHdvvpxuUjR19qfiOVzHyk6ybhUg-rNo/edit?usp=drivesdk",
      "summary": "无尽礼包是独立商业化条目，具有活动周期和礼包转化属性。",
      "status": "",
      "modified": "",
      "tags": [
        "无尽礼包",
        "礼包",
        "商业化",
        "周期"
      ],
      "headings": [],
      "content": "# 无尽礼包\n\n## 系统定位\n\n无尽礼包既有礼包转化属性，也有活动周期属性。它在本 Wiki 中作为商业化下的独立条目维护，避免被普通礼包或 Meta 活动概述吃掉。\n\n## 当前口径\n\n- 功能开放节奏中，无尽礼包在关卡 39 开放。\n- 资料中记录无尽礼包为整周活动，每周一 0 点刷新。\n- 具体商品、奖励、价格、阶段和领取规则，以无尽礼包源文档和在线数值表为准。\n\n## 项目成员关注点\n\n- 研发：关注活动周期、购买状态、阶段状态、奖励领取和跨周刷新。\n- UI：关注礼包入口、剩余时间、奖励阶梯、购买反馈和已购状态。\n- QA：关注开放条件、刷新边界、重复购买、补单、断线重进和跨周状态清理。\n- 策划：关注价格、奖励节奏、礼包价值感和与其他商业化入口的关系。\n\n## 主要来源\n- [无尽礼包](https://docs.google.com/document/d/1O3O-t2pIHnwgHdvvpxuUjR19qfiOVzHyk6ybhUg-rNo/edit?usp=drivesdk)\n- [Find object 数值](https://docs.google.com/spreadsheets/d/1q95A5fRdRYtXfzfAS7hFeldbzOZ_79z0qqEvTYP5Sqg/edit?usp=drivesdk)\n- [数值系统判断](../Docs/数值分析/03_系统判断.md)"
    },
    {
      "id": "design-5e1b24eb65",
      "title": "资料与交付入口",
      "category": "交付参考",
      "type": "交付",
      "kind": "local",
      "href": "../Docs/OnlineKnowledge/在线文档索引.md",
      "path": "../Docs/OnlineKnowledge/在线文档索引.md",
      "summary": "给新策划和项目成员快速找到源文档、数值表和 PRD 模板。",
      "status": "",
      "modified": "",
      "tags": [
        "来源",
        "PRD",
        "交付",
        "索引"
      ],
      "headings": [],
      "content": "# 资料与交付入口\n\n## 最常用来源\n\n- 在线文档索引：进入所有设计文档和数值表。\n- Find object 数值：最新数值、功能开放、关卡、经济、活动和商城配置真源。\n- 术语统一口径：统一项目内对系统和资源的称呼。\n- PRD 模板：用于正式功能需求交付。\n\n## 新策划怎么用\n\n1. 先读本 Wiki 的“3 分钟理解 Find Object”。\n2. 再读核心玩法、关卡难度、经济资源、Meta 活动。\n3. 要写具体 PRD 时，打开对应在线源文档和数值表核对最新值。\n4. 要统一命名时，优先查术语统一口径。\n\n## 主要来源\n- [在线文档索引](../Docs/OnlineKnowledge/在线文档索引.md)\n- [术语统一口径](../Docs/补充记录/术语统一口径.md)\n- [PRD 模板](../PRD/GURU_GAME_PRD_Template.pdf)\n- [数值表分析总览](../Docs/数值分析/00_数值表分析总览.md)"
    }
  ]
};
