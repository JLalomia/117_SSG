## History Behind CSS
### WHO
- Developed by: Håkon Wium Lie while working at CERN with Tim Berners-Lee.
#### Key Figures:
- Håkon Wium Lie: The main creator of CSS and an influential figure in web standards.
- Bert Bos: Collaborated with Lie and contributed to the development of CSS, especially in its early specifications.
### WHAT
- CSS: A stylesheet language used to describe the presentation and layout of web pages written in HTML or XML. It controls the visual style of web content, including colors, fonts, spacing, and positioning.
- Separation of Concerns: CSS allows for the separation of content (HTML) from presentation (CSS), promoting cleaner code and easier maintenance
### WHY
- Improved Web Design: There was a need for a standardized way to control the appearance of web pages, which were previously styled using inline HTML attributes and deprecated tags.
- Maintainability: CSS provides a more efficient way to manage styles across multiple pages, reducing redundancy and improving maintainability.
### WHEN
- Development Start: CSS was proposed by Håkon Wium Lie in 1994.
- First Specification: The first CSS specification, CSS1, was officially published in December 1996 by the World Wide Web Consortium (W3C).
- Major Versions: CSS2 was released in 1998, followed by CSS2.1 in 2011, and CSS3 introduced modular specifications starting in 1999.
### HOW
- Stylesheets: CSS can be applied inline within HTML, embedded in the `<head>` section of an HTML document, or linked as an external stylesheet, promoting flexibility and modular design.
- Selectors and Properties: CSS uses selectors to target HTML elements and apply properties that define how they should be displayed, such as color, font-size, margin, and padding.
- Cascading Order: CSS follows a cascading order where styles can inherit and override based on specificity and importance, allowing for flexible and hierarchical styling.
### EXAMPLES AND CONTRIBUTIONS
- Responsive Design: CSS has evolved to support responsive design techniques, allowing web pages to adapt to different screen sizes and devices using media queries.
- Grid and Flexbox Layouts: New layout models such as CSS Grid and Flexbox (introduced in the 2010s) revolutionized web design by providing powerful tools for creating complex, responsive layouts.
- Animations and Transitions: CSS introduced capabilities for animations and transitions, enabling designers to create dynamic and visually appealing effects without relying on JavaScript.
- Preprocessors: Tools like Sass and LESS have emerged to extend CSS's functionality, adding features like variables, nesting, and mixins, which enhance code organization and reusability.
### IMPORTANCE
- Web Standards: CSS is an essential part of web standards, providing a way to create visually appealing and well-structured web pages.
- User Experience: By separating content from presentation, CSS allows for more flexible and consistent designs, improving the overall user experience on the web.
- Cross-Browser Compatibility: CSS has played a crucial role in ensuring that web pages can be styled consistently across different browsers and devices.
### EXTRA
* CSS stands for Cascading Style Sheets
* The inventor of CSS was Wium Lie in 1994
    * At the time, he was woring at CERN with Tim Berners-Lee
## Commands, What they do, and Examples:
| Command | Description | Example |
|---|---|---|
| `color` | The `color` property changes the text color of an HTML element | `p { color: blue; }` - The text in the `<p>` element appears in blue |
| `background-color` | Sets the background color of an element | `div { background-color: yellow; }` - The background of the `<div>` element turns yellow |
| `fone-size` | Sets the size of the text | `p { font-size: 24px; }` - The text inside the paragraph appears larger (24 pixels) |
| `margin` | Controls the space outside of an element, pushing other elements away from it | `div { margin: 20px; }` - The `<div>` element has 20 pixels of space around it, separating it from other elements |
| `border` | Adds a border around an element. You can specify the border width, style, and color | `div { border: 2px solid black; }` - A 2-pixel solid black border appears around the `<div>` element |