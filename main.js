songA="";
songB="";
X=0;
Y=0;
leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;
scoreL=0;
scoreR=0;



function preload() {
songA = loadSound("taco.mp3");
songB = loadSound("Hailing Taquitos.mp3");

}

function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
   

}
 function modelloaded() {
        console.log("modelloaded");
    }
function draw() {
    image(video,0,0,600,500);
    songA_status=songA.isPlaying()
    songB_status=songB.isPlaying()
fill("#cce6ff");
stroke("#cce6ff");

if (scoreL > 0.2) {
    circle(leftWristX,leftWristY,20);
    songB.stop();
    if(songA_status==false) {
        songA.play()
    }
}
if (scoreR > 0.2) {
    circle(rightWristX,rightWristY,20);
    songA.stop();
    if(songB_status==false) {
        songB.play()
    }
}
}

function gotposes(results) {
if (results.length > 0) {

scoreL= results[0].pose.keypoints[9].score;
scoreR=results[0].pose.keypoints[10].score;
leftWristX= results[0].pose.leftWrist.X;
rightWristY= results[0].pose.rightWrist.Y;
leftWristY= results[0].pose.leftWrist.X;
rightWristX= results[0].pose.rightWrist.X;
}
}