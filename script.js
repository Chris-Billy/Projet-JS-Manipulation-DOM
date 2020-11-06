// MAEL PART // // MAEL PART // // MAEL PART // // MAEL PART // // MAEL PART // // MAEL PART // 

let actualPage = "home";
let title = document.getElementById('title');
let background = document.getElementById('container');
let fabio = document.getElementById('yamfabio');
let timed = document.getElementById('date');
let place;
let timed2 = document.getElementById('datep');
let yamvid = document.getElementById('yamfabvid');
let yamplay = document.getElementById('yamplay');
let yampause = document.getElementById('yampause');
let yamreplaybtn = document.getElementById('yamreplay');
let yamfullbtn = document.getElementById('yamfull');
let yamfullbtn2 = document.getElementById('yamfull2');

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


function playPauseYam(){
    if (yamvid.paused){
        yamvid.play();
    }else{
        yamvid.pause();
    }
}
function yamreplay(){
    yamvid.currentTime = 0;
}


function yamFull(){
    yamvid.style.transform = 'scale(1.9)';
    yamvid.style.marginBottom = '10%';
    yamplay.style.marginLeft = '-35%';
    yampause.style.marginLeft = '-35%';
    yamreplaybtn.style.marginLeft = '-33%';
    yamfullbtn.style.marginLeft = '35%';
    yamfullbtn2.style.marginLeft = '35%';
    yamplay.style.marginTop = '17%';
    yampause.style.marginTop = '17%';
    yamreplaybtn.style.marginTop = '17%';
    yamfullbtn.style.marginTop = '17%';
    yamfullbtn2.style.marginTop = '17%';
    yamfullbtn.style.display = 'none';
    yamfullbtn2.style.display = 'flex';
}
function yamNFull(){
    yamvid.style.transform = 'scale(1)';
    yamvid.style.marginBottom = '0%';
    yamplay.style.marginLeft = '-17%';
    yampause.style.marginLeft = '-17%';
    yamreplaybtn.style.marginLeft = '-15%';
    yamfullbtn.style.marginLeft = '17%';
    yamfullbtn2.style.marginLeft = '17%';
    yamplay.style.marginTop = '9.5%';
    yampause.style.marginTop = '9.5%';
    yamreplaybtn.style.marginTop = '9.5%';
    yamfullbtn.style.marginTop = '9.5%';
    yamfullbtn2.style.marginTop = '9.5%';
    yamfullbtn2.style.display = 'none';
    yamfullbtn.style.display = 'flex';
    
}

// MAEL PART // // MAEL PART // // MAEL PART // // MAEL PART // // MAEL PART // 

// CHRIS PART // // CHRIS PART // // CHRIS PART // // CHRIS PART // // CHRIS PART //

// Recuperation des sections
const detailsButton = document.getElementById("details-button");
const piloteInfos = document.getElementById("pilote-info");
const motoInfos = document.getElementById("infos-moto");
const ecuriePalmares = document.getElementById("ecurie-palmares");
const imgMotoFull = document.getElementById("imgMotoFull");
const ficheMotoFull = document.getElementById("ficheMotoFull");
// Recuperation des boutons
const piloteButton = document.getElementById("pilote-button");
const motoButton = document.getElementById("moto-button");
const ecurieButton = document.getElementById("ecurie-button");
const retour = document.getElementById("retour");
const imgMoto = document.getElementById("imgmoto");
const ficheMoto = document.getElementById("ficheMoto");

function toggleChoix(){
    piloteInfos.style.display = "none";
    motoInfos.style.display = "none";
    ecuriePalmares.style.display = "none";
    retour.style.display = "none";
    detailsButton.style.display = "flex";
};
function togglePilote(){
    detailsButton.style.display = "none";
    piloteInfos.style.display = "flex";
    retour.style.display = "block";
};
function toggleMoto(){
    detailsButton.style.display = "none";
    motoInfos.style.display = "flex";
    retour.style.display = "block";
};
function toggleEcurie(){
    detailsButton.style.display = "none";
    ecuriePalmares.style.display = "flex";
    retour.style.display = "block";
};
function scaleImgMoto(){
    if (getComputedStyle(imgMotoFull).display === "none"){
        motoInfos.style.display = "none";
        retour.style.display = "none";
        imgMotoFull.style.display = "flex";
        imgMotoFull.style.marginLeft = "-30%";
    }
    else {
        imgMotoFull.style.display = "none";
        motoInfos.style.display = "flex";
        retour.style.display = "block";
    }
};
function scaleFicheMoto(){
    if (getComputedStyle(ficheMotoFull).display === "none"){
        motoInfos.style.display = "none";
        retour.style.display = "none";
        ficheMotoFull.style.display = "flex";
    }
    else {
        ficheMotoFull.style.display = "none";
        motoInfos.style.display = "flex";
        retour.style.display = "block";
    }
};

piloteButton.addEventListener("click", togglePilote);
motoButton.addEventListener("click", toggleMoto);
ecurieButton.addEventListener("click", toggleEcurie);
retour.addEventListener("click", toggleChoix);
imgMoto.addEventListener("click", scaleImgMoto);
imgMotoFull.addEventListener("click", scaleImgMoto);
ficheMoto.addEventListener("click", scaleFicheMoto);
ficheMotoFull.addEventListener("click", scaleFicheMoto);


// CHRIS PART // // CHRIS PART // // CHRIS PART // // CHRIS PART // // CHRIS PART // // CHRIS PART //


// LEONARD PART // // LEONARD PART // // LEONARD PART // // LEONARD PART // // LEONARD PART // 

  
let joan = document.getElementById('suzMir');
let video = document.getElementById('video'); 
let play = document.getElementById('play')

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

function playPause() { 
    if (video.paused) 
        video.play(); 
    else 
        video.pause(); 
}


// LEONARD PART // // LEONARD PART // // LEONARD PART // // LEONARD PART // // LEONARD PART // 

const ecuries = ['Yamaha', 'Ducati', 'Suzuki'];
let ecubeftxt = "Liste des écuries : ";

for (let i = 0; i < ecuries.length; i++) {
    if(i === ecuries.length - 1){
        ecubeftxt += "et " + ecuries[i] + '.';
       } else {
           ecubeftxt += ecuries[i] + ', ';
       }
}
document.getElementById("listecuries").textContent = ecubeftxt;