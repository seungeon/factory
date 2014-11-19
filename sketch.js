var bg;

var img;  
var img2;
var img3;


function setup()
{
    createCanvas(641,901);
    bg = loadImage("bg.png");
    img = loadImage("sugarBox.png");
    img2 = loadImage("midBox.png");
    img3 = loadImage("midBox2.png");

}


function draw()
{
    background(bg);

    fill(237,112,50);
    noStroke();
 
    image(img,254,0);
    image(img2,204,499);
    image(img3,495,576);
 
    } 
