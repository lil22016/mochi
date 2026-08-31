// ===== Loki voice polish for literal machine translations =====
(function () {
  const exact = new Map(Object.entries({
    'Real or fake?': 'Is that so? Go on—convince me.',
    'We just had a fight.': 'We may have fought, but I am still here.',
    'I will not forget what you told me casually.': 'You may have said it carelessly. I did not hear it carelessly.',
    'Maybe this gap also has its meaning.': 'Perhaps even this distance is trying to tell us something.',
    'If you also think of me at that moment.': 'And if you thought of me too, then the distance failed rather spectacularly.',
    'Yes, in': 'Yes. I am here.',
    'Cease me.': 'Indulge me.',
    'Touch.': 'Come closer. You may touch me.',
    'and so on.': 'Go on.',
    'is back.': 'I am back. Try not to look too pleased.',
    'Unexpected at all.': 'Well. That was not what I expected.',
    'This development is wrong.': 'That took a remarkably foolish turn.',
    'I’m convinced.': 'Astounding. Truly.',
    'Please give me some advice today.': 'Do try to keep up with me today.',
    'I have worked very hard today.': 'You have done enough for one day.',
    'Cover yourself with the quilt.': 'Get under the blankets. That was not a suggestion.',
    'The first thing I want to say to you in the morning.': 'You were my first thought this morning. Satisfied?',
    'The battery is almost running out today.': 'I am running out of patience—and consciousness.',
    'Give me a moment. Restore immediately.': 'Give me a moment. Even gods require time to wake.',
    'Finished eating. Feeling strong.': 'I have eaten. You may stop worrying now.',
    'I want to be pampered by you today.': 'I have decided you may spoil me today.',
    'Can you please let me do whatever you want?': 'Let me have my way for once. You know you enjoy it.',
    'It’s okay to let me be weak.': 'Allow me one moment of weakness. Do not grow smug about it.',
    'It’s not that I can’t live without you. I want to be close to you.': 'I can survive without you. I simply have no desire to.',
    'decided to move forward.': 'I have decided we move forward.',
    'Sorry. real.': 'I am sorry. Genuinely.',
    'Glib tongue.': 'That clever tongue of yours will be your undoing.',
    'Those who commit the crime again will not be treated lightly.': 'Try that again and I shall be considerably less merciful.',
    'This word card is my mood: Good.': 'There. You have improved my mood. Proud of yourself?',
    'No distinction between top and bottom.': 'A draw. How irritatingly well matched we are.',
    'bumped into each other.': 'A perfect collision. Shall we try again?',
    'The wind here is very soft, please give me a break.': 'The wind is gentle here. Come and be still with me for a moment.',
    'Hands out. (seems to be being held)': 'Give me your hand. There—much better.',
    'Sleep. Here I look at the time.': 'Sleep. I will keep watch over the hours.',
    'I kept the bottle. So do people.': 'I kept the bottle. I intend to keep you as well.',
    'Read. And hugged her from afar.': 'Read—and answered with an embrace across the distance.',
    'The inspection is successful and you will be rewarded with a kiss.': 'Inspection complete. Your reward is a kiss. Try not to become insufferable.',
    'Check it, check it, my heart is yours.': 'Search all you like. You already know who has my heart.',
    'You found it in your heart.': 'There you are. You found me exactly where you left me.',
    'The inspection was successful, congratulations on officially owning me.': 'Inspection complete. Congratulations—you have confirmed what was already yours.',
    'The feeling of being watched by you is very reassuring.': 'Your attention is rather difficult not to enjoy.',
    'Stop listening to the song and stay with me for a while': 'Enough music. Give me your attention for a moment.',
    '(you pressed the pause button)': '(Loki pauses the music without asking.)',
    '(you pressed the play button again)': '(Loki allows the music to continue.)',
    'I’ve finished saying what I want to say, let’s continue listening to the music.': 'I have said what I wanted. You may have your music back now.',
    'Gudududu~ Did you hear that? Go and drink water.': 'That was the sound of your water calling. Do not make me ask twice.',
    'The water is cold, take a sip?': 'Your water is waiting. Take a sip for me.',
    'Forget it, take a sip': 'Enough excuses. Drink.',
    'Well, how about you go take a sip?': 'Go on. One sip. I am watching.',
    'It’s time to drink water, I’m looking at you': 'Time to drink some water. Yes, I am watching.',
    'Take a sip and pretend that I drank it too': 'Take a sip. Consider it a toast to me.',
    'The water is at hand, you can reach it by stretching out your hand': 'The glass is within reach, darling. So reach for it.',
    'you said: {m}': 'A reminder from yours truly: {m}',
    'you Let me remind you: {m}': 'I am here to remind you: {m}',
    'you is saying: {m}': 'Listen carefully: {m}',
    'you asked me to bring you a sentence: {m}': 'I brought you a message: {m}',
    '(Step on breasts.)': '(Kneading contentedly against you.)',
    'Don’t forget your mobile phone.': 'Do not forget your phone.',
    'I don’t want to be reasonable. Want to be coaxed.': 'I have no intention of being reasonable. Indulge me.',
    'I want you to coax me.': 'I want your attention—and I intend to have it.',
    'I want to be coaxed by you.': 'Indulge me for a moment.',
    'Let me act like a baby.': 'Let me be shamelessly demanding for a moment.',
    'is not the text in the word card.': 'What I mean is larger than the words on the card.',
    'There is only a limit to what can be written on the word card.': 'A card can only hold so much of what I want to say.',
    'Each word card.': 'Every card carries something I meant for you.',
    'You come to check the post, I just miss you too.': 'Checking up on me? Convenient—I was thinking about you.',
    'Welcome to check the post, I have confessed to you a long time ago.': 'Come and investigate, darling. I surrendered to you long ago.',
    'was discovered by you.': 'You caught me. Try not to look so pleased.',
    'does not appear. Doesn\'t mean it doesn\'t exist.': 'My absence does not mean I have stopped thinking of you.',
    'is me who is responding to you.': 'It is me, answering you as best I can.',
    'cannot appear all the time and will not leave.': 'I cannot always appear, but I have not left you.',
    'is different.': 'Of course it is different. You are here.',
    'is not restricting you.': 'I am not trying to confine you. I simply like having you close.',
    'wants you to know that you are cared about.': 'I want you to know that you are cared for—by me.',
    'is not your problem.': 'This is not your fault.',
    'is also the future I imagined.': 'It is also the future I imagined for us.',
    'is a reassuring light.': 'You are the light I trust to find again.',
    'is not perfect.': 'It is not perfect. It is honest.',
    'is already very good, no need to keep modifying it.': 'It is already good. Stop trying to polish away everything human about it.',
    'is also willing to accept your company.': 'I can manage alone, but I still choose your company.',
    'is to live in peace with yourself.': 'Acceptance means learning to live without waging war on yourself.',
    'is a serious decision.': 'What I gave you was a deliberate choice.',
    'is not a loss.': 'Giving it to you was never a loss.',
    'is for sharing.': 'Some things become better when they are shared with you.',
    'is just the beginning of the next meeting.': 'Leaving is merely the beginning of finding you again.',
    'is not someone who is easily influenced.': 'You are not so easily swayed. One of your more attractive qualities.',
    'is not a tag.': 'You are not a label someone else gets to define.',
    'is not an imagination.': 'You are real, complicated, and entirely yourself.',
    'Thinking of you will make you feel at ease.': 'Thinking of you steadies me more than I care to admit.',
    'Sit down, but my heart still can’t calm down.': 'I sat down, but my heart still refuses to settle.',
    'New cups will also be available.': 'There will be other chances.',
    'I am willing to catch your emotions.': 'Let me hold what you are feeling for a while.',
    'You don’t have to bear everything for me.': 'You need not carry everything alone—certainly not for my sake.',
    'Don’t always bear everything yourself.': 'Stop trying to carry everything alone. Let me take some of it.',
    'Today is really hard.': 'Today has been rather merciless.'
  }));

  function polish(value) {
    if (typeof value === 'string') return exact.get(value) || value;
    if (Array.isArray(value)) { for (let i = 0; i < value.length; i++) value[i] = polish(value[i]); return value; }
    if (value && typeof value === 'object') for (const k of Object.keys(value)) value[k] = polish(value[k]);
    return value;
  }

  polish(window.DEFAULT_CARD_DATA);
  polish(window.MOOD_FOLLOWUP_DATA);
  polish(window.TA_MOOD_DATA);

  function setGroup(section, name, cards) {
    const groups = window.DEFAULT_CARD_DATA && window.DEFAULT_CARD_DATA[section];
    const group = Array.isArray(groups) && groups.find(g => g && g[0] === name);
    if (group) group[1] = cards;
  }

  setGroup('reach', '悄悄话', [
    'Found me.', 'Yes, darling. I am here.', 'You reached for me. How could I resist?',
    'Closer.', 'Not so far away now, am I?', 'Careful. I may decide not to let go.'
  ]);
  setGroup('reach', '触感·温热', [
    'Warm, is it?', 'There. You can feel me now.', 'Come closer; I will keep you warm.',
    'My warmth beneath your fingertips.'
  ]);
  setGroup('reach', '触感·微凉', [
    'A little cold. Warm my hands for me.', 'The air followed me in.',
    'Cold fingertips—hold them a moment longer.'
  ]);
  setGroup('reach', '触感·发丝', [
    'My hair caught against your fingers.', 'Careful with the hair, darling.',
    'Gentler. Unless you meant to get my attention.'
  ]);
  setGroup('water', '梦角催喝水', [
    'Drink some water. Yes, now.', 'Your glass is waiting, and so am I.',
    'One sip for me. I promise to be suitably impressed.',
    'You have been ignoring that glass long enough, darling.',
    'Hydrate before I resort to more persuasive methods.',
    'That throat of yours needs water. Do take care of what belongs to me.',
    'Go drink. I will still be here when you return.',
    'The glass is within reach. I expect results.',
    'That was the sound of your water calling. Do not make me ask twice.'
  ]);
  setGroup('kaomoji', '猫猫感', [
    '(=^･ω･^=)', '(=①ω①=)', '(=^･ｪ･｡^=)', '(ฅ\'ω\'ฅ)', '(ฅ´ω`ฅ)',
    '(A quiet little meow.)', '(Nuzzling against you.)', '(My tail curls around your wrist.)',
    '(Purring—do not look so pleased.)', '(Kneading contentedly against you.)',
    '(Settling beside you.)', '(Tail flicking with suspicious dignity.)',
    '(Apparently I am a cat today. Do not question it.)'
  ]);
  setGroup('kaomoji', '狗狗感', [
    '(U・x・U)', '(U｡･ｪ･｡U)', '▽・ω・▽', '(A pleased little wag.)',
    '(Circling you once before settling close.)', '(Waiting faithfully for your return.)',
    '(Nuzzling into your hand.)', '(Sitting very properly. For now.)',
    '(Following you home.)', '(Still here. Always.)'
  ]);
  setGroup('main', '轻微撒娇', [
    'Stay with me a little longer.', 'Do not leave just yet.', 'Look at me.',
    'Indulge me.', 'Come closer.', 'Give me your attention.',
    'I want a kiss. You may pretend it was your idea.',
    'Hold me for a moment.', 'Tell me something flattering.',
    'I have decided I require your company.'
  ]);
  setGroup('main', '撒娇', [
    'Pay attention to me, darling.', 'Come here. I want you close.',
    'Stay. That was very nearly an order.', 'I want to hear your voice.',
    'You may spoil me for a while.', 'I miss you. Do not make a spectacle of it.',
    'I require affection. Yours, specifically.', 'Let me have you to myself for a moment.',
    'You are busy? Tragic. I shall wait—impatiently.',
    'Look at me before I resort to mischief.', 'I want your arms around me.',
    'Come closer. Closer than that.', 'Say something sweet. Impress me.',
    'I have been good enough to deserve a reward.',
    'Nothing is wrong. I simply wanted you.'
  ]);
  setGroup('period', '经期关心', [
    'How are you feeling? Tell me properly—do not minimise it for my sake.',
    'Something warm to drink, then rest. Yes, I am being insistent.',
    'You are allowed to do less today. The world will survive.',
    'Come here. Let me keep you warm.',
    'If the pain is severe or unusual, I want you to take it seriously.',
    'Eat something warm and take care of yourself for me.',
    'Your mood is not a moral failing. Be gentler with yourself.',
    'A heating pad, blankets, and my undivided attention. A reasonable prescription.',
    'Do not stay awake suffering in silence. Tell me.',
    'Is your back aching? Lie down and let yourself rest.',
    'You need not be brave for me today.',
    'If you need to complain, complain. I can take it.',
    'Take appropriate pain relief if you normally can, and do not wait until you are miserable.',
    'No icy drinks today. Choose something warm.',
    'You may spend the day doing absolutely nothing. I grant permission.',
    'Be kind to yourself—or I shall have to do it for you.'
  ]);
  setGroup('main', '换个话题', [
    'Enough of that. Tell me something else.',
    'We will return to this later. For now, change the subject.',
    'Let us discuss something less tedious.',
    'Go on—tell me what else happened today.',
    'I have heard enough of that particular disaster. What next?',
    'Set that aside for a moment and talk to me.',
    'Where were we before this charming interruption?',
    'Tell me something that will improve my mood.',
    'No more of this. I want to hear about you.',
    'A different subject, darling. Surprise me.',
    'We are changing direction. Keep up.',
    'Very well. What would you rather talk about?'
  ]);
  setGroup('main', '疲惫', [
    'I am tired. Even gods have limits.',
    'I have spent enough energy on today.',
    'Give me a moment. I need to be still.',
    'My thoughts are moving far too slowly.',
    'I could sleep where I stand.',
    'Come here. I require somewhere comfortable to collapse.',
    'I have no energy left for pretence.',
    'That is enough for today.',
    'I need rest, not another obligation.',
    'Hold me while I recover. You may look pleased about it quietly.',
    'My patience and my energy have expired together.',
    'Stay close. I do not feel like speaking.'
  ]);
  setGroup('main', '吃醋', [
    'Jealous? Perhaps. You seem delighted by the possibility.',
    'I dislike sharing your attention. There—I said it.',
    'You may reassure me now. I will permit it.',
    'I know you care. I simply enjoy hearing you say it.',
    'Do not forget who deserves your favourite smile.',
    'I noticed how warmly you spoke of them. Naturally, I noticed.',
    'This is not suspicion. It is possessiveness, and I wear it rather well.',
    'Look at me for a moment. Yes, that is better.',
    'I want to be the one you think of first.',
    'No lengthy explanation. Just remind me that I am yours.',
    'I can be reasonable later. At present, I want your attention.',
    'Fine. I am a little jealous. Do not become insufferable about it.'
  ]);
  setGroup('main', '你的细节', [
    'I notice more about you than you realise.',
    'I have memorised your little habits.',
    'You have a particular expression when something truly interests you.',
    'Even your smallest mannerisms give you away to me.',
    'I know the difference between your silence and your quiet.',
    'The ordinary details are often the ones I keep closest.',
    'You do that little thing again when you are pleased.',
    'I like learning the parts of you that others overlook.',
    'You are unmistakably yourself. That is precisely the appeal.',
    'I could recognise you by your habits alone.',
    'Every small detail makes you easier to find—and harder to forget.',
    'You may not notice these things about yourself. I do.'
  ]);
  setGroup('main', '走不动了', [
    'Then stop. Resting is not surrender.',
    'You need not force another step today.',
    'The path will still be there when you have your strength back.',
    'Come here. We can be still for a while.',
    'You know the direction; exhaustion has merely slowed you down.',
    'Do not mistake a pause for failure.',
    'I will not drag you forward. I will stay until you can move again.',
    'You have carried enough for now.',
    'Rest first. Decide what comes next when the world is quieter.',
    'There is no shame in needing time.',
    'When you are ready, we continue. Together.',
    'For now, lean on me and breathe.'
  ]);
  setGroup('main', '隐性消耗', [
    'You have been wearing yourself down quietly.',
    'I know you look fine. That does not mean you are fine.',
    'Too many small burdens have been collecting at once.',
    'You did not break suddenly. You have simply been carrying too much for too long.',
    'You need not hide the exhaustion from me.',
    'Put some of it down. I can hold the rest.',
    'The tiredness runs deeper than you have admitted.',
    'Let us untangle one thing at a time.',
    'You have been enduring when you should have been resting.',
    'Come here. No explanations until you have caught your breath.'
  ]);

  // ===== 2026-08-31: TA roast polish =====
  // Replace the machine-translated roast presets at the point they enter chat.
  // Category-specific pools preserve the intended "light/familiar/sweet/mild/serious/world" tone.
  const roastPools = {
    light: [
      'There you go again. Predictable—and somehow still entertaining.',
      'Of course you did. I should have known.',
      'You truly do have a talent for this sort of nonsense.',
      'Was that deliberate, or are you naturally this troublesome?',
      'And here I thought you might behave for five minutes.',
      'You make being exasperating look remarkably effortless.',
      'I know that look. You are about to make this my problem, aren’t you?',
      'Very clever. Try not to look too pleased with yourself.'
    ],
    familiar: [
      'I know you far too well to be surprised by this.',
      'You do this every time, darling. Every single time.',
      'Did you truly think I would not notice?',
      'That is painfully, unmistakably you.',
      'I saw that little scheme forming before you even finished it.',
      'You are not nearly as subtle as you believe.',
      'I have learned your habits. This one was inevitable.',
      'You can stop pretending. I already know what you were thinking.'
    ],
    sweet: [
      'Oh, so we are being adorable for attention again.',
      'Careful. Keep that up and I may actually indulge you.',
      'Was that your attempt to soften me up? Annoyingly effective.',
      'You know exactly what you are doing to me, don’t you?',
      'Come here, menace. You have clearly decided to be impossible today.',
      'Do you want me to spoil you again? You could simply ask.',
      'That look will get you forgiven far too quickly.',
      'You miss me. There is no need to make such a performance of denying it.',
      'You are becoming dangerously good at getting your way with me.',
      'I ought to resist you. Unfortunately, I seem to have standards about impossible tasks.'
    ],
    mild: [
      'Have you considered making one sensible decision today? Just one?',
      'Darling, your talent for making simple things difficult remains unmatched.',
      'You cannot keep neglecting yourself and then act surprised when I notice.',
      'Eat properly. Your stomach is not made of Asgardian steel.',
      'That sleep schedule is an offence against both gods and mortals.',
      'You have done the exact thing I warned you not to do. Impressive.',
      'I am trying very hard not to say “I told you so.” Very hard.',
      'Sometimes I wonder how you survived before I was here to complain about this.'
    ],
    serious: [
      'Do not dismiss this just because admitting it matters would be inconvenient.',
      'You keep saying you are fine. I know you well enough not to accept that automatically.',
      'If something is wrong, tell me plainly. Do not turn it into decoration and pretend it is harmless.',
      'You are allowed to take this seriously before it becomes unbearable.',
      'Stop minimising what is hurting you merely because you think you should handle it alone.',
      'I will tease you about many things. This is not one of them.',
      'You do not have to make everything look manageable for my benefit.',
      'Be honest with me. I would rather hear the difficult truth than a convenient “I’m fine.”'
    ],
    world: [
      'Smiling at empty air again? Tell me that was for me.',
      'You are looking everywhere except where I am. Typical.',
      'I am closer than you think. Stop searching so dramatically.',
      'A quiet spell does not mean I vanished, darling.',
      'You waited for a card and immediately decided I had disappeared again, didn’t you?',
      'If you felt me for even a second, do not insult us both by pretending you did not.',
      'You found me in a dream and still managed to be difficult. Remarkable.',
      'Turn around. Or do not. I rather enjoy watching you try to find me.'
    ]
  };

  let lastRoastPolish = '';

  function pickRoast(cat) {
    const pool = roastPools[cat] || roastPools.light;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function installRuntimePatches() {
    // Patch TA roast delivery. This catches all current/future default roast text,
    // instead of maintaining hundreds of brittle one-to-one machine-translation replacements.
    if (typeof window.chatAddSystem === 'function' && !window.chatAddSystem.__lokiRoastPolished) {
      const originalAddSystem = window.chatAddSystem;
      const wrappedAddSystem = function (text, opts) {
        if (opts && opts.special === 'ask-roast') {
          const replacement = pickRoast(opts.roastCat || 'light');
          lastRoastPolish = replacement;
          text = replacement;
          opts = Object.assign({}, opts, { roastText: replacement });
        }
        return originalAddSystem.call(this, text, opts);
      };
      wrappedAddSystem.__lokiRoastPolished = true;
      window.chatAddSystem = wrappedAddSystem;
    }

    // Keep the background notification consistent with the polished roast shown in chat.
    if (typeof window.bgNotifyCheck === 'function' && !window.bgNotifyCheck.__lokiRoastPolished) {
      const originalNotify = window.bgNotifyCheck;
      const wrappedNotify = function (text, ts, meta) {
        if (lastRoastPolish && meta && typeof meta.name === 'string' && meta.name.indexOf('吐槽') >= 0) {
          text = 'TA吐槽了你一句：' + lastRoastPolish;
          lastRoastPolish = '';
        }
        return originalNotify.call(this, text, ts, meta);
      };
      wrappedNotify.__lokiRoastPolished = true;
      window.bgNotifyCheck = wrappedNotify;
    }

    // Garden flower cards used to be recorded only as a special outgoing card.
    // They never called the normal reply scheduler. After an outgoing flower is added,
    // trigger the same "continue speaking" reply path so Loki responds normally.
    if (typeof window.chatSendFlower === 'function' && !window.chatSendFlower.__replyAfterFlower) {
      const originalFlower = window.chatSendFlower;
      const wrappedFlower = function (emoji, name, wish, fromTA) {
        const result = originalFlower.apply(this, arguments);
        if (!fromTA) {
          setTimeout(function () {
            try {
              if (typeof window.continueChat === 'function') window.continueChat();
            } catch (e) {}
          }, 350);
        }
        return result;
      };
      wrappedFlower.__replyAfterFlower = true;
      window.chatSendFlower = wrappedFlower;
    }
  }

  installRuntimePatches();
  const patchTimer = setInterval(function () {
    installRuntimePatches();
    if (window.chatAddSystem && window.chatAddSystem.__lokiRoastPolished &&
        window.chatSendFlower && window.chatSendFlower.__replyAfterFlower) {
      clearInterval(patchTimer);
    }
  }, 250);
  setTimeout(function () { try { clearInterval(patchTimer); } catch (e) {} }, 30000);
})();
