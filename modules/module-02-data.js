window.LESSON_CONFIG = {
  storageKey: "breadboard-weeks3-4-guided-v2",
  resetLabel: "Weeks 3-4",
  theoryTargets: [
    {id: "theory-1", title: "Grain direction and planning a board layout"},
    {id: "theory-1", title: "Grain direction and planning a board layout"},
    {id: "theory-2", title: "Planning accurate biscuit joint positions"},
    {id: "theory-2", title: "Planning accurate biscuit joint positions"},
    {id: "theory-3", title: "Shaping timber with control"},
    {id: "theory-3", title: "Shaping timber with control"}
  ]
};
window.MC_QUESTIONS = [
  {
    question: "Why should grain direction be considered before the board components are arranged?",
    options: ["It changes the written dimensions", "It affects appearance, working behaviour and component consistency", "It removes the need for reference marks", "It proves every board is defect-free"],
    correct: 1,
    hint: "Grain is both visual and structural information.",
    strongHint: "Think about how timber looks and behaves while it is shaped.",
    feedback: ["Written dimensions remain unchanged.", "Correct. Grain affects appearance and how timber behaves.", "Reference marks are still required.", "Timber must still be inspected for defects."]
  },
  {
    question: "What is the strongest way to keep matching components correctly oriented?",
    options: ["Rely on memory", "Label reference faces and keep the parts paired", "Turn each piece until it looks similar", "Remove all pencil marks early"],
    correct: 1,
    hint: "Use visible evidence that remains with the parts.",
    strongHint: "Pairing and labelling prevent left/right or face confusion.",
    feedback: ["Memory is unreliable during several processes.", "Correct. Reference marks and pairing preserve orientation.", "Appearance alone may be ambiguous.", "Removing marks early destroys useful references."]
  },
  {
    question: "Why are biscuit-joint positions transferred across aligned matching components?",
    options: ["To make the biscuits thicker", "To keep matching slots on the same centre lines", "To avoid using the plan", "To create decorative pencil lines"],
    correct: 1,
    hint: "The two slots must accept the same flat biscuit.",
    strongHint: "Misaligned centre lines would pull the components out of position.",
    feedback: ["Marking does not change biscuit thickness.", "Correct. Transferring marks keeps the slots aligned.", "The plan still controls the layout.", "The lines have a manufacturing purpose."]
  },
  {
    question: "What should control the number and location of biscuit joints?",
    options: ["Whatever looks balanced", "The approved plan and teacher direction", "The number used on another project", "The maximum number that will fit"],
    correct: 1,
    hint: "Do not invent construction details.",
    strongHint: "This project's approved evidence is the authority.",
    feedback: ["Appearance is not enough to define joinery.", "Correct. Follow the plan and teacher direction.", "Another project may use different construction.", "More joints are not automatically better."]
  },
  {
    question: "Why is the finished boundary line kept visible while shaping?",
    options: ["It shows that controlled allowance remains for refinement", "It makes the project darker", "It proves the machine is correctly set", "It replaces later inspection"],
    correct: 0,
    hint: "Once the line is removed, the planned boundary may already be lost.",
    strongHint: "A small allowance can be refined; an undersize component cannot be restored easily.",
    feedback: ["Correct. The visible line protects the intended form.", "Colour is not the purpose.", "The line does not verify machine setup.", "The result still requires inspection."]
  },
  {
    question: "When should shaping stop immediately?",
    options: ["When the work begins to feel uncontrolled or the plan is unclear", "Only after the boundary has disappeared", "When another student finishes first", "After forcing the material through"],
    correct: 0,
    hint: "A changing condition is a stop signal.",
    strongHint: "Control and clarity must exist before more material is removed.",
    feedback: ["Correct. Stop and seek direction when control or clarity is lost.", "That may already be too late.", "Another student's pace is irrelevant.", "Forcing the process increases risk and error."]
  }
];
window.WRITTEN_QUESTIONS = [
  {
    title: "1. Plan a grain and component layout",
    prompt: "Explain how you would arrange and label the Bread Board components before marking joints or removing material.",
    clarification: "What steps will you follow? Which checks and timing matter?",
    minWords: 75,
    concepts: [
      {label: "grain inspection", terms: ["grain", "defect", "appearance"]},
      {label: "plan orientation", terms: ["plan", "orientation", "order"]},
      {label: "reference marks", terms: ["reference face", "reference edge", "label"]},
      {label: "paired components", terms: ["pair", "matching", "together"]},
      {label: "final check", terms: ["check", "teacher", "before"]}
    ],
    scaffold: ["I will inspect...", "The plan will show...", "I will mark each reference...", "Before removing material, I will..."],
    prompts: ["Include grain or defect inspection.", "Connect the arrangement to the plan.", "Describe visible reference marks.", "Explain how matching parts stay together.", "Add a final quality check."],
    model: "I will inspect the timber for grain direction, visible defects and appearance before arranging the components. I will use the project plan to keep the central board and curved end pieces in the required order and orientation. I will label the reference faces or edges and keep matching parts paired while marking. Before any material is removed, I will compare the layout with the plan, check that the intended faces remain clear and ask the teacher if a defect or orientation is uncertain."
  },
  {
    title: "2. Explain accurate biscuit-joint preparation",
    prompt: "Explain how matching biscuit-joint positions are planned and checked before any slots are made.",
    clarification: "What is the key idea about accurate biscuit-joint preparation? Which reasons or steps matter?",
    minWords: 80,
    concepts: [
      {label: "plan and teacher", terms: ["plan", "teacher", "approved"]},
      {label: "aligned components", terms: ["align", "matching", "paired"]},
      {label: "transferred centre lines", terms: ["transfer", "centre line", "mark"]},
      {label: "reference orientation", terms: ["reference face", "orientation", "edge"]},
      {label: "check before machining", terms: ["check", "before", "stop"]}
    ],
    scaffold: ["The approved positions come from...", "I will align...", "I will transfer...", "Before any slot is made..."],
    prompts: ["State who or what defines the joint positions.", "Explain how the components are aligned.", "Describe transferring centre lines.", "Keep reference orientation clear.", "Include a final check before machining."],
    model: "The approved biscuit-joint positions come from the project plan and teacher directions, not from guesswork. I will place the matching components in their correct orientation and align their reference faces and edges. I will transfer each centre line across the meeting parts while they are held together, then label the marks so the matching slots cannot be confused. Before any slot is made, I will check the number, location, spacing and orientation against the plan and stop for teacher advice if a mark is unclear."
  }
];
