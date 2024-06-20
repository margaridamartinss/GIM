// File sketch.js
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);

    // Cerchio dei secondi (rosso)
    fill(255, 0, 0); // Rosso per i secondi
    noStroke(); // Nessun bordo
    let secondRadius = map(second(), 0, 60, 0, min(width, height) / 3);
    ellipse(width / 2, height / 3, secondRadius * 2);

    // Cerchio dei minuti (nero)
    fill(0); // Nero per i minuti
    let minuteRadius = map(minute(), 0, 60, 0, min(width, height) / 3);
    ellipse(width / 2, height / 3 * 2, minuteRadius * 2);

    // Cerchio delle ore (nero)
    let hourRadius = map(hour(), 0, 24, 0, min(width, height) / 3);
    ellipse(width / 2, height / 3 * 3, hourRadius * 2);
}
