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
            centerInsufficientSlides: 'true',
            fade: 'true',
            grabCursor: 'true',
            autoHeight: 'true',
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

        var swiper1 = new Swiper(".slide-content1", {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: false,
            centerSlide: 'true',
            centerInsufficientSlides: 'true',
            fade: 'true',
            grabCursor: 'true',
            autoHeight: 'true',
            pagination: {
                el: ".swiper-pagination1",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next1",
                prevEl: ".swiper-button-prev1",
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

        var swiper1 = new Swiper(".slide-content2", {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: false,
            centerSlide: 'true',
            centerInsufficientSlides: 'true',
            fade: 'true',
            grabCursor: 'true',
            autoHeight: 'true',
            pagination: {
                el: ".swiper-pagination2",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next2",
                prevEl: ".swiper-button-prev2",
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

        var swiper1 = new Swiper(".slide-content3", {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: false,
            centerSlide: 'true',
            centerInsufficientSlides: 'true',
            fade: 'true',
            grabCursor: 'true',
            autoHeight: 'true',
            pagination: {
                el: ".swiper-pagination3",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next3",
                prevEl: ".swiper-button-prev3",
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

        var swiper1 = new Swiper(".slide-content4", {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: false,
            centerSlide: 'true',
            centerInsufficientSlides: 'true',
            fade: 'true',
            grabCursor: 'true',
            autoHeight: 'true',
            pagination: {
                el: ".swiper-pagination4",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next4",
                prevEl: ".swiper-button-prev4",
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

        var swiper1 = new Swiper(".slide-content5", {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: false,
            centerSlide: 'true',
            centerInsufficientSlides: 'true',
            fade: 'true',
            grabCursor: 'true',
            autoHeight: 'true',
            pagination: {
                el: ".swiper-pagination5",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next5",
                prevEl: ".swiper-button-prev5",
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

        var swiper1 = new Swiper(".slide-content6", {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: false,
            centerSlide: 'true',
            centerInsufficientSlides: 'true',
            fade: 'true',
            grabCursor: 'true',
            autoHeight: 'true',
            pagination: {
                el: ".swiper-pagination6",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next6",
                prevEl: ".swiper-button-prev6",
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

        var swiper1 = new Swiper(".slide-content7", {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: false,
            centerSlide: 'true',
            centerInsufficientSlides: 'true',
            fade: 'true',
            grabCursor: 'true',
            autoHeight: 'true',
            pagination: {
                el: ".swiper-pagination7",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next7",
                prevEl: ".swiper-button-prev7",
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

        var swiper1 = new Swiper(".slide-content8", {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: false,
            centerSlide: 'true',
            centerInsufficientSlides: 'true',
            fade: 'true',
            grabCursor: 'true',
            autoHeight: 'true',
            pagination: {
                el: ".swiper-pagination8",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next8",
                prevEl: ".swiper-button-prev8",
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

        var swiper1 = new Swiper(".slide-content9", {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: false,
            centerSlide: 'true',
            centerInsufficientSlides: 'true',
            fade: 'true',
            grabCursor: 'true',
            autoHeight: 'true',
            pagination: {
                el: ".swiper-pagination9",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next9",
                prevEl: ".swiper-button-prev9",
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

        var swiper1 = new Swiper(".slide-content10", {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: false,
            centerSlide: 'true',
            centerInsufficientSlides: 'true',
            fade: 'true',
            grabCursor: 'true',
            autoHeight: 'true',
            pagination: {
                el: ".swiper-pagination10",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next10",
                prevEl: ".swiper-button-prev10",
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

        var swiper1 = new Swiper(".slide-content11", {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: false,
            centerSlide: 'true',
            centerInsufficientSlides: 'true',
            fade: 'true',
            grabCursor: 'true',
            autoHeight: 'true',
            pagination: {
                el: ".swiper-pagination11",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next11",
                prevEl: ".swiper-button-prev11",
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


/*==================== Video ====================*/
try {
    const videoFile = document.getElementById('video-file'),
        videoButton = document.getElementById('video-button'),
        videoIcon = document.getElementById('video-icon')

    function playPause() {
        if (videoFile.paused) {
            videoFile.play()
            videoIcon.classList.add('ri-pause-line')
            videoIcon.classList.remove('ri-play-line')
        }
        else {
            videoFile.pause();
            videoIcon.classList.remove('ri-pause-line')
            videoIcon.classList.add('ri-play-line')

        }
    }
    videoButton.addEventListener('click', playPause)

    function finalVideo() {
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
    videoFile.addEventListener('ended', finalVideo)
} catch (error) {
}

try {
    const videoButtonForward = document.getElementById('video-button-forward'),
        videoButtonBack = document.getElementById('video-button-back')


    videoButtonForward.addEventListener('click', VideoForward)
    function VideoForward() {
        var video = document.getElementById("video-file");
        video.currentTime += 15;
    }

    videoButtonBack.addEventListener('click', VideoBack)
    function VideoBack() {
        var video = document.getElementById("video-file");
        video.currentTime -= 15;
    }
} catch (error) {
}


/*==================== Video1 ====================*/
try {
    const videoFile = document.getElementById('video-file1'),
        videoButton = document.getElementById('video-button1'),
        videoIcon = document.getElementById('video-icon1')

    function playPause() {
        if (videoFile.paused) {
            videoFile.play()
            videoIcon.classList.add('ri-pause-line')
            videoIcon.classList.remove('ri-play-line')
        }
        else {
            videoFile.pause();
            videoIcon.classList.remove('ri-pause-line')
            videoIcon.classList.add('ri-play-line')

        }
    }
    videoButton.addEventListener('click', playPause)

    function finalVideo() {
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
    videoFile.addEventListener('ended', finalVideo)
} catch (error) {
}

try {
    const videoButtonForward = document.getElementById('video-button-forward1'),
        videoButtonBack = document.getElementById('video-button-back1')


    videoButtonForward.addEventListener('click', VideoForward)
    function VideoForward() {
        var video = document.getElementById("video-file1");
        video.currentTime += 15;
    }

    videoButtonBack.addEventListener('click', VideoBack)
    function VideoBack() {
        var video = document.getElementById("video-file1");
        video.currentTime -= 15;
    }
} catch (error) {
}


/*==================== Video2 ====================*/
try {
    const videoFile = document.getElementById('video-file2'),
        videoButton = document.getElementById('video-button2'),
        videoIcon = document.getElementById('video-icon2')

    function playPause() {
        if (videoFile.paused) {
            videoFile.play()
            videoIcon.classList.add('ri-pause-line')
            videoIcon.classList.remove('ri-play-line')
        }
        else {
            videoFile.pause();
            videoIcon.classList.remove('ri-pause-line')
            videoIcon.classList.add('ri-play-line')

        }
    }
    videoButton.addEventListener('click', playPause)

    function finalVideo() {
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
    videoFile.addEventListener('ended', finalVideo)
} catch (error) {
}

try {
    const videoButtonForward = document.getElementById('video-button-forward2'),
        videoButtonBack = document.getElementById('video-button-back2')


    videoButtonForward.addEventListener('click', VideoForward)
    function VideoForward() {
        var video = document.getElementById("video-file2");
        video.currentTime += 15;
    }

    videoButtonBack.addEventListener('click', VideoBack)
    function VideoBack() {
        var video = document.getElementById("video-file2");
        video.currentTime -= 15;
    }
} catch (error) {
}