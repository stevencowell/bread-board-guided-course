window.LESSON_CONFIG = {storageKey: "breadboard-weeks9-10-guided-v2", resetLabel: "Weeks 9-10"};
window.MC_QUESTIONS = [
  {
    question: "Which statement is the strongest evaluation evidence?",
    options: ["It looks perfect", "There is a visible gap at the end joint and the surfaces are not level", "I worked hard", "My friend likes it"],
    correct: 1,
    hint: "Evidence describes something observable and specific.",
    strongHint: "Choose the statement another person could inspect.",
    feedback: ["Perfect is an unsupported claim.", "Correct. It identifies specific observable evidence.", "Effort does not describe construction quality.", "Preference alone is not technical evidence."]
  },
  {
    question: "What should the completed Bread Board be compared with?",
    options: ["A different commercial board", "The supplied plan, brief and teacher criteria", "Only the student's memory", "The quickest project in the class"],
    correct: 1,
    hint: "Evaluation uses the agreed requirements.",
    strongHint: "The project's own authoritative sources define success.",
    feedback: ["Another product may have different requirements.", "Correct. These are the approved comparison points.", "Memory is not reliable evidence.", "Speed does not define quality."]
  },
  {
    question: "What makes an improvement suggestion useful?",
    options: ["It is vague and positive", "It connects a fault to a likely cause and a realistic future action", "It blames the material", "It says nothing should change"],
    correct: 1,
    hint: "An improvement should help the next attempt.",
    strongHint: "Fault, cause and action form a useful chain.",
    feedback: ["Vague praise does not guide improvement.", "Correct. It explains what and how to improve.", "Blame without evidence is not analysis.", "Even strong work can identify a next step."]
  },
  {
    question: "Which folio photograph is most useful?",
    options: ["A blurry repeated image", "A clear image showing a meaningful stage or quality check", "An unrelated workshop photo", "A decorative internet image"],
    correct: 1,
    hint: "Evidence should show authentic project work.",
    strongHint: "The strongest image helps prove what happened and why it mattered.",
    feedback: ["Repeated blurry images add little evidence.", "Correct. It documents a meaningful authentic stage.", "Unrelated images do not support the project.", "Decoration is not student evidence."]
  },
  {
    question: "What should a strong folio caption include?",
    options: ["Only the word 'sanding'", "The stage, action, reason and quality or safety result", "A made-up date", "Another student's name"],
    correct: 1,
    hint: "The caption should add information beyond the image.",
    strongHint: "Explain what, why and the result.",
    feedback: ["One word does not explain the evidence.", "Correct. It interprets the evidence clearly.", "Dates and order must be honest.", "Privacy and authorship must be protected."]
  },
  {
    question: "What is part of a professional workshop handover?",
    options: ["Hide damaged tools", "Return tools, report faults and leave shared areas ready", "Leave waste for the next class", "Attempt unauthorised repairs"],
    correct: 1,
    hint: "Handover protects the next user.",
    strongHint: "It combines organisation, honest reporting and safe shared spaces.",
    feedback: ["Hidden damage can harm the next user.", "Correct. This is responsible shared-workshop practice.", "Waste must be managed as directed.", "Students should not repair without authority."]
  }
];
window.WRITTEN_QUESTIONS = [
  {
    title: "1. Write an evidence-based final evaluation",
    prompt: "Evaluate one strength and one area for improvement in your completed Bread Board. Use specific observations, likely causes and a realistic future action.",
    minWords: 110,
    concepts: [
      {label: "plan or brief", terms: ["plan", "brief", "criteria"]},
      {label: "specific strength", terms: ["strength", "aligned", "consistent", "accurate", "even"]},
      {label: "specific fault", terms: ["gap", "scratch", "uneven", "fault", "misaligned"]},
      {label: "likely cause", terms: ["cause", "because", "resulted from"]},
      {label: "realistic improvement", terms: ["improve", "next time", "earlier", "check"]}
    ],
    scaffold: ["Compared with the plan or brief...", "One strength is... The evidence is...", "One area for improvement is...", "The likely cause was...", "Next time I would..."],
    prompts: ["Link the judgement to approved criteria.", "Describe a specific strength.", "Describe a specific fault or limitation.", "Explain a likely cause.", "Finish with a realistic action."],
    model: "Compared with the project plan and brief, one strength is the overall alignment of the curved end pieces. The joints meet closely and the board sits without visible movement, which suggests the dry-fit and clamping checks were effective. One area for improvement is a small uneven patch in the finish near one edge. This may have resulted from inconsistent surface preparation or contamination before the finish was applied. Next time I would inspect the surface under stronger light, clean the area as directed and complete a final teacher check before finishing."
  },
  {
    title: "2. Select and explain authentic folio evidence",
    prompt: "Choose two project evidence items you would include in the folio and explain what each proves. Include privacy and honest sequencing.",
    minWords: 100,
    concepts: [
      {label: "two meaningful stages", terms: ["first", "second", "stage", "photo"]},
      {label: "action and reason", terms: ["action", "because", "reason", "why"]},
      {label: "quality or safety result", terms: ["quality", "safety", "accurate", "aligned", "result"]},
      {label: "honest sequence", terms: ["order", "date", "sequence", "honest"]},
      {label: "privacy", terms: ["privacy", "face", "name", "classmate", "crop"]}
    ],
    scaffold: ["My first evidence item would show...", "It proves...", "My second item would show...", "I would place them in this order because...", "To protect privacy I would..."],
    prompts: ["Identify two different meaningful stages.", "Explain the action and reason.", "State the quality or safety result.", "Keep the timing and order authentic.", "Explain how privacy will be protected."],
    model: "My first evidence item would be a clear photograph of the dry assembly before adhesive. Its caption would explain that I checked the curved end pieces for orientation, close joint fit and alignment with the plan. My second item would show the completed surface under good light, with a caption explaining the final quality check. I would place the images in their genuine project order and keep the original dates where available. I would crop out faces, student names, class lists and unrelated classmates' work so the folio shows only my project evidence."
  }
];
