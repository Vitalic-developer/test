var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    centeredSlides: true,
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        },
    },


    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

