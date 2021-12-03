status1 = "";
imag1e = "";
objects1 = [];
function preload(){
    imag1e = loadImage('img-1.jpg');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.position(630, 300);
    x = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelloaded(){
    console.log("cocossd has loaded!"); 
    status1 = true;
    x.detect(imag1e, detectedObject);
}
function detectedObject(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        objects1 = result;
    }
}
function draw(){
    image(imag1e, 0, 0, 640, 420);
    if(status1 != ""){
        for(var i = 0; i < objects1.length; i++){
            color = "purple"
            document.getElementById("status").innerHTML = "Status: Object Detected";
            document.getElementById("ere").innerHTML = "Cocossd has detected "+objects1.length+" objects";
            fill(color);
            percent = floor(objects1[i].confidence * 100);
            text(objects1[i].label + " " + percent + "%", objects1[i].x + 15, objects1[i].y + 15);
    noFill();
    stroke(color);
    rect(objects1[i].x, objects1[i].y, objects1[i].width, objects1[i].height);
    }
}
}
function back1(){
    window.location = "index.html";
}