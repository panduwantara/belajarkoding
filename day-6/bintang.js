const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const trackLength = 5;
let currentPosition = 0;

function drawTrack() {
  let track = "";
  for (let i = 0; i < trackLength; i++) {
    if (i === currentPosition) {
      track += "*";
    } else {
      track += "=";
    }
  }
  console.log(track);
}

function moveStar() {
  rl.question("Tekan Enter untuk memindahkan bintang...", () => {
    currentPosition = (currentPosition + 1) % trackLength;
    drawTrack();
    moveStar();
  });
}

drawTrack();
moveStar();