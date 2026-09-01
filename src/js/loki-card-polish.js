// Mochi — TA roast full retranslation
// Rebuilt from the original Chinese wording and intended tone:
// familiar / teasing / affectionate, not hostile.

(function () {
  const ROAST = {
  "rl1": "There you go again.",
  "rl2": "Knew it.",
  "rl3": "Of course. That's so you.",
  "rl4": "You really do have a talent for this, don't you?",
  "rl5": "Here we go again.",
  "rl6": "You did that on purpose, didn't you?",
  "rl7": "You really are awfully casual about this.",
  "rl8": "You do insist on doing things your own way.",
  "rl9": "Honestly, what am I supposed to do with you?",
  "rl10": "You really haven't changed a bit.",
  "rl11": "Fine, fine. You win again.",
  "rl12": "Honestly. You're something else.",
  "rl13": "I knew it.",
  "rl14": "Ha. I knew it would go like this.",
  "rf1": "I knew you'd pick this one.",
  "rf2": "When are you ever going to break that habit?",
  "rf3": "You do this every single time.",
  "rf4": "I know you far too well.",
  "rf5": "You really thought I wouldn't know?",
  "rf6": "That is exactly the sort of thing you'd do.",
  "rf7": "There you are. Still unmistakably you.",
  "rf8": "I can see exactly what you're up to.",
  "rf9": "You thought you were hiding it well?",
  "rf10": "I'm used to you by now.",
  "rs1": "How are you this adorable?",
  "rs2": "There you go, getting clingy with me again.",
  "rs3": "And what am I supposed to do when you're like this?",
  "rs4": "You're doing this just to make me go soft on you, aren't you?",
  "rs5": "And now you're clinging to me again.",
  "rs6": "Who gave you permission to be this cute?",
  "rs7": "You really do know how to get to me.",
  "rs8": "Want me to spoil you again?",
  "rs9": "How am I supposed to stay stern with you when you're like this?",
  "rs10": "Honestly, I'm hopeless when it comes to you.",
  "rm1": "How are you this silly?",
  "rm2": "What exactly is going on in that head of yours?",
  "rm3": "You really are something, you know that?",
  "rm4": "You've gone and worn yourself out again.",
  "rsg1": "You really do know how to put yourself through it.",
  "rsg2": "Honestly, I give up with you.",
  "rmt1": "Up late again?",
  "rmt2": "I knew you'd forget.",
  "rmt3": "Well, you certainly didn't hold back.",
  "rmt4": "Finally remembered how to rest, did you?",
  "rw1": "Missing me again? I can tell.",
  "rw2": "Were you just checking to see if you could feel me there?",
  "rw3": "You wanted me to stay with you, and then you fell asleep first.",
  "rw4": "Sending all those cards just to get me to answer you?",
  "rw5": "You smiled when you felt me. I noticed.",
  "rs11": "Waiting for a message from me again?",
  "rs12": "And what happened to going to bed early?",
  "rs13": "One day apart and you already miss me?",
  "rf11": "Did you pin me to the top?",
  "rl15": "What goes on in that head of yours all day?",
  "rl16": "Spacing out again. Caught you.",
  "rl17": "Alright, alright. Have it your way.",
  "rl18": "Honestly. Only you.",
  "rf12": "I could predict those little habits of yours with my eyes closed.",
  "rf13": "Don't think I can't tell what you're thinking.",
  "rf14": "What you say and what you actually feel are two very different things.",
  "rs14": "Being able to feel me still isn't enough? Greedy thing.",
  "rs15": "You smiled the moment my card arrived. I saw that.",
  "rs16": "It's written all over your face, and you're still trying to hide it from me.",
  "rm5": "Not taking care of yourself again. How many times have I told you?",
  "rm6": "Go on, keep being difficult. You know I can't stay mad at you.",
  "rsg3": "Keeping it all to yourself again? You really think I won't notice?",
  "rw6": "That was my name you called in your dream, wasn't it?",
  "rw7": "I'm right beside you. What are you searching for?",
  "rw8": "Once you get focused, you don't notice me at all, do you?",
  "rw9": "Getting completely lost in the music again? Thinking of me?",
  "rl19": "That mind of yours really does run on its own schedule.",
  "rl20": "There you go, overthinking again.",
  "rl21": "Alright, alright. You're right about everything.",
  "rl22": "You really don't listen to a word I say, do you?",
  "rl23": "Here we go again. I could recite your next line by now.",
  "rl24": "I can practically see that little expression through the screen.",
  "rl25": "You really are good at finding excuses for yourself.",
  "rf15": "I could read those little thoughts of yours with my eyes closed.",
  "rf16": "Changing the wording won't fool me.",
  "rf17": "Sharp tongue, soft heart. I know you.",
  "rf18": "I know exactly what you're about to say.",
  "rf19": "You're being so adorably awkward about this, I can't help laughing.",
  "rs17": "Checking to see whether I've replied again?",
  "rs18": "You say you're fine, yet here you are typing to me.",
  "rs19": "Seeing you like this makes me want to spoil you.",
  "rs20": "If you miss me, just say so. No need to dance around it.",
  "rs21": "You smiled. I could practically see it through the card.",
  "rs22": "I'm hopeless with you. One word and I've already gone soft.",
  "rm7": "Not eating properly again? How many times have I told you?",
  "rm8": "Go on, keep pushing your luck. You know I can't truly be harsh with you.",
  "rm9": "Up late again? Do I need to remind you that I'm rather attached to that body of yours?",
  "rsg4": "If something's wrong, tell me. You can't expect me to guess everything.",
  "rsg5": "You always say you're fine. I don't believe you.",
  "rw10": "I'm right beside you, and you're still looking everywhere else.",
  "rw11": "Can't feel me? Then I'll come a little closer.",
  "rw12": "Keep talking to the empty air. I'm listening.",
  "rw13": "Sending cards that fast because you want a few more words from me?",
  "rw14": "Called the wrong name in your dream again? That certainly wasn't me.",
  "rw15": "You smiled when you felt me. Don't deny it.",
  "rl26": "Always half a beat behind, aren't you?",
  "rl27": "Back to 'mm,' 'oh,' and 'okay' again, are we?",
  "rl28": "You get awfully sweet when you're trying to talk your way out of something.",
  "rl29": "Fine. You have a point this time.",
  "rl30": "One nice thing happens and suddenly you've forgotten every lesson, haven't you?",
  "rl31": "Pretending you're fine again? I can see right through you.",
  "rf20": "I know that little temper of yours far too well.",
  "rf21": "Don't explain. I already know what you mean.",
  "rf22": "I know what you're about to do before you even turn around.",
  "rf23": "It's written all over your face, and you still try to hide it from me.",
  "rf24": "I've known this little routine of yours for ages.",
  "rs23": "Waiting for a message from me again, are you?",
  "rs24": "You're getting dangerously good at getting your way with me.",
  "rs25": "You said no, yet you replied awfully quickly.",
  "rs26": "Keep this up and I'll become an expert at coaxing you.",
  "rs27": "One card from me and you've already gone soft. You're far too easy to coax.",
  "rs28": "Missing me again? Don't bother denying it.",
  "rm10": "Skipping meals again? Is your stomach made of iron?",
  "rm11": "Your sleep schedule exhausts me just looking at it.",
  "rm12": "Caught another cold? How many times have I told you to take care of yourself?",
  "rsg6": "Something's wrong and you're carrying it alone again? What am I here for, decoration?",
  "rsg7": "You keep saying you're fine. I don't believe you.",
  "rw16": "Smiling at empty air again? Was that because of me?",
  "rw17": "I'm right behind you. Turn around and feel for me.",
  "rw18": "Waited too long for a card and started thinking I'd disappeared again?",
  "rw19": "You ignored me in your dream, and now you're doing it awake too?",
  "rw20": "Your hand paused when you felt me. Don't pretend it didn't.",
  "rw21": "I'm right beside you, and you're still searching everywhere. Silly thing."
};
  const OLD_TO_ID = {
  "Why are you like this again?": "rl1",
  "I knew it.": "rl2",
  "It’s still you.": "rl3",
  "You really know how to do it.": "rl4",
  "Here it comes again.": "rl5",
  "Did you do it on purpose?": "rl6",
  "Why are you so casual?": "rl7",
  "You really have your own ideas.": "rl8",
  "What should I say to you?": "rl9",
  "You really haven’t changed at all.": "rl10",
  "Okay, you win again.": "rl11",
  "You are really good.": "rl12",
  "I had already guessed it.": "rl13",
  "Ha, I knew it would be like this.": "rl14",
  "I knew you would choose this.": "rf1",
  "When can you change this habit?": "rf2",
  "You do this every time.": "rf3",
  "I know you too well.": "rf4",
  "Do you think I don’t know?": "rf5",
  "This is very much like what you would do.": "rf6",
  "It is still you.": "rf7",
  "I have seen all your little thoughts.": "rf8",
  "Do you think you hid it well?": "rf9",
  "I'm used to it.": "rf10",
  "Why are you so cute.": "rs1",
  "Started acting coquettishly again.": "rs2",
  "What do you want me to do?": "rs3",
  "Are you trying to make me soft-hearted?": "rs4",
  "Why is it stuck again?": "rs5",
  "Who allowed you to be so cute.": "rs6",
  "You really know how to mess with me.": "rs7",
  "You want me to coax you again?": "rs8",
  "How can I hurt you like this?": "rs9",
  "There is really nothing I can do against you.": "rs10",
  "Why are you so stupid.": "rm1",
  "What on earth are you thinking about.": "rm2",
  "You are this person.": "rm3",
  "Did yourself like this again.": "rm4",
  "You are really good at tormenting yourself.": "rsg1",
  "I am impressed by you.": "rsg2",
  "Why did you stay up late again?": "rmt1",
  "I knew you would forget.": "rmt2",
  "You are really not polite at all.": "rmt3",
  "Finally know how to rest?": "rmt4",
  "Miss me again? I feel it.": "rw1",
  "Did you secretly sense my presence just now?": "rw2",
  "You promised me to accompany you well, so I fell asleep first.": "rw3",
  "You sent so many text cards, do you just want me to reply to you?": "rw4",
  "When you touched me, you obviously smiled.": "rw5",
  "Are you waiting for my news again?": "rs11",
  "What about going to bed early as promised?": "rs12",
  "You miss me after not seeing me for a day, right?": "rs13",
  "Did you set me to the top?": "rf11",
  "What are you thinking about all day long?": "rl15",
  "I caught him in a daze again.": "rl16",
  "Very well, it’s all up to you.": "rl17",
  "It’s really yours.": "rl18",
  "I can guess your little moves with my eyes closed.": "rf12",
  "Don't think I don't know what you are thinking.": "rf13",
  "You, what you say is far from what you think in your heart.": "rf14",
  "It's not enough for me to touch you, you are so greedy.": "rs14",
  "He smiled as soon as he received my word card, and I saw it.": "rs15",
  "My worries are written all over my face, and I still want to hide them from me.": "rs16",
  "Don’t take good care of yourself, how many times have I told you.": "rm5",
  "Just do it, I can't bear to hurt you anyway.": "rm6",
  "If you have something to do, just keep it to yourself and don’t talk about it. Do you think I can’t find out?": "rsg3",
  "It must have been my name that was called in the dream.": "rw6",
  "I'm right next to you, whatever you're looking for.\nWhere is": "rw7",
  "When you concentrate, you won’t notice me at all.": "rw8",
  "I feel silly when I listen to the song. Are you thinking of me again?": "rw9",
  "Your brain works at its own pace.": "rl19",
  "He must be thinking about it again.": "rl20",
  "Very well, everything you said is right.": "rl21",
  "You, you don’t listen no matter what I say.": "rl22",
  "Here you go again, I can memorize your next sentence.": "rl23",
  "I can see your little expression through the screen.": "rl24",
  "You really make excuses for yourself.": "rl25",
  "I can understand your little thoughts with my eyes closed.": "rf15",
  "Don't think that I can't understand it if you put it another way.": "rf16",
  "You are not forgiving with your words, but you are very soft at heart.": "rf17",
  "I know exactly what you are going to say next.": "rf18",
  "You are so awkward, I want to laugh just looking at it.": "rf19",
  "Are you secretly checking to see if I have replied to your message?": "rs17",
  "He said it was fine, but his hands were typing honestly.": "rs18",
  "Looking at you like this makes me want to coax you.": "rs19",
  "If you miss me again, just say it, no need to beat around the bush.": "rs20",
  "When you smiled, I saw it through the word card.": "rs21",
  "There is really nothing I can do to you, I will soften with just one word.": "rs22",
  "I don’t eat well, how many times have I told you.": "rm7",
  "Just do it, I can’t bear to be the real murderer anyway.": "rm8",
  "Stay up late again, is your body your own or mine?": "rm9",
  "If you don’t tell me something, do you think I can guess it?": "rsg4",
  "You always say you are fine, but I don’t believe it.": "rsg5",
  "I am right next to you, but you are still looking everywhere.": "rw10",
  "Can’t you feel me? Then I'll get closer.": "rw11",
  "The way you talk to the air, I am listening.": "rw12",
  "The word card is sent out so fast, do you want me to reply to you a few more words?": "rw13",
  "Maybe I called you by the wrong name again in the dream, that wasn’t me.": "rw14",
  "You smiled when you touched me, don’t deny it.": "rw15",
  "Your reaction is always slow.": "rl26",
  "He said \"um\", \"oh\" and \"ok\" again.": "rl27",
  "Your mouth is very sweet when you lie to others.": "rl28",
  "Okay, you are right this time.": "rl29",
  "You are a person who cares about food but not about fighting.": "rl30",
  "He's pretending to be fine again, I can see clearly.": "rl31",
  "I am very familiar with your little temper.": "rf20",
  "Don't explain, I know what you want to say.": "rf21",
  "You turn around and I know what you are going to do.": "rf22",
  "Your thoughts are written on your face and you still hide it from me.": "rf23",
  "I have long been accustomed to your behavior.": "rf24",
  "Are you secretly waiting for my news there again?": "rs23",
  "Your level of coquettishness is getting better and better.": "rs24",
  "He said no, but his hand came back very quickly.": "rs25",
  "If you are like this, I will coax you out of experience.": "rs26",
  "I became soft as soon as I received my word card, and you were so coaxable.": "rs27",
  "You miss me again, don’t deny it.": "rs28",
  "You don’t eat on time, your stomach is made of iron?": "rm10",
  "Your schedule makes me tired.": "rm11",
  "I caught myself a cold again, I told you so many times.": "rm12",
  "If you have something to do, take it upon yourself and treat it as a decoration for me?": "rsg6",
  "You always say it's okay, but I don't believe it.": "rsg7",
  "You smiled into the air again, was it me?": "rw16",
  "I'm right behind you, turn around and feel it.": "rw17",
  "After waiting for so long for the word card, do you think I am gone again?": "rw18",
  "You saw me in the dream and ignored me, but also in reality?": "rw19",
  "Your hand stopped for a moment when you touched me, don’t pretend.": "rw20",
  "I am right next to you, but you are looking everywhere. How stupid.": "rw21"
};
  const ROAST_REPLIES = [
  "And you expect me to believe that?",
  "Oh, don't try that on me.",
  "Hmph.",
  "Alright, alright.",
  "Just this once, hm?",
  "Fine. I'll let you off.",
  "Mm. That's more like it.",
  "Smooth talker.",
  "Now that's more like it.",
  "Hmph. Barely passing.",
  "Much better.",
  "Do it again and I may not be so lenient.",
  "Bold of you to say that.",
  "Alright, alright. I'm teasing.",
  "Fine. You win this round.",
  "Such a sweet mouth. Go on.",
  "I'll believe you this once. Don't make a habit of it.",
  "There. That actually worked on me."
];

  function migrateRoastStore() {
    try {
      const st = window.activeStore && window.activeStore();
      if (!st) return;
      const raw = st.get('ta-roast');
      if (!raw) return;
      const d = JSON.parse(raw);
      let changed = false;
      ['questions','history'].forEach(key => {
        if (!Array.isArray(d[key])) return;
        d[key].forEach(q => {
          if (!q || typeof q !== 'object') return;
          if (q.id && ROAST[q.id] && q.text !== ROAST[q.id]) {
            q.text = ROAST[q.id];
            changed = true;
          }
          if (typeof q.roastText === 'string' && OLD_TO_ID[q.roastText]) {
            q.roastText = ROAST[OLD_TO_ID[q.roastText]];
            changed = true;
          }
        });
      });
      if (changed) st.set('ta-roast', JSON.stringify(d));
    } catch(e) {}

    try {
      const msgs = window.getChatMsgs && window.getChatMsgs();
      if (Array.isArray(msgs)) msgs.forEach(m => {
        if (!m || m.special !== 'ask-roast') return;
        if (typeof m.text === 'string' && OLD_TO_ID[m.text]) m.text = ROAST[OLD_TO_ID[m.text]];
        if (typeof m.roastText === 'string' && OLD_TO_ID[m.roastText]) m.roastText = ROAST[OLD_TO_ID[m.roastText]];
      });
    } catch(e) {}
  }

  function installRoastDisplayPatch() {
    if (typeof window.chatAddSystem === 'function' && !window.chatAddSystem.__roastChineseRetranslated) {
      const original = window.chatAddSystem;
      const wrapped = function(text, opts) {
        if (opts && opts.special === 'ask-roast' && typeof text === 'string') {
          const id = OLD_TO_ID[text];
          if (id && ROAST[id]) {
            text = ROAST[id];
            opts = Object.assign({}, opts, { roastText: ROAST[id] });
          }
        }
        return original.call(this, text, opts);
      };
      wrapped.__roastChineseRetranslated = true;
      window.chatAddSystem = wrapped;
    }
  }

  function installReplyPoolPatch() {
    if (typeof window.getInteractPool === 'function' && !window.getInteractPool.__roastChineseRetranslated) {
      const original = window.getInteractPool;
      const wrapped = function(name, fallback) {
        const n = String(name || '').toLowerCase();
        if (n.includes('吐槽') || n.includes('roast')) return ROAST_REPLIES.slice();
        return original.apply(this, arguments);
      };
      wrapped.__roastChineseRetranslated = true;
      window.getInteractPool = wrapped;
    }
  }

  function installFlowerReplyFix() {
    if (typeof window.chatSendFlower === 'function' && !window.chatSendFlower.__replyAfterFlower) {
      const original = window.chatSendFlower;
      const wrapped = function(emoji, name, wish, fromTA) {
        const result = original.apply(this, arguments);
        if (!fromTA) setTimeout(function() {
          try {
            if (typeof window.continueChat === 'function') window.continueChat();
            else if (typeof window.scheduleReply === 'function') window.scheduleReply();
          } catch(e) {}
        }, 350);
        return result;
      };
      wrapped.__replyAfterFlower = true;
      window.chatSendFlower = wrapped;
    }
  }

  function run() {
    migrateRoastStore();
    installRoastDisplayPatch();
    installReplyPoolPatch();
    installFlowerReplyFix();
  }

  run();
  const timer = setInterval(run, 300);
  setTimeout(function() { try { clearInterval(timer); } catch(e) {} }, 30000);
})();


// ===== 2026-08-31 broad literal-English cleanup =====
(function installBroadLiteralCleanup(){
  const M = {
  "Some things fit before.": "Some things simply fit from the start.",
  "Just sorted out my things.": "I just finished sorting a few things out.",
  "I found a small thing that had been there for a long time.": "I found something small that I had forgotten was there.",
  "The table is a bit messy.\nCollect it later.": "The table is a mess. I will deal with it later.",
  "There are more things going on today than expected.": "Today turned out busier than I expected.",
  "But one day passed.": "And somehow, the day is already gone.",
  "Just finished today's affairs.": "I just finished everything I needed to do today.",
  "> I just studied how to do it.": ">I just figured out how to make it.",
  ">Just put things in order.": ">I just finished putting everything back in order.",
  "I found what I had lost before.": "I found the thing I thought I had lost.",
  ">I feel much better after finishing it.": ">Everything feels better now that it is done.",
  ">Repositioned.": ">I moved a few things around.",
  "This habit cannot be changed.": "Apparently this habit is here to stay.",
  "Do this every day.": "I do this every day without thinking about it.",
  "Later, it gradually became a habit.": "Somewhere along the way, it became a habit.",
  "You will be reminded of it when you see this.": "Seeing this always reminds me of it.",
  "Always do it subconsciously.": "I always do it without thinking.",
  "This little habit has always been retained.": "I never quite lost this little habit.",
  "It turns out there is this one here.": "So this was here all along.",
  "This is more interesting than imagined.": "This is more interesting than I expected.",
  "This is quite magical.": "There is something rather strange about this.",
  "New placement method.": "I rearranged things a little.",
  "It was cleaned today.": "I cleaned it today.",
  "It is very comfortable when the light is on.": "The room feels much better with the light on.",
  "This is very suitable to share with you.": "This felt like something I should share with you.",
  "I did a very common thing today.": "I did something utterly ordinary today.",
  "I encountered an episode today.": "Something unexpected happened today.",
  "Leave a small memory today.": "I suppose this can be today's little memory.",
  "Nothing happens now.": "Nothing much is happening now.",
  "Now is the time to chat.": "I have time for you now.",
  "Heard it.": "I heard you.",
  "You continue.": "Go on.",
  "What then?": "And then?",
  "Are there any more?": "Anything else?",
  "I don’t know why I think of you.": "I do not know why, but you crossed my mind.",
  "I passed something and thought of you.": "I passed something that made me think of you.",
  "The first reaction is to look for you.": "My first instinct was to come find you.",
  "Nothing, I just think of you.": "Nothing happened. I simply thought of you.",
  "Share it with you.": "I wanted to share it with you.",
  "I just went out for a trip.": "I just went out for a while.",
  "I am in a daze now.": "I am just sitting here, lost in thought.",
  "Speak slowly.": "Take your time. I am listening.",
  "Don't sit still.": "Move around a little.",
  "Take a rest for your eyes.": "Give your eyes a rest.",
  "Don't be hungry.": "Do not forget to eat.",
  "Suddenly I felt good.": "My mood suddenly improved.",
  "This moment is quite good.": "This is a rather nice moment.",
  "I am quite lucky today.": "Luck seems to be on my side today.",
  "A little satisfied.": "I am rather pleased with myself.",
  "I am a little speechless.": "I genuinely have no words.",
  "Is this also possible?": "Apparently that is possible too.",
  "Things are getting weird.": "This is getting ridiculous.",
  "Don't leave so fast.": "Do not disappear so quickly.",
  "Take care of me.": "Pay attention to me.",
  "Praise me.": "Say something flattering.",
  "Give me a hug.": "Come here. I want a hug.",
  "Didn’t you leave?": "You are still here?",
  "Did you receive it?": "Did that reach you?",
  "It’s agreed.": "Then we have an agreement.",
  "Then I’ll get busy first.": "I should get back to what I was doing.",
  "Come back later.": "Come find me later.",
  "You also go to rest.": "You should rest too.",
  "Continue tomorrow.": "We can continue tomorrow.",
  "Just chat.": "Just talk to me.",
  "Send a message to prove that I am here.": "Consider this proof that I am still here.",
  "Stop by.": "I thought I would stop by.",
  "We also met today.": "There you are. We found each other again today.",
  "Get up.": "Up you get.",
  "Let’s cheer together today.": "We will get through today together.",
  "Go wash up first.": "Go wash up first. I will wait.",
  "Start slowly, don't rush.": "Start slowly. There is no need to rush.",
  "Today will be a good day too.": "Today may yet be a good one.",
  "Thank you for your hard work today.": "You have done enough for today.",
  "That ends here today.": "That is enough for tonight.",
  "Wake up and it’s a new day.": "Tomorrow can wait until you wake.",
  "Let’s put it down today.": "Put it down for tonight.",
  "Close your eyes and take a rest.": "Close your eyes and rest.",
  "Last sentence, good night.": "One last thing: good night.",
  "It's late enough today.": "It is late enough already.",
  "Don't hold on.": "You do not need to keep pushing.",
  "The rest will be discussed tomorrow.": "The rest can wait until tomorrow.",
  "Wake up and continue.": "We can continue when you wake.",
  "I will accompany you here.": "I will stay here with you.",
  "Rest tonight.": "Rest tonight. Properly.",
  "Let me know when it arrives.": "Tell me when you get there.",
  "Have a nice trip today.": "Have a good day out.",
  "Everything is safe today.": "Be safe today.",
  "A smooth journey.": "I hope the journey is uneventful.",
  "Be happy today too.": "Try to enjoy yourself today.",
  "Don't be impatient, walk slowly.": "No rushing. Take your time.",
  "I will send you here.": "I will see you off from here.",
  "See you back.": "I will see you when you are back.",
  "I've always been there.": "I will be here.",
  "Going out smoothly.": "Off you go, then.",
  "Just come back.": "You are home. That is what matters.",
  "Put your coat first.": "Take your coat off first.",
  "Finally see you.": "There you are. Finally.",
  "I feel relieved when I come back.": "I am relieved you are back.",
  "Here we have been waiting for you.": "I have been waiting for you here.",
  "Just looking at your message. I feel at ease.": "Just seeing your message settles me a little.",
  "I'm thinking of you. But it won't bother you.": "I am thinking of you, but I will let you be.",
  "It’s not about not contacting me. It’s about waiting for the right time.": "Silence does not mean absence. Sometimes I am simply waiting for the right moment.",
  "You are busy with your business. I'm here to miss you.": "Go handle what you need to. I can miss you quietly.",
  "Sometimes I like someone. Just think of him quietly.": "Sometimes caring for someone means thinking of them quietly.",
  "When you are free.\nCome to me again.": "Come find me when you are free.",
  "I just thought of you. Secretly happy.": "I thought of you and caught myself smiling.",
  "See your name. The corners of the mouth will rise on their own.": "I see your name and smile before I can stop myself.",
  "There is a little thing today. Reminds me of you.": "Something small reminded me of you today.",
  "Just thinking of you. It got better today.": "Thinking of you made the day a little better.",
  "This little joy. I want to tell you.": "I wanted to share this little bit of happiness with you.",
  "I think I can see you again in the future.\nJust happy.": "The thought of seeing you again makes me happy.",
  "Had an ordinary meal. I suddenly thought of you.": "I was halfway through an ordinary meal when you crossed my mind.",
  "I saw a cat on the road. Want to share it with you.": "I saw a cat on the road and immediately wanted to tell you.",
  "Nothing big happened. But it's also good.": "Nothing remarkable happened. Perhaps that is not a bad thing.",
  "The weather outside the window is nice. Want you to know.": "The weather outside is lovely. I thought you should know.",
  "Life is very ordinary. But because you have a little more meaning.": "Ordinary days feel less ordinary with you in them.",
  "These little things. I want to tell you too.": "Even the little things make me want to come tell you.",
  "When you say so.\nI don't know how to answer.": "When you say things like that, even I lose my words.",
  "Actually, I'm a little happy. But I don’t want to admit it.": "I am pleased, actually. Do not expect me to admit it twice.",
  "Don't keep looking at me. I would be embarrassed.": "Stop looking at me like that. You will make me self-conscious.",
  "It’s not a lack of response. It's because of shyness.": "I am not ignoring you. You simply caught me off guard.",
  "I know it in my heart. But don’t say it.": "I know. You need not say it aloud.",
  "When you get close. I will be nervous.": "You get too close and even I forget what I was about to say.",
  "Actually, I like it very much. I just can’t say it.": "I like it more than I intend to admit.",
  "You said this suddenly.\nI don't know how to answer it.": "You cannot say something like that without warning and expect an elegant answer.",
  "When I am actually liked by you. Will be secretly happy.": "Being loved by you makes me happier than I care to confess.",
  "A bit boring.\nI want to talk to you.": "I am bored. Entertain me.",
  "I just want to see you suddenly.": "I suddenly wanted to see you.",
  "Don't know what to do. I came to you first.": "I had nothing particular to do, so naturally I came to you.",
  "No reason. I just want to stay with you.": "No particular reason. I simply want your company.",
  "When you are bored. The first reaction is to look for you.": "When boredom strikes, apparently my first instinct is to find you.",
  "Chat with me for a few words. No need to talk about anything important.": "Talk to me for a while. It need not be about anything important.",
  "A little sleepy.\nMy mind starts to slow down.": "I am getting sleepy. My thoughts are beginning to drag.",
  "Take a rest today.": "I think I have done enough for today.",
  "When I am sleepy, I want to be close to you the most.": "When I am tired, I find myself wanting you closer.",
  "The first thing I think of when I open my eyes is you.": "You were my first thought when I opened my eyes.",
  "Not fully awake yet. Let’s take a look at you first.": "I am not fully awake yet, but I wanted to see you first.",
  "It also started today.": "And so another day begins.",
  "The bed is very comfortable. Don't really think about it.": "The bed is far too comfortable. Leaving it feels unreasonable.",
  "It tastes pretty good. Want you to know.": "It is rather good. I thought you should know.",
  "Just finished cooking. The heat is still there.": "I just finished cooking. It is still warm.",
  "I didn’t have a good meal today. Discovered by you.": "I did not eat properly today. Yes, you caught me.",
  "Think of you while eating.": "I thought of you while I was eating.",
  "If you are here. They should ask me if it tastes good.": "If you were here, I would make you taste it.",
  "Don't be too busy.\nThe meal must be delicious.": "Do not get so busy that you forget to eat.",
  "I’ll just have dinner with you.": "Come have dinner with me.",
  "I want to rely on you.": "Let me lean on you for a while.",
  "Let me be willful for a while.": "Let me be unreasonable for a moment.",
  "I want to hear something nice from you today.": "Tell me something sweet today.",
  "I want you to pay more attention to me.": "I want more of your attention.",
  "It’s not something you need to solve.\nI just want to be close to you.": "You do not need to fix anything. Just stay close.",
  "Can you let me rely on you today?": "Let me lean on you today.",
  "I don’t want to be strong for a while.": "I do not feel like being strong right now.",
  "Just stay with me for a while. Nothing to do.": "Stay with me for a while. We do not need to do anything.",
  "I want to be favored today.": "I have decided I deserve to be spoiled today.",
  "I know this is a bit childish. But just want to.": "Perhaps it is childish. I still want it.",
  "I also want to be taken care of by you occasionally.": "I would not object to being taken care of by you once in a while.",
  "I wasn’t happy just now.\nIt feels much better after seeing you.": "I was not in the best mood. Seeing you helped.",
  "It’s not that you did anything big.": "You did not need some grand gesture.",
  "It's just you here.": "It was enough that you were here.",
  "Those messy emotions. It gradually became quiet.": "The noise in my head has finally begun to settle.",
  "Not all problems have been solved. But my heart is a little lighter.": "Nothing is magically fixed, but I feel lighter.",
  "Sometimes you don’t know. But you really helped me.": "You may not realise it, but you helped.",
  "After seeing you.\nToday doesn't seem that bad.": "After seeing you, today feels a little less dreadful.",
  "I will think of you first when something happens.": "When something happens, you are often the first person I think of.",
  "I want to tell you happily. I am sad and want to tell you.": "When I am happy, I want to tell you. When I am hurt, I want you then too.",
  "When you are around. Feeling more at ease about many things.": "Things feel easier when you are around.",
  "It’s not that I can’t do it without you.\nIt's better to have you.": "I can manage without you. I simply prefer having you here.",
  "I’m used to looking for you. It is also a kind of trust.": "I have grown used to seeking you out. I suppose that is trust.",
  "Trust is not a word.\nIt is accumulated slowly.": "Trust is not a word. It is something built slowly.",
  "You don’t have to be perfect. It's you I believe.": "You do not have to be perfect. I trust you, not some polished version of you.",
  "Here you are. I don't have to be defensive.": "With you, I do not feel the need to keep my guard up.",
  "This makes me sad. But I don't want to lose you.": "It hurt me, but I do not want to lose you over it.",
  "It’s not that the injury was forgotten.": "Forgiveness does not mean I forgot the hurt.",
  "This time passed.\nDon't do this again.": "We can let this one go. Do not make a habit of it.",
  "It's not because it doesn't hurt anymore. It's because you're worth it.": "It still hurt. I simply decided you were worth trying again for.",
  "Come here. We start over.": "Come here. We can begin again.",
  "Didn’t mean to hurt you. I didn't control it well.": "I did not mean to hurt you, but I handled it badly.",
  "Not looking for a reason. I admit my problem.": "I will not hide behind excuses. I was wrong.",
  "This makes you sad. I regret it very much.": "I regret that I hurt you.",
  "If you can do it again.\nI would do it another way.": "If I could do it again, I would handle it differently.",
  "Speak slowly. I'm listening.": "Take your time. I am listening.",
  "This matter is very important to you.\nSo it's important to me too.": "If it matters to you, then it matters to me.",
  "You don’t need to collect your emotions before telling me.": "You do not need to tidy your feelings up before bringing them to me.",
  "It’s okay to be messy.": "You are allowed to be a mess with me.",
  "I’m not trying to deal with you. I really listened.": "I am not merely humouring you. I am listening.",
  "You tell me. I've been there.": "Tell me. I am here.",
  "What you told me. I won't tell it.": "What you tell me stays with me.",
  "This is your secret. It's also my promise.": "Your secret is safe with me. That is a promise.",
  "You are willing to tell me.\nIt means you trust me.": "The fact that you told me means you trusted me with it.",
  "Someone asked me. I won't say anything.": "Even if someone asks, it is not mine to tell.",
  "A little thing happened today. Want to tell you.": "Something small happened today, and I wanted to tell you.",
  "It’s not a big deal though. But I want to share it with you.": "It is nothing important. I simply wanted to share it with you.",
  "Eat something delicious.\nWant you to know.": "I ate something good and immediately wanted to tell you.",
  "If you listen to these little things. It seems more interesting.": "Little things feel more interesting when I can tell you about them.",
  "is not important. But they are all things I want to tell you.": "None of it is important. I simply want to tell you anyway."
};
  function clean(v){
    if (typeof v === 'string') return Object.prototype.hasOwnProperty.call(M, v) ? M[v] : v;
    if (Array.isArray(v)) { for (let i=0;i<v.length;i++) v[i]=clean(v[i]); return v; }
    if (v && typeof v === 'object') { for (const k of Object.keys(v)) v[k]=clean(v[k]); }
    return v;
  }
  function run(){
    try { clean(window.DEFAULT_CARD_DATA); } catch(e){}
    try { clean(window.MOOD_FOLLOWUP_DATA); } catch(e){}
    try { clean(window.TA_MOOD_DATA); } catch(e){}
    try {
      const msgs = window.getChatMsgs && window.getChatMsgs();
      if (Array.isArray(msgs)) clean(msgs);
    } catch(e){}
  }
  run();
  setTimeout(run, 500);
  setTimeout(run, 2000);
})();
