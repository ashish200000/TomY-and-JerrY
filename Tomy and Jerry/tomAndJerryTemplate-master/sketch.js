var tom,tomImage;
var jerry;
var backgroundImage;


function preload() {
    //load the images here
    backgroundImage = loadImage("garden.png");
}

function setup(){
    createCanvas(2000,1000);
    //create tom and jerry sprites here
    tomImage = createSprite(1950,90,20,20)
    jerry = createSprite(80,90,20,20)

}

function draw() {

    background(20);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
