document.addEventListener('DOMContentLoaded', function () {
    const slides = [
        {
            "image": "slide1.jpg",
            "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image": "slide2.jpg",
            "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image": "slide3.jpg",
            "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image": "slide4.png",
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];

    let currentIndex = 0;
    const bannerImg = document.querySelector('.banner-img');
    const tagLine = document.querySelector('#banner p');
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');
    const dotsContainer = document.querySelector('.dots');
    const dots = [];

    // Function to change the banner image and tag line
    function changeBannerImage() {
        bannerImg.src = './assets/images/slideshow/' + slides[currentIndex].image;
        tagLine.innerHTML = slides[currentIndex].tagLine;
        updateDots();
    }

    // Function to update active dot
    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('dot_selected');
            } else {
                dot.classList.remove('dot_selected');
            }
        });
    }

    // Function to handle clicking on the left arrow
    arrowLeft.addEventListener('click', function(event) {
        console.log('Clic sur la flèche gauche');
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        changeBannerImage();
    });

    // Function to handle clicking on the right arrow
    arrowRight.addEventListener('click', function(event) {
        console.log('Clic sur la flèche droite');
        currentIndex = (currentIndex + 1) % slides.length;
        changeBannerImage();
    });

    // Create dots
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
        dots.push(dot);

        dot.addEventListener('click', function() {
            currentIndex = i;
            changeBannerImage();
        });
    }

    // Initialize the banner image and tag line
    changeBannerImage();
});
