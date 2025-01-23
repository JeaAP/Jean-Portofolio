// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Parallax Effect (optional, adjust as per preference)
window.addEventListener('scroll', function () {
    const homeSection = document.getElementById("home");
    let offset = window.pageYOffset;
    homeSection.style.backgroundPositionY = offset * 0.7 + "px";
});


const leftButton = document.querySelector('.arrow-btn.left');
const rightButton = document.querySelector('.arrow-btn.right');
const skillsGrid = document.querySelector('.skills-grid');

let scrollAmount = 0;

leftButton.addEventListener('click', () => {
    scrollAmount -= 200; // Ubah angka ini sesuai dengan jumlah yang ingin digulir
    skillsGrid.style.transform = `translateX(${scrollAmount}px)`;
});

rightButton.addEventListener('click', () => {
    scrollAmount += 200; // Ubah angka ini sesuai dengan jumlah yang ingin digulir
    skillsGrid.style.transform = `translateX(${scrollAmount}px)`;
});

