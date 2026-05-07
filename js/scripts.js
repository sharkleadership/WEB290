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
const hamburgerButtons = document.querySelectorAll(".hamburger__button");
const topMenuCheck = document.querySelector("#hamburger--header");

document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("hamburger__button") || 
        e.target.id.includes("hamburger--")) {
        return;
    }
    if (topMenuCheck.checked) {
        topMenuCheck.checked = false;
    }
});

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        e.stopPropagation();
        topMenuCheck.checked = false;
    });
});

// ACCESSIBILITY: escape listener

function handleHamburgerEscape(e) {
    if (e.key === "Escape") {
        if (topMenuCheck.checked || footerMenuCheck.checked) {
            topMenuCheck.checked = false;
        }
    }
}

hamburgerButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (!topMenuCheck.checked) {
            document.addEventListener("keydown", handleHamburgerEscape);
        } else {
            document.removeEventListener("keydown", handleHamburgerEscape);
        }
    });
    button.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            button.click();
        }
    });
});

// Inception

let inception = new Inception({
    iframeContainerId: "JMdev-droste-container",
    levels: 2,
    classesToRemove: ["header", "footer", "p5-script", "projects__desc"],
});

inception.onload = function() {
    this.iframes[0].tabIndex = -1;
    this.iframes[0].title = "A droste example of jeremymeyers.dev.";
    let baseFontSize = 20;
    for (let iframe of this.iframes) {
        iframe.contentDocument.children[0].style.fontSize = `${baseFontSize}px`;
        baseFontSize -= 4;
    };
    const img = document.createElement("img");
    img.src = "../assets/images/JM-tag-logo.svg";
    img.classList.add("droste-final-image");
    this.iframeContainers[2].appendChild(img);
}

// Header height

const header = document.querySelector('.header');
const root = document.documentElement;

const updateHeaderHeight = () => {
    const height = header.offsetHeight;
    root.style.setProperty('--header-height', `${height}px`);
};

if (header) {
    window.addEventListener('resize', updateHeaderHeight);
    updateHeaderHeight();
}