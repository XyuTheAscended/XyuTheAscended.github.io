// Get elements
let ex1Btn = document.getElementById("ex1Btn");
let ex2Btn = document.getElementById("ex2Btn");

let exercise1 = document.getElementById("exercise1");
let exercise2 = document.getElementById("exercise2");

let slider = document.getElementById("minuteSlider");
let minuteDisplay = document.getElementById("minuteDisplay");
let message1 = document.getElementById("message1");

let message2 = document.getElementById("message2");

let navMenu = document.getElementById("navMenu").querySelector("ul");
let arrow = document.getElementById("arrow");


// -------- Menu Toggle --------
arrow.onclick = function() {

    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
        arrow.innerHTML = "&#9660;";
    } else {
        navMenu.style.display = "block";
        arrow.innerHTML = "&#9650;";
    }
};


// -------- Exercise Toggle --------
ex1Btn.onclick = function() {
    exercise1.style.display = "block";
    exercise2.style.display = "none";
};

ex2Btn.onclick = function() {
    exercise1.style.display = "none";
    exercise2.style.display = "block";
    countdown();
};


// -------- Exercise 1 --------
slider.oninput = function() {

    let minutes = parseInt(slider.value);
    minuteDisplay.innerHTML = minutes + " minutes";

    if (minutes > 45) {
        message1.innerHTML = "\u{1F953} Let's have bacon and eggs!";
    }
    else if (minutes > 30) {
        message1.innerHTML = "\u{2615} Grab your coffee. No rush.";
    }
    else if (minutes > 15) {
        message1.innerHTML = "\u{1F697} You should probably head out soon.";
    }
    else {
        message1.innerHTML = "\u{1F3C3} Hurry up! Class is starting!";
    }
};


// -------- Exercise 2 --------
function countdown() {

    let now = new Date();

    let classTime = new Date();
    classTime.setHours(8);
    classTime.setMinutes(30);
    classTime.setSeconds(0);

    let difference = Math.floor((classTime - now) / 60000);

    if (difference > 15) {
        message2.innerHTML = "\u{1F60E} Plenty of time! Relax.";
    }
    else if (difference > 10) {
        message2.innerHTML = "\u{1F392} Getting closer! Pack your bag.";
    }
    else if (difference > 5) {
        message2.innerHTML = "\u{1F6B6} You should leave soon.";
    }
    else if (difference >= 0) {
        message2.innerHTML = "\u{23F3} Almost late! Move!";
    }
    else if (difference >= -5) {
        message2.innerHTML = "\u{1F92B} Class just started... sneak in quietly.";
    }
    else if (difference >= -15) {
        message2.innerHTML = "\u{1F62C} You're definitely late.";
    }
    else {
        message2.innerHTML = "\u{1F622} You missed class.";
    }
}
