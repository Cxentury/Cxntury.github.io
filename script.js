//This is probably not the best way to do it
function darkMode(){
    var bd=document.getElementById('bd')
    var cards=[document.getElementById("SteinsCard"),document.getElementById("firstCard"),document.getElementById("secondCard"),document.getElementById("thirdCard"),document.getElementById("fourthCard")]
    var triggerButton=document.getElementById('btn')
    var param=window.getComputedStyle(document.body, null).getPropertyValue('background-color')

    if(param=="rgb(255, 255, 255)"){
        bd.style.backgroundColor="#181A1B";
        bd.style.color="white";
        triggerButton.className="btn btn-dark"
        cards.forEach(element => {
            element.className="card text-white bg-dark"
        });
        sessionStorage.setItem("theme", "dark")

    }
    else{
        bd.style.backgroundColor="white"
        bd.style.color="black"
        triggerButton.className="btn btn-light"
        cards.forEach(element => {
            element.className="card"
        });
        sessionStorage.setItem("theme", "light")
    }

};

function restore(){
    var cards=[document.getElementById("SteinsCard"),document.getElementById("firstCard"),document.getElementById("secondCard"),document.getElementById("thirdCard"),document.getElementById("fourthCard")]
    var bd=document.getElementById('bd')
    var theme=sessionStorage.getItem("theme")
    var triggerButton=document.getElementById('btn')

    if(theme=="dark"){
        bd.style.backgroundColor="#181A1B"
        bd.style.color="white"
        triggerButton.className="btn btn-dark"
        cards.forEach(element => {
            element.className="card text-white bg-dark"
        });

    }else{
        bd.style.backgroundColor="white"
        bd.style.color="black"
        triggerButton.className="btn btn-light"
        cards.forEach(element => {
            element.className="card"
        });
    }
}