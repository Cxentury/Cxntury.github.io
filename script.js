function darkMode(){
    const cards=document.getElementsByClassName("card");
    var bd=document.getElementById('bd')
    var triggerButton=document.getElementById('btn')
    var param=window.getComputedStyle(document.body, null).getPropertyValue('background-color')

    if(param=="rgb(255, 255, 255)"){
        bd.style.backgroundColor="#181A1B";
        bd.style.color="white";
        triggerButton.className="btn btn-dark"
        for(let element of cards){
            element.className="card text-white bg-dark"
        };
        sessionStorage.setItem("theme", "dark")

    }
    else{
        bd.style.backgroundColor="white"
        bd.style.color="black"
        triggerButton.className="btn btn-light"
        for(let element of cards){
            element.className="card";
        };
        sessionStorage.setItem("theme", "light")
    }

};

function restore(){
    const cards=document.getElementsByClassName("card");
    var bd=document.getElementById('bd')
    var theme=sessionStorage.getItem("theme")
    var triggerButton=document.getElementById('btn')

    if(theme=="dark"){
        bd.style.backgroundColor="#181A1B"
        bd.style.color="white"
        triggerButton.className="btn btn-dark"
        for(let element of cards){
            element.className="card text-white bg-dark"
        };

    }else{
        bd.style.backgroundColor="white"
        bd.style.color="black"
        triggerButton.className="btn btn-light"
        for(let element of cards){
            element.className="card"
        };
    }
}