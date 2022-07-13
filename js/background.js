const images = ["2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.className = "bg";

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
