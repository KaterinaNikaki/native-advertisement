function appearOnScroll() {
    var screenPosition = window.innerHeight;

    var numbers = document.querySelectorAll(".numbers");
    for (i = 0; i < numbers.length; i++) {
        var numbersPosition = numbers[i].getBoundingClientRect().top;

        if (numbersPosition < screenPosition) {
            numbers[i].classList.add('fadeIn');
        }
    }

    var shapes = document.querySelectorAll(".shapes");
    for (i = 0; i < shapes.length; i++) {
        var shapesPosition = shapes[i].getBoundingClientRect().top;

        if (shapesPosition < screenPosition) {
            shapes[i].classList.add('fadeIn');
        }
    }

    var images = document.querySelectorAll(".images");
    for (i = 0; i < images.length; i++) {
        var imagesPosition = images[i].getBoundingClientRect().top;

        if (imagesPosition < screenPosition) {
            images[i].classList.add('rotateLeft');
        }
    }

    var introPlate = document.querySelector(".intro-plate");
    var introPlatePosition = introPlate.getBoundingClientRect().top;

    if (introPlatePosition < screenPosition) {
        introPlate.classList.add('moveLeft1');
    }

    var section3Plate = document.querySelector(".section3-plate");
    var section3PlatePosition = section3Plate.getBoundingClientRect().top;

    if (section3PlatePosition < screenPosition) {
        section3Plate.classList.add('moveLeft2');
    }
}

window.addEventListener("scroll", appearOnScroll);