var dog
var happyDog
var database
var foodsS
var foodStock

function preload(){
happyDog = loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(20,20.250,250);
  dog.addImage(happyDog);
database = firebase.database();
foodStock = database.ref('Food');
foodStock.on("value", readStock);
}


function draw() {  

  drawSprites();
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
dog.addImage(dogHappy)
}

drawSprites();

textSize(12)
text("Food Stock : " + foodStock, 10,475);

textSize(12)
text("Note : Press the up arrow to feed Buddy milk (I know, weird!)", 250, 475)
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
 if(x <= 0){
  x = 0
 } else{
   x = x - 1
}
  database.ref("/").update({
    Food:x
  })
}