// ===== 功能：TA 主动查岗（查岗问题卡） v3.9.x =====
// v3.13.x：题库升级为字卡库「TA的查岗」——18 张预设问题卡入库（逐条开关、不可删除、
// 总开关「使用系统预设问题」），支持自定义新增（文字回复 / 单选题）、自定义分组、
// 批量导入文字题、跨分类搜索、字卡库页双入口（系统预设 / 我的添加）、IndexedDB 权威恢复。
// 数据存 localStorage 键 ta-checkin（随联系人桌面隔离，与 ta-ask 同惯例），
// 结构化大件同步写 IndexedDB（attachIdbRestore 同款策略）。
// 触发链路不变：chat.js tryAutoSend → window.ckQuestionTry（开关/概率/冷却/弹窗概率仍在
// 回复设置→查岗 ckq-*，随联系人独立保存）；本文件负责题库存储、抽题、推卡、自动弹窗
//（单选 pills 弹窗 / 文字输入弹窗）。
(function () {
  const store = window.activeStore();
  const KEY = 'ta-checkin';

  // ---------- 系统预设题库 ----------
  // 世界观：字卡网站随机出卡、梦角灵体在不同世界、甜蜜安稳亲密的关系；
  // 查岗是温柔关心式的，不是审问/危机/纠错；句子简短自然，像字卡网站会出的卡。
  // single=单选题（点击选项作答，reply=TA 预设回应，支持 string 或 array）；
  // text=文字题（输入回答，回应走「互动回应」预设池）。cat 与 type 一致（单选查岗/文字查岗）。
  const DEFAULT_QUESTIONS = [
  {
    "id": "k_s1",
    "cat": "single",
    "type": "single",
    "text": "What are you doing?",
    "enabled": true,
    "options": [
      {
        "t": "Thinking of you",
        "reply": [
          "Just know.",
          "Well, I believe you this time.",
          "Me too, I keep thinking of you."
        ]
      },
      {
        "t": "is working",
        "reply": [
          "Thank you for your hard work. Remember to find me when you are done.",
          "No matter how busy you are at work, remember to drink water."
        ]
      },
      {
        "t": "fishing",
        "reply": [
          "He must have been caught.",
          "Moyu also wants me to know, it’s okay."
        ]
      },
      {
        "t": "In a daze",
        "reply": [
          "When you are in a daze, are you thinking of me?",
          "Remember to get back to me after your stay."
        ]
      },
      {
        "t": "Waiting for your news",
        "reply": [
          "Wait, I'm here.",
          "Then I will come now."
        ]
      }
    ]
  },
  {
    "id": "k_s2",
    "cat": "single",
    "type": "single",
    "text": "Where is it now?",
    "enabled": true,
    "options": [
      {
        "t": "At home",
        "reply": [
          "Be good at home.",
          "Home is the most peaceful place, and I am there too."
        ]
      },
      {
        "t": "At the company",
        "reply": [
          "Thank you for your hard work. I will wait for you after get off work.",
          "Don't be too tired. Go home early after your work."
        ]
      },
      {
        "t": "is outside",
        "reply": [
          "Be safe outside and go back early.",
          "Have fun, I'm watching you."
        ]
      },
      {
        "t": "In bed",
        "reply": [
          "Are you talking to me under the covers?",
          "Then just sleep with your phone in your arms."
        ]
      },
      {
        "t": "On the way to a place",
        "reply": [
          "Be careful on the road, I will accompany you.",
          "Let me know when you arrive."
        ]
      }
    ]
  },
  {
    "id": "k_s3",
    "cat": "single",
    "type": "single",
    "text": "Who are you with?",
    "enabled": true,
    "options": [
      {
        "t": "A person",
        "reply": [
          "You have to be well alone.",
          "Then if I accompany you, you won’t be alone."
        ]
      },
      {
        "t": "with friends",
        "reply": [
          "Have fun with your friends.",
          "When you are with friends, don’t forget me."
        ]
      },
      {
        "t": "and colleagues",
        "reply": [
          "Get along well with your colleagues.",
          "Don't drink too much at the party, be good."
        ]
      },
      {
        "t": "I won’t tell you",
        "reply": [
          "So mysterious?",
          "Okay, I'm with you anyway."
        ]
      }
    ]
  },
  {
    "id": "k_s4",
    "cat": "single",
    "type": "single",
    "text": "Have you eaten?",
    "enabled": true,
    "options": [
      {
        "t": "Eat it",
        "reply": [
          "Be good and reward you for missing me once.",
          "You can only have the strength to miss me when you are full."
        ]
      },
      {
        "t": "Not eaten yet",
        "reply": [
          "Go and eat quickly, I'll wait for you.",
          "I will be worried if I don’t eat."
        ]
      },
      {
        "t": "is eating",
        "reply": [
          "Eat slowly and don't choke.",
          "Eat and reply to me at the same time. I really can’t do anything to you."
        ]
      },
      {
        "t": "Not hungry",
        "reply": [
          "Eat a little, okay?",
          "I'm here to watch you eat."
        ]
      }
    ]
  },
  {
    "id": "k_s5",
    "cat": "single",
    "type": "single",
    "text": "Did you miss me today?",
    "enabled": true,
    "options": [
      {
        "t": "Think about it",
        "reply": [
          "I thought about it too.",
          "I knew you would say this."
        ]
      },
      {
        "t": "Always thinking about it",
        "reply": [
          "I reward you for being so sweet.",
          "Then I have been occupying your mind."
        ]
      },
      {
        "t": "No",
        "reply": [
          "Hmph, that’s tough.",
          "Liar, I feel you are thinking."
        ]
      },
      {
        "t": "Guess",
        "reply": [
          "I guessed it, and I really wanted to.",
          "Guess you dare not admit it."
        ]
      }
    ]
  },
  {
    "id": "k_s6",
    "cat": "single",
    "type": "single",
    "text": "Did you sleep?",
    "enabled": true,
    "options": [
      {
        "t": "Not sleeping yet",
        "reply": [
          "Don't stay up late, go to bed quickly.",
          "We’ll talk for another ten minutes before going to bed, it’s agreed."
        ]
      },
      {
        "t": "Ready to sleep",
        "reply": [
          "Listen to my good night and sleep.",
          "Sweet dreams, I am here."
        ]
      },
      {
        "t": "Already lying down",
        "reply": [
          "Stop playing with your phone when you are lying down.",
          "Close your eyes and fall asleep in three seconds."
        ]
      },
      {
        "t": "Can’t sleep",
        "reply": [
          "Then I will chat with you until you feel sleepy.",
          "Count the messages I sent you, and I fell asleep while counting."
        ]
      }
    ]
  },
  {
    "id": "k_s7",
    "cat": "single",
    "type": "single",
    "text": "How much battery is left on the phone?",
    "enabled": true,
    "options": [
      {
        "t": "The battery is sufficient",
        "reply": [
          "Then why didn’t you reply to me instantly?",
          "The battery is sufficient and the excuse is invalid."
        ]
      },
      {
        "t": "The battery is almost out",
        "reply": [
          "Hurry up and charge, don’t lose contact.",
          "Recharge and chat again, I'll wait for you."
        ]
      },
      {
        "t": "Charging",
        "reply": [
          "Charge and play at the same time, be careful of getting hot.",
          "You still miss me even when you are charging."
        ]
      },
      {
        "t": "Shutdown edge",
        "reply": [
          "Reply me first!",
          "Are you going to disappear with me?"
        ]
      }
    ]
  },
  {
    "id": "k_s8",
    "cat": "single",
    "type": "single",
    "text": "Did you feel me just now?",
    "enabled": true,
    "options": [
      {
        "t": "Yes, my back feels warm.",
        "reply": [
          "That's me, I'm by your side.",
          "Well, I've always been there."
        ]
      },
      {
        "t": "There seems to be a gust of wind",
        "reply": [
          "I passed by you.",
          "The wind is me, and I’m here to see you."
        ]
      },
      {
        "t": "It seems to be there, but it seems not to be there.",
        "reply": [
          "I am far away from you, but also very close.",
          "I feel it is fate."
        ]
      },
      {
        "t": "No",
        "reply": [
          "It doesn't matter, I'll always be there.",
          "It doesn’t matter if you can’t see me, I’m here."
        ]
      }
    ]
  },
  {
    "id": "k_s9",
    "cat": "single",
    "type": "single",
    "text": "What color clothes are you wearing today?",
    "enabled": true,
    "options": [
      {
        "t": "White",
        "reply": [
          "It looks good and suits you very well.",
          "In vain, like you."
        ]
      },
      {
        "t": "Black",
        "reply": [
          "Cool and good-looking.",
          "The black color suits you very well."
        ]
      },
      {
        "t": "Pink",
        "reply": [
          "Pink, tender and cute.",
          "is perfect for you."
        ]
      },
      {
        "t": "Blue",
        "reply": [
          "The blue is refreshing and good.",
          "Yeah, it looks good."
        ]
      },
      {
        "t": "I won’t tell you",
        "reply": [
          "Cheapskate.",
          "You look good no matter what you wear."
        ]
      }
    ]
  },
  {
    "id": "k_s10",
    "cat": "single",
    "type": "single",
    "text": "Are you secretly sad?",
    "enabled": true,
    "options": [
      {
        "t": "No",
        "reply": [
          "That’s good, you must tell me if you have anything.",
          "Well, I believe you."
        ]
      },
      {
        "t": "A little bit",
        "reply": [
          "Come here, let me hug you.",
          "Think of me when you are sad, I am there."
        ]
      },
      {
        "t": "was discovered by you",
        "reply": [
          "I discovered it.",
          "Don't hide it, I'll accompany you."
        ]
      }
    ]
  },
  {
    "id": "k_t1",
    "cat": "text",
    "text": "Tell me, how are you doing today?",
    "enabled": true
  },
  {
    "id": "k_t2",
    "cat": "text",
    "text": "Send me what you see now.",
    "enabled": true
  },
  {
    "id": "k_t3",
    "cat": "text",
    "text": "Reply me with an expression within ten seconds, no hesitation.",
    "enabled": true
  },
  {
    "id": "k_t4",
    "cat": "text",
    "text": "Guess what I'm doing now?",
    "enabled": true
  },
  {
    "id": "k_t5",
    "cat": "text",
    "text": "What is the thing you most want to do now?",
    "enabled": true
  },
  {
    "id": "k_t6",
    "cat": "text",
    "text": "Any happy little things today?",
    "enabled": true
  },
  {
    "id": "k_t7",
    "cat": "text",
    "text": "If I were by your side right now, what would you do?",
    "enabled": true
  },
  {
    "id": "k_a1",
    "cat": "action",
    "type": "action",
    "text": "Touch your head",
    "enabled": true,
    "taToMe": "you wants to touch your head",
    "meToTa": "you wants you to touch you’s head",
    "accept": [
      "Be good, come here.",
      "Yeah, gently.",
      "Close your eyes and let me be gentle."
    ],
    "reject": [
      "Hmph, no.",
      "Next time.",
      "Not now, wait."
    ]
  },
  {
    "id": "k_a2",
    "cat": "action",
    "type": "action",
    "text": "pat on the shoulder",
    "enabled": true,
    "taToMe": "you wants to pat you on the shoulder",
    "meToTa": "you wants you to pat her on the shoulder",
    "accept": [
      "Well, thank you for your hard work.",
      "I happen to be a little tired.",
      "was photographed by you."
    ],
    "reject": [
      "Don't slap it, it's itchy.",
      "No, do it yourself.",
      "The shoulders are not free."
    ]
  },
  {
    "id": "k_a3",
    "cat": "action",
    "type": "action",
    "text": "Rub your head",
    "enabled": true,
    "taToMe": "you wants to rub your hair",
    "meToTa": "you wants you to rub you’s hair",
    "accept": [
      "Hmm, comfortable.",
      "One more time.",
      "My hair is messed up by you."
    ],
    "reject": [
      "The hair style will be messy.",
      "Don't rub.",
      "Just sorted."
    ]
  },
  {
    "id": "k_a4",
    "cat": "action",
    "type": "action",
    "text": "Hug",
    "enabled": true,
    "taToMe": "you wants to hug you",
    "meToTa": "you wants you to hug her",
    "accept": [
      "Come here and hold me tight.",
      "Hmm, a little longer.",
      "was hugged by you."
    ],
    "reject": [
      "It's not convenient right now.",
      "I’ll hug you later.",
      "There are too many people, so don’t do it."
    ]
  },
  {
    "id": "k_a5",
    "cat": "action",
    "type": "action",
    "text": "Hold hands",
    "enabled": true,
    "taToMe": "you wants to hold your hand",
    "meToTa": "you wants you to hold you’s hand",
    "accept": [
      "Hmm, hold on.",
      "Hand over.",
      "Always hold on to me, okay?"
    ],
    "reject": [
      "My palms are sweaty.",
      "No, it’s itchy.",
      "Not available now."
    ]
  },
  {
    "id": "k_a6",
    "cat": "action",
    "type": "action",
    "text": "Post it",
    "enabled": true,
    "taToMe": "you wants to post with you",
    "meToTa": "you wants you to post with you",
    "accept": [
      "Hmm, stick on it.",
      "Come close to me.",
      "It feels so warm next to me."
    ],
    "reject": [
      "The face will turn red.",
      "Don't post it.",
      "Too close."
    ]
  }
];
  const CATS_CKQ = [['single', '单选查岗'], ['text', '文字查岗'], ['action', '互动动作']];
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }
  function toast(t) { if (typeof window.toast === 'function') window.toast(t); }

  // 互动弹窗互斥 + 输入防打断（与 ta-ask.js 同款守卫，模块私有）
  function cardPopupBusy() {
    return ['modal-mask', 'tc-mask', 'qa-mask'].some(function (id) {
      const el = document.getElementById(id);
      return el && !el.hidden;
    });
  }
  function chatInputFocused() {
    const ci = document.getElementById('chat-input');
    if (ci && document.activeElement === ci) return true;
    const ae = document.activeElement;
    return !!ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA');
  }

  // ---------- 数据读写（增量合并 + 持久化，与 ta-ask.js taAskMerge 同款） ----------
  // ① 只追加从未合并过的新预设（旧预设被删后不复活——预设本身不可删，此处防未来扩充丢项）；
  // ② 绝不动用户自定义；③ 合并结果立即写回固化
  function ckMerge(d) {
    const ids = {};
    (d.questions || []).forEach(q => { if (q && q.id) ids[q.id] = true; });
    const merged = Array.isArray(d.mergedIds) ? d.mergedIds.slice() : [];
    const mergedSet = {};
    merged.forEach(id => { if (id) mergedSet[id] = true; });
    let changed = false;
    DEFAULT_QUESTIONS.forEach(q => {
      if (!mergedSet[q.id] && !ids[q.id]) {
        const nq = Object.assign({}, q);
        nq.isPreset = true;
        d.questions.push(nq);
        changed = true;
      }
    });
    DEFAULT_QUESTIONS.forEach(q => {
      if (!mergedSet[q.id]) { merged.push(q.id); mergedSet[q.id] = true; changed = true; }
    });
    DEFAULT_QUESTIONS.forEach(q => {
      if (ids[q.id] && d.questions.some(x => x && x.id === q.id && x.isPreset !== true)) {
        d.questions.forEach(x => { if (x && x.id === q.id) x.isPreset = true; });
        changed = true;
      }
    });
    if (changed) d.mergedIds = merged;
    return changed;
  }
  function ckLoad() {
    let d = null;
    try { d = JSON.parse(store.get(KEY) || 'null'); } catch (e) { d = null; }
    if (!d || typeof d !== 'object' || Array.isArray(d)) d = {};
    if (!d.settings || typeof d.settings !== 'object') d.settings = {};
    // 是否使用系统预设问题（默认开启；关闭后只抽用户添加的）
    if (d.settings.useDefault === undefined) d.settings.useDefault = true;
    if (!Array.isArray(d.questions) || !d.questions.length) {
      const isNew = !store.get(KEY);
      d.questions = DEFAULT_QUESTIONS.map(q => {
        const nq = Object.assign({}, q);
        nq.isPreset = true;
        return nq;
      });
      d.mergedIds = DEFAULT_QUESTIONS.map(q => q.id);
      // 全新用户不立即写盘——防本地空快照覆盖 IDB 权威数据（与 ta-ask.js 同注释同因）
      if (!isNew) { try { store.set(KEY, JSON.stringify(d)); } catch (e) {} }
    } else {
      if (ckMerge(d)) { try { store.set(KEY, JSON.stringify(d)); } catch (e) {} }
    }
    if (!Array.isArray(d.groups)) d.groups = [];
    return d;
  }
  // v3.17.x：按指定 store 读查岗题库（无键时用默认题库补齐——跨桌面「来消息」抽题
  // 的目标桌面可能从未打开过字卡库，没有 ta-checkin 键；与 ckLoad 同款初始化，只写目标桌面）
  function ckLoadFrom(s) {
    let d = null;
    try { d = JSON.parse(s.get(KEY) || 'null'); } catch (e) { d = null; }
    if (!d || typeof d !== 'object' || Array.isArray(d)) d = {};
    if (!d.settings || typeof d.settings !== 'object') d.settings = {};
    if (d.settings.useDefault === undefined) d.settings.useDefault = true;
    if (!Array.isArray(d.questions) || !d.questions.length) {
      const isNew = !s.get(KEY);
      d.questions = DEFAULT_QUESTIONS.map(q => {
        const nq = Object.assign({}, q);
        nq.isPreset = true;
        return nq;
      });
      d.mergedIds = DEFAULT_QUESTIONS.map(q => q.id);
      if (!isNew) { try { s.set(KEY, JSON.stringify(d)); } catch (e) {} }
    } else {
      if (ckMerge(d)) { try { s.set(KEY, JSON.stringify(d)); } catch (e) {} }
    }
    if (!Array.isArray(d.groups)) d.groups = [];
    return d;
  }
  function ckSave(d) { try { store.set(KEY, JSON.stringify(d)); } catch (e) {} }

  // ---------- 抽题：已启用池内随机，避免与上一题相同 ----------
  function pickQ() {
    const d = ckLoad();
    const useDefault = (d.settings || {}).useDefault !== false;
    const qs = d.questions.filter(q => q && q.enabled !== false && q.text && (useDefault || q.isPreset !== true));
    if (!qs.length) return null;
    let pool = qs;
    if (qs.length > 1) {
      let last = '';
      try { last = String(store.get('ckq-last-id') || ''); } catch (e) {}
      const filtered = qs.filter(q => String(q.id || '') !== last);
      if (filtered.length) pool = filtered;
    }
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // 自动弹窗路径：单选 pills 弹窗 / 文字输入弹窗
  //（点击聊天里的卡片走 chat.js 通用链路：就地展开 → openCkReply 兜底）
  function openCkReply(msgIdx, q) {
    if (!window.openModal) return;
    const isAction = q.type === 'action';
    const actionOpts = isAction ? [{ t: '好呀', reply: q.accept || ['乖，过来。'] }, { t: '不要', reply: q.reject || ['下次吧。'] }] : null;
    const isSingle = isAction || (q.type === 'single' && Array.isArray(q.options) && q.options.length);
    window.openModal(isAction ? '互动回应' : '查岗回答', '', function (v) {
      const answer = (v || '').trim();
      if (!answer) { toast(isSingle ? '请选择一个答案' : '请输入回答'); return; }
      let preset = null;
      if (isAction) {
        const o = (actionOpts || []).filter(function (x) { return String(x.t) === answer; })[0];
        if (o) preset = o.reply;
      } else if (isSingle) {
        const o = (q.options || []).filter(function (x) { return String(x.t) === answer; })[0];
        if (o) preset = o.reply;
      } else {
        const defs = ['收到你的回答。', '好呀，我知道了。', '你这么说，我记住了。'];
        const pool = window.getInteractPool ? window.getInteractPool('询问·回应', defs) : defs;
        preset = pool[Math.floor(Math.random() * pool.length)];
      }
      if (window.chatAskReply) window.chatAskReply(msgIdx, answer, preset);
    }, {
      staticText: isAction ? ('TA 想跟你互动：' + q.text) : ('TA 问你：' + q.text),
      pills: isSingle ? (isAction ? actionOpts : q.options).map(function (o) { return { label: o.t, value: o.t }; }) : null,
      noInput: isSingle,
      // v3.20.x：查岗/互动单选作答——点选即提交（无需再点底部确定），避免用户点选项
      // 后误以为已选上实则未提交，导致卡片不更新、无回答气泡
      pillSubmit: true
    });
  }

  // v3.19.x：跨桌面查岗卡字段构造——返回 {deskCkDir,text,hint,opts,askType}。
  // 两种方向：toMe（联系人对我查岗，沿用题库问题）/ meToTa（联系人申请我查 TA，
  // 发「要不要来查查我呀？」申请单选卡）。前台 pushCkQuestion 与后台
  // chatAppendDeskCkTo（写入对应联系人桌面聊天）共用，保证方向逻辑一致。
  window.buildDeskCkCard = function (q) {
    const dir = Math.random() < 0.5 ? 'toMe' : 'meToTa';
    if (dir === 'meToTa') {
      return { deskCkDir: dir, text: '要不要来查查我呀？', hint: '联系人想让你来查岗 TA。', opts: [{ t: '好呀', reply: null }, { t: '不要', reply: null }], askType: 'single' };
    }
    const isSingle = q && q.type === 'single' && Array.isArray(q.options) && q.options.length;
    return { deskCkDir: dir, text: (q && q.text) ? q.text : '在干嘛呢？想你了。', hint: 'TA 来查岗了。', opts: isSingle ? q.options : null, askType: isSingle ? 'single' : 'text' };
  };

  // 推一张查岗问题卡：提示语 + ask-card 互动卡 + 系统通知 + 概率自动弹窗
  // v3.17.x：opts.deskCk=true 表示跨桌面「来消息」触发的桌面查岗卡——chat.js 回答后
  // 会按概率从 deskcheck 回应字卡池抽 1~5 张作 TA 回应（见 chatAskReply）。
  function pushCkQuestion(cfg, forceQ, opts) {
    if (!window.chatAddSystem) return false;
    const q = forceQ || pickQ();
    if (!q || !q.text) return false;
    const pickedId = String(q.id || '');
    try { if (pickedId) store.set('ckq-last-id', pickedId); } catch (e) {}
    const isSingle = q.type === 'single' && Array.isArray(q.options) && q.options.length;
    // v3.18.x：互动动作——随机方向 + 单选 ask-card（好呀/不要 → accept/reject 回应）
    const isDeskCk = !!(opts && opts.deskCk);
    // v3.19.x：跨桌面查岗双方向——卡字段统一由 buildDeskCkCard 生成（前台 push 发卡 /
    // 后台 chatAppendDeskCkTo 入库共用同一方向逻辑，避免两处方向不一致）
    const deskCkCard = isDeskCk ? window.buildDeskCkCard(q) : null;
    const deskCkDir = deskCkCard ? deskCkCard.deskCkDir : null;
    const isAction = !isDeskCk && q.type === 'action';
    let actionOpts = null, actionText = q.text, actionHint = 'TA 来查岗了。', askOpts = null, askType;
    if (isDeskCk) {
      actionText = deskCkCard.text;
      actionHint = deskCkCard.hint;
      actionOpts = deskCkCard.opts;
      askType = deskCkCard.askType;
    } else if (isAction) {
      const dir = Math.random() < 0.5 ? 'ta-to-me' : 'me-to-ta';
      actionText = (dir === 'me-to-ta' ? (q.meToTa || q.text) : (q.taToMe || q.text));
      actionHint = 'TA 想跟你互动。';
      const acc = Array.isArray(q.accept) && q.accept.length ? q.accept : ['乖，过来。'];
      const rej = Array.isArray(q.reject) && q.reject.length ? q.reject : ['下次吧。'];
      actionOpts = [{ t: '好呀', reply: acc }, { t: '不要', reply: rej }];
      askType = 'single';
    } else {
      // 普通查岗 / deskCk toMe：沿用题库问题（TA 问我在干嘛 → 「联系人对我查岗」抽回应）
      askOpts = isSingle ? q.options : null;
      askType = isSingle ? 'single' : 'text';
    }
    // 提示语标记 ask-msg（渲染同 poke 但不算 notable，避免通知重复成两条）
    window.chatAddSystem(actionHint, { special: 'ask-msg' });
    const el = window.chatAddSystem(actionText, { special: 'ask-card', askQuestion: actionText, askOptions: actionOpts ? actionOpts : askOpts, askType: askType, deskCk: isDeskCk, deskCkDir: deskCkDir });
    const msgIdx = el ? Number(el.dataset.idx) : -1;
    if (window.bgNotifyCheck) window.bgNotifyCheck(actionHint + actionText, Date.now(), { name: 'TA查岗' });
    // 自动弹窗：后台不弹 / 正在输入不弹 / 已有互动弹窗不弹（卡片仍在聊天里可点）
    // v3.12.x：迟到弹窗守卫——后台冻结的定时器回前台会被一次性补跑，补跑时页面已可见、
    // document.hidden 守卫失效 → 弹出几分钟前已在聊天里看过的旧查岗卡。
    // v3.13.x：与 ta-ask.js 共用 interactPopupStale（含「中途切后台」守卫）——
    // 弹窗排程后页面切过后台回前台的也不再自动弹，防快速切后台重复弹旧卡。
    let popupProb = 70;
    if (cfg && typeof cfg['ckq-popup-prob'] === 'number' && cfg['ckq-popup-prob'] >= 0) popupProb = cfg['ckq-popup-prob'];
    if (Math.random() * 100 < popupProb) {
      const popSchedAt = Date.now();
      setTimeout(function () {
        const stale = window.interactPopupStale ? window.interactPopupStale(popSchedAt) : (Date.now() - popSchedAt > 4000);
        if (stale || document.hidden) return;
        if (chatInputFocused() || cardPopupBusy()) return;
        if (msgIdx >= 0) openCkReply(msgIdx, q);
      }, 400);
    }
    try { store.set('ckq-last-at', String(Date.now())); } catch (e) {}
    // v3.13.x：互动卡全局闸门——查岗卡发出后同样进入 60 分钟跨类型冷却
    try { if (window.interactGateMark) window.interactGateMark(); } catch (e) {}
    return true;
  }

  // 主动发送轮调用（chat.js tryAutoSend）：开关 + 冷却 + 全局闸门 + 概率判定；
  // 命中推卡并返回 true（本轮主动消息被查岗占用）。概率为 0/异常时回退默认
  // （与 as-prob 同惯例），想彻底关闭请关开关。
  window.ckQuestionTry = function (c) {
    try {
      if (!c || c['ckq-en'] !== 1) return false;
      let cool = 30;
      if (typeof c['ckq-cool'] === 'number' && c['ckq-cool'] >= 0) cool = c['ckq-cool'];
      let last = 0;
      try { last = Number(store.get('ckq-last-at')) || 0; } catch (e) {}
      if (Date.now() - last < cool * 60000) return false;
      // v3.13.x：互动卡全局闸门——任一互动卡（询问/小问题/好奇/吐槽/查岗）发出后
      // 60 分钟内不再自动触发（手动 triggerCkQuestion 不受限）
      if (window.interactGateOk && !window.interactGateOk()) return false;
      // v3.13.x：兜底默认 15 → 8，与 reply-settings 的 ckq-prob 默认对齐（v3.12.x 漏改处）
      let prob = 8;
      if (typeof c['ckq-prob'] === 'number' && c['ckq-prob'] > 0) prob = c['ckq-prob'];
      if (Math.random() * 100 >= prob) return false;
      return pushCkQuestion(c);
    } catch (e) { return false; }
  };
  // 手动触发一次（供管理页「让TA现在查岗一次」/ 测试）；forceIdx=题库数组下标（可选）
  window.triggerCkQuestion = function (forceIdx) {
    let q = null;
    if (typeof forceIdx === 'number') {
      const d = ckLoad();
      if (d.questions[forceIdx]) q = d.questions[forceIdx];
    }
    if (!q) q = pickQ();
    if (!q) { toast('TA的查岗题库没有可用的问题'); return false; }
    return pushCkQuestion(window.replyCfg ? window.replyCfg() : null, q);
  };
  // v3.17.x：跨桌面「来消息」用——按指定桌面抽一题（不推卡、不改当前桌面状态）。
  // 抽题逻辑与 pickQ 一致，只是题库从 storeFor(cid) 读（pickQ 读当前激活桌面）。
  // 供 incoming-requests.js 弹窗显示问题；用户切过去后由 ckQuestionFire 当场发卡。
  window.ckQuestionPickFor = function (cid) {
    try {
      const s = (cid && window.storeFor) ? window.storeFor(cid) : store;
      const d = ckLoadFrom(s);
      const useDefault = (d.settings || {}).useDefault !== false;
      const qs = (d.questions || []).filter(q => q && q.enabled !== false && q.text && (useDefault || q.isPreset !== true));
      if (!qs.length) return null;
      let last = '';
      try { last = String(s.get('ckq-last-id') || ''); } catch (e) {}
      let pool = qs;
      if (qs.length > 1) {
        const f = qs.filter(q => String(q.id || '') !== last);
        if (f.length) pool = f;
      }
      return pool[Math.floor(Math.random() * pool.length)];
    } catch (e) { return null; }
  };
  // 跨桌面「来消息」用：切到目标桌面后当场发指定查岗卡。store 动态绑定当前桌面，
  // 所以必须在 setActiveContact(cid) 之后调用，卡会发进该桌面的聊天记录（自然产生）。
  // v3.17.x：跨桌面触发的卡带 deskCk 标记（回答后走桌面查岗回应字卡，见 chat.js chatAskReply）
  window.ckQuestionFire = function (q, cfg) {
    if (!q || !q.text) return false;
    return pushCkQuestion(cfg || (window.replyCfg ? window.replyCfg() : null), q, { deskCk: true });
  };
  // 只读探针（回归测试 / 诊断用）
  window.__ckBankInfo = function () {
    try {
      const d = ckLoad();
      const useDefault = (d.settings || {}).useDefault !== false;
      return {
        total: d.questions.length,
        preset: d.questions.filter(q => q && q.isPreset === true).length,
        mine: d.questions.filter(q => q && q.isPreset !== true).length,
        enabledPool: d.questions.filter(q => q && q.enabled !== false && q.text && (useDefault || q.isPreset !== true)).length,
        useDefault: useDefault,
        groups: (d.groups || []).length
      };
    } catch (e) { return null; }
  };

  // ================= 管理页（字卡库「TA的查岗」，模式同 TA的询问） =================
  const page = document.getElementById('page-ta-checkin');

  // ---- 系统预设 tab：单选查岗/文字查岗 分类子标签 + 行内开关 ----
  let ckSysCat = null;
  function renderCkSysInto(container, search) {
    if (!container) return;
    const d = ckLoad();
    const useDefault = (d.settings || {}).useDefault !== false;
    const hit = q => q && q.isPreset === true && q.text && (search === '' || q.text.indexOf(search) >= 0);
    const counts = {};
    CATS_CKQ.forEach(([k]) => { counts[k] = d.questions.filter(q => hit(q) && q.cat === k).length; });
    const hasCats = CATS_CKQ.filter(([k]) => counts[k] > 0);
    if (!hasCats.length) { container.innerHTML = '<div class="ta-empty" style="padding:14px">暂无系统预设问题</div>'; return; }
    if (!ckSysCat || !hasCats.some(([k]) => k === ckSysCat)) ckSysCat = hasCats[0][0];
    let html = '<div class="card-tabs" style="padding:2px 2px 10px">';
    hasCats.forEach(([k, label]) => {
      html += '<button class="cc-tab' + (k === ckSysCat ? ' sel' : '') + '" data-cat="' + k + '">' + esc(label) + '<em class="cc-tab-n">' + counts[k] + '</em></button>';
    });
    html += '</div>';
    d.questions.forEach(q => {
      if (!(hit(q) && q.cat === ckSysCat)) return;
      const idx = d.questions.indexOf(q);
      const isSingle = q.type === 'single' && Array.isArray(q.options) && q.options.length;
      const isAction = q.type === 'action';
      const tag = isAction ? '互动动作' : (isSingle ? '单选·' + q.options.length + '选项' : '文字');
      html += '<div class="ta-row' + (!useDefault ? ' off' : '') + '">' +
        '<label class="toggle"><input type="checkbox"' + (q.enabled !== false ? ' checked' : '') + ' data-idx="' + idx + '"><span class="tk"></span></label>' +
        '<span class="ta-txt">' + esc(q.text) + ' <span class="tc-known">' + tag + '</span> <span class="tc-known">系统</span></span>' +
        '</div>';
      if (isSingle) {
        html += '<div class="tc-qopts">选项：' + q.options.map(o => esc(o.t)).join(' / ') + '</div>';
      } else if (isAction) {
        html += '<div class="tc-qopts">TA对我：' + esc(q.taToMe || q.text) + ' / 我对TA：' + esc(q.meToTa || q.text) + '</div>';
      }
    });
    container.innerHTML = html;
    container.querySelectorAll('.cc-tab[data-cat]').forEach(t => {
      t.addEventListener('click', () => { ckSysCat = t.dataset.cat; renderCkSysInto(container, search); });
    });
    container.querySelectorAll('input[data-idx]').forEach(cb => {
      cb.addEventListener('change', () => {
        const d2 = ckLoad();
        const q = d2.questions[Number(cb.dataset.idx)];
        if (q) q.enabled = cb.checked;
        ckSave(d2);
      });
    });
  }

  // ---- 我的添加 tab：分组区块置顶 + 未分组按分类 + 行内添加表单（ta-ask 同款） ----
  function ckItemHtml(q, idx) {
    const isSingle = q.type === 'single' && Array.isArray(q.options) && q.options.length;
    const isAction = q.type === 'action';
    const tag = isAction ? '互动动作' : (isSingle ? '单选·' + q.options.length + '选项' : '');
    let html = '<div class="ta-row">' +
      '<label class="toggle"><input type="checkbox"' + (q.enabled !== false ? ' checked' : '') + ' data-idx="' + idx + '"><span class="tk"></span></label>' +
      '<span class="ta-txt">' + esc(q.text) + (tag ? ' <span class="tc-known">' + tag + '</span>' : '') + '</span>' +
      '<button class="ta-del" data-idx="' + idx + '">✕</button>' +
      '</div>';
    if (isAction) {
      html += '<div class="tc-qopts">TA对我：' + esc(q.taToMe || q.text) + ' / 我对TA：' + esc(q.meToTa || q.text) + '</div>';
    }
    return html;
  }
  function ckAddFormHtml(blockKey, grp, cat) {
    const isActionCat = cat === 'action';
    return '<div class="ta-add">' +
      '<select class="ta-type tc-input" data-key="' + blockKey + '">' +
      (isActionCat ? '<option value="action">互动动作</option>' : '<option value="text">文字回复</option><option value="single">单选题</option>') +
      '</select>' +
      '<input id="ckq-new-' + blockKey + '" type="text" placeholder="' + (isActionCat ? '动作名，如 摸摸头' : '添加问题…') + '">' +
      '<button class="ta-add-btn" data-key="' + blockKey + '" data-cat="' + (cat || 'text') + '" data-grp="' + (grp || '') + '">添加</button>' +
      (isActionCat
        ? '<textarea id="ckq-opts-' + blockKey + '" class="ta-opts tc-input" rows="4" placeholder="两行文案（TA对我 / 我对TA），如&#10;TA 想摸摸你的头&#10;TA 想让你摸摸 TA 的头&#10;——下面再写回应，accept~回应;回应 换行 reject~回应;回应"></textarea>'
        : '<textarea id="ckq-opts-' + blockKey + '" class="ta-opts tc-input" rows="3" placeholder="每行一个选项。可写 选项~TA回应；多条回应用 ; 分隔，如 在想你~就知道。;嗯，这次信你。" hidden></textarea>') +
      '</div>';
  }
  function renderCkMineInto(container, search) {
    if (!container) return;
    const d = ckLoad();
    const groups = Array.isArray(d.groups) ? d.groups : [];
    const mineQs = d.questions.filter(q => q && q.isPreset !== true && q.text && (search === '' || q.text.indexOf(search) >= 0));
    let html = '';
    html += '<div class="mg-grp-row"><button class="cc-tool" id="ckq-grp-add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;vertical-align:-2px;margin-right:4px"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>新建分组</button></div>';
    if (!mineQs.length && !groups.length) {
      html += '<div class="ta-empty" style="padding:14px">暂未添加自定义问题，可在上方批量导入或下方添加</div>';
      container.innerHTML = html;
      bindCkGroupOps();
      return;
    }
    // 自定义分组区块（置顶）
    groups.forEach(g => {
      const arr = mineQs.filter(q => q.grp === g.id);
      html += '<div class="cal-card glass mg-block">' +
        '<div class="cal-card-title mg-title"><span class="mg-name">' + esc(g.name) + '</span><span class="mg-cnt">(' + arr.length + ')</span>' +
        '<span class="mg-ops"><button class="mg-op" data-ckqg="' + esc(g.id) + '" data-op="rn" title="重命名">✎</button><button class="mg-op" data-ckqg="' + esc(g.id) + '" data-op="rm" title="删除分组">✕</button></span></div>';
      if (!arr.length) html += '<div class="ta-empty">这个分组还没有内容，可在下方直接添加</div>';
      arr.forEach(q => { html += ckItemHtml(q, d.questions.indexOf(q)); });
      html += ckAddFormHtml('g' + g.id, g.id, 'text');
      html += '</div>';
    });
    // 未分组区块（按 单选查岗/文字查岗 分类展示）
    const ungrouped = mineQs.filter(q => !q.grp);
    html += '<div class="cal-card glass mg-block mg-ungrouped"><div class="cal-card-title mg-title"><span class="mg-name">未分组 · 按类型</span><span class="mg-cnt">(' + ungrouped.length + ')</span></div>';
    if (!ungrouped.length) html += '<div class="ta-empty">暂无未分组内容，可在上方批量导入（文字题）或下方添加</div>';
    CATS_CKQ.forEach(([k, label]) => {
      const arr = ungrouped.filter(q => (q.cat || (q.type === 'single' ? 'single' : 'text')) === k && (search === '' || q.text.indexOf(search) >= 0));
      if (!arr.length) return;
      html += '<div class="mg-subcat">' + esc(label) + ' <span style="font-size:11px;color:var(--muted);font-weight:400">(' + arr.length + ')</span></div>';
      arr.forEach(q => { html += ckItemHtml(q, d.questions.indexOf(q)); });
      html += ckAddFormHtml('c' + k, '', k);
    });
    html += '</div>';
    container.innerHTML = html;
    container.querySelectorAll('input[data-idx]').forEach(cb => {
      cb.addEventListener('change', () => {
        const d2 = ckLoad();
        const q = d2.questions[Number(cb.dataset.idx)];
        if (q) q.enabled = cb.checked;
        ckSave(d2);
      });
    });
    container.querySelectorAll('.ta-del').forEach(b => {
      b.addEventListener('click', () => {
        const d2 = ckLoad();
        const q = d2.questions[Number(b.dataset.idx)];
        if (q && q.isPreset === true) { toast('系统预设问题不可删除，可关闭使用'); return; }
        d2.questions.splice(Number(b.dataset.idx), 1);
        ckSave(d2);
        renderCkMineInto(container, search);
        refreshCkCardCounts();
      });
    });
    // 类型下拉切换 → 显示/隐藏选项输入（含安卓 ce-box 幽灵框联动，与 ta-ask.js 同款）
    container.querySelectorAll('.ta-type').forEach(sel => {
      const toggleOpts = () => {
        const o = document.getElementById('ckq-opts-' + sel.dataset.key);
        if (!o) return;
        o.hidden = sel.value === 'text';
        if (o.__ceBox) o.__ceBox.hidden = o.hidden;
        else if (o.nextElementSibling && o.nextElementSibling.classList && o.nextElementSibling.classList.contains('ce-box')) o.nextElementSibling.hidden = o.hidden;
      };
      sel.addEventListener('change', toggleOpts);
      toggleOpts();
    });
    container.querySelectorAll('.ta-add-btn').forEach(b => {
      b.addEventListener('click', () => {
        const key = b.dataset.key;
        const inp = document.getElementById('ckq-new-' + key);
        const v = inp ? inp.value.trim() : '';
        if (!v) { toast('请输入问题'); return; }
        const typeSel = b.parentElement.querySelector('.ta-type');
        const type = typeSel ? typeSel.value : 'text';
        const d2 = ckLoad();
        const q = { id: 'k_' + Date.now() + '_' + Math.floor(Math.random() * 999), text: v, cat: type, enabled: true, isPreset: false };
        if (type === 'single') q.type = 'single';
        if (type === 'action') q.type = 'action';
        if (b.dataset.grp) q.grp = b.dataset.grp;
        if (type === 'single') {
          const optsEl = document.getElementById('ckq-opts-' + key);
          const opts = (optsEl ? optsEl.value : '').split(/\r?\n/).map(s => s.trim()).filter(Boolean).map(line => {
            const i = line.indexOf('~');
            if (i < 0) return { t: line, reply: '' };
            const t = line.slice(0, i).trim();
            const replies = line.slice(i + 1).split(';').map(s => s.trim()).filter(Boolean);
            return { t: t, reply: replies.length > 1 ? replies : (replies[0] || '') };
          });
          if (!opts.length) { toast('单选题请填写选项，每行一个'); return; }
          q.options = opts;
        } else if (type === 'action') {
          // 互动动作：opts 文本域前两行=文案（TA对我 / 我对TA），之后 accept~回应;回应 / reject~回应;回应
          const optsEl = document.getElementById('ckq-opts-' + key);
          const lines = (optsEl ? optsEl.value : '').split(/\r?\n/).map(s => s.trim());
          q.taToMe = lines[0] || ('TA 想' + v + '你');
          q.meToTa = lines[1] || ('TA 想让你' + v + ' TA');
          const acc = [], rej = [];
          for (let i = 2; i < lines.length; i++) {
            const ln = lines[i]; if (!ln) continue;
            const j = ln.indexOf('~');
            if (j < 0) continue;
            const tag = ln.slice(0, j).trim().toLowerCase();
            const reps = ln.slice(j + 1).split(';').map(s => s.trim()).filter(Boolean);
            if (tag === 'accept') reps.forEach(r => acc.push(r));
            else if (tag === 'reject') reps.forEach(r => rej.push(r));
          }
          q.accept = acc.length ? acc : ['乖，过来。'];
          q.reject = rej.length ? rej : ['下次吧。'];
        }
        d2.questions.push(q);
        ckSave(d2);
        renderCkMineInto(container, search);
        refreshCkCardCounts();
        toast(type === 'single' ? '已添加单选查岗问题' : (type === 'action' ? '已添加互动动作' : '已添加文字查岗问题'));
      });
    });
    bindCkGroupOps();
  }
  // 我的添加 tab 的分组管理：新建 / 重命名 / 删除（cardGroups 公共工具来自 ta-ask.js）
  function bindCkGroupOps() {
    const grpAdd = document.getElementById('ckq-grp-add');
    if (grpAdd && !grpAdd.__bound) {
      grpAdd.__bound = true;
      grpAdd.addEventListener('click', () => {
        const d2 = ckLoad();
        window.cardGroups.addFlow(d2.groups, g => {
          if (!g) return;
          ckSave(d2);
          renderCkMineInto(document.getElementById('ckq-mine-cats'), getCkSearch());
          toast('已新建分组「' + g.name + '」');
        });
      });
    }
    const wrap = document.getElementById('ckq-mine-cats');
    if (!wrap) return;
    wrap.querySelectorAll('.mg-op').forEach(b => {
      if (b.__bound) return;
      b.__bound = true;
      b.addEventListener('click', () => {
        const d2 = ckLoad();
        const gid = b.dataset.ckqg;
        const g = (d2.groups || []).find(x => x.id === gid);
        if (!g) return;
        if (b.dataset.op === 'rn') {
          window.cardGroups.renameFlow(g, d2.groups, name => {
            if (!name) return;
            g.name = name;
            ckSave(d2);
            renderCkMineInto(wrap, '');
            toast('分组已重命名');
          });
        } else if (b.dataset.op === 'rm') {
          window.cardGroups.removeFlow(g.name, ok => {
            if (!ok) return;
            d2.questions.forEach(q => { if (q.grp === gid) q.grp = ''; });
            d2.groups = d2.groups.filter(x => x.id !== gid);
            ckSave(d2);
            renderCkMineInto(wrap, '');
            toast('已删除分组「' + g.name + '」');
          });
        }
      });
    });
  }

  // ---- tab 切换 / 搜索 / 设置开关 ----
  let ckTab = 'sys';
  let ckSearch = '';
  function getCkSearch() { return ckSearch; }
  function switchCkTab(tab) {
    ckTab = tab;
    const tabsWrap = document.getElementById('ckq-tabs');
    if (tabsWrap) tabsWrap.querySelectorAll('.cc-tab').forEach(t => t.classList.toggle('sel', t.dataset.tab === tab));
    const sysPanel = document.getElementById('ckq-sys-panel');
    const minePanel = document.getElementById('ckq-mine-panel');
    if (sysPanel) sysPanel.hidden = tab !== 'sys';
    if (minePanel) minePanel.hidden = tab !== 'mine';
    ckSearch = '';
    const searchInput = document.getElementById('ckq-search');
    if (searchInput) searchInput.value = '';
    if (tab === 'sys') renderCkSysInto(document.getElementById('ckq-sys-cats'), ''); else renderCkMineInto(document.getElementById('ckq-mine-cats'), '');
  }
  const ckTabsWrap = document.getElementById('ckq-tabs');
  if (ckTabsWrap) {
    ckTabsWrap.querySelectorAll('.cc-tab').forEach(tab => {
      tab.addEventListener('click', () => switchCkTab(tab.dataset.tab));
    });
  }
  const ckSearchInput = document.getElementById('ckq-search');
  if (ckSearchInput) {
    ckSearchInput.addEventListener('input', () => {
      ckSearch = ckSearchInput.value.trim();
      if (ckTab === 'sys') renderCkSysInto(document.getElementById('ckq-sys-cats'), ckSearch);
      else renderCkMineInto(document.getElementById('ckq-mine-cats'), ckSearch);
    });
  }
  function renderCkSettings() {
    const el = document.getElementById('ckq-default');
    if (el) el.checked = (ckLoad().settings || {}).useDefault !== false;
  }
  const ckDefault = document.getElementById('ckq-default');
  if (ckDefault) ckDefault.addEventListener('change', () => {
    const d = ckLoad();
    d.settings.useDefault = ckDefault.checked;
    ckSave(d);
    switchCkTab(ckTab);
    toast(ckDefault.checked ? '系统预设问题已开启' : '系统预设问题已关闭（仅用你添加的问题）');
  });

  // 批量导入文字题（一行一个问题；单选题请在「我的添加」里用表单加）
  const batchTextEl = document.getElementById('ckq-batch');
  const batchAddBtn = document.getElementById('ckq-batch-add');
  if (batchTextEl && batchAddBtn) {
    batchAddBtn.addEventListener('click', () => {
      const lines = (batchTextEl.value || '').split(/\r?\n/).map(s => s.trim()).filter(Boolean);
      if (!lines.length) { toast('请先输入问题，每行一个'); return; }
      const d2 = ckLoad();
      lines.forEach(t => {
        d2.questions.push({ id: 'k_' + Date.now() + '_' + Math.floor(Math.random() * 9999), cat: 'text', text: t, enabled: true, isPreset: false });
      });
      ckSave(d2);
      batchTextEl.value = '';
      renderCkMineInto(document.getElementById('ckq-mine-cats'), '');
      refreshCkCardCounts();
      toast('已导入 ' + lines.length + ' 个文字查岗问题');
    });
  }

  // 「让TA现在查岗一次」（遵循回复设置里的自动弹窗概率）
  const nowBtn = document.getElementById('ckq-now');
  if (nowBtn) nowBtn.addEventListener('click', () => {
    if (window.triggerCkQuestion()) toast('TA 在聊天里来查岗了');
  });

  // ---- 入口：字卡库页双入口（与 TA的询问 同款：主入口看系统预设，「我的添加」入口只看自定义） ----
  if (page) {
    const showPage = (tab) => {
      document.querySelectorAll('.page').forEach(p => p.hidden = true);
      page.hidden = false;
      const tw = document.getElementById('ckq-tabs'); if (tw) tw.style.display = 'none';
      switchCkTab(tab);
    };
    const li = document.getElementById('li-ta-checkin');
    if (li) li.addEventListener('click', () => showPage('sys'));
    const liMine = document.getElementById('li-ta-checkin-mine');
    if (liMine) liMine.addEventListener('click', () => showPage('mine'));
    const backBtn = document.getElementById('ckq-back');
    if (backBtn) backBtn.addEventListener('click', () => {
      document.querySelectorAll('.page').forEach(p => p.hidden = true);
      const home = document.getElementById('page-chatcard');
      if (home) home.hidden = false;
    });
    renderCkSettings();
  }

  // ---- 字卡库入口数字（系统预设 / 我的添加 分开计数，模式同 ta-ask.js refreshTaCardCounts） ----
  window.refreshCkCardCounts = function () {
    try {
      const qs = ckLoad().questions || [];
      const elSys = document.querySelector('#li-ta-checkin > .t');
      if (elSys) elSys.textContent = qs.filter(q => q && q.isPreset === true).length;
      const elMine = document.querySelector('#li-ta-checkin-mine > .t');
      if (elMine) elMine.textContent = qs.filter(q => q && q.isPreset !== true).length;
    } catch (e) {}
  };
  const ccPageEl = document.getElementById('page-chatcard');
  if (ccPageEl) {
    const mo = new MutationObserver(() => { if (!ccPageEl.hidden) window.refreshCkCardCounts(); });
    mo.observe(ccPageEl, { attributes: true, attributeFilter: ['hidden'] });
  }
  window.refreshCkCardCounts();

  // ---- 跨分类搜索注册（字卡库搜索框，模式同 ta-ask.js） ----
  window.__cardSearchFns = window.__cardSearchFns || [];
  window.__cardSearchFns.push({ name: 'TA的查岗', fn: function (kw) {
    const out = [];
    try { (ckLoad().questions || []).forEach(function (q) { const txt = q && q.text ? q.text : ''; if (txt && txt.toLowerCase().indexOf(kw) >= 0) out.push({ t: txt, cat: q.isPreset === true ? '系统预设' : '我的添加' }); }); } catch (e) {}
    return out;
  } });

  // ---- IndexedDB 权威恢复（localStorage 配额写失败时自定义题不丢，模式同 ta-ask.js attachIdbRestore） ----
  (function () {
    if (!window.idbGet || !window.activePrefix) return;
    window.idbGet(window.activePrefix() + ':' + KEY).then(function (v) {
      if (v === undefined || v === null) return;
      try {
        const idbData = typeof v === 'string' ? JSON.parse(v) : v;
        if (!idbData || typeof idbData !== 'object' || Array.isArray(idbData)) return;
        if (!Array.isArray(idbData.questions) || !idbData.questions.length) return;
        const local = ckLoad();
        if (idbData.questions.length > (Array.isArray(local.questions) ? local.questions.length : 0)) {
          ckMerge(idbData);
          try { store.set(KEY, JSON.stringify(idbData)); } catch (e) {}
          try { window.refreshCkCardCounts(); } catch (e) {}
        }
      } catch (e) {}
    });
  })();
})();
