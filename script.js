let actualPage = "home";
let title = document.getElementById('title');
let background = document.getElementById('container');
let fabio = document.getElementById('yamfabio');
let timed = document.getElementById('date');
let place;
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

let month;
switch (new Date().getMonth()) {
  case 0:
    month = "Janvier";
    break;
  case 1:
    month = "Fevrier";
    break;
  case 2:
    month = "Mars";
    break;
  case 3:
    month = "Avril";
    break;
  case 4:
    month = "Mai";
    break;
  case 5:
    month = "Juin";
    break;
  case  6:
    month = "Juillet";
    break;
  case 7:
    month = "Aout";
    break;
  case 8:
    month = "Septembre";
    break;
  case 9:
    month = "Octobre";
    break;
  case 10:
    month = "Novembre";
    break;
  case 11:
    month = "Decembre";
    break;
}

function dispDate(){
    let currentTime = new Date();
    let dd = currentTime.getDay() + 1;
    let mm = currentTime.getMonth() + 1;
    let yyyy = currentTime.getFullYear(); 
    let hh = currentTime.getHours();
    let m2 = currentTime.getMinutes();
    let ss = currentTime.getSeconds();
    timed2.innerHTML = 'Il est actuellement :' + hh + 'h' + m2 + 'm' + ss + 's';
    timed.innerHTML ='Nous sommes le : ' +dd+'/'+mm+'/'+yyyy ;
} 
setInterval(dispDate, 1000);

function transfer(){
    place = document.getElementById("country").value;
    localStorage.setItem('pos',place);
}


