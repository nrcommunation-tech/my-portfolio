function showMessage() {
    alert("Welcome to my professional website!");
}

function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    let btn = document.getElementById("theme-btn");

    if (document.body.classList.contains("dark-mode")) {
        btn.innerHTML = "☀️ Light Mode";
    } else {
        btn.innerHTML = "🌙 Dark Mode";
    }
}
const text = [
    "Web Developer",
    "Frontend Developer",
    "JavaScript Learner"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type, 1000);
    }else{
        setTimeout(type,150);
    }

})();
function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name==="" || email==="" || message===""){
        alert("Please fill all fields.");
        return false;
    }

    alert("Message Sent Successfully!");
    return true;
}
function searchProjects() {

    let input = document.getElementById("search").value.toLowerCase();

    let projects = document.querySelectorAll(".project-card");

    projects.forEach(function(project) {

        let title = project.querySelector("h3").textContent.toLowerCase();

        if (title.includes(input)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }

    });

}
function filterProjects(category) {

    let projects = document.querySelectorAll(".project-card");

    projects.forEach(function(project) {

        if (category === "all") {
            project.style.display = "block";
        } else if (project.dataset.category === category) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }

    });

}
// ===== ScrollReveal (Temporarily Disabled) =====

// ScrollReveal().reveal('.hero', {
//     delay: 200,
//     distance: '60px',
//     origin: 'top',
//     duration: 1000
// });

// ScrollReveal().reveal('.about', {
//     delay: 300,
//     distance: '60px',
//     origin: 'left',
//     duration: 1000
// });

// ScrollReveal().reveal('.services', {
//     delay: 400,
//     distance: '60px',
//     origin: 'bottom',
//     duration: 1000
// });

// ScrollReveal().reveal('.skills', {
//     delay: 500,
//     distance: '60px',
//     origin: 'right',
//     duration: 1000
// });

// ScrollReveal().reveal('.projects', {
//     delay: 600,
//     distance: '60px',
//     origin: 'bottom',
//     duration: 1000
// });

// ScrollReveal().reveal('.contact', {
//     delay: 700,
//     distance: '60px',
//     origin: 'left',
//     duration: 1000
// });

window.addEventListener("load", function () {
    setTimeout(function () {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.display = "none";
        }
    }, 2000);
});
window.onscroll = function () {

    let winScroll = document.documentElement.scrollTop;

    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrolled = (winScroll / height) * 100;

    document.getElementById("progress-bar").style.width = scrolled + "%";
};
window.addEventListener("scroll", function(){

let btn =
document.getElementById("topBtn");

if(window.scrollY>300){

btn.style.display="block";

}else{

btn.style.display="none";

}

});

function scrollToTop(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
window.addEventListener("load",function(){

let count =
localStorage.getItem("visit") || 0;

count++;

localStorage.setItem(
"visit",
count
);

let counter =
document.getElementById("count");

if(counter){

counter.textContent =
count;

}

});