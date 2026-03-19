export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
}

export interface SubModule {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  content: string;
  quiz: QuizQuestion[];
}

export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  videoUrl: string; // placeholder URL
  content: string;
  order: number;
  quiz: QuizQuestion[];
  subModules?: SubModule[];
  showLogo?: boolean;
}

export const TRAINING_MODULES: TrainingModule[] = [
  {
    id: "welcome",
    title: "Welcome to Heritage Windows",
    description: "A brief company overview — our mission, products, and what sets us apart.",
    videoUrl: "",
    showLogo: true,
    content: `Welcome to the Heritage Windows family! We're thrilled to have you join our team of dedicated sales professionals.\n\nAt Heritage Windows, we believe every home deserves beautiful, energy-efficient windows and doors. Since our founding, we've helped thousands of homeowners transform their living spaces.\n\nIn this onboarding program, you'll learn everything you need to be successful at Heritage Windows. Each module builds on the last, so take your time and absorb the material.`,
    order: 1,
    quiz: [
      {
        id: "w1",
        question: "What is Heritage Windows' primary focus?",
        options: [
          "Selling the cheapest windows possible",
          "Providing beautiful, energy-efficient windows and doors",
          "Only commercial installations",
          "Online-only sales",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "about-your-position",
    title: "About Your Position",
    description: "Learn about your weekly schedule, the X system, and time-off policies.",
    videoUrl: "",
    content: `This module covers the key expectations and policies for your role as a Knocker at Heritage Windows. Read through each section carefully — you'll be quizzed on the details.`,
    order: 2,
    quiz: [],
    subModules: [
      {
        id: "weekly-schedule",
        title: "Weekly Schedule",
        description: "Daily meeting times, knocking sessions, and weekly expectations.",
        videoUrl: "",
        content: `At Heritage Windows, we begin every day with a meeting at your local office.\n\n**Meeting Times:**\n• Monday–Friday meetings begin at 9:30 AM\n• Saturday meetings begin at 9:00 AM\n\n**Daily Knocking Sessions:**\nWeekday knocking hours are set with a 2-hour session immediately after the morning meeting, then a break. Following the break comes a 3-hour knocking session in the afternoon. These hours will be dependent on daylight, so please make sure you are aware of the hours your Market Owner has set for that time of year.\n\n**Weekly Expectations:**\nThe schedule of a Knocker requires five days of work per week. It is expected that Knockers will let their local Market Owner know what day they will be taking off the night before, at the latest. If possible, it is helpful for your Market Owner to know at the beginning of the week.`,
        quiz: [
          {
            id: "ws1",
            question: "What time do Monday–Friday meetings begin?",
            options: ["9:00 AM", "9:30 AM", "10:00 AM", "8:30 AM"],
            correctAnswer: 1,
          },
          {
            id: "ws2",
            question: "How many days per week is a Knocker expected to work?",
            options: ["Four", "Five", "Six", "Seven"],
            correctAnswer: 1,
          },
          {
            id: "ws3",
            question: "When should you notify your Market Owner about your day off?",
            options: [
              "The morning of your day off",
              "The night before at the latest",
              "Two weeks in advance",
              "You don't need to notify anyone",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: "x-system",
        title: "X's — Accountability System",
        description: "Understand the check and X system and how it affects your deal percentage.",
        videoUrl: "https://www.youtube.com/embed/RQ2aTRa3iPY",
        content: `Heritage Windows uses an accountability system based on checks (✓) and X's to ensure everyone is meeting expectations.\n\n**What earns an X:**\n• 2 checks = 1 X\n• Missing a morning meeting\n• Less than 40 conversations in a day\n• Not working the full 5 hours of knocking\n\n**What earns a Check (✓):**\n• Being late to the morning meeting\n• Being late to the second (afternoon) session\n\n**Consequences:**\nWhen you accumulate 2 X's, your deal percentage will drop to 5%. You will remain at 5% until you work the schedule for two weeks without getting another check or X.\n\nIf you are able to work those two weeks without getting another check or X, your previous checks and X's will be removed.`,
        quiz: [
          {
            id: "xs1",
            question: "How many checks equal one X?",
            options: ["1", "2", "3", "4"],
            correctAnswer: 1,
          },
          {
            id: "xs2",
            question: "What happens when you accumulate 2 X's?",
            options: [
              "You receive a verbal warning",
              "Your deal percentage drops to 5%",
              "You are placed on a performance plan",
              "Nothing happens until 3 X's",
            ],
            correctAnswer: 1,
          },
          {
            id: "xs3",
            question: "How do you get your checks and X's removed?",
            options: [
              "Ask your manager to remove them",
              "Work two weeks without any new checks or X's",
              "They reset automatically every month",
              "Complete an extra training module",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: "time-off",
        title: "Time Off",
        description: "Time-off policies and how to request days off.",
        videoUrl: "",
        content: `**Time off can be worked out privately with your Market Owner in advance.**\n\nThe key rule: A 2-week notice must be given to your Market Owner prior to booking a trip.\n\nPlanning ahead and communicating early ensures your team can adjust and coverage is maintained. Always speak directly with your Market Owner when planning any extended time away.`,
        quiz: [
          {
            id: "to1",
            question: "How much notice must you give your Market Owner before booking a trip?",
            options: ["1 week", "2 weeks", "1 month", "No notice needed"],
            correctAnswer: 1,
          },
          {
            id: "to2",
            question: "Who should you coordinate time off with?",
            options: [
              "HR department",
              "Your Market Owner",
              "The company CEO",
              "Any team member",
            ],
            correctAnswer: 1,
          },
        ],
      },
    ],
  },
  {
    id: "three-keys",
    title: "Three Keys for Success",
    description: "The 3 controllable factors that drive your success as a Knocker.",
    videoUrl: "https://www.youtube.com/embed/_OwcwgpMXF4",
    content: `For maximum success, there are 3 key factors within your control. When all three are being met, a knocker should find that an average of about 2 out of every 7 appointments close — assuming there are zero Cancels At Door (CADs). Deviations from this will sometimes occur, but should be analyzed — the reasons can be very instructive.\n\n**If you find that the first two keys are being met but you are not finding success, point 3 (attitude) is the problem.**`,
    order: 3,
    quiz: [],
    subModules: [
      {
        id: "key-conversations",
        title: "Key 1: 50 Conversations a Day",
        description: "Why hitting your daily conversation target is non-negotiable.",
        videoUrl: "",
        content: `**Having an average of 50 conversations a day. (NEVER less than 40).**\n\n• It is understandable that some days, fewer people will answer the door than others. However, this should never account for more than 20% variance. (Example: Attaining 40-45 conversations due to less people being home is reasonable, but attaining 28 conversations for that reason is not.)\n\n• Five hours is a sample size for success. Bad luck regarding people being home should not persist over that long of a sample.\n\n• If you truly find yourself in a neighborhood where most of the houses are being rented or are vacant, you must still take ownership for switching neighborhoods before too much of the day has passed.`,
        quiz: [
          {
            id: "tk1",
            question: "What is the minimum number of conversations you should have per day?",
            options: ["30", "35", "40", "50"],
            correctAnswer: 2,
          },
          {
            id: "tk3",
            question: "If most houses in your neighborhood are vacant, what should you do?",
            options: [
              "Call it a day early",
              "Wait for people to come home",
              "Take ownership and switch neighborhoods",
              "Report it and stop knocking",
            ],
            correctAnswer: 2,
          },
        ],
      },
      {
        id: "key-script",
        title: "Key 2: Being 100% On Script",
        description: "Why staying on script is essential and how to self-correct.",
        videoUrl: "",
        content: `**Being 100% on script:**\n\n• The first step to success in this role is memorizing the script. This requires time and consistent effort. The expectation is that you have the script fully memorized before your first day of work, so you can position yourself to get your first sale within your first week.\n\n• Knockers must be humble enough to check themselves, even when they believe they are on script. Script deviation happens a little bit at a time.\n\n• Staying on script tells the homeowner who you are, why you're there, and what they should expect from the appointment.`,
        quiz: [
          {
            id: "tk4",
            question: "When should a knocker have the script memorized by?",
            options: [
              "After the first week of work",
              "Before their first day of work",
              "Within the first month",
              "It doesn't need to be fully memorized",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: "key-attitude",
        title: "Key 3: Having a Good Attitude",
        description: "The least quantifiable but most important key to success.",
        videoUrl: "",
        content: `**Having a good attitude:**\n\n• While the least quantifiable, it is one of the most important.\n\n• This involves your nonverbal and paraverbal communication. Ensuring that you not only say the script correctly so the customer fully understands, but delivering it in a way that promotes confidence and a positive attitude.\n\n• Your belief in the product, company, and yourself will show. Your ability to respond to objections and set the appointment with the right expectations will improve over time.\n\n**If you find that the first two keys are being met but you are not finding success, attitude is the problem.**`,
        quiz: [
          {
            id: "tk6",
            question: "If Keys 1 and 2 are being met but you're not finding success, what is the likely problem?",
            options: [
              "Your territory",
              "The product",
              "Your attitude",
              "The time of day",
            ],
            correctAnswer: 2,
          },
          {
            id: "tk7",
            question: "What does 'good attitude' involve beyond saying the right words?",
            options: [
              "Speaking louder",
              "Nonverbal and paraverbal communication that promotes confidence",
              "Smiling at all times no matter what",
              "Memorizing more scripts",
            ],
            correctAnswer: 1,
          },
        ],
      },
    ],
  },
  {
    id: "importance-of-the-script",
    title: "The Importance of the Script",
    description: "Why sticking to the script creates consistency, clarity, and better results.",
    videoUrl: "",
    content: `The script creates consistency in the field. It helps you clearly communicate who you are, why you're there, and what the homeowner should expect next. Staying on script also makes it easier to diagnose performance issues and improve your results over time.\n\nWhen reps drift off script, they often lose structure, confidence, and control of the conversation. Periodic course correction keeps your message clean and repeatable.`,
    order: 4,
    quiz: [
      {
        id: "is1",
        question: "Why is staying on script important?",
        options: [
          "It creates consistency and clarity in conversations",
          "It makes every conversation longer",
          "It removes the need to listen",
          "It only matters for new reps",
        ],
        correctAnswer: 0,
      },
      {
        id: "is2",
        question: "What often happens when reps drift off script?",
        options: [
          "They gain more structure automatically",
          "They usually improve without review",
          "They lose clarity and control of the conversation",
          "Nothing changes",
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "tools-systems",
    title: "Tools and Systems",
    description: "Get familiar with the technology and tools you'll use daily.",
    videoUrl: "",
    content: `Heritage Windows provides you with all the tools you need to succeed. This module covers the three core platforms you'll use every day. Complete each sub-section below to finish this module.`,
    order: 5,
    quiz: [],
    subModules: [
      {
        id: "salesrabbit",
        title: "SalesRabbit — Manage Leads",
        description: "Learn how to use SalesRabbit to track and manage your leads in the field.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: `SalesRabbit is your primary tool for managing leads in the field.\n\nKey Features:\n• **Lead Tracking** — Pin leads on a map as you canvass neighborhoods\n• **Status Updates** — Mark leads as Not Home, Not Interested, Callback, or Appointment Set\n• **Notes & Photos** — Add details about each home and homeowner\n• **Territory Management** — See which areas have been covered and which are fresh\n\nBest Practices:\n• Log every door knock immediately — don't wait until end of day\n• Use the color-coded pins to quickly see your territory status\n• Set callback reminders for interested homeowners\n• Upload photos of windows that need replacement to reference during follow-ups`,
        quiz: [
          {
            id: "sr1",
            question: "What is the primary purpose of SalesRabbit at Heritage Windows?",
            options: [
              "Scheduling appointments",
              "Team communication",
              "Managing and tracking leads in the field",
              "Generating invoices",
            ],
            correctAnswer: 2,
          },
          {
            id: "sr2",
            question: "When should you log a door knock in SalesRabbit?",
            options: [
              "At the end of the day",
              "Immediately after each knock",
              "Once a week",
              "Only if they're interested",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: "trello",
        title: "Trello — Schedule Appointments",
        description: "Learn how to use Trello boards to manage and schedule your appointments.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: `Trello is how we manage the appointment pipeline from booking to completion.\n\nBoard Structure:\n• **New Appointments** — Freshly booked appointments land here\n• **Confirmed** — Appointments confirmed with the homeowner (24hr rule)\n• **Completed** — Successfully run appointments\n• **Rescheduled** — Appointments that need to be rebooked\n\nHow to Use:\n1. Create a card for each new appointment with the homeowner's name and address\n2. Add the appointment date/time as the due date\n3. Attach any relevant notes from SalesRabbit\n4. Move the card through the pipeline as the status changes\n5. Add outcome notes after each appointment\n\nTips:\n• Check your Trello board every morning to review the day's schedule\n• Use labels for appointment type (callback, referral, company lead)\n• @ mention your manager when an appointment is set`,
        quiz: [
          {
            id: "tr1",
            question: "What is the correct pipeline order in Trello?",
            options: [
              "Confirmed → New → Completed",
              "New Appointments → Confirmed → Completed → Rescheduled",
              "Completed → New → Rescheduled",
              "There is no set order",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: "voxer",
        title: "Voxer — Team Chat",
        description: "Learn how to use Voxer for real-time team communication.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        content: `Voxer is our team communication platform — think of it as a walkie-talkie for the modern sales team.\n\nWhy Voxer:\n• **Instant voice messages** — Faster than typing, more personal than text\n• **Group channels** — Stay connected with your team and manager\n• **Listen on your schedule** — Messages wait for you, no need to answer live\n\nChannels You'll Join:\n• **Your Team Channel** — Daily updates, wins, and questions with your direct team\n• **Company Announcements** — Important updates from leadership\n• **Training Support** — Ask questions and get help during onboarding\n\nEtiquette:\n• Keep messages concise — under 30 seconds for voice messages\n• Use text for quick updates, voice for detailed questions\n• Celebrate team wins! Share your appointments and closes\n• Respond to your manager's messages within 2 hours during work hours\n• Mute channels outside of work hours to maintain work-life balance\n\n**Start/Stop Rule:**\n• At the **start** of each knocking session, send "Start" in the Voxer chat\n• At the **end** of each knocking session, send "Stop" in the Voxer chat\n• This lets your manager know when you're actively in the field`,
        quiz: [
          {
            id: "vx1",
            question: "What type of communication tool is Voxer?",
            options: [
              "Email platform",
              "Video conferencing tool",
              "Voice and text messaging (walkie-talkie style)",
              "Project management software",
            ],
            correctAnswer: 2,
          },
          {
            id: "vx2",
            question: "What do you need to do at the start and end of each knocking session?",
            options: [
              "Call your manager",
              "Send a 'Start' or 'Stop' message in the Voxer chat",
              "Log in and out of SalesRabbit",
              "Send an email to your team",
            ],
            correctAnswer: 1,
          },
        ],
      },
    ],
  },
  {
    id: "four-criteria",
    title: "The 4 Qualifying Points",
    description: "Understand the four criteria used to identify stronger opportunities in the field.",
    videoUrl: "https://www.youtube.com/embed/zwTUVpnwrKo",
    content: `This module is focused on the four criteria your team uses to evaluate opportunities and qualify conversations in the field. Use it to understand what to look for, how to stay consistent, and how to prioritize better conversations.\n\nAs more detailed training material is added, this module can be expanded with examples and coaching scenarios.`,
    order: 6,
    quiz: [
      {
        id: "fc1",
        question: "What is the purpose of the 4 criteria module?",
        options: [
          "To help qualify and prioritize better opportunities",
          "To replace the need for conversations",
          "To avoid following the script",
          "To reduce daily activity",
        ],
        correctAnswer: 0,
      },
      {
        id: "fc2",
        question: "How should the 4 criteria help reps in the field?",
        options: [
          "By making qualification more consistent",
          "By eliminating all objections",
          "By shortening every appointment",
          "By removing the need for training",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "goals",
    title: "Goals",
    description: "Learn how clear goals create focus, consistency, and better field performance.",
    videoUrl: "https://www.youtube.com/embed/LhaidAAFgbY",
    content: `Goals give your effort direction. When you know exactly what you're aiming for each day, week, and month, it's easier to stay disciplined, measure progress, and keep momentum high.\n\nWatch the training video above to learn how goal-setting supports consistent performance, then complete the quiz below.`,
    order: 7,
    quiz: [
      {
        id: "gl1",
        question: "Why are goals important in sales?",
        options: [
          "They create focus and help track progress",
          "They replace the need for daily effort",
          "They only matter for managers",
          "They are mainly motivational posters",
        ],
        correctAnswer: 0,
      },
      {
        id: "gl2",
        question: "What do clear goals help you do in the field?",
        options: [
          "Avoid accountability",
          "Stay consistent and maintain momentum",
          "Work fewer hours automatically",
          "Skip daily planning",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "hood-selection",
    title: "Hood Selection",
    description: "Learn the mindset and techniques behind choosing the right neighborhoods to knock.",
    videoUrl: "https://www.youtube.com/embed/_8oFEl00ccs",
    content: `In this segment, we will discuss the mindset behind hood selection and techniques that can help you to do this effectively.\n\nThere are qualified buyers in every neighborhood, regardless of age, income, or other demographic factors. It is not a matter of "knockable" and "unknockable", but rather more or less efficient. Key indicators of higher probability:\n\n• 15 years old or older\n• Densely populated neighborhoods\n• Neighborhoods with the same windows built at the same time\n• Neighborhoods where people "take pride" in the appearance of their home, indicated by maintenance and appearance of their home and yard — they might care more about windows and might have a larger proportion of home owners (not renters)\n\n**This all being said, err on the side of knocking too much vs. skipping too much.**\n\n• If you find yourself jumping hood within a session more than a couple times a week, then in your effort to be efficient, you may be doing the opposite.\n\n**In order to effectively scout hood, reps may do any or all of the following:**\n\n• Use non-knocking hours to find hood (e.g. on your way out of hood/home from work, during your lunch break). It can be beneficial to look for hood the night before to make full use of knocking time.\n• Choose a neighborhood with advertising home pins from previous sales but where it has been long enough that other pins have been cleared.\n• Experienced reps may be able to determine a neighborhood's age simply by looking at the street on the map or a quick glance at the neighborhood shape.\n• Rely on experienced reps to show you where the good hood is, in order to later be able to effectively find your own.\n• Utilize apps like Zillow to search for neighborhoods that meet your parameters (age, price, etc.).\n\n**To reiterate, every neighborhood has sales.**`,
    order: 8,
    quiz: [
      {
        id: "hs1",
        question: "What is the right mindset about neighborhoods?",
        options: [
          "Some neighborhoods are unknockable",
          "Every neighborhood has qualified buyers — it's about efficiency, not knockable vs. unknockable",
          "Only knock in wealthy neighborhoods",
          "Avoid neighborhoods older than 10 years",
        ],
        correctAnswer: 1,
      },
      {
        id: "hs2",
        question: "When should you scout for new hood?",
        options: [
          "Only during knocking hours",
          "During non-knocking hours like lunch breaks or the night before",
          "Only when your manager tells you to",
          "Never — stick with one neighborhood forever",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "negative-prequalifications",
    title: "Negative Prequalifications",
    description: "Learn why you should never disqualify potential customers based on preconceived notions.",
    videoUrl: "https://www.youtube.com/embed/2Dk-1wLGoCA",
    content: `In this segment, we will discuss avoiding disqualifying potential customers based on preconceived notions.\n\n**One way that you may lose on potential sales is by disqualifying customers based on biases such as:**\n\n• A house looks dirty or not taken care of\n• The person is too old or young\n• The person looks like they are in a bad mood or may be rude\n• The person is standing outside and/or they look busy\n• The person has a no soliciting sign — this also includes multiple signs or specific and intricate no soliciting signs. When knocking on a homeowner's door who has a no soliciting sign, the biggest risk is that they point out the sign and say they are not interested. However, the potential is a possible sale that could net you upwards of $1,000.\n• The windows look like they have already been replaced\n• The house has too many steps/too long of a driveway\n\n**While the list of possible excuses to not knock a home are endless, the result is always the same. Missing out on a possible sale.**\n\n**The philosophy behind knocking every door and pitching every homeowner is simple. It is the best gambling odds in the world.**\n\nYou miss 100% of the shots you don't take. If you have taken the time to walk up to a door and knock on it, you may as well give it your best effort and convert it into a set, then a sale. Deliver the script with confidence at each door, regardless of who opens it.`,
    order: 9,
    quiz: [
      {
        id: "np1",
        question: "What is the result of negatively prequalifying homes and skipping them?",
        options: [
          "You become more efficient",
          "You miss out on possible sales",
          "You save energy for better leads",
          "Your manager will appreciate it",
        ],
        correctAnswer: 1,
      },
      {
        id: "np2",
        question: "What is the philosophy behind knocking every door?",
        options: [
          "It's company policy and nothing more",
          "It's the best gambling odds in the world — you miss 100% of the shots you don't take",
          "Only knock doors that look promising",
          "It helps you hit your step count",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "objections",
    title: "Smokescreens & Objections",
    description: "Learn the framework for handling all objections: smokescreens, true objections, and criteria objections.",
    videoUrl: "https://www.youtube.com/embed/4-E22GkbbI4",
    content: `**Objections are a staple of any sales job. By knowing how to properly understand and address them, you can achieve success. All objections fall into one of three categories:**\n\n**1. Smokescreens. Objections are a good thing.**\n• Smokescreens constitute the majority of objections. Every objection should be treated as a smokescreen at first, until proven otherwise.\n• **Acknowledge, Invalidate, Return (A.I.R)**\n  — Acknowledge: Pause from the script to hear them and acknowledge that you have heard them. (Ex. "I hear you…" or "I get that all the time…" or "Glad you brought that up".)\n  — Invalidate: This should not be a lengthy explanation but rather a quick, invalidating statement. (Ex. "That's actually no issue for us" or "My marketing director will be able to cover that in the appointment" and then continue.)\n  — Return: Immediately return to script. Do not hesitate during this step.\n\n**2. True Objections**\n• An objection can be considered more valid if a homeowner doubles down or repeats an objection.\n  — At this point, give a more specific answer. (Ex. "We actually have some great financing options" or "Our discount often moves the windows up the priority list".)\n  — It is important that once you have given a more specific answer, you return back to where you left off, rather than waiting for a response or engaging in conversation.\n\n**3. Objections to the 4 Criteria**\n• If a homeowner makes a comment that is in contrast with the 4 criteria, the Knocker should consider it a true objection and address it immediately and directly.\n  — This is done by saying something like "It's important that your spouse is there to make sure it's a good fit for everyone" or "We will need the full 45 minutes in order to cover everything".\n  — After directly addressing this red flag, return to the script.\n  — If they continue to insist that they do not want to meet this standard, do a takeaway or simply leave.\n\n**Understanding that the vast majority of sales come after at least one objection should encourage you to push through objections. Only setting appointments that are low hanging fruit is the mark of a weak and undisciplined salesperson.**\n\n**Objections need to be practiced in order to maintain confidence and trust from the homeowner. It can't sound different than the rest of the script.**`,
    order: 10,
    quiz: [
      {
        id: "ob1",
        question: "How should you initially treat every objection?",
        options: [
          "As a true objection that needs a detailed response",
          "As a smokescreen until proven otherwise",
          "As a sign to leave immediately",
          "As an insult to take personally",
        ],
        correctAnswer: 1,
      },
      {
        id: "ob2",
        question: "What does A.I.R. stand for in handling smokescreens?",
        options: [
          "Ask, Inform, Repeat",
          "Acknowledge, Invalidate, Return",
          "Agree, Ignore, Respond",
          "Answer, Inquire, Redirect",
        ],
        correctAnswer: 1,
      },
      {
        id: "ob3",
        question: "When does an objection become a 'true objection'?",
        options: [
          "The first time they say it",
          "When the homeowner doubles down or repeats the objection",
          "When you can't think of a response",
          "Only when your manager says so",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "nonverbals",
    title: "Nonverbals",
    description: "Master body language and nonverbal communication to build trust at the door.",
    videoUrl: "https://www.youtube.com/embed/vPsaUlvTZbk",
    content: `Your body language speaks louder than your words. Before a homeowner even hears your pitch, they've already formed an impression based on your nonverbal communication.\n\nWatch the training video above to learn how to use nonverbals effectively, then complete the quiz below.`,
    order: 11,
    quiz: [
      {
        id: "nv1",
        question: "Why are nonverbals important in door-to-door sales?",
        options: [
          "They aren't — only the script matters",
          "Homeowners form impressions before hearing your pitch",
          "They help you talk faster",
          "They replace the need for a pitch",
        ],
        correctAnswer: 1,
      },
      {
        id: "nv2",
        question: "What should your body language convey at the door?",
        options: [
          "Aggression and urgency",
          "Disinterest and casualness",
          "Confidence and trustworthiness",
          "Nervousness to seem relatable",
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "tonality-and-pitch",
    title: "Tonality and Pitch",
    description: "Learn how your tone of voice and pitch affect your sales conversations.",
    videoUrl: "https://www.youtube.com/embed/gIxjxF8soMY",
    content: `How you say something is just as important as what you say. Your tonality and pitch can convey confidence, excitement, empathy, or urgency — all of which influence whether a homeowner engages with you.\n\nWatch the training video above to master tonality and pitch techniques, then complete the quiz below.`,
    order: 12,
    quiz: [
      {
        id: "tp1",
        question: "Why is tonality important in sales?",
        options: [
          "It doesn't matter — only the words count",
          "It conveys confidence and influences engagement",
          "Speaking louder always closes more deals",
          "A monotone voice builds trust",
        ],
        correctAnswer: 1,
      },
      {
        id: "tp2",
        question: "What should you vary during a sales conversation?",
        options: [
          "Nothing — stay consistent throughout",
          "Only your volume",
          "Your tone, pitch, and pacing to match the moment",
          "Your accent to match the homeowner",
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "cadence",
    title: "Cadence",
    description: "Master the rhythm and pacing of your sales conversations for maximum impact.",
    videoUrl: "https://www.youtube.com/embed/DHdSil0pWus",
    content: `Cadence is the rhythm and pacing of your speech. Getting it right means you sound natural, confident, and engaging. Getting it wrong means you come across as robotic, rushed, or disinterested.\n\nWatch the training video above to learn how to control your cadence, then complete the quiz below.` ,
    order: 13,
    quiz: [
      {
        id: "cd1",
        question: "What is cadence in the context of sales?",
        options: [
          "How loudly you speak",
          "The rhythm and pacing of your speech",
          "The number of doors you knock per hour",
          "A type of closing technique",
        ],
        correctAnswer: 1,
      },
      {
        id: "cd2",
        question: "What happens when your cadence is off?",
        options: [
          "Nothing — cadence doesn't matter",
          "You sound more professional",
          "You may come across as robotic, rushed, or disinterested",
          "Homeowners always appreciate fast talkers",
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "recruiting",
    title: "Recruiting",
    description: "Learn the basics of recruiting, mentoring, and growing the team.",
    videoUrl: "",
    content: `Recruiting helps Heritage Windows grow with strong people who fit the culture and can succeed in the field. Great recruiters do more than invite people in — they help set expectations, support development, and create momentum for the team.\n\nAs more recruiting-specific training is added, this module can be expanded with scripts, roleplay examples, and leadership expectations.`,
    order: 14,
    quiz: [
      {
        id: "rc1",
        question: "What is a key goal of recruiting?",
        options: [
          "Growing the team with strong people who can succeed",
          "Replacing field training entirely",
          "Reducing accountability",
          "Avoiding coaching conversations",
        ],
        correctAnswer: 0,
      },
      {
        id: "rc2",
        question: "What should strong recruiters do beyond inviting people in?",
        options: [
          "Help set expectations and support development",
          "Promise easy success",
          "Avoid follow-up after hiring",
          "Focus only on volume",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "law-of-averages",
    title: "Law of Averages",
    description: "Understand how the law of averages works in your favor over time.",
    videoUrl: "https://www.youtube.com/embed/Vm8C9aFK2lI",
    content: `The Law of Averages is one of the most powerful concepts in sales. When you put in consistent effort day after day, the numbers will work in your favor.\n\nWatch the training video above to understand how averages drive your success, then complete the quiz below.`,
    order: 15,
    quiz: [
      {
        id: "la1",
        question: "What is the core idea behind the Law of Averages?",
        options: [
          "Luck determines your results",
          "Consistent effort over time produces predictable results",
          "You only need a few great days to succeed",
          "Averages don't apply to sales",
        ],
        correctAnswer: 1,
      },
      {
        id: "la2",
        question: "How does the Law of Averages benefit a salesperson?",
        options: [
          "It guarantees every door will be a sale",
          "It removes the need for skill development",
          "It shows that sustained activity leads to consistent outcomes",
          "It only works for experienced reps",
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "specific-objections",
    title: "Bonus: Specific Smokescreens & Objections",
    description: "Practice handling specific common objections you'll encounter in the field.",
    videoUrl: "",
    content: `Now that you understand the A.I.R. framework and the three categories of objections, this bonus module covers specific smokescreens and objections you'll encounter regularly in the field.\n\nWork through each sub-section to practice recognizing and responding to these common scenarios.`,
    order: 16,
    quiz: [],
    subModules: [
      {
        id: "obj-cant-afford",
        title: '"I Can\'t Afford It"',
        description: "How to address price concerns and introduce financing options.",
        videoUrl: "",
        content: `This is one of the most common objections, but it's often a sign of interest — they're thinking about it!\n\nWhy They Say It:\n• They may genuinely have budget concerns\n• They might not understand the long-term value\n• They could be testing to see if you'll offer a discount\n\nHow to Respond:\n"That's exactly why I'm here. Our windows actually pay for themselves through energy savings — most homeowners save 25-30% on their energy bills. Plus, we offer financing as low as $89/month with no money down. Would it help if I showed you what your monthly savings would look like?"\n\nKey Points:\n• Never dismiss their concern — acknowledge it\n• Shift the conversation from cost to investment & savings\n• Present financing options naturally\n• Use specific numbers and examples from other customers`,
        quiz: [
          {
            id: "ca1",
            question: 'When a customer says "I can\'t afford it," what should you emphasize?',
            options: [
              "Offer a discount immediately",
              "Energy savings and flexible financing options",
              "Tell them it's the cheapest option available",
              "Walk away and try the next house",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: "obj-windows-fine",
        title: '"Our Windows Are Fine"',
        description: "How to help homeowners see issues they may not have noticed.",
        videoUrl: "",
        content: `Many homeowners don't realize their windows are underperforming because they've gotten used to the problems.\n\nWhy They Say It:\n• They genuinely believe their windows are adequate\n• They haven't compared to modern window performance\n• They don't connect drafts or high bills to their windows\n\nHow to Respond:\n"That's great to hear! A lot of homeowners feel the same way. Out of curiosity, have you noticed any drafts near your windows during winter, or have your energy bills gone up over the past few years? Sometimes windows can look fine but still be costing you money."\n\nKey Points:\n• Don't argue — ask questions that reveal pain points\n• Mention common signs: drafts, condensation, fading furniture, noise\n• Offer a free window inspection as a no-pressure next step`,
        quiz: [
          {
            id: "wf1",
            question: 'When a homeowner says their windows are fine, what should you do first?',
            options: [
              "Tell them they're wrong",
              "Ask questions to uncover hidden pain points",
              "Leave immediately",
              "Offer a steep discount",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: "obj-how-much",
        title: '"How Much Does It Cost?"',
        description: "How to handle early price questions without losing the conversation.",
        videoUrl: "",
        content: `When a homeowner asks about price right away, they're showing interest — but giving a number too early can end the conversation.\n\nHow to Respond:\n"Great question! The price actually depends on a few things — how many windows, the style, and energy efficiency level. That's why we do a free in-home consultation, so we can give you an exact quote based on your home. Most homeowners are surprised at how affordable it is with our financing. Can I schedule a quick 30-minute visit?"\n\nKey Points:\n• Don't give a specific price at the door — it lacks context\n• Pivot to the value of a personalized quote\n• Mention financing to soften the price conversation\n• Use the question as a bridge to booking an appointment`,
        quiz: [
          {
            id: "hm1",
            question: "Why should you avoid giving a specific price at the door?",
            options: [
              "Because the price is a secret",
              "Because it lacks context and can end the conversation",
              "Because you don't know the price",
              "Because it's against company policy to discuss price",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: "obj-spouse",
        title: '"I Need to Talk to My Spouse"',
        description: "How to keep the deal alive when a decision-maker is absent.",
        videoUrl: "",
        content: `This is a legitimate concern — big home improvements are usually a joint decision.\n\nHow to Respond:\n"Absolutely, that's a big decision and it makes total sense to discuss it together. Would it work if I came back when you're both available? That way I can answer any questions together and make sure you both have all the information you need."\n\nKey Points:\n• Always respect this objection — never pressure\n• Offer to come back when both decision-makers are present\n• Set a specific callback time rather than leaving it open-ended\n• Ask: "When would be a good time for both of you?"`,
        quiz: [
          {
            id: "sp1",
            question: 'What is the best response to "I need to talk to my spouse"?',
            options: [
              "Try to close the deal anyway",
              "Offer to come back when both are available",
              "Ask them to call you when they decide",
              "Give a bigger discount to close now",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: "obj-not-interested",
        title: '"I\'m Not Interested"',
        description: "How to gracefully handle flat rejection and leave the door open.",
        videoUrl: "",
        content: `This is the most common objection and often the most reflexive — many people say it before they even know what you're offering.\n\nHow to Respond:\n"I completely understand — most of our happiest customers said the same thing at first! I'm not here to pressure you. Would it be okay if I just left you some information about how homeowners in your neighborhood are saving on energy costs? No obligation at all."\n\nKey Points:\n• Be gracious — a smile goes a long way\n• Don't take it personally; it's usually not about you\n• Leave a card or flyer — they may reach out later\n• Some of your best future customers will come from callbacks`,
        quiz: [
          {
            id: "ni1",
            question: 'Why do many homeowners say "I\'m not interested" immediately?',
            options: [
              "They've done extensive research on windows",
              "It's a reflexive reaction to salespeople",
              "They just bought new windows",
              "They don't own their home",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: "obj-new-windows",
        title: '"I Just Got New Windows"',
        description: "How to handle homeowners who recently replaced their windows.",
        videoUrl: "",
        content: `If they truly just got new windows, this conversation is done — but use it as a referral opportunity.\n\nHow to Respond:\n"That's great! How are you liking them? If you ever need anything in the future, here's my card. Also — do you happen to know any neighbors who might be looking at their windows? We have a great referral program."\n\nKey Points:\n• Be genuinely happy for them\n• Ask how the windows are performing — they might reveal issues\n• Pivot to referrals — they might know someone\n• Their "new" windows might not be that new`,
        quiz: [
          {
            id: "nw1",
            question: 'What opportunity does "I just got new windows" present?',
            options: [
              "None — end the conversation immediately",
              "A chance to ask for referrals",
              "An opportunity to criticize their new windows",
              "A reason to come back tomorrow",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: "obj-planning-move",
        title: '"We\'re Planning to Move"',
        description: "How to turn a move into a selling point for new windows.",
        videoUrl: "",
        content: `Homeowners planning to move often don't realize that new windows can increase their home's value and help it sell faster.\n\nHow to Respond:\n"That actually makes this perfect timing! New windows are one of the top home improvements for return on investment. Homes with new windows sell faster and for more money. Would it be worth a quick look to see how it could boost your home's value?"\n\nKey Points:\n• New windows offer 70-80% ROI at resale\n• Homes with new windows sell faster on average\n• Energy-efficient windows are a top buyer request\n• Frame it as an investment in their sale price, not an expense`,
        quiz: [
          {
            id: "pm1",
            question: 'How should you frame new windows to someone who is moving?',
            options: [
              "As a gift to the next owner",
              "As an investment that boosts their sale price",
              "As something they should skip",
              "As a requirement from their realtor",
            ],
            correctAnswer: 1,
          },
        ],
      },
    ],
  },
];
