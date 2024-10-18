## History Behind Javascript
### WHO
- Developed by: Brendan Eich, a programmer at Netscape Communications Corporation.
#### Key Figures:
- Brendan Eich: Creator of JavaScript who designed it in a short timeframe to enable interactive web pages.
- Netscape: The company that popularized JavaScript as part of its web browser, Netscape Navigator.
### WHAT
- JavaScript: A high-level, interpreted programming language that enables interactive web content and dynamic functionality in web browsers. It is a core technology of the World Wide Web alongside HTML and CSS.
- Multi-Paradigm: Supports object-oriented, imperative, and functional programming styles.
### WHY
- Interactivity on the Web: In the mid-1990s, there was a need for a scripting language that could enhance web pages by allowing client-side scripting and interactivity.
- Enhancing User Experience: JavaScript was designed to allow developers to create more engaging and dynamic user experiences on websites, moving beyond static content.
### WHEN
- Development Start: JavaScript was developed in 1995.
- First Release: The initial version was released as LiveScript in Netscape Navigator 2.0 in September 1995.
- Renaming to JavaScript: It was renamed to JavaScript in December 1995 to capitalize on the popularity of Java, even though the two languages are not directly related.
- Standardization: JavaScript was standardized in 1997 under the name ECMAScript by the European Computer Manufacturers Association (ECMA).
### WHERE
- Netscape Communications Corporation: JavaScript was created at Netscape, a pioneering web browser company, in 1995. Netscape Navigator was one of the most popular browsers of the time, and JavaScript was implemented to enhance web interactivity.
- Silicon Valley, California: The development of JavaScript occurred at Netscape’s headquarters in Silicon Valley, which was (and still is) a hub for tech innovation and development.
- Worldwide Adoption: JavaScript quickly gained global adoption through its inclusion in web browsers like Netscape Navigator and later, Internet Explorer. This ensured its rapid spread and use by web developers globally.
- ECMA International: JavaScript was standardized by ECMA International, an organization based in Europe, which oversees the ECMAScript standard, ensuring consistent implementation across browsers.
### HOW
- Interpreted Language: JavaScript is executed directly by the web browser's JavaScript engine without the need for prior compilation.
- DOM Manipulation: It allows for dynamic manipulation of the Document Object Model (DOM), enabling changes to the HTML and CSS of web pages in real-time.
- Event-Driven Programming: JavaScript supports event-driven programming, allowing developers to respond to user actions (e.g., clicks, keyboard inputs).
### EXAMPLES AND CONTRIBUTIONS
- Dynamic Web Pages: JavaScript enables features like form validation, interactive maps, animations, and content updates without requiring a full page reload.
- AJAX (Asynchronous JavaScript and XML): Introduced in the early 2000s, AJAX allows web applications to send and retrieve data asynchronously, enhancing the user experience by loading new content without refreshing the page.
- Libraries and Frameworks: The development of libraries like jQuery (2006) simplified DOM manipulation and event handling, while frameworks like AngularJS, React, and Vue.js revolutionized how developers build complex web applications.
- Node.js: Introduced in 2009, Node.js enables JavaScript to run on the server-side, allowing for full-stack JavaScript development and real-time applications.
### IMPORTANCE
- Universal Web Language: JavaScript is the de facto language of the web, used by the vast majority of websites for client-side scripting, making it essential for modern web development.
- Versatile and Powerful: Its versatility allows developers to create everything from simple interactive elements to complex web applications and server-side software.
- Ecosystem Growth: JavaScript has a rich ecosystem of libraries, frameworks, and tools that support developers in building high-performance, scalable applications.
### EXTRA
* The inventor of Javascript was Brendan Eich in 1995
    * It was developed for Netscape 2( web browser initially released in 1995, discontinued in 2008)
    * Technically, Javascript's correct name today would be "ECMAscript"
## Commands, What they do, and Examples:
| Command | Description | Example |
|---|---|---|
| `console.log()` | Used to print messages to the browser's console. It helps with debugging by showing the output of code or messages | `console.log("Hello, World!");` - The output is "Hello World!"|
| `document.getElementById` | Finds an HTML element by its `id` attribute. It is commonly used to manipulate or retrieve elements in the DOM | `let element = document.getElementById("demo"); element.innerHTML = "Paragraph changed!";` - The paragraph text changes to: "Paragraph changed!" |
| `addEventListener()` | Attaches an event handler to an HTML element (like a button) without overwriting existing event handlers. | `document.getElementById("myBtn").addEventListener("click", function() { alert("Button was clicked!"); });` - An alert box pops up saying "Button was clicked!" when the button is clicked |
| `setTimeout()` | Executes a function after a specified delay (in milliseconds) | `setTimeout(function() { console.log("Executed after 3 seconds"); }, 3000);` - "Executed after 3 seconds" is logged to the console after a 3-second delay |
| `setInterval()` | Executes a function repeatedly, with a fixed time delay between each call | `let count = 0; setInterval(function() { count++; console.log("Counter: " + count); }, 1000);` - Logs the increasing count every second |
| `alert()` | Displays an alert dialog box with a specified message and an "OK" button | `alert("Welcome to by website!")` - will display a pop-up alert with the message in the quotes |