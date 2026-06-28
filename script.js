
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