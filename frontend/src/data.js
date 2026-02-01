
export const SKILL_CATEGORIES = {
  "Technical & Analytical": [
    "Data Analysis", "Statistics", "SQL", "Python", "Data Visualization", "Machine Learning Basics"
  ],
  "Design & Creativity": [
    "UI Design", "UX Research", "Prototyping", "Visual Storytelling", "Design Thinking"
  ],
  "Product & Business": [
    "Product Strategy", "Market Research", "Requirement Analysis", "Roadmapping", "Stakeholder Communication"
  ],
  "Engineering": [
    "Frontend Development", "Backend Development", "APIs & Integration", "Debugging"
  ],
  "People & Meta Skills": [
    "Communication", "Problem Solving", "Critical Thinking", "Time Management", "Learning Agility"
  ],
  "Creative & Performing Arts": [
    "Musical Ability", "Rhythm & Timing", "Vocal Control", "Instrument Proficiency",
    "Dance Technique", "Body Movement", "Acting Skills", "Emotional Expression",
    "Improvisation", "Drawing", "Painting", "Color Theory", "Visua Composition",
    "Storytelling", "Camera Awareness"
  ]
};

export const CAREERS = [
  // ==================== TECH & DATA ====================
  {
    id: 'data-analyst',
    title: "Data Analyst",
    domain: "Tech & Data",
    salaryRange: "6–12 LPA",
    growthRate: "High (23%)",
    marketDemand: "Very High",
    riskLevel: "Low",
    learningCurve: "Moderate",
    lifestyle: "Stable, 9-5",
    automationRisk: "Medium",
    description: "Interpret complex data sets to help companies make better business decisions.",
    coreSkills: [{ name: 'Data Analysis', level: 86 }, { name: 'SQL', level: 82 }, { name: 'Statistics', level: 74 }, { name: 'Excel/Tableau', level: 89 }],
    strengthsRequired: ["Logical thinking", "Attention to detail", "Pattern recognition"],
    tradeOffs: ["Repetitive data cleaning", "Sedentary work", "Constant upskilling needed"],
    opportunityCost: {
      description: 'Builds strong fundamentals for Data Science.',
      retained: ['Data Science', 'Business Ops', 'Financial Analysis'],
      faded: ['Graphic Design', 'Frontend Dev']
    },
    relatedCareers: ['Business Analyst', 'Data Scientist'],
    roadmap: [{ title: 'Excel & SQL', duration: '1-2 months' }, { title: 'Visualization (Tableau)', duration: '1 month' }, { title: 'Python Basics', duration: '2 months' }],
    tags: ['Data', 'Logic', 'Business']
  },
  {
    id: 'data-scientist',
    title: "Data Scientist",
    domain: "Tech & Data",
    salaryRange: "10–25 LPA",
    growthRate: "Very High (35%)",
    marketDemand: "Explosive",
    riskLevel: "Low",
    learningCurve: "Steep",
    lifestyle: "Stable but high-focus",
    automationRisk: "Low",
    description: "Build predictive models and algorithms to extract value from data.",
    coreSkills: [{ name: 'Machine Learning', level: 81 }, { name: 'Python/R', level: 93 }, { name: 'Mathematics', level: 88 }, { name: 'Deep Learning', level: 65 }],
    strengthsRequired: ["Advanced Math", "Critical Thinking", "Coding"],
    tradeOffs: ["High educational requirement", "Complex debugging", "Rapidly changing tech stack"],
    opportunityCost: {
      description: 'High entry barrier, high reward.',
      retained: ['AI Research', 'Quantitative Finance'],
      faded: ['Marketing', 'HR']
    },
    relatedCareers: ['Data Analyst', 'ML Engineer', 'AI Researcher'],
    roadmap: [{ title: 'Python & Math', duration: '3 months' }, { title: 'ML Algorithms', duration: '4 months' }, { title: 'Deep Learning', duration: 'Ongoing' }],
    tags: ['Data', 'AI', 'Math']
  },
  {
    id: 'ml-engineer',
    title: "ML Engineer",
    domain: "Tech & Data",
    salaryRange: "12–30 LPA",
    growthRate: "Extreme (40%)",
    marketDemand: "Very High",
    riskLevel: "Low",
    learningCurve: "Very Steep",
    lifestyle: "Intense, High-Focus",
    automationRisk: "Low",
    description: "Design and deploy machine learning systems and pipelines into production.",
    coreSkills: [{ name: 'Python', level: 96 }, { name: 'MLOps', level: 73 }, { name: 'System Design', level: 81 }, { name: 'TensorFlow/PyTorch', level: 85 }],
    strengthsRequired: ["Engineering mindset", "Mathematical intuition", "Problem solving"],
    tradeOffs: ["High pressure", "Complex infrastructure issues", "Continuous study"],
    opportunityCost: {
      description: 'Specialized path with massive upside.',
      retained: ['Backend Eng', 'Data Scientist'],
      faded: ['Frontend Dev', 'Design']
    },
    relatedCareers: ['Data Scientist', 'Software Engineer'],
    roadmap: [{ title: 'Software Eng Basics', duration: '6 months' }, { title: 'Model Deployment', duration: '3 months' }, { title: 'Cloud/MLOps', duration: 'Ongoing' }],
    tags: ['AI', 'Engineering', 'Coding']
  },
  {
    id: 'frontend-developer',
    title: "Frontend Developer",
    domain: "Tech & Data",
    salaryRange: "6–15 LPA",
    growthRate: "High (20%)",
    marketDemand: "High",
    riskLevel: "Low",
    learningCurve: "Moderate",
    lifestyle: "Flexible / Remote",
    automationRisk: "Medium",
    description: "Build the visible parts of websites and applications using code.",
    coreSkills: [{ name: 'React', level: 88 }, { name: 'JavaScript', level: 91 }, { name: 'CSS/Tailwind', level: 84 }, { name: 'UI/UX Principles', level: 67 }],
    strengthsRequired: ["Visual eye", "Logic", "Attention to detail"],
    tradeOffs: ["Browser compatibility hell", "Framework fatigue", "Pixel perfectionism"],
    opportunityCost: {
      description: 'Solid entry into tech with visual feedback.',
      retained: ['Fullstack', 'UX Engineering'],
      faded: ['Data Analysis', 'Sales']
    },
    relatedCareers: ['UI Engineer', 'Fullstack Developer', 'UX Designer'],
    roadmap: [{ title: 'HTML/CSS/JS', duration: '2 months' }, { title: 'React Ecosystem', duration: '2 months' }, { title: 'Portfolio Projects', duration: 'Ongoing' }],
    tags: ['Coding', 'Visual', 'Logic']
  },
  {
    id: 'software-engineer',
    title: "Software Engineer",
    domain: "Tech & Data",
    salaryRange: "7–18 LPA",
    growthRate: "Steady (15%)",
    marketDemand: "Always Needed",
    riskLevel: "Low",
    learningCurve: "Moderate-High",
    lifestyle: "Standard 9-5",
    automationRisk: "Medium",
    description: "Develop, test, and maintain software applications and systems.",
    coreSkills: [{ name: 'Data Structures', level: 85 }, { name: 'Java/C++', level: 79 }, { name: 'System Design', level: 72 }, { name: 'Database Mgmt', level: 78 }],
    strengthsRequired: ["Algorithmic thinking", "Structure", "Persistence"],
    tradeOffs: ["Legacy code maintenance", "Sitting all day", "On-call rotations"],
    opportunityCost: {
      description: 'Versatile foundation for any tech role.',
      retained: ['DevOps', 'Product Mgmt', 'Specialist roles'],
      faded: ['Pure Arts', 'Marketing']
    },
    relatedCareers: ['Frontend Developer', 'Backend Developer', 'DevOps'],
    roadmap: [{ title: 'CS Fundamentals', duration: '4 months' }, { title: '1-2 Languages', duration: '3 months' }, { title: 'Build & Deploy', duration: 'Ongoing' }],
    tags: ['Coding', 'Engineering', 'Logic']
  },
  {
    id: 'research-analyst',
    title: "Research Analyst",
    domain: "Business & Strategy",
    salaryRange: "5–10 LPA",
    growthRate: "Moderate (10%)",
    marketDemand: "Steady",
    riskLevel: "Medium",
    learningCurve: "Moderate",
    lifestyle: "Deadline-driven",
    automationRisk: "High",
    description: "Collect and analyze data to provide insights for business strategy or academic research.",
    coreSkills: [{ name: 'Research Methods', level: 84 }, { name: 'Report Writing', level: 89 }, { name: 'Data Interpretation', level: 76 }, { name: 'Critical Thinking', level: 82 }],
    strengthsRequired: ["Curiosity", "Writing", "Analytical mind"],
    tradeOffs: ["Repetitive tasks", "Lower starting pay", "Can be isolating"],
    opportunityCost: {
      description: 'Academic or corporate pivot points.',
      retained: ['Market Research', 'Consulting'],
      faded: ['Engineering', 'Sales']
    },
    relatedCareers: ['Business Analyst', 'Consultant'],
    roadmap: [{ title: 'Qualitative Methods', duration: '2 months' }, { title: 'Industry Tools', duration: '1 month' }, { title: 'Specialization', duration: 'Ongoing' }],
    tags: ['Research', 'Logic', 'Writing']
  },

  // ==================== DESIGN & PRODUCT ====================
  {
    id: 'ux-designer',
    title: "UX Designer",
    domain: "Design",
    salaryRange: "7–16 LPA",
    growthRate: "High (18%)",
    marketDemand: "High",
    riskLevel: "Low-Medium",
    learningCurve: "Moderate",
    lifestyle: "Collaborative / Creative",
    automationRisk: "Low",
    description: "Design intuitive and accessible user experiences for digital products.",
    coreSkills: [{ name: 'User Research', level: 88 }, { name: 'Wireframing', level: 83 }, { name: 'Figma', level: 92 }, { name: 'Empathy', level: 87 }],
    strengthsRequired: ["Empathy", "Creativity", "Problem-solver"],
    tradeOffs: ["Subjective feedback loops", "Justifying design decisions", "Meeting heavy"],
    opportunityCost: {
      description: 'Great balance of psych/art.',
      retained: ['Product Mgmt', 'Frontend Dev', 'User Research'],
      faded: ['Backend Dev', 'Finance']
    },
    relatedCareers: ['Product Designer', 'UI Designer'],
    roadmap: [{ title: 'Design Principles', duration: '1 month' }, { title: 'Figma Mastery', duration: '1 month' }, { title: 'Case Studies', duration: '2 months' }],
    tags: ['Creative', 'Empathy', 'Tech']
  },
  {
    id: 'ui-designer',
    title: "UI Designer",
    domain: "Design",
    salaryRange: "6–14 LPA",
    growthRate: "Stable (12%)",
    marketDemand: "Moderate-High",
    riskLevel: "Medium",
    learningCurve: "Moderate",
    lifestyle: "Visual / Detail-oriented",
    automationRisk: "Medium",
    description: "Create the visual styling and interactivity of digital interfaces.",
    coreSkills: [{ name: 'Visual Design', level: 94 }, { name: 'Color Theory', level: 89 }, { name: 'Typography', level: 85 }, { name: 'Prototyping', level: 78 }],
    strengthsRequired: ["Aesthetics", "Attention to detail", "Creativity"],
    tradeOffs: ["Subjective critique", "Keeping up with trends", "Pixel pushing"],
    opportunityCost: {
      description: 'Focus on pure visuals.',
      retained: ['Graphic Design', 'UX Design'],
      faded: ['Coding', 'Data Analysis']
    },
    relatedCareers: ['UX Designer', 'Graphic Designer', 'Frontend Dev'],
    roadmap: [{ title: 'Visual Fundamentals', duration: '2 months' }, { title: 'Tool Mastery', duration: '1 month' }, { title: 'Porterfolo', duration: 'Ongoing' }],
    tags: ['Visual', 'Creative', 'Design']
  },
  {
    id: 'product-manager',
    title: "Product Manager",
    domain: "Product & Business",
    salaryRange: "12–25 LPA",
    growthRate: "High (20%)",
    marketDemand: "High",
    riskLevel: "Medium",
    learningCurve: "Steep (Experience heavy)",
    lifestyle: "High-pressure / Meetings",
    automationRisk: "Low",
    description: "Bridge the gap between business, design, and technology to ship products.",
    coreSkills: [{ name: 'Roadmapping', level: 82 }, { name: 'Communication', level: 97 }, { name: 'Prioritization', level: 91 }, { name: 'Data Interpretation', level: 74 }],
    strengthsRequired: ["Leadership", "Big-picture thinking", "Decisiveness"],
    tradeOffs: ["Responsibility without authority", "Context switching", "Burnout risk"],
    opportunityCost: {
      description: 'Leadership path.',
      retained: ['Founder', 'Consulting', 'Operations'],
      faded: ['Senior Engineer', 'Specialist Designer']
    },
    relatedCareers: ['Business Analyst', 'Founder', 'Project Manager'],
    roadmap: [{ title: 'Agile/Scrum', duration: '1 month' }, { title: 'Product Sense', duration: 'Ongoing' }, { title: 'Ship a Product', duration: '3-6 months' }],
    tags: ['Leadership', 'Strategy', 'People']
  },
  {
    id: 'business-analyst',
    title: "Business Analyst",
    domain: "Product & Business",
    salaryRange: "7–15 LPA",
    growthRate: "Stable (12%)",
    marketDemand: "Steady",
    riskLevel: "Low",
    learningCurve: "Moderate",
    lifestyle: "Structured / Corporate",
    automationRisk: "Medium",
    description: "Analyze business processes and requirements to improve efficiency.",
    coreSkills: [{ name: 'Requirements Gathering', level: 88 }, { name: 'Process Mapping', level: 81 }, { name: 'SQL/Excel', level: 76 }, { name: 'Stakeholder Mgmt', level: 84 }],
    strengthsRequired: ["Organized", "Communicator", "Analytical"],
    tradeOffs: ["Documentation heavy", "Bureaucracy", "Less creative"],
    opportunityCost: {
      description: 'Corporate stability.',
      retained: ['Project Mgmt', 'Product Mgmt', 'Data Analysis'],
      faded: ['Creative Arts', 'Pure Tech']
    },
    relatedCareers: ['Data Analyst', 'Product Manager', 'Consultant'],
    roadmap: [{ title: 'Business Process', duration: '1 month' }, { title: 'Data Tools', duration: '2 months' }, { title: 'Certification', duration: 'Optional' }],
    tags: ['Business', 'Logic', 'Strategy']
  },

  // ==================== CREATIVE ARTS ====================
  {
    id: 'musician',
    title: "Musician",
    domain: "Creative Arts",
    salaryRange: "Variable",
    growthRate: "Unpredictable",
    marketDemand: "Niche",
    riskLevel: "High",
    learningCurve: "Steep (Lifetime)",
    lifestyle: "Irregular / Gigs",
    automationRisk: "Low",
    description: "Create and perform music across various genres and instruments.",
    coreSkills: [{ name: 'Instrument Mastery', level: 94 }, { name: 'Music Theory', level: 82 }, { name: 'Composition', level: 78 }, { name: 'Performance', level: 91 }],
    strengthsRequired: ["Musical ear", "Creativity", "Discipline"],
    tradeOffs: ["Financial instability", "Physical repetition injury", "Unsocial hours"],
    opportunityCost: {
      description: 'Passion-driven career with high variance.',
      retained: ['Teaching', 'Audio Eng', 'Production'],
      faded: ['Corporate Roles', 'Accounting']
    },
    relatedCareers: ['Music Producer', 'Sound Designer', 'Singer'],
    roadmap: [{ title: 'Practice', duration: 'Daily' }, { title: 'Gigs/Networking', duration: 'Ongoing' }, { title: 'Release Music', duration: 'Variable' }],
    tags: ['Creative', 'Art', 'Performance']
  },
  {
    id: 'singer',
    title: "Singer",
    domain: "Creative Arts",
    salaryRange: "Variable",
    growthRate: "Unpredictable",
    marketDemand: "Competitive",
    riskLevel: "High",
    learningCurve: "Steep",
    lifestyle: "Irregular / Travel",
    automationRisk: "Low",
    description: "Use the voice as an instrument to convey melody and emotion.",
    coreSkills: [{ name: 'Vocal Control', level: 93 }, { name: 'Pitch Accuracy', level: 89 }, { name: 'Stage Presence', level: 85 }, { name: 'Breath Support', level: 81 }],
    strengthsRequired: ["Vocal talent", "Confidence", "Expression"],
    tradeOffs: ["Vocal health anxiety", "Public scrutiny", "Instability"],
    opportunityCost: {
      description: 'Unique biological skill.',
      retained: ['Voice Coach', 'Acting'],
      faded: ['Desk Jobs']
    },
    relatedCareers: ['Voice Artist', 'Performer', 'Actor'],
    roadmap: [{ title: 'Vocal Training', duration: 'Ongoing' }, { title: 'Performance', duration: 'Ongoing' }, { title: 'Recording', duration: '3 months' }],
    tags: ['Creative', 'Art', 'Performance']
  },
  {
    id: 'dancer',
    title: "Dancer",
    domain: "Creative Arts",
    salaryRange: "Low–Medium (Gigs)",
    growthRate: "Limited (Age)",
    marketDemand: "Role-specific",
    riskLevel: "Very High",
    learningCurve: "Steep (Physical)",
    lifestyle: "Physically demanding",
    automationRisk: "None",
    description: "Express stories and emotions through movement and choreography.",
    coreSkills: [{ name: 'Flexibility', level: 91 }, { name: 'Choreography', level: 84 }, { name: 'Rhythm', level: 93 }, { name: 'Stamina', level: 95 }],
    strengthsRequired: ["Physical fitness", "Kinesthetic intelligence", "Discipline"],
    tradeOffs: ["Short career span", "Injury risk", "Physical exhaustion"],
    opportunityCost: {
      description: 'Physical career often ending by 35.',
      retained: ['Choreography', 'Fitness Training', 'Teaching'],
      faded: ['Sedentary Roles']
    },
    relatedCareers: ['Choreographer', 'Dance Instructor'],
    roadmap: [{ title: 'Training', duration: 'Daily' }, { title: 'Auditions', duration: 'Ongoing' }, { title: 'Company Work', duration: 'Variable' }],
    tags: ['Creative', 'Art', 'Performance', 'Physical']
  },
  {
    id: 'actor',
    title: "Actor",
    domain: "Creative Arts",
    salaryRange: "Variable",
    growthRate: "Unpredictable",
    marketDemand: "Cyclical",
    riskLevel: "Very High",
    learningCurve: "Moderate-Steep",
    lifestyle: "Unstable / Auditions",
    automationRisk: "Low (AI is competing)",
    description: "Portray characters in theater, film, television, and other media.",
    coreSkills: [{ name: 'Acting Method', level: 88 }, { name: 'Emotional Range', level: 92 }, { name: 'Memorization', level: 79 }, { name: 'Improv', level: 75 }],
    strengthsRequired: ["Empathy", "Resilience", "Charisma"],
    tradeOffs: ["Constant rejection", "Loss of privacy (if famous)", "Unemployment spells"],
    opportunityCost: {
      description: 'Deep emotional work.',
      retained: ['Directing', 'Teaching', 'Public Speaking'],
      faded: ['Technical Roles']
    },
    relatedCareers: ['Voice Actor', 'Director', 'Singer'],
    roadmap: [{ title: 'Classes', duration: '6-12 months' }, { title: 'Short Films', duration: 'Ongoing' }, { title: 'Representation', duration: 'Hard' }],
    tags: ['Creative', 'Art', 'Performance', 'Storytelling']
  },
  {
    id: 'filmmaker',
    title: "Filmmaker",
    domain: "Creative Arts",
    salaryRange: "Project-based",
    growthRate: "Network-driven",
    marketDemand: "Content is King",
    riskLevel: "High",
    learningCurve: "Steep (Tech + Art)",
    lifestyle: "High-stress / On-set",
    automationRisk: "Low",
    description: "Direct and produce visual stories for screen.",
    coreSkills: [{ name: 'Visual Storytelling', level: 94 }, { name: 'Directing', level: 87 }, { name: 'Editing', level: 81 }, { name: 'Leadership', level: 85 }],
    strengthsRequired: ["Vision", "Leadership", "Technical eye"],
    tradeOffs: ["Long hours", "Huge financial risk (indie)", "Managing diverse teams"],
    opportunityCost: {
      description: 'Master storyteller.',
      retained: ['Video Production', 'Advertising', 'Content Creation'],
      faded: ['Routine Office Work']
    },
    relatedCareers: ['Director', 'Editor', 'Screenwriter', 'Visual Artist'],
    roadmap: [{ title: 'Short Films', duration: '1-2 years' }, { title: 'Festivals', duration: 'Ongoing' }, { title: 'Features', duration: 'Variable' }],
    tags: ['Creative', 'Art', 'Storytelling']
  },

  // ==================== NEW EXPANSION: AI & DATA ====================
  {
    id: 'ml-engineer', title: "ML Engineer", domain: "AI & Data",
    description: "Design and deploy machine learning models at scale.",
    salaryRange: "15–40 LPA", growthRate: "Explosive (45%)", marketDemand: "Critical",
    coreSkills: [{ name: 'Python', level: 92 }, { name: 'TensorFlow', level: 88 }, { name: 'Math', level: 85 }],
    tags: ['Tech', 'Data', 'Coding'],
    strengthsRequired: ["Mathematical aptitude", "Problem solving"],
    tradeOffs: ["Keep up with rapid research", "High complexity debugging"],
    riskLevel: "Low",
    lifestyle: "Intense but flexible"
  },
  {
    id: 'ai-researcher', title: "AI Researcher", domain: "AI & Data",
    description: "Push the boundaries of artificial intelligence algorithms.",
    salaryRange: "20–60 LPA", growthRate: "Very High", marketDemand: "Niche but High",
    coreSkills: [{ name: 'Deep Learning', level: 95 }, { name: 'Research', level: 90 }, { name: 'Algorithm Design', level: 92 }],
    tags: ['Tech', 'Data', 'Research'],
    strengthsRequired: ["Abstract thinking", "Persistence"],
    tradeOffs: ["Publish or perish environment", "Long feedback loops"],
    riskLevel: "Medium",
    lifestyle: "Academic / Lab based"
  },
  {
    id: 'data-engineer', title: "Data Engineer", domain: "AI & Data",
    description: "Build the pipelines that feed data to AI models.",
    salaryRange: "12–30 LPA", growthRate: "High", marketDemand: "High",
    coreSkills: [{ name: 'Spark', level: 85 }, { name: 'SQL', level: 90 }, { name: 'Cloud Infra', level: 80 }],
    tags: ['Tech', 'Data', 'Coding'],
    strengthsRequired: ["System design", "Reliability focus"],
    tradeOffs: ["Backend heavy", "Less 'flashy' than AI"],
    riskLevel: "Low",
    lifestyle: "Standard Tech"
  },
  {
    id: 'applied-scientist', title: "Applied Scientist", domain: "AI & Data",
    description: "Bridge the gap between theoretical AI and product.",
    salaryRange: "18–45 LPA", growthRate: "High", marketDemand: "High",
    coreSkills: [{ name: 'Prototyping', level: 88 }, { name: 'ML', level: 85 }, { name: 'Product Sense', level: 75 }],
    tags: ['Tech', 'Data', 'Product'],
    strengthsRequired: ["Pragmatism", "Innovation"],
    tradeOffs: ["Balancing research vs speed"],
    riskLevel: "Medium",
    lifestyle: "Fast-paced"
  },
  {
    id: 'nlp-engineer', title: "NLP Engineer", domain: "AI & Data",
    description: "Teach computers to understand human language.",
    salaryRange: "15–35 LPA", growthRate: "High", marketDemand: "High",
    coreSkills: [{ name: 'Linguistics', level: 80 }, { name: 'Transformers', level: 90 }, { name: 'Python', level: 90 }],
    tags: ['Tech', 'Data', 'Language'],
    strengthsRequired: ["Linguistic intuition", "Detail oriented"],
    tradeOffs: ["Ambiguous data"],
    riskLevel: "Low",
    lifestyle: "Standard Tech"
  },

  // ==================== NEW EXPANSION: CORE CS ====================
  {
    id: 'backend-dev', title: "Backend Engineer", domain: "Core CS",
    description: "Build the server-side logic that powers applications.",
    salaryRange: "8–25 LPA", growthRate: "Steady", marketDemand: "Evergreen",
    coreSkills: [{ name: 'Java/Go', level: 90 }, { name: 'Databases', level: 85 }, { name: 'API Design', level: 88 }],
    tags: ['Tech', 'Coding'],
    strengthsRequired: ["Logic", "Architecture"],
    tradeOffs: ["On-call rotations"],
    riskLevel: "Low",
    lifestyle: "Teams / Agile"
  },
  {
    id: 'systems-eng', title: "Systems Engineer", domain: "Core CS",
    description: "Optimize the underlying systems and infrastructure.",
    salaryRange: "10–30 LPA", growthRate: "Steady", marketDemand: "High",
    coreSkills: [{ name: 'OS Internals', level: 85 }, { name: 'C/C++', level: 90 }, { name: 'Network', level: 80 }],
    tags: ['Tech', 'Coding', 'Systems'],
    strengthsRequired: ["Depth of knowledge", "Performance focused"],
    tradeOffs: ["Complex debugging", "Legacy code"],
    riskLevel: "Low",
    lifestyle: "Deep Work"
  },
  {
    id: 'cloud-eng', title: "Cloud Engineer", domain: "Core CS",
    description: "Architect scalable solutions on AWS/GCP/Azure.",
    salaryRange: "10–28 LPA", growthRate: "High", marketDemand: "High",
    coreSkills: [{ name: 'AWS/Azure', level: 90 }, { name: 'Terraform', level: 85 }, { name: 'Architecture', level: 80 }],
    tags: ['Tech', 'Infra'],
    strengthsRequired: ["Big picture thinking"],
    tradeOffs: ["Complexity management"],
    riskLevel: "Low",
    lifestyle: "On-call possible"
  },
  {
    id: 'dist-systems', title: "Dist. Systems Eng", domain: "Core CS",
    description: "Build systems that run across thousands of machines.",
    salaryRange: "20–50 LPA", growthRate: "High", marketDemand: "Elite",
    coreSkills: [{ name: 'Consensus Algos', level: 95 }, { name: 'Networking', level: 90 }, { name: 'Go/Rust', level: 90 }],
    tags: ['Tech', 'Coding', 'Hardcore'],
    strengthsRequired: ["Mathematical precision"],
    tradeOffs: ["Extremely hard problems"],
    riskLevel: "Low",
    lifestyle: "High Pressure"
  },
  {
    id: 'compiler-eng', title: "Compiler Engineer", domain: "Core CS",
    description: "Design languages and optimize code execution.",
    salaryRange: "15–40 LPA", growthRate: "Stable", marketDemand: "Niche",
    coreSkills: [{ name: 'LLVM', level: 90 }, { name: 'C++', level: 95 }, { name: 'Assembly', level: 85 }],
    tags: ['Tech', 'Coding', 'Niche'],
    strengthsRequired: ["Attention to detail", "Theory"],
    tradeOffs: ["Very niche market"],
    riskLevel: "Medium",
    lifestyle: "Deep Work"
  },

  // ==================== NEW EXPANSION: SECURITY ====================
  {
    id: 'security-analyst', title: "Cybersecurity Analyst", domain: "Security",
    description: "Monitor and protect networks from cyber threats.",
    salaryRange: "8–18 LPA", growthRate: "Very High", marketDemand: "High",
    coreSkills: [{ name: 'NetSec', level: 80 }, { name: 'SIEM Tools', level: 85 }, { name: 'Incident Resp', level: 80 }],
    tags: ['Tech', 'Security'],
    strengthsRequired: ["Vigilance", "Quick reaction"],
    tradeOffs: ["High stress alerts", "Shift work"],
    riskLevel: "Low",
    lifestyle: "Shift / 24x7"
  },
  {
    id: 'security-eng', title: "Security Engineer", domain: "Security",
    description: "Build secure systems and automate defenses.",
    salaryRange: "12–28 LPA", growthRate: "High", marketDemand: "High",
    coreSkills: [{ name: 'AppSec', level: 88 }, { name: 'Python', level: 85 }, { name: 'Cryptography', level: 75 }],
    tags: ['Tech', 'Security', 'Coding'],
    strengthsRequired: ["Paranoia (Healthy)", "Engineering"],
    tradeOffs: ["Constant cat & mouse gain"],
    riskLevel: "Low",
    lifestyle: "Standard Tech"
  },
  {
    id: 'pentester', title: "Penetration Tester", domain: "Security",
    description: "Ethical hacking to find vulnerabilities before bad guys do.",
    salaryRange: "10–30 LPA", growthRate: "High", marketDemand: "High",
    coreSkills: [{ name: 'Ethical Hacking', level: 90 }, { name: 'Kali Linux', level: 90 }, { name: 'Scripting', level: 80 }],
    tags: ['Tech', 'Security', 'Hacking'],
    strengthsRequired: ["Creativity", "Persistence"],
    tradeOffs: ["Legal boundaries", "Reporting paperwork"],
    riskLevel: "Medium",
    lifestyle: "Project based"
  },

  // ==================== NEW EXPANSION: HARDWARE ====================
  {
    id: 'embedded', title: "Embedded Systems Eng", domain: "Hardware",
    description: "Code that runs on hardware devices (IoT, Cars).",
    salaryRange: "8–22 LPA", growthRate: "Steady", marketDemand: "High",
    coreSkills: [{ name: 'C/C++', level: 90 }, { name: 'RTOS', level: 80 }, { name: 'Electronics', level: 70 }],
    tags: ['Tech', 'Hardware', 'Coding'],
    strengthsRequired: ["Low level focus"],
    tradeOffs: ["Hardware constraints"],
    riskLevel: "Low",
    lifestyle: "Lab / Office"
  },
  {
    id: 'robotics', title: "Robotics Engineer", domain: "Hardware",
    description: "Design and program autonomous robots.",
    salaryRange: "10–25 LPA", growthRate: "Growing", marketDemand: "Medium",
    coreSkills: [{ name: 'ROS', level: 85 }, { name: 'Control Theory', level: 80 }, { name: 'C++', level: 85 }],
    tags: ['Tech', 'Hardware', 'AI'],
    strengthsRequired: ["Multidisciplinary"],
    tradeOffs: ["Complex integration"],
    riskLevel: "Medium",
    lifestyle: "Lab heavy"
  },
  {
    id: 'vlsi', title: "VLSI Engineer", domain: "Hardware",
    description: "Design microchips and integrated circuits.",
    salaryRange: "12–35 LPA", growthRate: "Steady", marketDemand: "Niche",
    coreSkills: [{ name: 'Verilog', level: 90 }, { name: 'Digital Design', level: 90 }, { name: 'Physics', level: 75 }],
    tags: ['Tech', 'Hardware', 'Chip'],
    strengthsRequired: ["Precision"],
    tradeOffs: ["Long design cycles"],
    riskLevel: "Low",
    lifestyle: "Corporate"
  },

  // ==================== NEW EXPANSION: SCIENCE ====================
  {
    id: 'research-scientist', title: "Research Scientist", domain: "Science",
    description: "Conduct experiments to advance scientific knowledge.",
    salaryRange: "10–30 LPA", growthRate: "Steady", marketDemand: "Niche",
    coreSkills: [{ name: 'Methodology', level: 95 }, { name: 'Data Analysis', level: 90 }, { name: 'Writing', level: 80 }],
    tags: ['Science', 'Research'],
    strengthsRequired: ["Curiosity", "Patience"],
    tradeOffs: ["Grant funding pressure"],
    riskLevel: "Medium",
    lifestyle: "Academic"
  },
  {
    id: 'comp-physicist', title: "Computational Physicist", domain: "Science",
    description: "Simulate physical systems using code.",
    salaryRange: "12–30 LPA", growthRate: "Niche", marketDemand: "Niche",
    coreSkills: [{ name: 'Simulation', level: 90 }, { name: 'Math', level: 95 }, { name: 'HPC', level: 80 }],
    tags: ['Science', 'Coding', 'Physics'],
    strengthsRequired: ["Math wizardry"],
    tradeOffs: ["Niche job market"],
    riskLevel: "High",
    lifestyle: "Academic / Tech"
  },
  {
    id: 'bioinfo', title: "Bioinformatics Eng", domain: "Science",
    description: "Analyze biological data (DNA/RNA) using software.",
    salaryRange: "10–25 LPA", growthRate: "Growing", marketDemand: "High",
    coreSkills: [{ name: 'Python/R', level: 85 }, { name: 'Genomics', level: 80 }, { name: 'Stats', level: 85 }],
    tags: ['Science', 'Coding', 'Bio'],
    strengthsRequired: ["Cross-domain knowledge"],
    tradeOffs: ["Complexity"],
    riskLevel: "Medium",
    lifestyle: "Lab / Office"
  }
];

export const INTERESTS = [
  'Creative Arts', 'Coding', 'Solving Puzzles', 'Helping People',
  'Finance', 'Writing', 'Gaming', 'Designing', 'Management',
  'Technology', 'Data', 'Psychology', 'Music', 'Performing', 'Film'
];

export const SIMILARITY_DATA = {
  nodes: [
    // --- Existing Core ---
    { id: 'data-scientist', label: 'Data Scientist', group: 'AI' },
    { id: 'data-analyst', label: 'Data Analyst', group: 'AI' },
    { id: 'ux-designer', label: 'UX Designer', group: 'Design' },
    { id: 'product-manager', label: 'Product Manager', group: 'Product' },
    { id: 'musician', label: 'Musician', group: 'Arts' },

    // --- CS & Backend (Group: CS) ---
    { id: 'backend-dev', label: 'Backend Eng', group: 'CS' },
    { id: 'systems-eng', label: 'Systems Eng', group: 'CS' },
    { id: 'devops', label: 'DevOps Eng', group: 'CS' },
    { id: 'cloud-eng', label: 'Cloud Eng', group: 'CS' },
    { id: 'sre', label: 'SRE', group: 'CS' },
    { id: 'fullstack', label: 'Fullstack Dev', group: 'CS' },

    // --- AI & Data (Group: AI) ---
    { id: 'ml-engineer', label: 'ML Engineer', group: 'AI' },
    { id: 'ai-researcher', label: 'AI Researcher', group: 'AI' },
    { id: 'data-engineer', label: 'Data Engineer', group: 'AI' },
    { id: 'applied-scientist', label: 'Applied Scientist', group: 'AI' },
    { id: 'nlp-engineer', label: 'NLP Engineer', group: 'AI' },

    // --- Cybersecurity (Group: Security) ---
    { id: 'security-analyst', label: 'Security Analyst', group: 'Security' },
    { id: 'ethical-hacker', label: 'Ethical Hacker', group: 'Security' },
    { id: 'security-eng', label: 'Security Eng', group: 'Security' },
    { id: 'forensics', label: 'Digital Forensics', group: 'Security' },
    { id: 'soc-analyst', label: 'SOC Analyst', group: 'Security' },

    // --- Electronics & Hardware (Group: Hardware) ---
    { id: 'embedded', label: 'Embedded Sys', group: 'Hardware' },
    { id: 'robotics', label: 'Robotics Eng', group: 'Hardware' },
    { id: 'iot-eng', label: 'IoT Engineer', group: 'Hardware' },
    { id: 'vlsi', label: 'VLSI Engineer', group: 'Hardware' },
    { id: 'hardware-design', label: 'Hardware Design', group: 'Hardware' },

    // --- Pure & Applied Sciences (Group: Science) ---
    { id: 'research-scientist', label: 'Research Scientist', group: 'Science' },
    { id: 'comp-physicist', label: 'Comp. Physicist', group: 'Science' },
    { id: 'bioinfo', label: 'Bioinformatician', group: 'Science' },
    { id: 'chemist', label: 'Comp. Chemist', group: 'Science' },
    { id: 'climate', label: 'Climate Scientist', group: 'Science' },

    // --- Engineering & Applied Tech (Group: EngTech) ---
    { id: 'mech-design', label: 'Mech Design', group: 'EngTech' },
    { id: 'mechatronics', label: 'Mechatronics', group: 'EngTech' },
    { id: 'auto-soft', label: 'Automotive Soft', group: 'EngTech' },
    { id: 'aerospace', label: 'Aerospace Eng', group: 'EngTech' },
  ],
  links: [
    // CS Cluster
    { source: 'backend-dev', target: 'systems-eng', value: 8 },
    { source: 'backend-dev', target: 'devops', value: 7 },
    { source: 'devops', target: 'cloud-eng', value: 9 },
    { source: 'cloud-eng', target: 'sre', value: 8 },
    { source: 'sre', target: 'systems-eng', value: 7 },
    { source: 'fullstack', target: 'backend-dev', value: 6 },

    // AI Cluster
    { source: 'data-scientist', target: 'ml-engineer', value: 9 },
    { source: 'ml-engineer', target: 'ai-researcher', value: 8 },
    { source: 'ml-engineer', target: 'nlp-engineer', value: 8 },
    { source: 'ai-researcher', target: 'applied-scientist', value: 7 },
    { source: 'data-scientist', target: 'data-analyst', value: 6 },
    { source: 'data-engineer', target: 'data-scientist', value: 7 },
    { source: 'data-engineer', target: 'backend-dev', value: 5 }, // Cross-domain

    // Security Cluster
    { source: 'security-analyst', target: 'soc-analyst', value: 8 },
    { source: 'security-eng', target: 'ethical-hacker', value: 7 },
    { source: 'ethical-hacker', target: 'forensics', value: 6 },
    { source: 'security-eng', target: 'devops', value: 4 }, // DevSecOps
    { source: 'security-eng', target: 'backend-dev', value: 3 },

    // Hardware Cluster
    { source: 'embedded', target: 'iot-eng', value: 9 },
    { source: 'embedded', target: 'robotics', value: 7 },
    { source: 'robotics', target: 'mechatronics', value: 8 }, // Cross to EngTech
    { source: 'vlsi', target: 'hardware-design', value: 8 },
    { source: 'hardware-design', target: 'embedded', value: 6 },

    // Science Cluster
    { source: 'comp-physicist', target: 'research-scientist', value: 7 },
    { source: 'bioinfo', target: 'data-scientist', value: 5 }, // Bio-Data
    { source: 'chemist', target: 'research-scientist', value: 6 },
    { source: 'climate', target: 'data-analyst', value: 4 }, // Climate Data

    // EngTech Cluster
    { source: 'mech-design', target: 'aerospace', value: 7 },
    { source: 'mechatronics', target: 'auto-soft', value: 8 },
    { source: 'auto-soft', target: 'embedded', value: 6 }, // Cross to Hardware
    { source: 'aerospace', target: 'systems-eng', value: 4 }
  ]
};

export const PROFILE_CONSTANTS = {
  SKILLS: [
    { id: 'coding', label: 'Coding & Tech' },
    { id: 'data', label: 'Data & Analysis' },
    { id: 'design', label: 'Design & Creative' },
    { id: 'business', label: 'Business & Strategy' },
    { id: 'people', label: 'People & Comm' },
    { id: 'arts', label: 'Arts & Performance' }
  ],
  MOTIVATIONS: [
    { id: 'money', label: 'Money' },
    { id: 'impact', label: 'Social Impact' },
    { id: 'creative', label: 'Creative Freedom' },
    { id: 'stability', label: 'Job Stability' },
    { id: 'growth', label: 'Rapid Growth' },
    { id: 'fame', label: 'Fame & Recognition' }
  ],
  LEARNING: [
    { id: 'short', label: 'Short Curve', desc: 'Quick to start' },
    { id: 'medium', label: 'Medium', desc: 'Moderate effort' },
    { id: 'deep', label: 'Long & Deep', desc: 'High commitment' }
  ],
  RISK: [
    { id: 'low', label: 'Stable Path' },
    { id: 'medium', label: 'Balanced' },
    { id: 'high', label: 'High Reward Risk' }
  ]
};
