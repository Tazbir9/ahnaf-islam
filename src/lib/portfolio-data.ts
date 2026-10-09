export const navigation = [
  ['Home', 'home'], ['About', 'about'], ['Skills', 'skills'],
  ['Projects', 'projects'], ['Learning Journey', 'journey'], ['Contact', 'contact'],
] as const;

export const projects = [
  { id: '01', name: 'Ahnaf Movies', category: 'WEB APPLICATION', description: 'A movie-related web application created as part of my journey into web development.', tags: ['Web development', 'Personal project'], url: 'https://ahnaf-movies.netlify.app/', image: 'movies', status: 'Built to learn', learning: 'Exploring how to turn an idea into a complete web interface.' },
  { id: '02', name: 'Payoo', category: 'INTERACTIVE INTERFACE', description: 'A digital payment interface built to practice frontend development and create an interactive user experience.', tags: ['Frontend', 'UI development'], url: 'https://payoo-ahnaf.netlify.app/', image: 'payoo', status: 'Practice project', learning: 'Practicing interactive interfaces in a payment-themed application—not a production financial service.' },
  { id: '03', name: 'Emergency Hotline', category: 'WEB APPLICATION', description: 'An interactive emergency service application developed to practice functionality, user interactions, and interface design.', tags: ['Frontend', 'User interactions'], image: null, url: null, status: 'Personal project', learning: 'Exploring how useful information and user interactions come together.' },
  { id: '04', name: 'My Players', category: 'REACT PROJECT', description: 'A cricket player selection application exploring React components, data-driven interfaces, and interactive behavior.', tags: ['React', 'Components'], image: null, url: null, status: 'Built to learn', learning: 'Practicing React components and data-driven application behavior.' },
  { id: '05', name: 'Weather App', category: 'WORK IN PROGRESS', description: 'Exploring React, navigation, API integration, and dynamic weather data presentation.', tags: ['React', 'API integration'], image: null, url: null, status: 'In progress', learning: 'Learning to work with API integration and dynamic data while developing this project.' },
];

export const currentSkills = [
  { name: 'HTML5', symbol: '5', kind: 'html', detail: 'Web fundamentals' },
  { name: 'CSS3', symbol: '3', kind: 'css', detail: 'Styling & layouts' },
  { name: 'JavaScript', symbol: 'JS', kind: 'js', detail: 'Fundamentals' },
  { name: 'Tailwind CSS', symbol: '≈', kind: 'tailwind', detail: 'Utility-first styling' },
  { name: 'DaisyUI', symbol: '✿', kind: 'daisy', detail: 'UI components' },
  { name: 'Git & GitHub', symbol: '⑂', kind: 'git', detail: 'Version control' },
  { name: 'VS Code', symbol: '⌘', kind: 'vscode', detail: 'Development tools' },
  { name: 'Vite & Netlify', symbol: 'ϟ', kind: 'vite', detail: 'Build & deployment' },
];

export const roadmap = [
  { name: 'Programming fundamentals', topics: 'Problem-solving, data structures, algorithms, object-oriented programming, recursion, complexity analysis.' },
  { name: 'Advanced JavaScript', topics: 'Scope, closures, the event loop, promises, async/await, error handling, modules and prototypes.' },
  { name: 'Frontend development', topics: 'TypeScript, component architecture, state management, accessibility, performance and frontend testing.' },
  { name: 'Backend development', topics: 'Node.js, Express.js, REST APIs, authentication, request validation and application architecture.' },
  { name: 'Databases', topics: 'Relational: SQL, PostgreSQL, MySQL. Document-oriented: MongoDB. Database design, relationships, indexing and data modeling.' },
  { name: 'API development & integration', topics: 'HTTP, REST, JSON, asynchronous requests, status codes, API validation and documentation.' },
  { name: 'Software engineering', topics: 'Readable code, modular architecture, reusable components, design patterns, SOLID, refactoring and maintainability.' },
  { name: 'Testing & quality', topics: 'Unit, integration and end-to-end testing. Vitest, React Testing Library and Playwright.' },
  { name: 'Version control & collaboration', topics: 'Branches, commits, merge conflicts, pull requests, code reviews and collaborative workflows.' },
  { name: 'Deployment & DevOps', topics: 'Hosting, environment variables, Linux, command-line tools, CI/CD, Docker and cloud fundamentals.' },
  { name: 'Computer science foundations', topics: 'Operating systems, computer networks, database management systems, software life cycles, system design and security.' },
  { name: 'Future specializations', topics: 'Potential directions: full-stack development, mobile development, cloud, AI, machine learning, cybersecurity and DevOps.' },
];

export const milestones = [
  { name: 'Start with the fundamentals', text: 'Exploring HTML, CSS, and the building blocks of the web.', status: 'Practiced' },
  { name: 'Make things interactive', text: 'Building a foundation in JavaScript through personal projects.', status: 'Practicing' },
  { name: 'Think in components', text: 'Learning React and exploring a new way to build interfaces.', status: 'Current focus' },
  { name: 'Look beyond the frontend', text: 'Backend development, databases, and more complete applications.', status: 'Ahead' },
  { name: 'Grow into a software developer', text: 'Keep building, solving problems, and getting a little better every day.', status: 'The long-term goal' },
];