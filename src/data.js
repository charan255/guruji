
export const CAREERS = [
  {
    id: 'ux-designer',
    title: 'UX Designer',
    category: 'Creative Tech',
    match: 92,
    salary: '$85k - $130k',
    growth: '+15% (High)',
    description: 'Design intuitive and accessible user experiences for digital products.',
    reasoning: 'Your high empathy and visual thinking skills match this role perfectly.',
    skills: [
      { name: 'Wireframing', level: 70 },
      { name: 'User Research', level: 40 },
      { name: 'Prototyping', level: 85 },
      { name: 'UI Design', level: 60 }
    ],
    roadmap: [
      { title: 'Learn Figma & Design Systems', duration: '4-6 weeks' },
      { title: 'Build portfolio with 3 case studies', duration: '2 months' },
      { title: 'Apply for Junior UX roles', duration: 'Ongoing' }
    ],
    risk: 'Medium. Requires constant portfolio updates and keeping up with tools.',
    gains: [
      'Strong portfolio-based career',
      'High creative autonomy',
      'Remote work flexibility'
    ],
    tradeOffs: [
      'Less focus on backend logic',
      'Subjective stakeholder feedback loops',
      'Slower transition to heavy coding roles'
    ],
    opportunityCost: {
      description: 'Keeps you close to Product Management but limits deeper Engineering pivots.',
      retained: ['Product Design', 'Frontend Dev', 'User Research'],
      faded: ['Backend Dev', 'Data Science', 'DevOps']
    },
    comparison: {
      type: "Creative & Technical",
      learning: "Medium (Portfolio based)",
      stability: "High",
      flexibility: "High",
      lifestyle: "Deadline driven, Creative",
      focus: "User experience and visual interfaces"
    },
    tags: ['Creative', 'Tech', 'Remote']
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'Analytics',
    match: 85,
    salary: '$100k - $160k',
    growth: '+22% (Very High)',
    description: 'Extract insights from complex data sets to drive business decisions.',
    reasoning: 'Your analytical mindset and logical problem solving are key assets.',
    skills: [
      { name: 'Python/R', level: 30 },
      { name: 'Statistics', level: 60 },
      { name: 'Machine Learning', level: 10 },
      { name: 'Data Viz', level: 50 }
    ],
    roadmap: [
      { title: 'Master Python & SQL', duration: '2 months' },
      { title: 'Learn ML Algorithms', duration: '3 months' },
      { title: 'Kaggle Competitions', duration: 'Ongoing' }
    ],
    risk: 'Low. High demand but steep learning curve.',
    gains: [
      'High salary potential',
      'Problem solving at scale',
      'Cross-industry demand'
    ],
    tradeOffs: [
      'Requires continuous academic study',
      'Less visual creativity',
      'Can be isolating individual work'
    ],
    opportunityCost: {
      description: 'Solid foundation for AI roles but distances you from creative UI work.',
      retained: ['AI Engineer', 'Business Analyst', 'Backend Dev'],
      faded: ['UX Design', 'Brand Strategy', 'Frontend Dev']
    },
    comparison: {
      type: "Analytical & Mathematical",
      learning: "Long (Deep Tech)",
      stability: "Very High",
      flexibility: "Medium",
      lifestyle: "Intellectually demanding, Independent",
      focus: "Data patterns and predictive modeling"
    },
    tags: ['Math', 'Coding', 'High Pay']
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    category: 'Business',
    match: 78,
    salary: '$95k - $150k',
    growth: '+10% (Stable)',
    description: 'Bridge the gap between business, design, and technology.',
    reasoning: 'You enjoy strategic thinking but have a moderate interest in coding.',
    skills: [
      { name: 'Agile', level: 20 },
      { name: 'Communication', level: 90 },
      { name: 'Roadmapping', level: 40 },
      { name: 'Analytics', level: 50 }
    ],
    roadmap: [
      { title: 'Agile Certification', duration: '1 month' },
      { title: 'Build a side project', duration: '3 months' },
      { title: 'Networking', duration: 'Ongoing' }
    ],
    risk: 'High. High stress and requires influencing without authority.',
    gains: [
      'Leadership experience',
      'Strategic business impact',
      'Versatile skillset'
    ],
    tradeOffs: [
      'High context switching',
      'Less hands-on building',
      'Responsibility without direct authority'
    ],
    opportunityCost: {
      description: 'Open doors to Leadership/CEO paths but risks technical skill atrophy.',
      retained: ['Strategy', 'Project Mgmt', 'Marketing'],
      faded: ['Senior Engineering', 'Specialized Design', 'Research']
    },
    comparison: {
      type: "Strategic & People-focused",
      learning: "Medium (Experience based)",
      stability: "Medium",
      flexibility: "High",
      lifestyle: "High pressure, Collaborative",
      focus: "Business value and team alignment"
    },
    tags: ['Leadership', 'Strategy', 'People']
  }
];

export const INTERESTS = [
  'Creative Arts', 'Coding', 'Solving Puzzles', 'Helping People',
  'Finance', 'Writing', 'Gaming', 'Designing', 'Management'
];

export const SIMULATION_SCENARIO = {
  title: "The Data Insight Challenge",
  role: "Data Analyst",
  description: "You've been given a dataset related to business performance. Your goal is to analyze the data, interpret trends, and make data-driven decisions.",
  dataset: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    values: [120, 150, 130, 180, 210]
  },
  questions: [
    {
      id: 1,
      text: "What trend do you observe in the data?",
      options: [
        { id: "A", text: "Sales are consistently decreasing" },
        { id: "B", text: "Sales show an overall upward trend" },
        { id: "C", text: "Sales are completely random" }
      ],
      correct: "B"
    },
    {
      id: 2,
      text: "Which month shows the highest growth?",
      options: [
        { id: "A", text: "February" },
        { id: "B", text: "April" },
        { id: "C", text: "May" }
      ],
      correct: "C"
    },
    {
      id: 3,
      text: "What action would you recommend based on this data?",
      options: [
        { id: "A", text: "Increase marketing spend to sustain growth" },
        { id: "B", text: "Reduce product offerings due to volatility" },
        { id: "C", text: "Take no action" }
      ],
      correct: "A"
    }
  ],
  results: {
    feedback: [
      "Strong analytical thinking",
      "Good trend identification",
      "Data-driven decision making: High"
    ],
    metrics: {
      enjoyment: "High",
      aptitude: "85/100",
      matchImpact: "+10%"
    }
  }
};


export const SIMILARITY_DATA = {
  nodes: [
    // Center (Level 0)
    { id: 'ux', label: 'UX Designer', level: 0, angle: 0, distance: 0, color: '#8b5cf6', size: 80 },

    // Level 1 (Directly Related)
    { id: 'pd', label: 'Product Designer', level: 1, angle: 0, distance: 160, color: '#f43f5e', size: 65 },
    { id: 'fe', label: 'Frontend Dev', level: 1, angle: 120, distance: 160, color: '#3b82f6', size: 65 },
    { id: 'ur', label: 'User Researcher', level: 1, angle: 240, distance: 160, color: '#10b981', size: 65 },

    // Level 2 (Specializations/Adjacent)
    { id: 'do', label: 'Design Ops', level: 2, angle: 30, distance: 260, color: '#fbbf24', size: 50 },
    { id: 'ix', label: 'Interaction Des.', level: 2, angle: 330, distance: 260, color: '#c084fc', size: 50 },

    { id: 'ui', label: 'UI Engineer', level: 2, angle: 100, distance: 260, color: '#60a5fa', size: 50 },
    { id: 'acc', label: 'Accessibility Spec.', level: 2, angle: 140, distance: 260, color: '#34d399', size: 50 },

    { id: 'cx', label: 'CX Strategist', level: 2, angle: 220, distance: 260, color: '#f472b6', size: 50 },
    { id: 'sa', label: 'Service Designer', level: 2, angle: 260, distance: 260, color: '#fb923c', size: 50 }
  ],
  links: [
    // L0 -> L1 (Strong)
    { source: 'ux', target: 'pd', strength: 'strong', skills: ['End-to-End Design', 'Strategy'] },
    { source: 'ux', target: 'fe', strength: 'strong', skills: ['Design Systems', 'Prototyping'] },
    { source: 'ux', target: 'ur', strength: 'strong', skills: ['Empathy', 'Testing'] },

    // L1 -> L2 (Medium/Specialized)
    { source: 'pd', target: 'do', strength: 'medium', skills: ['Process', 'Tooling'] },
    { source: 'pd', target: 'ix', strength: 'medium', skills: ['Micro-interactions', 'Flows'] },

    { source: 'fe', target: 'ui', strength: 'medium', skills: ['React', 'CSS Architecture'] },
    { source: 'fe', target: 'acc', strength: 'medium', skills: ['ARIA', 'Inclusive Design'] },

    { source: 'ur', target: 'cx', strength: 'medium', skills: ['Journey Mapping', 'NPS'] },
    { source: 'ur', target: 'sa', strength: 'medium', skills: ['Blueprints', 'Ecosystems'] },

    // Cross-links (Weak/Adjacent)
    { source: 'fe', target: 'pd', strength: 'weak', skills: ['Collaboration'] },
    { source: 'ix', target: 'fe', strength: 'weak', skills: ['Animation'] },
    { source: 'acc', target: 'ux', strength: 'weak', skills: ['Universal Design'] }
  ]
};

export const PROFILE_CONSTANTS = {
  SKILLS: [
    { id: 'coding', label: 'Coding / Technical' },
    { id: 'math', label: 'Math & Logic' },
    { id: 'comm', label: 'Communication' },
    { id: 'creative', label: 'Creativity' }
  ],
  MOTIVATIONS: [
    { id: 'money', label: 'Money' },
    { id: 'impact', label: 'Social Impact' },
    { id: 'creative', label: 'Creative Freedom' },
    { id: 'stability', label: 'Job Stability' },
    { id: 'growth', label: 'Rapid Growth' }
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
