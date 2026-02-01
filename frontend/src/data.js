
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
  // ... Technical Careers (Retained) ...
  {
    id: 'data-analyst', title: 'Data Analyst', category: 'Data', match: 0, salary: '$65k - $110k', growth: '+23%',
    description: 'Interpret complex data sets to help companies make better business decisions.',
    reasoning: 'Matches your interest in patterns and logic.',
    skills: [{ name: 'Data Analysis', level: 90 }, { name: 'SQL', level: 85 }, { name: 'Statistics', level: 70 }, { name: 'Data Visualization', level: 80 }],
    related: ['Business Analyst', 'Data Scientist', 'Operations Analyst'],
    roadmap: [{ title: 'Learn Excel & SQL', duration: '1-2 months' }, { title: 'Master Tableau', duration: '1 month' }, { title: 'Python', duration: '2 months' }],
    risk: 'Moderate automation risk.', tradeOffs: ['Repetitive data cleaning', 'Sedentary work'],
    opportunityCost: { description: 'Builds strong fundamentals for Data Science.', retained: ['Data Science', 'Business Ops'], faded: ['Graphic Design', 'Frontend Dev'] },
    tags: ['Data', 'Logic', 'Business']
  },
  {
    id: 'ux-designer', title: 'UX Designer', category: 'Design', match: 0, salary: '$85k - $130k', growth: '+15%',
    description: 'Design intuitive and accessible user experiences for digital products.',
    reasoning: 'Perfect for empathetic problem solvers who love design.',
    skills: [{ name: 'UX Research', level: 90 }, { name: 'Prototyping', level: 85 }, { name: 'UI Design', level: 80 }, { name: 'Design Thinking', level: 90 }],
    related: ['Product Designer', 'UI Designer'],
    roadmap: [{ title: 'Learn Design Principles', duration: '1 month' }, { title: 'Master Figma', duration: '1 month' }, { title: 'Build Case Studies', duration: '2 months' }],
    risk: 'Medium. Subjective feedback loops.', tradeOffs: ['Subjective critiques', 'Less coding'],
    opportunityCost: { description: 'Great balance of psych/art.', retained: ['Product Mgmt', 'Frontend Dev'], faded: ['Backend Dev', 'Finance'] },
    tags: ['Creative', 'Empathy', 'Tech']
  },
  {
    id: 'frontend-developer', title: 'Frontend Developer', category: 'Engineering', match: 0, salary: '$70k - $125k', growth: '+15%', description: 'Build the visible parts of websites and applications using code.',
    reasoning: 'Combines visual logic with technical implementation.',
    skills: [{ name: 'Frontend Development', level: 95 }, { name: 'APIs & Integration', level: 80 }, { name: 'Debugging', level: 85 }, { name: 'UI Design', level: 50 }],
    related: ['UI Engineer', 'Fullstack Developer'],
    roadmap: [{ title: 'HTML/CSS/JS', duration: '2 months' }, { title: 'React/Vue', duration: '2 months' }, { title: 'Build Projects', duration: 'Ongoing' }],
    risk: 'Medium. High churn of tools.', tradeOffs: ['Constant learning', 'Browser bugs'],
    opportunityCost: { description: 'Solid entry into tech.', retained: ['Fullstack', 'UX Eng'], faded: ['Data Analysis', 'Sales'] },
    tags: ['Coding', 'Visual', 'Logic']
  },
  {
    id: 'product-manager', title: 'Product Manager', category: 'Product', match: 0, salary: '$95k - $150k', growth: '+10%', description: 'Bridge the gap between business, design, and technology.',
    reasoning: 'Strategic role for leaders who can prioritize.',
    skills: [{ name: 'Product Strategy', level: 90 }, { name: 'Communication', level: 95 }, { name: 'Market Research', level: 80 }, { name: 'Stakeholder Mgmt', level: 90 }],
    related: ['Business Analyst', 'Growth PM'],
    roadmap: [{ title: 'Learn Agile', duration: '1 month' }, { title: 'Data for PMs', duration: '1 month' }, { title: 'Launch Side Project', duration: '3 months' }],
    risk: 'High stress. Responsibility without authority.', tradeOffs: ['Lots of meetings', 'Context switching'],
    opportunityCost: { description: 'Leadership path.', retained: ['Founder', 'Consulting'], faded: ['Senior Engineer', 'Specialist Designer'] },
    tags: ['Leadership', 'Strategy', 'People']
  },

  // ... New Creative Careers ...
  {
    id: 'musician', title: 'Musician', category: 'Arts', match: 0, salary: '$30k - $100k+', growth: 'Variable',
    description: 'Create and perform music across various genres and instruments.',
    reasoning: 'For those with deep rhythmic and melodic intelligence.',
    skills: [
      { name: 'Musical Ability', level: 95 }, { name: 'Rhythm & Timing', level: 95 },
      { name: 'Instrument Proficiency', level: 90 }, { name: 'Improvisation', level: 85 }
    ],
    related: ['Music Producer', 'Sound Designer', 'Composer'],
    roadmap: [{ title: 'Master Instrument', duration: 'Years' }, { title: 'Music Theory', duration: '6-12 months' }, { title: 'Performance Experience', duration: 'Ongoing' }],
    risk: 'High financial instability initially.', tradeOffs: ['Irregular hours', 'Audition rejection', 'Physical strain'],
    opportunityCost: { description: 'Passion-driven career with high variance.', retained: ['Teaching', 'Audio Eng'], faded: ['Corporate Roles'] },
    tags: ['Creative', 'Art', 'Performance']
  },
  {
    id: 'singer', title: 'Singer', category: 'Arts', match: 0, salary: '$30k - $100k+', growth: 'Variable',
    description: 'Use the voice as an instrument to convey melody and emotion.',
    reasoning: 'Requires vocal discipline and confidence.',
    skills: [
      { name: 'Vocal Control', level: 95 }, { name: 'Pitch Accuracy', level: 90 },
      { name: 'Stage Presence', level: 85 }, { name: 'Languages', level: 60 }
    ],
    related: ['Voice Artist', 'Performer'],
    roadmap: [{ title: 'Vocal Training', duration: 'Ongoing' }, { title: 'Performance', duration: 'Ongoing' }, { title: 'Recording Demo', duration: '3 months' }],
    risk: 'High competition.', tradeOffs: ['Vocal health maintenance', 'Travel'],
    opportunityCost: { description: 'Unique skill set.', retained: ['Voice Coach', 'Acting'], faded: ['Desk Jobs'] },
    tags: ['Creative', 'Art', 'Performance']
  },
  {
    id: 'dancer', title: 'Dancer', category: 'Arts', match: 0, salary: '$25k - $80k', growth: '+6%',
    description: 'Express stories and emotions through movement and choreography.',
    reasoning: 'Demands peak physical fitness and artistic expression.',
    skills: [
      { name: 'Dance Technique', level: 95 }, { name: 'Body Movement', level: 95 },
      { name: 'Rhythm & Timing', level: 90 }, { name: 'Teamwork', level: 80 }
    ],
    related: ['Choreographer', 'Performer', 'Dance Instructor'],
    roadmap: [{ title: 'Technical Training', duration: 'Years' }, { title: 'Auditions', duration: 'Ongoing' }, { title: 'Company Work', duration: 'Variable' }],
    risk: 'High injury risk and short career span.', tradeOffs: ['Physical exhaustion', 'Short career'],
    opportunityCost: { description: 'Physical career.', retained: ['Choreography', 'Fitness Training'], faded: ['Sedentary Roles'] },
    tags: ['Creative', 'Art', 'Performance', 'Physical']
  },
  {
    id: 'actor', title: 'Actor', category: 'Arts', match: 0, salary: 'Variable', growth: '+4%',
    description: 'Portray characters in theater, film, television, and other media.',
    reasoning: 'For storytellers with high emotional intelligence.',
    skills: [
      { name: 'Acting Skills', level: 90 }, { name: 'Emotional Expression', level: 95 },
      { name: 'Improvisation', level: 85 }, { name: 'Script Reading', level: 80 }
    ],
    related: ['Theatre Artist', 'Voice Actor', 'Director'],
    roadmap: [{ title: 'Acting Classes', duration: '6-12 months' }, { title: 'Student Films', duration: '1 year' }, { title: 'Agent Search', duration: 'Ongoing' }],
    risk: 'Very High competition.', tradeOffs: ['Unstable income', 'Rejection', 'Public scrutiny'],
    opportunityCost: { description: 'Deep emotional work.', retained: ['Directing', 'Teaching', 'Public Speaking'], faded: ['Technical Roles'] },
    tags: ['Creative', 'Art', 'Performance', 'Storytelling']
  },
  {
    id: 'visual-artist', title: 'Visual Artist', category: 'Arts', match: 0, salary: '$40k - $90k', growth: '+5%',
    description: 'Create original works of art using various media.',
    reasoning: 'Pure visual expression for creative minds.',
    skills: [
      { name: 'Drawing/Painting', level: 95 }, { name: 'Color Theory', level: 90 },
      { name: 'Visual Composition', level: 90 }, { name: 'Creativity', level: 95 }
    ],
    related: ['Illustrator', 'Digital Artist', 'Concept Artist'],
    roadmap: [{ title: 'Portfolio Building', duration: 'Ongoing' }, { title: 'Exhibitions/Sales', duration: 'Ongoing' }, { title: 'Style Development', duration: 'Years' }],
    risk: 'Medium income stability.', tradeOffs: ['Solitary work', 'Self-promotion heavy'],
    opportunityCost: { description: 'Focus on pure aesthetics.', retained: ['Graphic Design', 'Art Direction'], faded: ['Data Analysis'] },
    tags: ['Creative', 'Art', 'Visual']
  },
  {
    id: 'filmmaker', title: 'Filmmaker', category: 'Arts', match: 0, salary: '$50k - $120k', growth: '+8%',
    description: 'Direct and produce visual stories for screen.',
    reasoning: 'Combines visual, narrative, and technical skills.',
    skills: [
      { name: 'Storytelling', level: 95 }, { name: 'Camera Awareness', level: 85 },
      { name: 'Visual Thinking', level: 90 }, { name: 'Leadership', level: 85 }
    ],
    related: ['Director', 'Editor', 'Screenwriter'],
    roadmap: [{ title: 'Short Films', duration: '1-2 years' }, { title: 'Film Festivals', duration: 'Ongoing' }, { title: 'Feature Development', duration: 'Variable' }],
    risk: 'High project-based risk.', tradeOffs: ['Long production hours', 'Funding challenges'],
    opportunityCost: { description: 'Master storyteller.', retained: ['Video Production', 'Advertising'], faded: ['Routine Office Work'] },
    tags: ['Creative', 'Art', 'Storytelling']
  }
];

export const INTERESTS = [
  'Creative Arts', 'Coding', 'Solving Puzzles', 'Helping People',
  'Finance', 'Writing', 'Gaming', 'Designing', 'Management',
  'Technology', 'Data', 'Psychology', 'Music', 'Performing', 'Film'
];

export const SIMILARITY_DATA = {
  nodes: [
    // Data Family
    { id: 'da', label: 'Data Analyst', group: 'Data' },
    { id: 'ds', label: 'Data Scientist', group: 'Data' },

    // Design Family
    { id: 'ux', label: 'UX Designer', group: 'Design' },
    { id: 'pd', label: 'Product Designer', group: 'Design' },

    // Product Family
    { id: 'pm', label: 'Product Manager', group: 'Product' },

    // Engineering Family
    { id: 'fe', label: 'Frontend Dev', group: 'Eng' },
    { id: 'se', label: 'Software Eng', group: 'Eng' },

    // Arts Family
    { id: 'mus', label: 'Musician', group: 'Arts' },
    { id: 'sin', label: 'Singer', group: 'Arts' },
    { id: 'act', label: 'Actor', group: 'Arts' },
    { id: 'dan', label: 'Dancer', group: 'Arts' },
    { id: 'vis', label: 'Visual Artist', group: 'Arts' },
    { id: 'flm', label: 'Filmmaker', group: 'Arts' }
  ],
  links: [
    // Tech Links
    { source: 'da', target: 'ds', value: 5 },
    { source: 'ux', target: 'pd', value: 5 },
    { source: 'ux', target: 'fe', value: 4 },
    { source: 'fe', target: 'se', value: 4 },
    { source: 'pm', target: 'ux', value: 3 },

    // Arts Links
    { source: 'mus', target: 'sin', value: 5 },
    { source: 'mus', target: 'dan', value: 4 }, // Rhythm
    { source: 'act', target: 'sin', value: 3 }, // Voice/Performance
    { source: 'act', target: 'flm', value: 4 }, // Film/Direction
    { source: 'vis', target: 'flm', value: 4 }, // Visuals
    { source: 'vis', target: 'ux', value: 3 },  // Visual Design overlap
    { source: 'flm', target: 'pm', value: 2 },  // Project Mgmt overlap
    { source: 'dan', target: 'act', value: 3 }  // Physical expression
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
