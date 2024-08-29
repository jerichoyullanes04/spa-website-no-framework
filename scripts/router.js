// This function handles routing when a navigation link is clicked.
const route = (event) => {

    // If the event is undefined, use the window event.
    event = event || window.event; 

    // Prevent the default behavior of anchor tags, which is to navigate to the href.
    event.preventDefault(); 

    // window.history.pushState({}, "", event.target.href); // For Custom JS Server Only
    
    // Update the browser's URL hash without reloading the page.
    // This changes the part after the # in the URL to the href value of the clicked link.
    window.location.hash = event.target.getAttribute("href");

    // Call the handleLocation function to load the appropriate content.
    handleLocation();
};

// Define routes as key-value pairs, where keys are the URL paths and values are the file paths.
const routes = {
    404 : "/pages/404.html", // The path for the 404 error page.
    "/" : "/pages/index.html", // The path for the homepage.
    "/about" : "/pages/about.html", // The path for the about page.
    "/contact" : "/pages/contact.html", // The path for the contact page.
};

// This function loads the content of the current route.
const handleLocation = async () => {
    // const path = window.location.pathname; // For Custom JS Server Only

    // Get the current hash from the URL, remove the #, and use '/' if the hash is empty.
    const path = window.location.hash.replace('#', '') || '/';

    // Look up the route in the routes object, or use the 404 page if the route isn't found.
    const route = routes[path] || routes[404];

    // Fetch the content of the route's HTML file.
    const html = await fetch(route).then((data) => data.text());

    // Insert the fetched HTML into the element with the id "main-page".
    document.getElementById("main-page").innerHTML = html;
};

// window.onpopstate = handleLocation; // For Custom JS Server Only

// When the user navigates back or forward, the hashchange event is triggered.
// This ensures that the correct content is loaded when the hash changes.
window.addEventListener('hashchange', handleLocation);

// Expose the route function to the global scope, so it can be used in the HTML file.
window.route = route;

// Call handleLocation when the page first loads to ensure the correct content is displayed.
handleLocation();