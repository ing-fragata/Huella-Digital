   const scrollable = document.querySelector(".container-logos2-pag2");

    scrollable.addEventListener("wheel", function (e) {
        if (e.deltaY !== 0) {
            e.preventDefault(); // Evitar el desplazamiento vertical de la página
            this.scrollLeft += e.deltaY;
        }
    }, { passive: false });

    // Deshabilitar el desplazamiento vertical de la página al entrar en la sección
    scrollable.addEventListener("mouseenter", function () {
        document.body.style.overflow = "hidden";
    });

    // Habilitar el desplazamiento vertical de la página al salir de la sección
    scrollable.addEventListener("mouseleave", function () {
        document.body.style.overflow = "auto";
    });       



    

    