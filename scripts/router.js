const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    // window.history.pushState({}, "", event.target.href);
    window.location.hash = event.target.getAttribute("href");
    handleLocation();
};

const routes = {
    404 : "/pages/404.html",
    "/" : "/pages/index.html",
    "/about" : "/pages/about.html",
    "/contact" : "/pages/contact.html",
};

const handleLocation = async () => {
    // const path = window.location.pathname;
    const path = window.location.hash.replace('#', '') || '/';
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

// window.onpopstate = handleLocation;
window.addEventListener('hashchange', handleLocation);
window.route = route;

handleLocation();