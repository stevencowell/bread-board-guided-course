window.LESSON_CONFIG = {
  storageKey: "breadboard-weeks1-2-guided-v2",
  resetLabel: "Weeks 1-2",
  theoryTargets: [
    {id: "theory-1", title: "Workshop readiness and the breadboard brief"},
    {id: "theory-2", title: "Recognising hazards and managing workshop risk"},
    {id: "theory-2", title: "Recognising hazards and managing workshop risk"},
    {id: "theory-3", title: "Marking and measuring for accuracy"},
    {id: "theory-3", title: "Marking and measuring for accuracy"},
    {id: "theory-3", title: "Marking and measuring for accuracy"}
  ]
};
window.MC_QUESTIONS = [
  {
    question: "What should guide the first practical decisions in the Bread Board project?",
    options: ["A remembered image of another board", "The supplied brief, plan and teacher directions", "The fastest available method", "A classmate's measurements"],
    correct: 1,
    hint: "The project has agreed evidence that defines the required outcome.",
    strongHint: "Look for the sources that remain authoritative even when other projects look similar.",
    feedback: ["Another product may have different features.", "The brief, plan and teacher directions define this project.", "Speed does not replace accuracy or authorisation.", "Another student may have misread the information."]
  },
  {
    question: "Which statement best describes a hazard?",
    options: ["Something with the potential to cause harm", "The score given after an accident", "A piece of PPE", "A completed risk control"],
    correct: 0,
    hint: "Separate the source of possible harm from the action used to reduce it.",
    strongHint: "A spill is the source; isolating and reporting it are controls.",
    feedback: ["Correct. A hazard is a source or situation with the potential to cause harm.", "A score does not define the source of harm.", "PPE is a control measure.", "A control reduces risk but is not the hazard itself."]
  },
  {
    question: "What is the safest response to damaged workshop equipment?",
    options: ["Keep using it carefully", "Repair it without telling anyone", "Stop, keep others clear and report it to the teacher", "Return it silently"],
    correct: 2,
    hint: "Students should not hide, continue with or repair an unsafe condition.",
    strongHint: "Choose the response that isolates the problem and brings in authorised supervision.",
    feedback: ["Careful use does not remove the fault.", "Unauthorised repair can create further risk.", "Correct. Stop, protect others and report the fault.", "The next user could be harmed if the fault is hidden."]
  },
  {
    question: "Why is one consistent datum used for related measurements?",
    options: ["To make pencil lines darker", "To keep related marks aligned from one reference", "To avoid reading the plan", "To remove the need for checking"],
    correct: 1,
    hint: "Think about where every related measurement begins.",
    strongHint: "Changing the starting edge allows small differences to accumulate.",
    feedback: ["Line darkness does not control alignment.", "Correct. One reliable reference reduces cumulative error.", "The plan is still required.", "A datum supports checking; it does not replace it."]
  },
  {
    question: "Which line is most useful for accurate manufacture?",
    options: ["Several heavy pencil lines", "One fine checked line", "A guessed mark near the edge", "A line copied from the screen with a ruler"],
    correct: 1,
    hint: "The maker needs one unambiguous boundary.",
    strongHint: "A sharp pencil and checked reference create the clearest working line.",
    feedback: ["Multiple heavy lines create uncertainty.", "Correct. One fine checked line gives a clear boundary.", "Guessing is not evidence-based marking.", "The displayed drawing may not be at its original size."]
  },
  {
    question: "What should happen when a plan or mark is unclear?",
    options: ["Remove material and check later", "Choose the most likely interpretation", "Stop and ask for teacher direction", "Copy the nearest student's mark"],
    correct: 2,
    hint: "Material removal is difficult to reverse.",
    strongHint: "The safe quality gate is to resolve uncertainty before the irreversible step.",
    feedback: ["Later checking cannot replace removed material.", "A guess may create a permanent error.", "Correct. Clarify before continuing.", "Another student's work is not the authority."]
  }
];
window.WRITTEN_QUESTIONS = [
  {
    title: "1. Explain a safe start-of-lesson routine",
    prompt: "Explain what you will check before beginning practical Bread Board work and why each check matters.",
    minWords: 70,
    concepts: [
      {label: "brief or plan", terms: ["brief", "plan", "drawing"]},
      {label: "personal readiness", terms: ["ppe", "glasses", "hair", "clothing", "footwear"]},
      {label: "workspace hazards", terms: ["bench", "floor", "hazard", "clutter", "spill"]},
      {label: "report or stop", terms: ["report", "teacher", "stop", "direction"]}
    ],
    scaffold: ["First I will confirm...", "For personal readiness I will...", "I will inspect the workspace for...", "If something is unsafe or unclear, I will..."],
    prompts: ["Refer to the project brief or plan.", "Include personal preparation.", "Describe a check of the shared work area.", "State when you would stop and report."],
    model: "I will first read the project brief, plan and teacher directions so I understand the required stage. I will secure hair and loose items, wear the required PPE and check that my clothing and footwear are suitable. I will inspect the bench, floor and nearby walkway for clutter, spills, damaged equipment or loose material. If I find damage or cannot make a condition safe, I will stop, keep others clear and report it to the teacher before work begins."
  },
  {
    title: "2. Explain an accurate marking routine",
    prompt: "Explain how you would transfer a required position from the project plan to timber without allowing small errors to build up.",
    minWords: 75,
    concepts: [
      {label: "read the plan", terms: ["plan", "drawing", "written dimension"]},
      {label: "datum", terms: ["datum", "reference edge", "reference face"]},
      {label: "measure and check", terms: ["measure twice", "check", "confirm"]},
      {label: "fine line", terms: ["sharp pencil", "fine line", "single line"]},
      {label: "stop before cutting", terms: ["before cutting", "before removing", "teacher", "unclear"]}
    ],
    scaffold: ["I would begin by...", "My datum would be...", "Before drawing the line I would...", "Before removing material I would..."],
    prompts: ["Name the authoritative project information.", "Explain the role of the datum.", "Include a measurement check.", "Describe the mark clearly.", "Finish with a quality gate before cutting."],
    model: "I would read the written plan information and identify exactly where the measurement begins and ends. I would use the agreed datum or reference edge for every related measurement so the positions remain aligned. I would measure from that datum twice, view the scale carefully and make one fine line with a sharp pencil. I would check that the line is square or correctly positioned and compare it with the plan. If anything is unclear, I would stop and ask the teacher before removing material."
  }
];
