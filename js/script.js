var typed = new Typed(".auto-type", {
    strings: ["developer", "designer"],
    typeSpeed: 150,
    backSpeed: 150,
    smartBackspace: false,
    loop: true
})


document.addEventListener("DOMContentLoaded", function () {
    // Function to scroll to an element with an offset
    function scrollToElement(elementId) {
        var targetElement = document.getElementById(elementId);

        if (targetElement) {
            var containerPaddingRem = 0;
            var navbarHeight = document.querySelector('.navbar').offsetHeight;
            var rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
            var containerPadding = containerPaddingRem * rootFontSize;
            var totalOffset = containerPadding + navbarHeight;
            var currentScroll = window.scrollY;
            var targetScroll = targetElement.offsetTop - totalOffset;
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth'
            });
        }
    }
    document.querySelector('.scroll-link[href="#home"]').addEventListener('click', function (e) {
        e.preventDefault();
        scrollToElement('home');
    });
    document.querySelector('.scroll-link[href="#about-me"]').addEventListener('click', function (e) {
        e.preventDefault();
        scrollToElement('about-me');
    });
    document.querySelector('.scroll-link[href="#projects"]').addEventListener('click', function (e) {
        e.preventDefault();
        scrollToElement('projects');
    });
    document.querySelector('.scroll-link[href="#contact"]').addEventListener('click', function (e) {
        e.preventDefault();
        scrollToElement('contact');
    });
});


const formData = new FormData(document.querySelector('form'));
