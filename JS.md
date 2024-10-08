## History Behind Javascript
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