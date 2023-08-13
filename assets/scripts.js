$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});


window.onload = function() {
    var link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Inter&family=Spectral:ital,wght@0,400;1,300;1,400;1,800&display=swap";
    link.rel = "stylesheet";
    document.body.appendChild(link);
};
