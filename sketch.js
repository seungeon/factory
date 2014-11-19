var bg;

var img;  
var img2;
var img3;
var img4;
var img5;
var img6;

var img8;
var i;
var timing;
var duration;
var img9;
var img10;

var photo;
var photo2; 
var photo3; 
var photo4;
var photo5;  
var photo6;



var cup5;
var cup6;
var cup7;


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

    img8 = loadImage("cookie.png");
    img9 = loadImage("bottomCup.png");
    img10 = loadImage("bottomCup2.png");
    photo = loadImage("up1.png");
    photo2 = loadImage("up2.png");
    photo3 = loadImage("up3.png");
    photo4 = loadImage("candyBox2.png");
    photo5 = loadImage("rightLine.png");
    photo6 = loadImage("candyBox.png");
    cup5 = loadImage("cup5.png");
    cup6 = loadImage("cup6.png");
    cup7 = loadImage("cup7.png");
    cup1 = loadImage("cup1.png");
    cup2 = loadImage("cup2.png");
    cup3 = loadImage("cup3.png");
    cup4 = loadImage("cup4.png");
   


}


function draw()
{
    background(bg);

    fill(237,112,50);
    noStroke();


    image(photo,248,124);
    image(photo2,347,124);
    image(photo3,444,124);
    image(photo4,544,0);
    image(photo5,568,117)
    image(photo6,562,375)

    var duration = 3000;
    var timing = (new Date()%duration)/duration;


 
    image(img,254,0);



    fill(0);
    for(var i = -1 ; i <10 ; i++){
    image(img8, i*(15+img.width)+timing*(15+img.width),603);

    } 


    image(img2,204,499);
    image(img3,495,451);


    if(timing*2 <1){
    image(img9, timing*600,741);
    } else if(timing*2 <2){
    image(img10, timing*700,727);
    }

    image(img4,556,714);
    image(img5,0,700);
    image(img6,212,724);


    if(timing*3 <1){
    image(cup6,312,274);
    } else if(timing*3 <2){
    image(cup3,312,274);
    }else{
    image(cup4,312,274);

    } 


    image(cup5,213,274);
    

    if(timing*3 <1){
    image(cup7,408,274);
    } else if(timing*3 <2){
    image(cup1,408,274);
    }else{
    image(cup2,408,274);

    } 
    

}