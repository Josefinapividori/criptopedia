let universo   = document.getElementById("universo");
let neptuno1   = document.getElementById("neptuno1");
let mercurio   = document.getElementById("mercurio");
let astronauta = document.getElementById("astronauta");
let text       = document.getElementById("text");

window.addEventListener('scroll', function (){
    var value = window.scrollY;
    
    universo.style.top      = value * 0.5 + 'px';
    neptuno1.style.left     = value * 2 + 'px';
    mercurio.style.left     = -value * 2 + 'px';
    astronauta.style.top    = -value * 2 + 'px';
    text.style.top          = value * 0.75 + 'px';
})