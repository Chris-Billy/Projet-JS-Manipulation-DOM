  
let joan = document.getElementById('suzMir');

function suzdisplayElem1(hide, show){
    let hidetext = document.getElementById(hide);
    let showtext = document.getElementById(show);
    
    hidetext.style.display = 'none';
    showtext.style.display = 'flex';
}

function suzdisplayElem2(hide, hide2, show){
    let hidetext = document.getElementById(hide);
    let hidetext2 = document.getElementById(hide2)
    let showtext = document.getElementById(show);
    
    hidetext.style.display = 'none';
    hidetext2.style.display = 'none';
    showtext.style.display = 'flex';
}