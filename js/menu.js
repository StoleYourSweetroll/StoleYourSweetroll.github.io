/* 
Toggle between showing and hiding the navigation menu links 
when the user clicks on the hamburger menu / bar icon 
*/
function toggleMenu() {
    var x = document.querySelector("nav ul");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 