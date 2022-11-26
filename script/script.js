document.getElementById("hiddenNav").addEventListener("click",function(event) {
    document.getElementById("navigation").style.display="block";
})

window.addEventListener('click', function(e){   
    if (document.getElementById('navigation').contains(e.target)){
      // Clicked in box
    } else if(!document.getElementById('hiddenNav').contains(e.target)){
        document.getElementById("navigation").style.display="none";
    }
  });