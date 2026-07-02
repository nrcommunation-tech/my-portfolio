// ===============================
// Typing Effect
// ===============================

const typing = document.getElementById("typing");

const words = [
    "Electrical Store",
    "Electronics Shop",
    "Kitchen Appliances",
    "Mobile Accessories",
    "Best Price • Best Quality"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
        if (charIndex > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typing.textContent = current.substring(0, charIndex--);
        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });

});

// ===============================
// Navbar Active Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){
            link.classList.add("active");
        }

    });

});
// ===============================
// Mobile Menu Toggle
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
// ===============================
// Dark Mode
// ===============================

const darkBtn = document.getElementById("dark-mode-toggle");

// पहले से सेव किया हुआ मोड लोड करें
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    darkBtn.textContent = "☀️";
}

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }else{
        darkBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }

});
// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

// Show / Hide Button
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }

});

// Scroll to Top
topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// ===============================
// Hero Image Slider
// ===============================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

setInterval(()=>{

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

},3000);
// ===============================
// Product Search
// ===============================

const searchInput = document.getElementById("productSearch");
const productCards = document.querySelectorAll(".business-card");

searchInput.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase();

    productCards.forEach(card => {

        const productName = card.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});
// ===============================
// AOS Animation
// ===============================

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});