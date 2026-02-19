const water = document.querySelector(".water");
const bubblesDiv = document.querySelector(".bubbles");

const waterWidth = water.clientWidth;
const waterHeight = water.clientHeight;

// how many bubbles
const bubbleCount = 14;

let bubbles = [];

// FOR LOOP to create the bubbles
for (let i = 0; i < bubbleCount; i++) {
  const b = document.createElement("div");
  b.classList.add("bubble");

  // random size
  const size = 8 + Math.random() * 10;
  b.style.width = size + "px";
  b.style.height = size + "px";

  bubblesDiv.appendChild(b);

  // store bubble data
  bubbles.push({
    el: b,
    x: Math.random() * (waterWidth - size),
    y: waterHeight + Math.random() * 100,
    speed: 0.7 + Math.random() * 1.8,
    size: size
  });
}

//animation
setInterval(function () {
  for (let i = 0; i < bubbles.length; i++) {
    const bub = bubbles[i];

    bub.y -= bub.speed;

    // tiny side drift so it doesn't look robotic
    bub.x += (Math.random() - 0.5) * 0.8;

    // keep inside water bounds
    if (bub.x < 0) bub.x = 0;
    if (bub.x > waterWidth - bub.size) bub.x = waterWidth - bub.size;

    // when bubble reaches top, reset to bottom
    if (bub.y < -bub.size) {
      bub.y = waterHeight + Math.random() * 80;
      bub.x = Math.random() * (waterWidth - bub.size);
      bub.speed = 0.7 + Math.random() * 1.8;
    }

    bub.el.style.left = bub.x + "px";
    bub.el.style.top = bub.y + "px";
  }
}, 20);
