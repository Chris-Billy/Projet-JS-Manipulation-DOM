let actualPage = "home";

function displayPage(page){
    
    console.log(actualPage); 
    
    document.getElementById(actualPage).style.display = "none";
    
    console.log('Redirection vers la page : '+page);
    
    let pageToDisplay = document.getElementById(page);
    
    pageToDisplay.style.display = "flex";
    
    actualPage = page;
}

let title = document.getElementById('title');


function replaceText(text){
    title.innerHTML = text;
}

function defaultText(){
    title.innerHTML = "Découvrez les pilotes de ces écuries!";
}