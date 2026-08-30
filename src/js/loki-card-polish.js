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
    'you asked me to bring you a sentence: {m}': 'I brought you a message: {m}'
    ,'(Step on breasts.)': '(Kneading contentedly against you.)'
    ,'Don’t forget your mobile phone.': 'Do not forget your phone.'
    ,'I don’t want to be reasonable. Want to be coaxed.': 'I have no intention of being reasonable. Indulge me.'
    ,'I want you to coax me.': 'I want your attention—and I intend to have it.'
    ,'I want to be coaxed by you.': 'Indulge me for a moment.'
    ,'Let me act like a baby.': 'Let me be shamelessly demanding for a moment.'
    ,'is not the text in the word card.': 'What I mean is larger than the words on the card.'
    ,'There is only a limit to what can be written on the word card.': 'A card can only hold so much of what I want to say.'
    ,'Each word card.': 'Every card carries something I meant for you.'
    ,'You come to check the post, I just miss you too.': 'Checking up on me? Convenient—I was thinking about you.'
    ,'Welcome to check the post, I have confessed to you a long time ago.': 'Come and investigate, darling. I surrendered to you long ago.'
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
    '(=^･ω･^=)', '(=①ω①=)', '(=^･ｪ･^=)', '(ฅ\'ω\'ฅ)', '(ฅ´ω`ฅ)',
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
})();
