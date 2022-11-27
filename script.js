document.addEventListener("DOMContentLoaded", function (event) {
    // Koyu tema
    var prevAktifTheme = localStorage.getItem("theme-color");
    document.documentElement.setAttribute("data-theme", prevAktifTheme ? prevAktifTheme : "light");
    var themeToggle = document.getElementsByClassName('TemaRengiButon')[0];
    themeToggle.onclick = function () {
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var switchToTheme = currentTheme === "dark" ? "light" : "dark";
        localStorage.setItem("theme-color", switchToTheme)
        document.documentElement.setAttribute("data-theme", switchToTheme);
    }

    // Animasyon
    AOS.init({
        once: true,
        offset: 10,
        duration: 600,
        easing: 'cubic-bezier(0.42, 0, 0.12, 1.28)'
    });

    // İmleç
    function is_touch_enabled() {
        return ('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0);
    }

    if (is_touch_enabled()) {
    }
    else {
        new kursor({
            type: 4,
            color: '#FFC024'
        });
    }

    // SVG desteği
    svg4everybody();

    // CSS değişken desteği
    cssVars({});

    // Yapışkan menü
    var menu = document.getElementsByClassName("Başlık")[0];
    if (window.pageYOffset >= 32) {
        menu.classList.add('sticky');
    }
    var lastScroll = 0;
    window.addEventListener("scroll", function () {
        var currentScroll = window.pageYOffset;
        if (currentScroll <= 32) {
            menu.classList.remove('sticky');
            return;
        } else {
            menu.classList.add('sticky');
        }
        lastScroll = currentScroll;
    });

    // Yumuşak kaydırma
    document.querySelectorAll('.Başlık .BaşlıkÇubuğu .BaşlıkÇubuğuLinkler a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: "start"
            });
        });
    });

    // En yukarı git
    var trigger = document.getElementsByClassName('Logo')[0];
    trigger.onclick = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Mobil menü
    var mobileMenuToggle = document.getElementsByClassName('MobilMenüButon')[0];
    mobileMenuToggle.onclick = function () {
        document.querySelector(".Başlık .BaşlıkÇubuğu .BaşlıkÇubuğuLinkler").classList.toggle('Aktif');
    }

    window.onscroll = function (e) {
        document.querySelector(".Başlık .BaşlıkÇubuğu .BaşlıkÇubuğuLinkler").classList.remove('Aktif');
    }
})