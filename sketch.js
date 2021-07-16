var taskbari;
var taskbar;
var t2,t2i,t3,t3i,t4,t4i;
var ba,bai
var a1,a1i
var l = 0;


function preload(){
 taskbari = loadImage("taskbar.png");
  t2i = loadImage("t2.png");
  t3i = loadImage("t3.png");
  t4i = loadImage("t4.png");
  bai = loadImage("1.jpg");
  a1i = loadImage("dis.png");
 

}
function setup() {
  createCanvas(1340,640);
  
  ba = createSprite(670,320,1,1);
  ba.addImage(bai);
  ba.visible = true;
  ba.scale = 1;

  taskbar = createSprite(410,600,1,1);
  taskbar.addImage(taskbari);
  taskbar.visible = false;
  

  t2 = createSprite(780,600,1,1);
  t2.addImage(t2i);
  t2.visible = false;
  t2.scale = 0.97;

 
  t3 = createSprite(1060,600,1,1);
  t3.addImage(t3i);
  t3.visible = false;
  t3.scale = 0.97;


  t4 = createSprite(918,600,1,1);
  t4.addImage(t4i);
  t4.visible = false;

  a1 = createSprite(670,320,1,1);
  a1.addImage(a1i);
  a1.visible = false;

  b1 = createSprite(647,366,75,21)
  b1.visible = true;

  b2 = createSprite(730,366,75,21)
  b2.visible = false;
  
  b3 = createSprite(813,366,75,21)
  b3.visible = false;


}


function draw() {


  background(0);
  drawSprites();
     fill("red");
  text(mouseX+"x"  +mouseY+"y",mouseX-10,mouseY)
    
     taskbar.visible = true;
     t2.visible = true;
     t4.visible = true;
     t3.visible = true;
     
     if(l === 0){

        a1.visible = true;    
      
    if(mousePressedOver(b1)){
    close();
        }
        if(mousePressedOver(b2)){
          location.reload(); 
          l = 1;
     }
     
if(mousePressedOver(b3)){
  a1.visible = true; 
  l = 1;
}
   }

     

  }