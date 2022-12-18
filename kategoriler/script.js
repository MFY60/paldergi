document.addEventListener("DOMContentLoaded", function (event) {
    // Koyu tema
    try {
        var prevAktifTheme = localStorage.getItem("theme-color");
        document.documentElement.setAttribute("data-theme", prevAktifTheme ? prevAktifTheme : "light");
    } catch (error) {
    }

    // Animasyon
    try {
        AOS.init({
            once: true,
            offset: 10,
            duration: 600,
            easing: 'cubic-bezier(0.42, 0, 0.12, 1.28)'
        });
    } catch (error) {
    }

    // Yumuşak kaydırma
    try {
        document.querySelectorAll('.Başlık .BaşlıkÇubuğu .BaşlıkÇubuğuLinkler a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                    block: "start"
                });
            });
        });
    } catch (error) {
    }

    //Swiper slide
    try {
        var swiper = new Swiper(".slide-content", {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: false,
            centerSlide: 'true',
            fade: 'true',
            grabCursor: 'true',
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                520: {
                    slidesPerView: 2,
                },
                950: {
                    slidesPerView: 3,
                },
            },
        });
    } catch (error) {
    }

})