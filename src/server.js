const express = require('express');
const path = require('path');
const routes = require('./routes'); // Import the route registry
const { url } = require('./helpers/urlHelper'); // Import the URL helper

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the directory where the template files are located
app.set('views', path.join(__dirname, '../views'));

// Middleware to serve static files from the 'public' directory
//app.use(express.static(path.join(__dirname, '../docs')));

// Make the URL helper and routes available in all EJS templates
app.locals.url = url;
app.locals.routes = routes;

app.get(routes.home, (req, res) => {
    const data = {
        title: 'Tech Survival Guide'
    };
    res.render('index');  // Assuming you have a view file named 'index.ejs'
});

app.get(routes.LinkPage, (req, res) => {
    res.render('LinkPage');
});

app.get(routes.JC, (req, res) => {
    res.render('JC');
});

app.use((req, res) => {
    res.status(404).render('404', { title: '404: Page Not Found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});