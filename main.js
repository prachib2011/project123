function setup(){
    video = createCapture(VIDEO);
    video.size(540, 500);

    canvas = createCanvas(550, 560);
    canvas.position(560, 160);

}

function draw(){
    background('#333333');
}