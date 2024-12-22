let navigation = document.getElementById("navigation");
let dotsNav = document.getElementById("hiddenNav");

dotsNav.addEventListener("click", function (event) {
  navigation.style.display = "block";
})

window.addEventListener('click', function (e) {
  if (window.getComputedStyle(dotsNav, null).display === "block" && !document.getElementById('hiddenNav').contains(e.target)) {
    navigation.style.display = "none";
  }
});

function myFunction() {
  var x = document.getElementById("navMenu");
  if (x.className === "topnav")
    x.className += " responsive";
  else
    x.className = "topnav";
} 
