let kaarten = ["1","2","3","4","5"];


let slot1 = "";
let slot2 = "";
let slot3 = "";

let spin = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}


function draw() {

  if (spin == true){
    slot1 = random(kaarten);
    slot2 = random(kaarten);
    slot3 = random(kaarten); 
    //rect(mouseX, mouseY, 5,5);
    background(125);
    textSize(40);
    text(slot1, windowWidth/3, windowHeight/2);
    text(slot2, windowWidth/3 * 1.5, windowHeight/2);
    text(slot3, windowWidth/3 * 2, windowHeight/2);
    
  }
    
  else if (spin == false && slot1 != ""){
    //ellipse(mouseX, mouseY, 5,5);
    if (slot1 == slot2 && slot1 == slot3){
      textSize(40);
      text(slot1, windowWidth/2, windowHeight/2);
    }
    else{
      textSize(40);
      text('lost', windowWidth/2, windowHeight/2);
    }
  }
  
  
}

function mousePressed(){
  if (spin == false){
    spin = true;
  }
  else if (spin == true){
    spin = false;
  }
}
