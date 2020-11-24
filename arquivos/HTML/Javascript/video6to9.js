var ctx = document.getElementById("ctx").getContext("2d");
//////// inicio video 7

/*
/////////////
ctx.font = '30px Arial'; //font used
var HEIGHT = 500;
var WIDTH = 500;
var miliseconds_setinterval = 40;
var timeWhenGameStarted = Date.now(); // retrun time in MS

///////PLAYER
var player ={
    x:50,
    y:50,
    spdX : 40,
    spdY:11,
    name : 'P',
    hp:10,
    height:20,
    width:20,
    color:'green',
};

//// listing 
var enemyList = {};

///////Add enemy to game

addEnemy = function (id, x, y, spdX, spdY, width,height,color){
    var enemy ={
        x:x,
        y:y,
        spdX : spdX,
        spdY:spdY,
        name :id,
        id:id,
        width:width,
        height:height,
        color: color,
    };
  
    
    enemyList[id] = enemy;
}

addEnemy('E1', 100,360,50,20, 30,30,'red');
addEnemy('E2', 230,400,15,5,40,40,'blue');
addEnemy('E3', 150,200,10,-5,10,10,'purple');

////////////// Testing colision


getDistanceBetweenEntity = function  (entity1, entity2){
    //return distance number
    //pitagoras
    var vx=entity1.x -entity2.x;
    var vy = entity1.y-entity2.y;
    return Math.sqrt(vx*vx+vy*vy);
}

/// Testar colisão 

testCollisionEntity = function (entity1, entity2){
   var rect1 ={
       x:entity1.x-entity1.width/2,
       y:entity1.y-entity1.height/2,
       height:entity1.height,
       width:entity1.width,
   }
   var rect2 ={
       x:entity2.x-entity2.width/2,
       y:entity2.y-entity2.height/2,
       height:entity2.height,
       width:entity2.width,
   }
   return testCollisionRectRect(rect1,rect2);
}

// colisão entre retangulos

testCollisionRectRect = function (rect1, rect2){
    //return if colliding (True/false)
    return rect1.x <= rect2.x +rect2.width && rect2.x<= rect1.x+rect1.width && rect1.y <= rect2.y +rect2.height && rect2.y<= rect1.y+rect1.height ;
}

////// update player position using mouse 


document.onmousemove = function (mouse){
     var mouseX = mouse.clientX;
     var mouseY = mouse.clientY;

     player.x = mouseX;
     player.y = mouseY;
 }



/////////UPDATE ENTITY

updateEntity = function (someEntity){
  
    updatePosition(someEntity);
    drawEntity(someEntity);
}

////// DIVISÃO DE FUNÇÕES EM UPDATE POSITION E DRAW ENTITY

////// UPDATE POSITION

updatePosition = function(someEntity){
    someEntity.x += someEntity.spdX;
    someEntity.y += someEntity.spdY;
    if(someEntity.x>WIDTH || someEntity.x<0){
        // console.log(enemy_message);
        someEntity.spdX = -someEntity.spdX;
     }
     if(someEntity.y>HEIGHT || someEntity.y<0){
         //console.log(enemy_message);
         someEntity.spdY = -someEntity.spdY;
     }
}

////////DRAW ENTITY
/*
drawEntity = function(someEntity){

    ctx.fillText(someEntity.name,someEntity.x,someEntity.y);
}
*/
/*
drawPlayer = function(someEntity){

    ctx.save();
    ctx.fillStyle = someEntity.color;
    ctx.fillRect(someEntity.x-someEntity.width/2,someEntity.y-someEntity.height/2,someEntity.width,someEntity.height);
    //ctx.fillText(someEntity.name,someEntity.x,someEntity.y);
    ctx.restore();
}*/
/*
drawEntity = function(someEntity){

    ctx.save();
    ctx.fillStyle = someEntity.color;
    ctx.fillRect(someEntity.x-someEntity.width/2,someEntity.y-someEntity.height/2,someEntity.width,someEntity.height);
    //ctx.fillText(someEntity.name,someEntity.x,someEntity.y);
    ctx.restore();
}
//////////UPDATING SCREEEN

update = function (){
    ctx.clearRect(0,0,WIDTH,HEIGHT);

    //iteration for enemy
     for(var key in enemyList){
         updateEntity(enemyList[key]);
         var isColliding = testCollisionEntity(player,enemyList[key] )
         if(isColliding){
             console.log('Player is Colliding with'+ enemyList[key].name);
             player.hp = player.hp -1;
             if(player.hp == 0){
                 var timeSurvived = Date.now() - timeWhenGameStarted;
                console.log('Player lost! but you survived '+ timeSurvived + 'ms.');
                timeWhenGameStarted = Date.now();
                player.hp = 10;
             }
         }
     }
    //player
     drawEntity(player);
     ctx.fillText('Hp: '+ player.hp,0,30);
}

setInterval(update,miliseconds_setinterval);
*/
//===========================================================================================================
//END OF VIDEO 7
//// Start of video 8

/*

ctx.font = '30px Arial'; //font used
var HEIGHT = 500;
var WIDTH = 500;
var miliseconds_setinterval = 40;
var timeWhenGameStarted = Date.now(); // retrun time in MS
var frameCount =0;


///////PLAYER
var player ={
    x:50,
    y:50,
    spdX : 40,
    spdY:11,
    name : 'P',
    hp:10,
    height:20,
    width:20,
    color:'green',
};

//// listing 
var enemyList = {};

///////Add enemy to game

addEnemy = function (id, x, y, spdX, spdY, width,height,color){
    var enemy ={
        x:x,
        y:y,
        spdX : spdX,
        spdY:spdY,
        name :id,
        id:id,
        width:width,
        height:height,
        color: color,
    };
  
    
    enemyList[id] = enemy;
}
//////RAMDOMLY GENERATE ENEMY 
/// function math.random() returns a number between 0 and 1

getNewColor = function(){
    var symbols;
    var color;
    symbols = "0123456789ABCDEF";
    color = "#";
    for(var i=0; i<6;i++){
        color = color + symbols[Math.floor(Math.random()*16)];
    }
    return color;
}

ramdomlyGenerateEnemy = function(){
   var id = Math.random() ;
    var x = Math.random()*WIDTH ;
    var y = Math.random()*HEIGHT;
    var spdX = 5+ Math.random()*5;
    var spdY = 5+ Math.random()*5;
    var width = 10 + Math.random()*30; // between 10 nd 40
    var height = 10 + Math.random()*30; // between 10 and 40
    var color = getNewColor() ;

    addEnemy(id, x, y, spdX,spdY,width,height, color)
   
}


////////////// Testing colision


getDistanceBetweenEntity = function  (entity1, entity2){
    //return distance number
    //pitagoras
    var vx=entity1.x -entity2.x;
    var vy = entity1.y-entity2.y;
    return Math.sqrt(vx*vx+vy*vy);
}

/// Testar colisão 

testCollisionEntity = function (entity1, entity2){
   var rect1 ={
       x:entity1.x-entity1.width/2,
       y:entity1.y-entity1.height/2,
       height:entity1.height,
       width:entity1.width,
   }
   var rect2 ={
       x:entity2.x-entity2.width/2,
       y:entity2.y-entity2.height/2,
       height:entity2.height,
       width:entity2.width,
   }
   return testCollisionRectRect(rect1,rect2);
}

// colisão entre retangulos

testCollisionRectRect = function (rect1, rect2){
    //return if colliding (True/false)
    return rect1.x <= rect2.x +rect2.width && rect2.x<= rect1.x+rect1.width && rect1.y <= rect2.y +rect2.height && rect2.y<= rect1.y+rect1.height ;
}

////// update player position using mouse 


document.onmousemove = function (mouse){
     var mouseX = mouse.clientX - document.getElementById('ctx').getBoundingClientRect().left;
     var mouseY = mouse.clientY - document.getElementById('ctx').getBoundingClientRect().top;

     if(mouseX<player.width/2){
        mouseX=player.width/2;
    }
    if(mouseX>WIDTH - player.width/2){
        mouseX=WIDTH- player.width/2;
    }
    if(mouseY<player.height/2){
        mouseY=player.height/2;
    }
    if(mouseY>HEIGHT-player.height/2){
        mouseY=HEIGHT - player.height/2;
    }
     

     player.x = mouseX;
     player.y = mouseY;
 }



/////////UPDATE ENTITY

updateEntity = function (someEntity){
  
    updatePosition(someEntity);
    drawEntity(someEntity);
}

////// DIVISÃO DE FUNÇÕES EM UPDATE POSITION E DRAW ENTITY

////// UPDATE POSITION

updatePosition = function(someEntity){
    someEntity.x += someEntity.spdX;
    someEntity.y += someEntity.spdY;
    if(someEntity.x>WIDTH || someEntity.x<0){
        // console.log(enemy_message);
        someEntity.spdX = -someEntity.spdX;
     }
     if(someEntity.y>HEIGHT || someEntity.y<0){
         //console.log(enemy_message);
         someEntity.spdY = -someEntity.spdY;
     }
}

////////DRAW ENTITY

drawEntity = function(someEntity){

    ctx.save();
    ctx.fillStyle = someEntity.color;
    ctx.fillRect(someEntity.x-someEntity.width/2,someEntity.y-someEntity.height/2,someEntity.width,someEntity.height);
   
    ctx.restore();
}


///// starting a new game 

startNewGame = function(){

    var timeSurvived = Date.now() - timeWhenGameStarted;
    console.log('Player lost! but you survived '+ timeSurvived + 'ms.');
    timeWhenGameStarted = Date.now();
    player.hp = 10;
    frameCount = 0;
    enemyList = {};
   
    ramdomlyGenerateEnemy();
    ramdomlyGenerateEnemy();
    ramdomlyGenerateEnemy();
    ramdomlyGenerateEnemy();

}


startNewGame();
//////////UPDATING SCREEEN

update = function (){
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    frameCount++;
    // call something every 4 seconds
    if(frameCount % 100 == 0){
        ramdomlyGenerateEnemy();
    }

    //iteration for enemy
     for(var key in enemyList){
         updateEntity(enemyList[key]);
         var isColliding = testCollisionEntity(player,enemyList[key] )
         if(isColliding){
             console.log('Player is Colliding with'+ enemyList[key].name);
             player.hp = player.hp -1;
             
         }
     }

     if(player.hp == 0){
        
        startNewGame();
       
    }
    //player
     drawEntity(player);
     ctx.fillText('Hp: '+ player.hp,0,30);
}

setInterval(update,miliseconds_setinterval);
*/
//===========================================================================================================
//End of Episode 8

///// Adding upgrades and scores and bullets video 9 


ctx.font = '30px Arial'; //font used
var HEIGHT = 500;
var WIDTH = 500;
var miliseconds_setinterval = 40;
var timeWhenGameStarted = Date.now(); // retrun time in MS
var frameCount =0;
var upgradeList={};
var enemyList = {};
var bulletList={};
///////PLAYER
var player ={
    x:50,
    y:50,
    spdX : 40,
    spdY:11,
    name : 'P',
    hp:10,
    height:20,
    width:20,
    color:'green',
    score: 0,
};

/////Adding upgrade

addUpgrade = function (id, x, y, spdX, spdY,  width,height,color){
    var upgrade ={
        x:x,
        y:y,
        spdX : spdX,
        spdY:spdY,
        name :'upgrade',
        id:id,
        width:width,
        height:height,
        color: 'orange',
        
    };
  
    
    upgradeList[id] = upgrade;
}

/////Randomly generate Upgrade
ramdomlyGenerateUpgrade = function(){
    var id = Math.random() ;
     var x = Math.random()*WIDTH ;
     var y = Math.random()*HEIGHT;
     var spdX = 0;
     var spdY = 0;
     var width = 10 ; // between 10 nd 40
     var height = 10 ; // between 10 and 40
     var color = 'orange';
 
     addUpgrade(id, x, y, spdX,spdY,width,height, color)
    
 }
//// Add Bullets
/////A

addBullet = function (id, x, y, spdX, spdY,  width,height,color){
    var bullet ={
        x:x,
        y:y,
        spdX : spdX,
        spdY:spdY,
        name :'bullet',
        id:id,
        width:width,
        height:height,
        color: 'black',
        
    };
  
    
    bulletList[id] = bullet;
} 

/////Randomly generate Bullets
ramdomlyGenerateBullet = function(){
    var id = Math.random() ;
     var x = player.x ;
     var y = player.y;
     var angle = Math.random() * 360;
     var spdX = Math.cos((angle/180)*Math.PI)*5;
     var spdY = Math.sin((angle/180)*Math.PI)*5;
     var width = 10 ; // between 10 nd 40
     var height = 10 ; // between 10 and 40
     var color = 'black';
     
     addBullet(id, x, y, spdX,spdY,width,height, color)
    
 }
///////Add enemy to game

addEnemy = function (id, x, y, spdX, spdY, width,height,color){
    var enemy ={
        x:x,
        y:y,
        spdX : spdX,
        spdY:spdY,
        name :'enemy',
        id:id,
        width:width,
        height:height,
        color: color,
    };
  
    
    enemyList[id] = enemy;
}



//////RAMDOMLY GENERATE ENEMY 
/// function math.random() returns a number between 0 and 1

getNewColor = function(){
    var symbols;
    var color;
    symbols = "0123456789ABCDEF";
    color = "#";
    for(var i=0; i<6;i++){
        color = color + symbols[Math.floor(Math.random()*16)];
    }
    return color;
}

ramdomlyGenerateEnemy = function(){
   var id = Math.random() ;
    var x = Math.random()*WIDTH ;
    var y = Math.random()*HEIGHT;
    var spdX = 5+ Math.random()*5;
    var spdY = 5+ Math.random()*5;
    var width = 10 + Math.random()*30; // between 10 nd 40
    var height = 10 + Math.random()*30; // between 10 and 40
    var color = getNewColor() ;

    addEnemy(id, x, y, spdX,spdY,width,height, color)
   
}


////////////// Testing colision


getDistanceBetweenEntity = function  (entity1, entity2){
    //return distance number
    //pitagoras
    var vx=entity1.x -entity2.x;
    var vy = entity1.y-entity2.y;
    return Math.sqrt(vx*vx+vy*vy);
}

/// Testar colisão 

testCollisionEntity = function (entity1, entity2){
   var rect1 ={
       x:entity1.x-entity1.width/2,
       y:entity1.y-entity1.height/2,
       height:entity1.height,
       width:entity1.width,
   }
   var rect2 ={
       x:entity2.x-entity2.width/2,
       y:entity2.y-entity2.height/2,
       height:entity2.height,
       width:entity2.width,
   }
   return testCollisionRectRect(rect1,rect2);
}

// colisão entre retangulos

testCollisionRectRect = function (rect1, rect2){
    //return if colliding (True/false)
    return rect1.x <= rect2.x +rect2.width && rect2.x<= rect1.x+rect1.width && rect1.y <= rect2.y +rect2.height && rect2.y<= rect1.y+rect1.height ;
}

////// update player position using mouse 


document.onmousemove = function (mouse){
     var mouseX = mouse.clientX - document.getElementById('ctx').getBoundingClientRect().left;
     var mouseY = mouse.clientY - document.getElementById('ctx').getBoundingClientRect().top;

     if(mouseX<player.width/2){
        mouseX=player.width/2;
    }
    if(mouseX>WIDTH - player.width/2){
        mouseX=WIDTH- player.width/2;
    }
    if(mouseY<player.height/2){
        mouseY=player.height/2;
    }
    if(mouseY>HEIGHT-player.height/2){
        mouseY=HEIGHT - player.height/2;
    }
     

     player.x = mouseX;
     player.y = mouseY;
 }



/////////UPDATE ENTITY

updateEntity = function (someEntity){
  
    updatePosition(someEntity);
    drawEntity(someEntity);
}

////// DIVISÃO DE FUNÇÕES EM UPDATE POSITION E DRAW ENTITY

////// UPDATE POSITION

updatePosition = function(someEntity){
    someEntity.x += someEntity.spdX;
    someEntity.y += someEntity.spdY;
    if(someEntity.x>WIDTH || someEntity.x<0){
        // console.log(enemy_message);
        someEntity.spdX = -someEntity.spdX;
     }
     if(someEntity.y>HEIGHT || someEntity.y<0){
         //console.log(enemy_message);
         someEntity.spdY = -someEntity.spdY;
     }
}

////////DRAW ENTITY

drawEntity = function(someEntity){

    ctx.save();
    ctx.fillStyle = someEntity.color;
    ctx.fillRect(someEntity.x-someEntity.width/2,someEntity.y-someEntity.height/2,someEntity.width,someEntity.height);
    
   
   
    ctx.restore();
}


///// starting a new game 

startNewGame = function(){

    var timeSurvived = Date.now() - timeWhenGameStarted;
    console.log('Player lost! but you survived '+ timeSurvived + 'ms.');
    timeWhenGameStarted = Date.now();
    player.hp = 10;
    frameCount = 0;
    player.score =0;
    enemyList = {};
    upgradeList ={};
    bulletList = {};
   
    ramdomlyGenerateEnemy();
    ramdomlyGenerateEnemy();
    ramdomlyGenerateEnemy();
    ramdomlyGenerateEnemy();
   
}


startNewGame();
//////////UPDATING SCREEEN

update = function (){
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    frameCount++;
    player.score++;
    // call something every 4 seconds
    
    if(frameCount % 100 === 0){
        ramdomlyGenerateEnemy();
    }
/// generates upgrade 3 seconds
    if(frameCount % 75 === 0){
        ramdomlyGenerateUpgrade();
    }
    /// bullet every second
    if(frameCount % 25 === 0){
        ramdomlyGenerateBullet();
    }

/// iteration for bullets
    for(var key in bulletList){
    updateEntity(bulletList[key]);
    
    }

   /// iteration for upgrade
   for(var key in upgradeList){
    updateEntity(upgradeList[key]);
    var isColliding = testCollisionEntity(player,upgradeList[key] )
         if(isColliding){
             console.log('Player is Colliding with'+ upgradeList[key].name);
             player.score = player.score +1000;
             delete upgradeList[key];
         }
    }

    //iteration for enemy
     for(var key in enemyList){
         updateEntity(enemyList[key]);
         var isColliding = testCollisionEntity(player,enemyList[key] )
         if(isColliding){
             console.log('Player is Colliding with'+ enemyList[key].name);
             player.hp = player.hp -1;
             
         }
     }

    

     ////iteration for player 

     if(player.hp <= 0){
        
        startNewGame();
       
    }
    //player

     drawEntity(player);
     ctx.fillText('Hp: '+ player.hp,0,30);
     ctx.fillText('Score: '+ player.score,200,30);
}

setInterval(update,miliseconds_setinterval);

//===========================================================================================================
////////end of video 9 