window.LESSON_CONFIG = {
  storageKey: "breadboard-weeks7-8-guided-v2",
  resetLabel: "Weeks 7-8",
  theoryTargets: [
    {id: "theory-1", title: "Sanding for a consistent surface"},
    {id: "theory-1", title: "Sanding for a consistent surface"},
    {id: "theory-2", title: "Preparing to apply an oil finish"},
    {id: "theory-2", title: "Preparing to apply an oil finish"},
    {id: "theory-3", title: "Responsible material use, finishing waste and sustainability"},
    {id: "theory-3", title: "Responsible material use, finishing waste and sustainability"}
  ]
};
window.MC_QUESTIONS = [
  {
    question: "Why should the complete surface be inspected before sanding begins?",
    options: ["To identify faults and plan controlled preparation", "To choose a random starting area", "To remove the need for later checks", "To change the planned shape"],
    correct: 0,
    hint: "Inspection determines what actually needs correction.",
    strongHint: "Sanding should respond to evidence, not begin as a blind routine.",
    feedback: ["Correct. Inspection identifies scratches, glue and uneven areas.", "A random approach can create inconsistency.", "Checks remain necessary throughout.", "The planned form should be preserved."]
  },
  {
    question: "What can happen if one edge or area is sanded much more than the others?",
    options: ["The plan becomes more accurate", "The intended form may become rounded, uneven or undersize", "The finish automatically improves", "The grain direction changes"],
    correct: 1,
    hint: "Abrasive removal changes the timber permanently.",
    strongHint: "Uneven attention can alter edges, thickness or symmetry.",
    feedback: ["Extra removal does not improve plan accuracy.", "Correct. Uneven sanding can change the intended form.", "Finish cannot restore lost timber.", "Grain direction is a material property."]
  },
  {
    question: "What should control the finishing process?",
    options: ["A product seen online", "The teacher demonstration, product label, SDS and local procedure", "The greatest amount of finish available", "A classmate's method from another project"],
    correct: 1,
    hint: "Use the approved information for this product and workshop.",
    strongHint: "General internet advice cannot replace the specific label, SDS and teacher direction.",
    feedback: ["Online advice may not match the approved product.", "Correct. Follow the authorised sources.", "More finish is not automatically better.", "Another project may use a different system."]
  },
  {
    question: "Why should prepared timber be protected from dust and fingerprints?",
    options: ["Contamination can affect finish consistency", "It changes the written plan", "It creates more biscuit joints", "It makes the board heavier"],
    correct: 0,
    hint: "A clean surface supports even finishing.",
    strongHint: "Oil, moisture and particles can change absorption or appearance.",
    feedback: ["Correct. Contamination can create uneven or dirty results.", "The plan is unchanged.", "Joinery is already established.", "The main issue is surface quality."]
  },
  {
    question: "What should happen to oily rags and finish-contaminated waste?",
    options: ["Place them in any bin", "Take them home", "Manage them exactly as the teacher, SDS and workshop procedure direct", "Leave them spread across the bench"],
    correct: 2,
    hint: "Students must not invent a disposal method.",
    strongHint: "Finish-contaminated materials can create serious hazards if handled incorrectly.",
    feedback: ["An ordinary bin may be unsafe.", "Contaminated material must not leave without authorisation.", "Correct. Follow the authorised waste procedure.", "Leaving them on the bench creates risk."]
  },
  {
    question: "How does durability support sustainability?",
    options: ["A durable project can remain useful longer and avoid unnecessary replacement", "It allows unlimited finish use", "It removes the need for maintenance", "It makes waste procedures optional"],
    correct: 0,
    hint: "Think about the resources required to repair or replace a poor result.",
    strongHint: "Long service life is one way to use materials responsibly.",
    feedback: ["Correct. Durable, maintained work extends material life.", "Material use still needs control.", "Care and maintenance remain important.", "Waste procedures always apply."]
  }
];
window.WRITTEN_QUESTIONS = [
  {
    title: "1. Explain a systematic surface-preparation routine",
    prompt: "Explain how you would inspect and sand the Bread Board without losing the intended form or contaminating the surface.",
    minWords: 85,
    concepts: [
      {label: "full inspection", terms: ["inspect", "light", "scratch", "glue"]},
      {label: "systematic sanding", terms: ["systematic", "grain", "even", "order"]},
      {label: "preserve form", terms: ["edge", "form", "shape", "avoid rounding"]},
      {label: "dust control", terms: ["dust", "clean", "contamination"]},
      {label: "quality check", terms: ["check", "teacher", "before finishing"]}
    ],
    scaffold: ["I will begin by inspecting...", "I will sand in an orderly way by...", "To preserve the planned form...", "I will control dust by...", "Before finishing I will..."],
    prompts: ["Describe a full-surface inspection.", "Explain an orderly sanding method.", "Protect the planned form.", "Include dust or contamination control.", "Finish with a quality gate."],
    model: "I will inspect the complete bread board under good light and feel the surface for scratches, dents, glue residue or uneven areas. I will sand systematically with the grain where appropriate, working across the whole component rather than concentrating on one spot. I will protect the planned edges and curved end shape by avoiding unnecessary rounding or excessive pressure. I will keep the area clean and manage dust using the teacher-approved method. Before finishing, I will check the complete surface again and ask the teacher to confirm that it is ready."
  },
  {
    title: "2. Explain responsible oil-finish preparation",
    prompt: "Explain how you would prepare for the approved oil finish while protecting quality, safety and sustainability.",
    minWords: 95,
    concepts: [
      {label: "authorised sources", terms: ["teacher", "label", "sds", "procedure"]},
      {label: "clean protected timber", terms: ["clean", "dust", "fingerprint", "protect"]},
      {label: "controlled quantity", terms: ["only", "amount", "avoid excess", "over-application"]},
      {label: "secure materials", terms: ["container", "spill", "contamination"]},
      {label: "safe waste", terms: ["oily rag", "waste", "directed", "disposal"]}
    ],
    scaffold: ["Before collecting finish, I will...", "I will follow...", "I will use only...", "To prevent contamination...", "All oily waste will..."],
    prompts: ["Prepare the workspace and project.", "Name the authorised instructions.", "Explain controlled material use.", "Protect clean finish and timber.", "State the safe waste response."],
    model: "Before collecting the approved oil finish, I will make sure the workspace is clean and the sanded Bread Board is protected from dust, moisture and fingerprints. I will follow the teacher demonstration, product label, SDS and local workshop procedure. I will use only the amount required for the demonstrated stage because excess finish can create waste and an uneven result. I will keep containers secure and avoid returning dirty material to clean finish. Oily rags and contaminated waste will be handed over or placed exactly where the teacher directs; I will not use an ordinary bin or invent another disposal method."
  }
];
