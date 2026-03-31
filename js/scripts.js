// JM, 03/11/26
"use strict";

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

let inception = new Inception({
    iframeContainerId: "JMdev-droste-container",
    levels: 2,
    classesToRemove: ["header", "footer"]
});