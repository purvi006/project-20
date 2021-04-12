
function preload() {
    //load the images here
    catSitting=loadAnimation("cat1.png")
    ratWalking=loadAnimation("mouse1.png","mouse2.png","mouse3.png")
    ratangry=loadAnimation("mouse4.png")
    catWalking=loadAnimation("cat2.png","cat3.png")
    backgroundImage=loadImage("garden.png")
    catImage=loadAnimation("cat4.png")
}

function setup(){
    createCanvas(1000,600);
    //create tom and jerry sprites here
    cat=createSprite(800,470,50,50)
    cat.addAnimation("cat1",catWalking)
    cat.scale=0.08

    mouse=createSprite(200,450,30,30)
    mouse.addAnimation("mouse1",ratWalking)
    mouse.scale=0.1
   
}

function draw() 
{
     background(backgroundImage);
     //console.log(cat.x-mouse.x)
     if(cat.x-mouse.x < 90)
     { 
        cat.x=mouse.x+50;
        cat.scale=0.05
        cat.addAnimation("cat1",catSitting)
        mouse.addAnimation("mouse1",ratangry)
     }

  drawSprites();
}

function keyPressed()
{
    if (keyCode===LEFT_ARROW)
    {
     cat.x=cat.x-50;   
    }

}