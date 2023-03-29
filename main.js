music1 = "";
music2 = "";
function preload(){
    music1 = loadSound("believer.mp3");
    music2 = loadSound("bones.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
image(video, 0, 0, 600, 500);
}