window.LESSON_CONFIG = {
  storageKey: "breadboard-weeks5-6-guided-v2",
  resetLabel: "Weeks 5-6",
  theoryTargets: [
    {id: "theory-1", title: "Dry assembly before glue-up"},
    {id: "theory-1", title: "Dry assembly before glue-up"},
    {id: "theory-2", title: "A careful glue-up and clamping plan"},
    {id: "theory-2", title: "A careful glue-up and clamping plan"},
    {id: "theory-3", title: "Safe preparation for routed profiles"},
    {id: "theory-3", title: "Safe preparation for routed profiles"}
  ]
};
window.MC_QUESTIONS = [
  {
    question: "What is the main purpose of a complete dry assembly?",
    options: ["To make adhesive cure faster", "To confirm fit, orientation and alignment before permanent joining", "To hide small gaps", "To replace the project plan"],
    correct: 1,
    hint: "Dry means no adhesive has been applied yet.",
    strongHint: "It is the last reversible quality gate before permanent joining.",
    feedback: ["Dry assembly does not affect curing.", "Correct. It checks the complete project while correction is still possible.", "Gaps should be diagnosed, not hidden.", "The plan remains the reference."]
  },
  {
    question: "A joint does not close evenly during the dry fit. What should happen first?",
    options: ["Apply more force", "Remove material from every surface", "Identify the actual cause and high point", "Add adhesive to lubricate it"],
    correct: 2,
    hint: "Correction should follow evidence.",
    strongHint: "Random removal can turn one local fault into a loose joint.",
    feedback: ["Force can damage parts or hide the cause.", "Random removal may create a loose fit.", "Correct. Diagnose before changing the component.", "Adhesive must not be used to rescue an unverified fit."]
  },
  {
    question: "Why is the glue-up sequence planned before adhesive is applied?",
    options: ["To reduce rushed decisions while working time is limited", "To avoid checking alignment", "To use as much adhesive as possible", "To change the plan dimensions"],
    correct: 0,
    hint: "Permanent joining becomes time-sensitive once adhesive is present.",
    strongHint: "A prepared sequence keeps parts, clamps and checks ready.",
    feedback: ["Correct. Planning reduces rushing and missed checks.", "Alignment remains essential.", "Excess adhesive creates waste and mess.", "The project dimensions do not change."]
  },
  {
    question: "What is the best description of balanced clamping pressure?",
    options: ["Maximum pressure from one side", "Enough even pressure to close joints without distorting the assembly", "No pressure at all", "Pressure applied before checking orientation"],
    correct: 1,
    hint: "Clamps should hold alignment, not force a poor fit.",
    strongHint: "Too much or uneven pressure can move or distort components.",
    feedback: ["One-sided force can skew the assembly.", "Correct. Pressure should close verified joints while preserving alignment.", "Adhesive joints normally require controlled pressure.", "Orientation must be confirmed first."]
  },
  {
    question: "Which condition must be confirmed before a teacher-directed routed profile begins?",
    options: ["The component is secure and the process is authorised", "The student has guessed the profile", "Loose items remain near the work", "The line is unclear"],
    correct: 0,
    hint: "Secure support and clear authorisation are essential.",
    strongHint: "Uncertainty is a stop signal, not a reason to begin.",
    feedback: ["Correct. Authorisation, support and clear preparation come first.", "The profile must not be guessed.", "Loose items create hazards.", "An unclear line must be resolved before work."]
  },
  {
    question: "What should a student do if the routed-profile setup or condition changes?",
    options: ["Continue more slowly", "Stop and seek teacher direction", "Hold the component closer to the cutting area", "Ignore the change"],
    correct: 1,
    hint: "A changed condition invalidates the original safe plan.",
    strongHint: "Only restart after the setup has been reviewed and authorised.",
    feedback: ["Slower movement does not resolve an unsafe change.", "Correct. Stop and seek authorised direction.", "Moving hands closer increases risk.", "Changed conditions must be addressed."]
  }
];
window.WRITTEN_QUESTIONS = [
  {
    title: "1. Diagnose a dry-assembly fault",
    prompt: "A curved end piece does not sit evenly during the dry assembly. Explain how you would investigate the cause without forcing or randomly removing timber.",
    minWords: 85,
    concepts: [
      {label: "compare with plan", terms: ["plan", "drawing", "orientation"]},
      {label: "inspect fit", terms: ["gap", "high spot", "contact", "alignment"]},
      {label: "do not force", terms: ["not force", "avoid force", "stop"]},
      {label: "controlled correction", terms: ["small amount", "verified", "check again"]},
      {label: "teacher advice", terms: ["teacher", "advice", "direction"]}
    ],
    scaffold: ["First I would stop and...", "I would compare...", "I would look for...", "Only after identifying the cause...", "I would ask the teacher if..."],
    prompts: ["Refer to the plan and component orientation.", "Describe specific fit evidence.", "State why force is unsuitable.", "Explain a small verified correction.", "Include teacher direction where needed."],
    model: "I would stop and remove the assembly without forcing the end piece. I would confirm its orientation against the plan and inspect the meeting surfaces for a gap, high spot, debris or a mark that does not align. I would compare both ends and use the dry fit to identify where contact occurs. Only after the cause was verified would I remove a very small amount using the approved method and test the assembly again. If the cause remained unclear or the component appeared damaged, I would ask the teacher before making another change."
  },
  {
    title: "2. Plan a controlled glue-up",
    prompt: "Explain the sequence and checks you would prepare before adhesive is applied to the Bread Board assembly.",
    minWords: 90,
    concepts: [
      {label: "dry fit passed", terms: ["dry fit", "dry assembly", "passed"]},
      {label: "parts and clamps ready", terms: ["parts", "clamps", "ready", "sequence"]},
      {label: "approved adhesive", terms: ["approved adhesive", "teacher", "label"]},
      {label: "balanced pressure", terms: ["balanced", "even pressure", "distort"]},
      {label: "alignment and clean-up", terms: ["alignment", "check", "clean", "excess"]}
    ],
    scaffold: ["Before adhesive, I will confirm...", "I will arrange...", "I will use only...", "While clamping I will...", "Before leaving the assembly..."],
    prompts: ["Confirm the dry assembly first.", "Prepare parts, clamps and order.", "Refer to the approved adhesive process.", "Explain balanced pressure.", "Include alignment and approved clean-up."],
    model: "Before adhesive is applied, I will confirm that the complete dry assembly fits, aligns with the plan and has the correct orientation. I will arrange the parts, clamps, protective pieces and checking tools in the intended sequence. I will use only the teacher-approved adhesive and follow the demonstration and label directions. I will apply controlled, balanced pressure so the joints close without pulling the board out of alignment. I will recheck the overall form as pressure is added and manage excess adhesive using the approved method before leaving the assembly as directed."
  }
];
