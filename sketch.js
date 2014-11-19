var bg;

var img;  
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;


function setup()
{
    createCanvas(641,901);
    bg = loadImage("bg.png");
    img = loadImage("sugarBox.png");
    img2 = loadImage("midBox.png");
    img3 = loadImage("midBox2.png");
    img4 = loadImage("bottomR.png");
    img5 = loadImage("bottomL.png");
    img6 = loadImage("bottomMid.png");
    img7 = loadImage("midBoxCopy.png");
    img8 = loadImage("cookie.png");
   


}


function draw()
{
    background(bg);

    fill(237,112,50);
    noStroke();

    var duration = 5000;
    var timing = (new Date()%duration)/duration;


 
    image(img,254,0);
    image(img7,204,499);
    image(img2,204,499);
    image(img3,495,451);
    image(img4,556,714);
    image(img5,0,700);
    image(img6,212,724);

    fill(0);
    for(var i = -1 ; i <6 ; i++){
    	image(img8, i*(100+img.width)+timing*(100+img.width),603);

    } 
