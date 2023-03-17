const vibes = [
  "...you are great",
  "...you are right",
  "...you are awesome",
  "...have a wonderful day",
];

const vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);
