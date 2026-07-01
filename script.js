// ===============================
// N.R Communication
// Professional Business Website
// script.js
// ===============================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===============================
// Navbar Shadow on Scroll
// ===============================

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
    } else {
        nav.style.boxShadow = "none";
    }

});

// ===============================
// Typing Effect
// ===============================

const text = "Electrical • Electronics • Kitchen Appliances • Mobile Accessories";

const typing = document.getElementById("typing");

let i = 0;

function typeText() {

    if (!typing) return;

    if (i < text.length) {

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeText, 60);

    }

}

window.onload = typeText;

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
right:20px;
bottom:20px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#0d6efd;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
z-index:9999;
box-shadow:0 0 15px rgba(13,110,253,.6);
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ===============================
// Reveal Animation
// ===============================

const cards = document.querySelectorAll(
".featured-card,.business-card,.about-card,.shop-card"
);

const observer = new IntersectionObserver(entries => {

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition=".7s";

observer.observe(card);

});

// ===============================
// Footer Year
// ===============================

const footer = document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" N.R Communication | All Rights Reserved.";

}

console.log("Website Loaded Successfully");