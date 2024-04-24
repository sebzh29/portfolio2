/*  Apparition du up button */
var iScrollPos = 0;

$(window).scroll(function () {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos){
        $('#up-button').removeClass('show');
    } else {
        $('#up-button').addClass('show');
    }
    iScrollPos = iCurScrollPos;

    // Si l'utilisateur est en bas de la page, afficher le bouton
    let windowHeight = $(window).height();
    let documentHeight = $(document).height();
    let bottomPosition = windowHeight + iCurScrollPos;

    if (bottomPosition >= documentHeight) {
        $('#up-button').addClass('show');
    }

});

// Fonction à appeler lorsque l'utilisateur atteint le bas de la page
function handleScrollBottom() {
    console.log("Vous êtes en bas de la page !");
}

// Écouteur d'événements pour le défilement de la page
window.addEventListener('scroll', () => {
    // Calculer la position totale de défilement (incluant la hauteur visible)
    let scrolledHeight = window.innerHeight + window.scrollY;
    let totalHeight = document.documentElement.scrollHeight;

    // Vérifier si l'utilisateur a atteint le bas de la page
    if (scrolledHeight >= totalHeight) {
        handleScrollBottom();
    }
});