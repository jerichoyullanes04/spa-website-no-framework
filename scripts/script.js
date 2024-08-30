// Get the container element by its ID
var linkContainer = document.getElementById("nav-links");

// Get all links with class="nav-link" inside the container
var links = linkContainer.getElementsByClassName("nav-link");

// Loop through the links and add the active class to the current/clicked button
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    // Find the currently active element
    var current = document.getElementsByClassName("active");
    
    // Remove the active class from the currently active element
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    
    // Add the active class to the clicked element
    this.className += " active";
  });
}