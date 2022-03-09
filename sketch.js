var paisaje, paisajeImg;
var mario,mariocorre, mariochoca;
var enemigosGroup, enemigo1, enemigo2;

function preload(){
paisajeImg=loadImage("fondo1.png");
mariocorre=loadAnimation("mario-camina.png","mario-salta2.png");
enemigo1=loadImage("enem1.png");
enemigo2=loadImage("enem2.png");
}

function setup() {
    createCanvas(800,600);
    //Crear el fondo-paisaje
    paisaje=createSprite(300,205);
    paisaje.addImage("paisaje",paisajeImg);

    mario=createSprite(20,405,4,4);
    mario.addAnimation("corriendo",mariocorre);
    mario.scale=0.05;
    paisaje.VelocityX=5;
}

function draw() {
   
   //paisaje.VelocityX=-10;
   drawSprites();
}