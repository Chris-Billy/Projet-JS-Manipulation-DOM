let actualPage = "home";

function displayPage(page){
    console.log(actualPage); 
    document.getElementById(actualPage).style.display = "none";
    console.log('Redirection vers la page : '+page);
    let pageToDisplay = document.getElementById(page);
    pageToDisplay.style.display = "flex";
    actualPage = page;
}