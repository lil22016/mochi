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

// ===== 2026-08-31 roast source migration v2 =====
// The roast system persists preset text in ta-roast and copies roastText into chat records.
// Therefore patching only chatAddSystem is insufficient for old/persisted cards and the reply modal.
// Migrate the actual preset records + existing roast chat records by exact old text.
(function installRoastSourceMigration() {
  const R = {
    "Why are you like this again?": "There you go again. Should I even pretend to be surprised?",
    "I knew it.": "I knew it. You are becoming terribly predictable, darling.",
    "It’s still you.": "Of course it is you. Who else could make this much trouble look charming?",
    "You really know how to do it.": "You do have a remarkable talent for this sort of nonsense.",
    "Here it comes again.": "Ah. Here we go again.",
    "Did you do it on purpose?": "Was that deliberate, or are you naturally this troublesome?",
    "Why are you so casual?": "You are being suspiciously nonchalant about this.",
    "You really have your own ideas.": "Naturally, you had to do it your own way.",
    "What should I say to you?": "What am I supposed to do with you?",
    "You really haven’t changed at all.": "You truly have not changed. I am almost impressed.",
    "Okay, you win again.": "Fine. You win this one. Do not become insufferable about it.",
    "You are really good.": "Oh, very clever. Proud of yourself?",
    "I had already guessed it.": "I had already guessed. You are not nearly as mysterious as you think.",
    "Ha, I knew it would be like this.": "Ha. I knew this was exactly where we were headed.",
    "I knew you would choose this.": "I knew you would choose that. I know you far too well.",
    "When can you change this habit?": "And when, exactly, do you intend to break that habit?",
    "You do this every time.": "You do this every single time, darling.",
    "I know you too well.": "I know you far too well for that to work on me.",
    "Do you think I don’t know?": "Did you truly think I would not notice?",
    "This is very much like what you would do.": "That is painfully, unmistakably you.",
    "It is still you.": "Yes. That is very much your doing.",
    "I have seen all your little thoughts.": "I can see that little scheme of yours from here.",
    "Do you think you hid it well?": "You thought you hid that well? Adorable.",
    "I'm used to it.": "I have grown accustomed to your particular brand of chaos.",
    "Why are you so cute.": "Why must you be so annoyingly adorable?",
    "Started acting coquettishly again.": "There you are, trying to charm your way out of it again.",
    "What do you want me to do?": "And what, precisely, are you hoping I will do about that?",
    "Are you trying to make me soft-hearted?": "Are you trying to make me go soft on you? Dangerous strategy.",
    "Why is it stuck again?": "And now you are clinging to me again. How predictable.",
    "Who allowed you to be so cute.": "Who gave you permission to be this adorable?",
    "You really know how to mess with me.": "You know exactly how to get under my skin, don't you?",
    "You want me to coax you again?": "Do you want me to coax you again? You could simply ask.",
    "How can I hurt you like this?": "Looking at you like that makes it rather difficult to stay stern.",
    "There is really nothing I can do against you.": "You make it absurdly difficult to resist you.",
    "Why are you so stupid.": "Darling, that was not one of your brighter decisions.",
    "What on earth are you thinking about.": "What, exactly, was going through that head of yours?",
    "You are this person.": "You really are impossible sometimes.",
    "Did yourself like this again.": "And you have gone and done this to yourself again.",
    "You are really good at tormenting yourself.": "You are remarkably skilled at making things harder for yourself.",
    "I am impressed by you.": "You continue to astonish me—and not always in the flattering sense.",
    "Why did you stay up late again?": "Up late again? Must I personally confiscate your distractions?",
    "I knew you would forget.": "I knew you would forget. I was hoping to be wrong for once.",
    "You are really not polite at all.": "That appetite of yours has absolutely no manners.",
    "Finally know how to rest?": "So you finally remembered how to rest. Miraculous.",
    "Miss me again? I feel it.": "Missing me again? I thought I felt something.",
    "Did you secretly sense my presence just now?": "Did you feel me there for a moment, or shall I come closer?",
    "You promised me to accompany you well, so I fell asleep first.": "You promised to rest properly. Do not make me enforce bedtime from another world.",
    "You sent so many text cards, do you just want me to reply to you?": "So many cards. Were you trying to lure another reply out of me?",
    "When you touched me, you obviously smiled.": "You smiled when you touched me. Do not bother denying it.",
    "Are you waiting for my news again?": "Waiting for me to say something again, are you?",
    "What about going to bed early as promised?": "And what became of that promise to sleep early?",
    "You miss me after not seeing me for a day, right?": "One day without me and you already miss me. How sweet.",
    "Did you set me to the top?": "Did you pin me to the top? Sensible choice.",
    "What are you thinking about all day long?": "What has been occupying that mind of yours all day?",
    "I caught him in a daze again.": "Caught you drifting off again.",
    "Very well, it’s all up to you.": "Very well. Have it your way—apparently you always do.",
    "It’s really yours.": "That is so very you.",
    "I can guess your little moves with my eyes closed.": "I could predict your little tricks with my eyes closed.",
    "Don't think I don't know what you are thinking.": "Do not imagine I cannot tell what you are thinking.",
    "You, what you say is far from what you think in your heart.": "Your words and your heart are telling two very different stories.",
    "It's not enough for me to touch you, you are so greedy.": "One touch was not enough? Greedy thing.",
    "He smiled as soon as he received my word card, and I saw it.": "You smiled the moment my card arrived. Yes, I noticed.",
    "My worries are written all over my face, and I still want to hide them from me.": "Your worry is written all over you, and you are still trying to hide it from me.",
    "Don’t take good care of yourself, how many times have I told you.": "How many times must I tell you to take proper care of yourself?",
    "Just do it, I can't bear to hurt you anyway.": "Go on, then. You know perfectly well I am too fond of you to stay angry.",
    "If you have something to do, just keep it to yourself and don’t talk about it. Do you think I can’t find out?": "Keeping it to yourself again? Did you truly think I would not notice?",
    "It must have been my name that was called in the dream.": "If someone called your name in that dream, I rather hope it was me.",
    "I'm right next to you, whatever you're looking for.\nWhere is": "I am right beside you. What exactly are you searching for?",
    "When you concentrate, you won’t notice me at all.": "Once you concentrate, the rest of the world disappears—including me, apparently.",
    "I feel silly when I listen to the song. Are you thinking of me again?": "That song has you looking suspiciously sentimental. Thinking of me?",
    "Your brain works at its own pace.": "Your mind does insist on taking the scenic route.",
    "He must be thinking about it again.": "There you go, disappearing into your thoughts again.",
    "Very well, everything you said is right.": "Very well. You are right about everything. Happy now?",
    "You, you don’t listen no matter what I say.": "You truly do not listen to a word I say, do you?",
    "Here you go again, I can memorize your next sentence.": "There you go again. I could recite your next line for you.",
    "I can see your little expression through the screen.": "I can practically see that expression through the screen.",
    "You really make excuses for yourself.": "You are remarkably creative when inventing excuses for yourself.",
    "I can understand your little thoughts with my eyes closed.": "I could read those little thoughts of yours with my eyes closed.",
    "Don't think that I can't understand it if you put it another way.": "Changing the wording will not fool me, darling.",
    "You are not forgiving with your words, but you are very soft at heart.": "Such sharp words for someone with such a soft heart.",
    "I know exactly what you are going to say next.": "I know exactly what you are about to say.",
    "You are so awkward, I want to laugh just looking at it.": "You are being so awkward about this that I am trying not to laugh.",
    "Are you secretly checking to see if I have replied to your message?": "Checking whether I replied again? I caught you.",
    "He said it was fine, but his hands were typing honestly.": "You said you were fine, yet your fingers came straight back to me.",
    "Looking at you like this makes me want to coax you.": "Looking at you like that makes me want to indulge you.",
    "If you miss me again, just say it, no need to beat around the bush.": "If you miss me, say so. You needn't invent an elaborate excuse.",
    "When you smiled, I saw it through the word card.": "You smiled at my card. I saw that.",
    "There is really nothing I can do to you, I will soften with just one word.": "One word from you and I am already going soft. Infuriating.",
    "I don’t eat well, how many times have I told you.": "Not eating properly again? How many times must we have this conversation?",
    "Just do it, I can’t bear to be the real murderer anyway.": "Go on, then. You know I cannot stay genuinely cruel to you.",
    "Stay up late again, is your body your own or mine?": "Up late again? Must I remind you that I am rather invested in keeping you intact?",
    "If you don’t tell me something, do you think I can guess it?": "If something is wrong, tell me. I can read you well, not read minds.",
    "You always say you are fine, but I don’t believe it.": "You keep saying you are fine. I know you well enough not to accept that automatically.",
    "I am right next to you, but you are still looking everywhere.": "I am right beside you, and still you insist on searching everywhere else.",
    "Can’t you feel me? Then I'll get closer.": "Cannot feel me? Then I suppose I shall have to come closer.",
    "The way you talk to the air, I am listening.": "Keep talking to the air if you like. I am listening.",
    "The word card is sent out so fast, do you want me to reply to you a few more words?": "Sending cards that quickly—trying to coax a few more words out of me?",
    "Maybe I called you by the wrong name again in the dream, that wasn’t me.": "If dream-me called you the wrong name, I formally deny responsibility.",
    "You smiled when you touched me, don’t deny it.": "You smiled when you touched me. Do not deny it.",
    "Your reaction is always slow.": "A little slow on the uptake today, are we?",
    "He said \"um\", \"oh\" and \"ok\" again.": "Another 'mm,' 'oh,' and 'okay.' Such eloquence.",
    "Your mouth is very sweet when you lie to others.": "You become terribly sweet when you are trying to talk your way out of something.",
    "Okay, you are right this time.": "Fine. You are right this time. Treasure the occasion.",
    "You are a person who cares about food but not about fighting.": "Offer you food and suddenly all hostilities are forgotten.",
    "He's pretending to be fine again, I can see clearly.": "Pretending you are fine again? I can see straight through it.",
    "I am very familiar with your little temper.": "I know that little temper of yours very well.",
    "Don't explain, I know what you want to say.": "No need to explain. I already know what you mean.",
    "You turn around and I know what you are going to do.": "One look at you and I already know what you are about to do.",
    "Your thoughts are written on your face and you still hide it from me.": "Your thoughts are written all over your face, yet you still try to hide them from me.",
    "I have long been accustomed to your behavior.": "I have had plenty of time to become familiar with your habits.",
    "Are you secretly waiting for my news there again?": "Waiting for another sign from me again?",
    "Your level of coquettishness is getting better and better.": "You are getting dangerously good at charming your way into what you want.",
    "He said no, but his hand came back very quickly.": "You said no, yet your hand came back awfully quickly.",
    "If you are like this, I will coax you out of experience.": "Careful. Keep this up and I might just have to coax you myself.",
    "I became soft as soon as I received my word card, and you were so coaxable.": "One card from me and you are already softening. You are far too easy to coax.",
    "You miss me again, don’t deny it.": "You miss me again. Do not bother denying it.",
    "You don’t eat on time, your stomach is made of iron?": "Not eating on time again? Your stomach is not made of Asgardian steel.",
    "Your schedule makes me tired.": "Your sleep schedule exhausts me merely by existing.",
    "I caught myself a cold again, I told you so many times.": "A cold again? I have told you to take care of yourself more times than I can count.",
    "If you have something to do, take it upon yourself and treat it as a decoration for me?": "Something is wrong and you are carrying it alone again? Do not dress it up as if it were nothing.",
    "You always say it's okay, but I don't believe it.": "You always say it is fine. I do not always believe you.",
    "You smiled into the air again, was it me?": "Smiling at empty air again? Tell me that one was for me.",
    "I'm right behind you, turn around and feel it.": "I am right behind you. Turn around—or simply feel for me.",
    "After waiting for so long for the word card, do you think I am gone again?": "You waited for a card and decided I had vanished again, did you?",
    "You saw me in the dream and ignored me, but also in reality?": "You ignored me in your dream and now in waking life too? Bold choice.",
    "Your hand stopped for a moment when you touched me, don’t pretend.": "Your hand paused when you touched me. I noticed.",
    "I am right next to you, but you are looking everywhere. How stupid.": "I am right beside you, yet you are searching everywhere else. Honestly, darling."
  };

  function migrateOne(rec) {
    if (!rec || typeof rec !== 'object') return false;
    let changed = false;
    if (typeof rec.text === 'string' && R[rec.text]) { rec.text = R[rec.text]; changed = true; }
    if (typeof rec.roastText === 'string' && R[rec.roastText]) { rec.roastText = R[rec.roastText]; changed = true; }
    if (typeof rec.roast === 'string' && R[rec.roast]) { rec.roast = R[rec.roast]; changed = true; }
    return changed;
  }

  function migrateAll() {
    try {
      const st = window.activeStore && window.activeStore();
      if (st) {
        const raw = st.get('ta-roast');
        if (raw) {
          const d = JSON.parse(raw);
          let changed = false;
          if (Array.isArray(d.questions)) d.questions.forEach(q => { if (migrateOne(q)) changed = true; });
          if (Array.isArray(d.history)) d.history.forEach(h => { if (migrateOne(h)) changed = true; });
          if (changed) st.set('ta-roast', JSON.stringify(d));
        }
      }
    } catch (e) {}

    try {
      const msgs = window.getChatMsgs && window.getChatMsgs();
      if (Array.isArray(msgs)) {
        let changed = false;
        msgs.forEach(m => {
          if (m && m.special === 'ask-roast' && migrateOne(m)) changed = true;
        });
        // getChatMsgs returns the live array; chat.js persists on its next mutation.
        // Existing modal reads the live array, so the fix is immediate.
      }
    } catch (e) {}
  }

  migrateAll();
  setTimeout(migrateAll, 500);
  setTimeout(migrateAll, 2000);

  // Patch the modal entry too, so an already-created roast is migrated immediately before display.
  const modalTimer = setInterval(function () {
    if (typeof window.openRoast !== 'function' || window.openRoast.__lokiSourceMigrated) return;
    const original = window.openRoast;
    const wrapped = function (idx) {
      migrateAll();
      return original.apply(this, arguments);
    };
    wrapped.__lokiSourceMigrated = true;
    window.openRoast = wrapped;
    clearInterval(modalTimer);
  }, 200);
  setTimeout(function () { try { clearInterval(modalTimer); } catch (e) {} }, 30000);
})();
