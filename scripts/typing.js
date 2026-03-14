const items = [
    ["RLBot", "Developer"],
    ["RLGym", "Developer"],
    ["Hobbyist", "Producer"],
    ["REDD"],
];

let lastIndex = -1;

function getRandomIndex() {
    let idx;
    do {
        idx = Math.floor(Math.random() * items.length);
    } while (idx === lastIndex);
    lastIndex = idx;
    return idx;
}

async function typeText(element, lines) {
    element.innerHTML = "";

    for (let l = 0; l < lines.length; l++) {
        const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttribute("x", "50%");
        tspan.setAttribute("dy", l === 0 ? "0" : "1.2em");
        tspan.textContent = "";
        element.appendChild(tspan);

        const line = lines[l];
        for (let i = 0; i < line.length; i++) {
            tspan.textContent += line[i];
            await new Promise(res => setTimeout(res, 60));
        }
    }
}


async function eraseText(element) {
    const tspans = Array.from(element.querySelectorAll("tspan"));

    for (let l = tspans.length - 1; l >= 0; l--) {
        const tspan = tspans[l];
        while (tspan.textContent.length > 0) {
            tspan.textContent = tspan.textContent.slice(0, -1);
            await new Promise(res => setTimeout(res, 40));
        }
    }

    element.innerHTML = "";
}


async function updateText() {
    const idx = getRandomIndex();
    const newLines = items[idx];

    const elements = [
        document.getElementById("edit1"),
        document.getElementById("edit2")
    ].filter(Boolean);

    await Promise.all(elements.map(el => eraseText(el)));
    await Promise.all(elements.map(el => typeText(el, newLines)));
}

window.addEventListener("DOMContentLoaded", updateText);
setInterval(updateText, 10000);
