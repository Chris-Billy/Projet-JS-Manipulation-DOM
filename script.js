let actualPage = "home";
let title = document.getElementById('title');
let background = document.getElementById('container');
let fabio = document.getElementById('yamfabio');

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

function displayTxt(fText, fText2){
    let hidTxt = document.getElementById(fText);
    let showTxt = document.getElementById(fText2);
    hidTxt.style.display = 'none';
    showTxt.style.display = 'flex';
}
