document.addEventListener("DOMContentLoaded", function (event) {
    // Koyu tema
    var prevAktifTheme = localStorage.getItem("theme-color");
    document.documentElement.setAttribute("data-theme", prevAktifTheme ? prevAktifTheme : "light");

    // Animasyon
    AOS.init({
        once: true,
        offset: 10,
        duration: 600,
        easing: 'cubic-bezier(0.42, 0, 0.12, 1.28)'
    });

    // İmleç
    new kursor({
        type: 4,
        color: '#FFC024'
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
})
