# History Behind HTML / HTTP Protocol
## HTML
### WHO
- Who:
Developed by: Tim Berners-Lee, a computer scientist at CERN (the European Organization for Nuclear Research).
#### Key Figures:
- Tim Berners-Lee: Proposed HTML and its application in the World Wide Web.
- Robert Cailliau: Collaborated with Berners-Lee on early web technologies.
### WHAT
- HTML: A markup language used to create and structure content on the web, allowing for the incorporation of text, images, links, and other multimedia elements.
- It provides a standard way to format and display web pages.
### WHY
- Information Sharing: The need for a standardized method to share documents and information over the internet led to the creation of HTML, facilitating interlinked documents (hypertext).
- User-Friendly Content: It aimed to make it easier for users to create and navigate online content, thus promoting the adoption of the World Wide Web
### WHEN
- Development Start: Tim Berners-Lee began developing HTML in 1989.
First Specification: The first version of HTML was published in 1993.
- Major Versions: Subsequent versions were released, with HTML 2.0 in 1995, HTML 4.01 in 1999, and HTML5 standardized in 2014.
### HOW
- Markup Language: HTML uses a series of elements or "tags" to define the structure and layout of a webpage. Tags denote different types of content, such as headings, paragraphs, links, and images.
- Document Object Model (DOM): HTML documents are parsed by web browsers into a hierarchical structure (DOM) that can be manipulated by scripts and styles.
### EXAMPLES
- Basic Structure: HTML provided a way to define the structure of web pages, including headings (`<h1>`), paragraphs `(<p>)`, links `(<a>)`, and images `(<img>)`.
- Forms and Multimedia: HTML allowed the integration of forms for user input and multimedia elements, leading to interactive web experiences.
- Semantic HTML: Introduction of semantic elements in HTML5 (like `<header>`, `<footer>`, `<article>`) enhanced web accessibility and search engine optimization.

## HTTP (Hypertext Transfer Protocol)
### WHO
- Developed by: Also initiated by Tim Berners-Lee at CERN.
#### Key Figures:
- Tim Berners-Lee: Responsible for designing HTTP to facilitate communication between clients and servers on the web.
- The Internet Engineering Task Force (IETF): Played a role in the standardization of HTTP.
### WHAT
- HTTP: An application-level protocol used for transmitting hypertext documents over the internet. It allows web browsers to communicate with web servers to request and transfer content.
- Request-Response Model: Based on a request-response model where a client (browser) sends requests to a server, which then responds with the requested resources.
### WHY
- Web Communication: The need for a protocol to facilitate communication between web clients (browsers) and servers, enabling the retrieval and display of web content.
- Standardization: To create a standardized way to access and interact with resources on the web, promoting interoperability among different systems and devices.
### WHEN
- Development Start: HTTP was developed in 1989 alongside HTML by Tim Berners-Lee.
- First Specification: The first version, HTTP/0.9, was introduced in 1991.
- Major Versions: HTTP/1.0 in 1996, HTTP/1.1 in 1999, and the latest version, HTTP/2, in 2015, with HTTP/3 currently in development
### HOW
- Client-Server Communication: HTTP operates on a client-server model where clients send requests to servers using specific methods (GET, POST, PUT, DELETE) to retrieve or manipulate resources.
- Stateless Protocol: HTTP is stateless, meaning each request is independent, and the server does not retain any information about previous requests.
### EXAMPLES AND CONTRIBUTIONS
- Web Browsing: HTTP enabled the first web browsers to request and retrieve HTML documents from servers, leading to the development of the World Wide Web.
- RESTful APIs: The principles of HTTP have influenced the design of RESTful APIs, allowing for communication between client applications and servers using standard HTTP methods.
- Security: The introduction of HTTPS (HTTP Secure) using SSL/TLS protocols provided a secure layer for data transmission over the web.
### IMPORTANCE
- Foundation of the Web: Both HTML and HTTP are fundamental technologies that enabled the creation and growth of the World Wide Web, allowing for the sharing of information and multimedia across the globe.
- Interactivity and Functionality: The combination of HTML for content structure and HTTP for data transfer allowed for dynamic and interactive web applications, leading to the modern internet as we know it today.
- Standardization and Interoperability: Both protocols established standards that facilitated interoperability among different systems and devices, promoting the widespread adoption of web technologies.

### EXTRA
* HTML stands for Hypertext Markup Language
* The inventor of HTML was Tim Berners-Lee in 1993
    * It was created to provide a means to create structured documents by denoting structural semantics for text, such as headings, paragraphs, lists, links, quotes, etc
* Another version is XHTML, which is a rewrite of HTML as an XML language
    * XML is a standard markup language that is used to create other markup language
## Commands, What they do, and Examples:
| Command | Description | Example |
|---|---|---|
| `<h1> to <h6>` | These are heading tags used to define headings in HTML, with `<h1>` being the largest (main heading) and `<h6>` being the smallest | `<h1>This is an H1 heading</h1>` - "This is an H1 heading" appears large and bold |
| `<p>` | The `<p>` tag defines a paragraph in HTML. It automatically adds some space before and after the content | `<p>This is a paragraph of text. It is used to group sentences together.</p>` - The text appears as a paragraph with space around it |
| `<a>` | The `<a>` tag is used to create hyperlinks. The `href` attribute defines the URL of the link | `<a href="https://www.example.com">Visit Example Website</a>` - "Visit Example Website" is a clickable link that navigates to the link when clicked|
| `<img>` | The `<img>` tag is used to embed an image in an HTML page. The `src` attribute specifies the image URL, and the `alt` attribute provides alternative text if the image can't load | `<img src="https://www.example.com/image.jpg" alt="Example Image" />` - An image is displayed from the URL provided in `src`. If the image fails to load, the alt text "Example Image" is shown |
| `<ul> and <li>` | The `<ul>` tag defines an unordered (bulleted) list, and `<li> is used to define each list item | `<ul> <li>First item</li> <li>Second item</li> <li>Third item</li> </ul>` - A bulleted list appears with "First item," "Second item," and "Third item" as separate bullet points |