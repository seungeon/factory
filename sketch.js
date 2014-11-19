var bg;

var img;  
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var i;
var timing;
var duration;
var img9;
var img10;

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
    img9 = loadImage("bottomCup.png");
    img10 = loadImage("bottomCup2.png");
   


}


function draw()
{
    background(bg);

    fill(237,112,50);
    noStroke();

    var duration = 3000;
    var timing = (new Date()%duration)/duration;


 
    image(img,254,0);



    fill(0);
    for(var i = -1 ; i <10 ; i++){
    	image(img8, i*(15+img.width)+timing*(15+img.width),603);

    } 

    image(img7,204,499);
    image(img2,204,499);
    image(img3,495,451);


      if(timing*2 <1){
    image(img9, timing*500,741);
    } else if(timing*2 <2){
    image(img10, timing*500,727);
    }

    image(img4,556,714);
    image(img5,0,700);
    image(img6,212,724);


}