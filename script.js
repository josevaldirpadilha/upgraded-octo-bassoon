document.addEventListener("DOMContentLoaded", function() {
    const audioButton = document.getElementById("audio-button");
    const audioAnuncio = document.getElementById("audio-anuncio");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const span = document.getElementsByClassName("close")[0];

    audioButton.addEventListener("click", function() {
        if (audioAnuncio.paused) {
            audioAnuncio.play();
        } else {
            audioAnuncio.pause();
        }
    });

    document.querySelectorAll(".clickable").forEach(function(img) {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    span.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

