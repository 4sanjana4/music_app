song = "";

function preload() {
  song = loadSound("pink + white.mp3");
}
function preload() {
  song = loadSound("good days.mp3");
}
function preload() {
  song = loadSound("save your tears.mp3");
}


function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 600, 500);
}

function play() {
  song.play();
}
