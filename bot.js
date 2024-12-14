const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with the token you received from BotFather
const token = '7735077059:AAHmQFWr04q6zT-LGxvbyYIIZZue_RwoOH8';
const bot = new TelegramBot(token, { polling: true });

// Roadmap for MERN Stack Developer
bot.onText(/\/roadmap_mern/, (msg) => {
  bot.sendMessage(msg.chat.id, 'MERN Stack Developer Roadmap:\n1. Learn HTML, CSS, and JavaScript\n2. Learn ReactJS\n3. Learn Node.js and Express\n4. Learn MongoDB\n5. Learn REST APIs\n6. Deploy Full Stack Application\n7. Build Projects');
});

// Roadmap for Full Stack Developer
bot.onText(/\/roadmap_fullstack/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Full Stack Developer Roadmap:\n1. Learn Frontend (HTML, CSS, JavaScript)\n2. Learn Backend (Node.js, Express)\n3. Learn Databases (SQL, MongoDB)\n4. Learn REST APIs\n5. Learn Version Control (Git)\n6. Build Full Stack Projects');
});

// Roadmap for Java Stack Developer
bot.onText(/\/roadmap_java/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Java Stack Developer Roadmap:\n1. Learn Java Basics\n2. Learn Spring Boot\n3. Learn Databases (MySQL, PostgreSQL)\n4. Learn REST APIs\n5. Learn Microservices\n6. Build Projects');
});

// Roadmap for Python Stack Developer
bot.onText(/\/roadmap_python/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Python Stack Developer Roadmap:\n1. Learn Python Basics\n2. Learn Django/Flask\n3. Learn Databases (MySQL, PostgreSQL)\n4. Learn REST APIs\n5. Learn Cloud Technologies\n6. Build Projects');
});

// Roadmap for Go Developer
bot.onText(/\/roadmap_go/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Go Developer Roadmap:\n1. Learn Go Basics\n2. Learn Concurrency in Go\n3. Learn Web Frameworks (Gin)\n4. Learn REST APIs\n5. Build Projects');
});

// Roadmap for Software Engineer
bot.onText(/\/roadmap_softwareengineer/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Software Engineer Roadmap:\n1. Learn Programming Fundamentals\n2. Learn Data Structures & Algorithms\n3. Learn Design Patterns\n4. Learn Databases\n5. Learn Software Development Life Cycle\n6. Build Projects');
});

// Roadmap for Rust Developer
bot.onText(/\/roadmap_rust/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Rust Developer Roadmap:\n1. Learn Rust Basics\n2. Understand Ownership, Borrowing, and Lifetimes\n3. Learn Cargo & Crates\n4. Learn Concurrency\n5. Learn Web Frameworks (Rocket, Actix)\n6. Build Projects');
});

// Roadmap for JavaScript Developer
bot.onText(/\/roadmap_javascript/, (msg) => {
  bot.sendMessage(msg.chat.id, 'JavaScript Developer Roadmap:\n1. Learn JavaScript Basics\n2. Learn DOM Manipulation\n3. Learn ES6+ Features\n4. Learn Frameworks (React, Vue, Angular)\n5. Learn Node.js\n6. Build Projects');
});

// Roadmap for AngularJS Developer
bot.onText(/\/roadmap_angular/, (msg) => {
  bot.sendMessage(msg.chat.id, 'AngularJS Developer Roadmap:\n1. Learn JavaScript and TypeScript\n2. Learn Angular Basics (Components, Modules)\n3. Learn RxJS\n4. Learn Angular Services\n5. Learn REST APIs\n6. Build Projects');
});

// Roadmap for ReactJS Developer
bot.onText(/\/roadmap_react/, (msg) => {
  bot.sendMessage(msg.chat.id, 'ReactJS Developer Roadmap:\n1. Learn HTML, CSS, JavaScript\n2. Learn React Basics (JSX, Components)\n3. Learn State Management (Redux, Context API)\n4. Learn React Hooks\n5. Learn REST APIs\n6. Build Projects');
});

// Roadmap for NodeJS Developer
bot.onText(/\/roadmap_nodejs/, (msg) => {
  bot.sendMessage(msg.chat.id, 'NodeJS Developer Roadmap:\n1. Learn JavaScript Basics\n2. Learn Node.js and Express\n3. Learn Asynchronous Programming\n4. Learn MongoDB or SQL\n5. Learn RESTful APIs\n6. Build Projects');
});

// Roadmap for VueJS Developer
bot.onText(/\/roadmap_vuejs/, (msg) => {
  bot.sendMessage(msg.chat.id, 'VueJS Developer Roadmap:\n1. Learn HTML, CSS, JavaScript\n2. Learn Vue.js Basics (Directives, Components)\n3. Learn Vue Router and Vuex\n4. Learn Vue CLI\n5. Learn REST APIs\n6. Build Projects');
});

// Roadmap for NextJS Developer
bot.onText(/\/roadmap_nextjs/, (msg) => {
  bot.sendMessage(msg.chat.id, 'NextJS Developer Roadmap:\n1. Learn ReactJS Basics\n2. Learn Next.js Fundamentals (Pages, Routing)\n3. Learn SSR and SSG\n4. Learn API Routes\n5. Learn Deployment (Vercel)\n6. Build Projects');
});

// DSA with JavaScript
bot.onText(/\/roadmap_dsa_javascript/, (msg) => {
  bot.sendMessage(msg.chat.id, 'DSA with JavaScript Roadmap:\n1. Learn JavaScript Basics\n2. Learn Arrays, Strings, and Linked Lists\n3. Learn Stacks, Queues, and Trees\n4. Learn Sorting and Searching Algorithms\n5. Solve DSA Problems on Platforms (LeetCode, Codeforces)');
});

// DSA with Java
bot.onText(/\/roadmap_dsa_java/, (msg) => {
  bot.sendMessage(msg.chat.id, 'DSA with Java Roadmap:\n1. Learn Java Basics\n2. Learn Arrays, Strings, and Linked Lists\n3. Learn Stacks, Queues, and Trees\n4. Learn Sorting and Searching Algorithms\n5. Solve DSA Problems on Platforms (LeetCode, Codeforces)');
});

// DSA with Go
bot.onText(/\/roadmap_dsa_go/, (msg) => {
  bot.sendMessage(msg.chat.id, 'DSA with Go Roadmap:\n1. Learn Go Basics\n2. Learn Arrays, Slices, and Linked Lists\n3. Learn Stacks, Queues, and Trees\n4. Learn Sorting and Searching Algorithms\n5. Solve DSA Problems on Platforms (LeetCode, Codeforces)');
});

// DSA with Python
bot.onText(/\/roadmap_dsa_python/, (msg) => {
  bot.sendMessage(msg.chat.id, 'DSA with Python Roadmap:\n1. Learn Python Basics\n2. Learn Lists, Tuples, and Sets\n3. Learn Stacks, Queues, and Trees\n4. Learn Sorting and Searching Algorithms\n5. Solve DSA Problems on Platforms (LeetCode, Codeforces)');
});