let actualPage = "home";
let title = document.getElementById('title');
let background = document.getElementById('container');
let fabio = document.getElementById('yamfabio');
let timed = document.getElementById('date');
let timed2 = document.getElementById('datep');

function displayPage(page){
    console.log(actualPage);
    document.getElementById(actualPage).style.display = "none";
    console.log('Redirection vers la page : '+page);
    let pageToDisplay = document.getElementById(page);
    pageToDisplay.style.display = "flex";
    background.className = '';
    background.classList.add(page + "-bg")
    actualPage = page;
}

function replaceText(text){
    title.innerHTML = text;
}

function defaultText(){
    title.innerHTML = "Découvrez les pilotes de ces écuries!";
}

function displayElem(fText, fText2){
    let hidTxt = document.getElementById(fText);
    let showTxt = document.getElementById(fText2);
    hidTxt.style.display = 'none';
    showTxt.style.display = 'flex';
}

function dispDate(){
    let currentTime = new Date();
    let hh = currentTime.getHours();
    let m2 = currentTime.getMinutes();
    let ss = currentTime.getSeconds();
    let dd = currentTime.getDay();
    let mm = currentTime.getMonth() + 1;
    let yyyy = currentTime.getFullYear();
    timed.innerHTML ='Nous sommes le : ' +dd+'/'+mm+'/'+yyyy ;
    timed2.innerHTML = 'Il est actuellement :' + hh + 'h' + m2 + 'm' + ss + 's';
} 
setInterval(dispDate, 1000);

timed.innerHTML ='Nous sommes le ' + dd +'/'+ mm +'/'+ yyyy ;

timed2.innerHTML = 'Il est actuellement : ' + hh + 'h' + m2 + 'm' + ss + 's';