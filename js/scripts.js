// JM, 04/15/26
"use strict";

// Japanese greeting - Hero

const currentHour = function() {
    const hour = new Date().getHours();
    return hour;
}
setInterval(currentHour, 1000);
currentHour();

function japaneseGreeting() {
    const GREETINGS = document.querySelectorAll(".morning, .afternoon, .evening");
    for (let greet of GREETINGS) {
        greet.classList.remove("time");
    }
    if (currentHour >= 0 && currentHour < 10) {
        GREETINGS[0].classList.add("time");
    } else if (currentHour >= 11 && currentHour <= 17) {
        GREETINGS[1].classList.add("time");
    } else {
        GREETINGS[2].classList.add("time");
    }

    setInterval(japaneseGreeting, 1000);
}
japaneseGreeting();

// Hamburger Menu

const lis = document.querySelectorAll("nav menu li");
const topMenuCheck = document.querySelector("#hamburger--header");
const footerMenuCheck = document.querySelector("#hamburger--footer");

document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("hamburger__button") || 
        e.target.id.includes("hamburger--")) {
        return;
    }
    if (topMenuCheck.checked || footerMenuCheck.checked) {
        topMenuCheck.checked = false;
        footerMenuCheck.checked = false;
    }
});

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        e.stopPropagation();
        topMenuCheck.checked = false;
        footerMenuCheck.checked = false;
    });
});

// ACCESSIBILITY: escape listener
document.body.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        if (e.target.classList.contains("hamburger__button") || 
            e.target.id.includes("hamburger--")) {
            return;
        }
        if (topMenuCheck.checked || footerMenuCheck.checked) {
            topMenuCheck.checked = false;
            footerMenuCheck.checked = false;
        }
    }
});


// Inception

let inception = new Inception({
    iframeContainerId: "JMdev-droste-container",
    levels: 2,
    classesToRemove: ["header", "footer"]
});