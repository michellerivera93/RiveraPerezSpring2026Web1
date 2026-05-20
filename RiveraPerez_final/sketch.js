let ratX = 40;
let ratSpeed = 2;
let ratCount = 1;

function setup() {
    let canvas = createCanvas(700, 350);
    canvas.parent("p5-container");
}

function draw() {
    background(20);

    drawWall();
    drawPlatform();
    drawTracks();

    for (let i = 0; i < ratCount; i = i + 1) {
        drawPizza(ratX - 45 - i * 120, 250 + i * 5);
        drawRat(ratX - i * 120, 240 + i * 5);
    }

    ratX = ratX + ratSpeed;

    if (ratX > width + ratCount * 120) {
        ratX = 40;
    }
}

function mousePressed() {
    ratCount = ratCount + 1;

    if (ratCount > 6) {
        ratCount = 1;
    }
}

function drawWall() {
    fill(240);
    stroke(180);
    rect(0, 0, width, 150);

    stroke(200);
    line(0, 50, width, 50);
    line(0, 100, width, 100);

    for (var x = 0; x < width; x = x + 70) {
        line(x, 0, x, 150);
    }

    fill(0);
    noStroke();
    rect(200, 45, 300, 55);

    fill(255);
    textSize(22);
    textAlign(CENTER);
    text("HUNTER COLLEGE 68 ST", 350, 82);
}

function drawPlatform() {
    noStroke();

    fill(90);
    rect(0, 150, width, 130);

    fill("#FCCC0A");
    rect(0, 265, width, 15);
}

function drawTracks() {
    fill(35);
    rect(0, 280, width, 70);

    stroke(170);
    strokeWeight(4);
    line(0, 305, width, 305);
    line(0, 335, width, 335);

    strokeWeight(1);
}

function drawRat(x, y) {
    noStroke();

    // body
    fill(115);
    ellipse(x, y, 110, 52);

    // head
    fill(135);
    ellipse(x + 48, y - 8, 45, 32);

    // ear
    fill(150);
    ellipse(x + 58, y - 25, 18, 18);

    // eye
    fill(0);
    ellipse(x + 62, y - 12, 6, 6);

    // nose
    fill(30);
    ellipse(x + 73, y - 5, 8, 6);

    // tail
    stroke(115);
    strokeWeight(5);
    line(x - 55, y, x - 95, y + 10);

    noStroke();

    // feet
    fill(70);
    ellipse(x - 25, y + 25, 17, 9);
    ellipse(x + 25, y + 25, 17, 9);

    // whiskers
    stroke(0);
    strokeWeight(1);
    line(x + 70, y - 8, x + 92, y - 18);
    line(x + 70, y - 5, x + 93, y - 5);
    line(x + 70, y - 2, x + 92, y + 9);

    noStroke();
}

function drawPizza(x, y) {
    noStroke();

    // cheese
    fill("#F0BE46");
    triangle(x, y, x + 55, y + 15, x + 18, y + 55);

    // pepperoni
    fill("#DC3228");
    ellipse(x + 24, y + 22, 8, 8);
    ellipse(x + 38, y + 18, 8, 8);
    ellipse(x + 27, y + 38, 8, 8);

    // crust
    stroke("#B47828");
    strokeWeight(5);
    line(x, y, x + 55, y + 15);

    strokeWeight(1);
}