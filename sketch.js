var cat 
var mouse

function preload() {
    catImg = loadAnimation("cat2.png","cat3.png")
    catSit = loadAnimation("cat1.png")
    catStand = loadAnimation("cat4.png")
    backgroundImg = loadImage("garden.png")
    mouseImg = loadAnimation("mouse2.png","mouse3.png")
    mouseCheeze  = loadAnimation("mouse1.png")
}

function setup(){
    createCanvas(1000,800);
    ground = createSprite(500,400)
    ground.addImage("ground",backgroundImg)
    

    cat = createSprite(800,680);
    cat.addAnimation("cat",catSit)
    cat.scale = 0.1
     
    mouse = createSprite(230,680)
    
    mouse.scale = 0.1

   
    
}

function draw() {
    background(255);
    if (cat.x-mouse.x>mouse.width/2+cat.width/2){
        if (keyCode === LEFT_ARROW){
            cat.velocityX = -5
            cat.addAnimation("cat",catImg)
            }
       
    }
    
    if (cat.x-mouse.x<mouse.width/2+cat.width/2){
        cat.velocityX = 0
        cat.addAnimation("cat",catSit)
        mouse.addAnimation("mouse",mouseCheeze)
        }
        
    
    drawSprites();
}


