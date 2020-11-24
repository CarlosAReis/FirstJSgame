var ctx = document.getElementById("ctx").getContext("2d");
//ctx.fillText('hello',50,50);
/*
// 1 modify settings = ------> use =
ctx.font = '30px Arial'; //font used
ctx.fillStyle = 'red'; //color of the text and forms
ctx.globalAlpha = 0.5 ; // transparency 0= invisible, 1= visible

// 2 Draw something () ----> use ()

ctx.fillText('hello', 50,50); // write text ..... ctx.fillText('text', x,y);
ctx.fillRect(50,50,100,100); //draw rectangle ... ctx.fillRect (StartX,StartY, width,height);
ctx.clearRect(75,75,100,100);// clear Canvas ... ctxClearRect(startx, starty,width,height);

///// */
//===========================================================================================================
/*
ctx.font = '30px Arial'; //font used


var x=50;

ctx.fillText('P',x,50);
ctx.fillText('P',x+50,50);
ctx.fillText('P',x+100,50);
*/
//===========================================================================================================

/*
ctx.font = '30px Arial'; //font used


var x=50;

ctx.fillText('P',x,50);
 x=50+50;
ctx.fillText('P',x,50);
 x=50+50+50;
ctx.fillText('P',x,50);
*/
//===========================================================================================================

/*
ctx.font = '30px Arial'; //font used


var x=50;

ctx.fillText('P',x,50);
 x=x+50;
ctx.fillText('P',x,50);
 x+=50;
ctx.fillText('P',x,50);
*/
//===========================================================================================================

/*
ctx.font = '30px Arial'; //font used


var x=50;
var spdX = 30;

ctx.fillText('P',x,50);
x+=spdX;
ctx.fillText('P',x,50);
 x+=spdX;
ctx.fillText('P',x,50);
*/
//===========================================================================================================
/*

ctx.font = '30px Arial'; //font used


var x=50;
var y=50;
var spdX = 30;
var spdY=-1;

ctx.fillText('P',x,y);
x+=spdX;
y+=spdY;
ctx.fillText('P',x,y);
x+=spdX;
y+=spdY;
ctx.fillText('P',x,y);
x+=spdX;
y+=spdY;
ctx.fillText('P',x,y);
x+=spdX;
y+=spdY;
ctx.fillText('P',x,y);
x+=spdX;
y+=spdY;
ctx.fillText('P',x,y);
*/
//===========================================================================================================

/*
ctx.font = '30px Arial'; //font used


var x=50;
var y=50;
var spdX = 30;
var spdY=11;

ctx.fillText('P',x,y);

function update(){
    x+=spdX;
    y+=spdY;
    ctx.fillText('P',x,y);
    console.log('hello from update function, x position is '+ x+ ' and y position is '+y);
}

update();
update();
update();
update();
update();
update();
*/
//===========================================================================================================

/*
ctx.font = '30px Arial'; //font used


var x=50;
var y=50;
var spdX = 30;
var spdY=11;

ctx.fillText('P',x,y);

function update(){
    x+=spdX;
    y+=spdY;
    ctx.fillText('P',x,y);
    console.log('hello from update function, x position is '+ x+ ' and y position is '+y);
}

setInterval(update,500);
*/
//===========================================================================================================

/*
ctx.font = '30px Arial'; //font used


var x=50;
var y=50;
var spdX = 40;
var spdY=22;

ctx.fillText('P',x,y);

function update(){
    x+=spdX;
    y+=spdY;
    ctx.fillText('P',x,y);
    //console.log('hello from update function, x position is '+ x+ ' and y position is '+y);

    if(x>500){
        console.log(' P out of bounds, P saiu da tela');

    }
}

setInterval(update,500);

// end of first video
*/
//===========================================================================================================

/*
ctx.font = '30px Arial'; //font used

var HEIGHT = 500;
var WIDTH = 500;
var x=50;
var y=50;
var spdX = 40;
var spdY=11;
var name = 'P';
var message = 'Bouncing';

ctx.fillText(name,x,y);

function update(){
    x+=spdX;
    y+=spdY;
    ctx.fillText(name,x,y);
    //console.log('hello from update function, x position is '+ x+ ' and y position is '+y);

    if(x>WIDTH || x<0){
        console.log(message);
        spdX = -spdX;
    }
    if(y>HEIGHT || y<0){
        console.log(message);
        spdY = -spdY;
    }
    
}

setInterval(update,100);
*/
//===========================================================================================================

//adding an enemy
/*
ctx.font = '30px Arial'; //font used
var HEIGHT = 500;
var WIDTH = 500;
var message = 'Bouncing';
var enemy_message = 'Enemy Bouncing';
var miliseconds_setinterval = 50;

//player
var x=50;
var y=50;
var spdX = 40;
var spdY=11;
var name = 'P';
ctx.fillText(name,x,y);

//player
var enemy_x=60;
var enemy_y=300;
var enemy_spdX = 40;
var enemy_spdY=11;
var enemy_name = 'E';

ctx.fillText(enemy_name,enemy_x,enemy_y);

function update(){
    //player
    x+=spdX;
    y+=spdY;

    ctx.fillText(name,x,y);
    if(x>WIDTH || x<0){
        console.log(message);
        spdX = -spdX;
    }
    if(y>HEIGHT || y<0){
        console.log(message);
        spdY = -spdY;
    }
    
     //enemy
     enemy_x += enemy_spdX;
     enemy_y += enemy_spdY;

     ctx.fillText(enemy_name,enemy_x,enemy_y);
    if(enemy_x>WIDTH || enemy_x<0){
        console.log(enemy_message);
        enemy_spdX = -enemy_spdX;
    }
    if(enemy_y>HEIGHT || enemy_y<0){
        console.log(enemy_message);
        enemy_spdY = -enemy_spdY;
    }
}

setInterval(update,miliseconds_setinterval);
*/
// END OF SECOND VIDEO
//===========================================================================================================
/*
// creating an object 

ctx.font = '30px Arial'; //font used
var HEIGHT = 500;
var WIDTH = 500;
var message = 'Bouncing';
var enemy_message = 'Enemy Bouncing';
var miliseconds_setinterval = 50;

///////PLAYER
var player ={
    x=50,
    y=50,
    spdX = 40,
    spdY=11,
    name = 'P',
};
/*
var x=50;
var y=50;
var spdX = 40;
var spdY=11;
var name = 'P';
ctx.fillText(name,x,y);
*/
//enemy
//fazer isso, 
/*
var enemy_x=60;
var enemy_y=300;
var enemy_spdX = 40;
var enemy_spdY=11;
var enemy_name = 'E';
*/
// é o mesmo que fazer isso 
/*
var enemy ={};
enemy.x = 150;
enemy.spdX=13;
enemy.y = 300;
enemy.spdY= 20;
enemy.name='E';
*/
//que é o mesmo que fazer isso: 

/*
/////ENEMY
var enemy ={
     x=50,
     y=50,
     spdX = 40,
     spdY=11,
     name = 'E',
};

//para chamar uma caracteristica de enemy
//podemos fazer isso
//enemy.x
//ou
//enemy['x'];
//ou

//var mystring = ['x'];
//enemy['mystring'];

ctx.fillText(enemy_name,enemy_x,enemy_y);

function update(){
    //player
    x+=spdX;
    y+=spdY;

    ctx.fillText(name,x,y);
    if(x>WIDTH || x<0){
        console.log(message);
        spdX = -spdX;
    }
    if(y>HEIGHT || y<0){
        console.log(message);
        spdY = -spdY;
    }
    
     //enemy
     enemy_x += enemy_spdX;
     enemy_y += enemy_spdY;

     ctx.fillText(enemy_name,enemy_x,enemy_y);
    if(enemy_x>WIDTH || enemy_x<0){
        console.log(enemy_message);
        enemy_spdX = -enemy_spdX;
    }
    if(enemy_y>HEIGHT || enemy_y<0){
        console.log(enemy_message);
        enemy_spdY = -enemy_spdY;
    }
}

//setInterval(update,miliseconds_setinterval);

*/
//===========================================================================================================

/*
ctx.font = '30px Arial'; //font used
var HEIGHT = 500;
var WIDTH = 500;
var message = 'Bouncing';
var enemy_message = 'Enemy Bouncing';
var miliseconds_setinterval = 50;

///////PLAYER
var player ={
    x:50,
    y:50,
    spdX : 40,
    spdY:11,
    name : 'P',
};

/////ENEMY
var enemy ={
    x:100,
    y:360,
    spdX : 50,
    spdY:20,
    name :'E',
};

//////////UPDATING SCREEEN
/////
function update(){
    //player
    player.x+=player.spdX;
    player.y+=player.spdY;

    ctx.fillText(player.name,player.x,player.y);
    if(player.x>WIDTH || player.x<0){
        console.log(message);
        player.spdX = -player.spdX;
    }
    if(player.y>HEIGHT || player.y<0){
        console.log(message);
        player.spdY = -player.spdY;
    }
    
     //enemy
     enemy.x += enemy.spdX;
     enemy.y += enemy.spdY;

     ctx.fillText(enemy.name,enemy.x,enemy.y);
    if(enemy.x>WIDTH || enemy.x<0){
        console.log(enemy_message);
        enemy.spdX = -enemy.spdX;
    }
    if(enemy.y>HEIGHT || enemy.y<0){
        console.log(enemy_message);
        enemy.spdY = -enemy.spdY;
    }
}

//setInterval(update,miliseconds_setinterval);
*/
//===========================================================================================================
//SPLIT IN SMALLER FUNCTIONS
/*

ctx.font = '30px Arial'; //font used
var HEIGHT = 500;
var WIDTH = 500;
var message = 'Bouncing';
var enemy_message = 'Enemy Bouncing';
var miliseconds_setinterval = 50;

///////PLAYER
var player ={
    x:50,
    y:50,
    spdX : 40,
    spdY:11,
    name : 'P',
};

/////ENEMY
var enemy ={
    x:100,
    y:360,
    spdX : 50,
    spdY:20,
    name :'E',
};



///////UPDATE PLAYER
function updatePlayer(){
    player.x+=player.spdX;
    player.y+=player.spdY;

    ctx.fillText(player.name,player.x,player.y);
    if(player.x>WIDTH || player.x<0){
        console.log(message);
        player.spdX = -player.spdX;
    }
    if(player.y>HEIGHT || player.y<0){
        console.log(message);
        player.spdY = -player.spdY;
    }
    
}

/////////UPDATING ENEMY
function updateEnemy(){
    enemy.x += enemy.spdX;
    enemy.y += enemy.spdY;

    ctx.fillText(enemy.name,enemy.x,enemy.y);
   if(enemy.x>WIDTH || enemy.x<0){
       console.log(enemy_message);
       enemy.spdX = -enemy.spdX;
   }
   if(enemy.y>HEIGHT || enemy.y<0){
       console.log(enemy_message);
       enemy.spdY = -enemy.spdY;
   }
}

//////////UPDATING SCREEEN

function update(){
    //player
    updatePlayer();
     //enemy
    updateEnemy();
}

//setInterval(update,miliseconds_setinterval);
*/
//===========================================================================================================


/*
ctx.font = '30px Arial'; //font used
var HEIGHT = 500;
var WIDTH = 500;
var message = 'Bouncing';
var enemy_message = 'Enemy Bouncing';
var miliseconds_setinterval = 50;

///////PLAYER
var player ={
    x:50,
    y:50,
    spdX : 40,
    spdY:11,
    name : 'P',
};

/////ENEMY
var enemy ={
    x:100,
    y:360,
    spdX : 50,
    spdY:20,
    name :'E',
};

/*

///////UPDATE PLAYER
function updatePlayer(){
    player.x+=player.spdX;
    player.y+=player.spdY;

    ctx.fillText(player.name,player.x,player.y);
    if(player.x>WIDTH || player.x<0){
        console.log(message);
        player.spdX = -player.spdX;
    }
    if(player.y>HEIGHT || player.y<0){
        console.log(message);
        player.spdY = -player.spdY;
    }
    
}

/////////UPDATING ENEMY
function updateEnemy(){
    enemy.x += enemy.spdX;
    enemy.y += enemy.spdY;

    ctx.fillText(enemy.name,enemy.x,enemy.y);
   if(enemy.x>WIDTH || enemy.x<0){
       console.log(enemy_message);
       enemy.spdX = -enemy.spdX;
   }
   if(enemy.y>HEIGHT || enemy.y<0){
       console.log(enemy_message);
       enemy.spdY = -enemy.spdY;
   }
}
*/
/////////UPDATE ENTITY
/*
function updateEntity(someEntity){
    someEntity.x += someEntity.spdX;
    someEntity.y += someEntity.spdY;

    ctx.fillText(someEntity.name,someEntity.x,someEntity.y);
   if(someEntity.x>WIDTH || someEntity.x<0){
      // console.log(enemy_message);
      someEntity.spdX = -someEntity.spdX;
   }
   if(someEntity.y>HEIGHT || someEntity.y<0){
       //console.log(enemy_message);
       someEntity.spdY = -someEntity.spdY;
   }
}


//////////UPDATING SCREEEN

function update(){
    //player
    updateEntity(player);
     //enemy
    updateEntity(enemy);
}

//setInterval(update,miliseconds_setinterval);
*/
///////END OF VIDEO 3
//===========================================================================================================
/*
ctx.font = '30px Arial'; //font used
var HEIGHT = 500;
var WIDTH = 500;
var message = 'Bouncing';
var enemy_message = 'Enemy Bouncing';
var miliseconds_setinterval = 80;

///////PLAYER
var player ={
    x:50,
    y:50,
    spdX : 40,
    spdY:11,
    name : 'P',
};

/////ENEMY
var enemy ={
    x:100,
    y:360,
    spdX : 50,
    spdY:20,
    name :'E',
    id: 'E1',
};

/////ENEMY2
var enemy2 ={
    x:230,
    y:400,
    spdX : 15,
    spdY:5,
    name :'2',
    id:'E2',
};
///////////USING OBJECT TO LIST ENEMIES 
////important, quando usa uma chave para determinar um objeto
///inserir essa chave no objeto

var enemyList = {};

enemyList['E1'] = enemy;
enemyList['E2'] = enemy2;

/////////UPDATE ENTITY

function updateEntity(someEntity){
    someEntity.x += someEntity.spdX;
    someEntity.y += someEntity.spdY;

    ctx.fillText(someEntity.name,someEntity.x,someEntity.y);
   if(someEntity.x>WIDTH || someEntity.x<0){
      // console.log(enemy_message);
      someEntity.spdX = -someEntity.spdX;
   }
   if(someEntity.y>HEIGHT || someEntity.y<0){
       //console.log(enemy_message);
       someEntity.spdY = -someEntity.spdY;
   }
}


//////////UPDATING SCREEEN

function update(){
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    //player
    updateEntity(player);
     //enemy
    updateEntity(enemyList['E1']);
     //enemy2
     updateEntity(enemyList['E2']);
}

setInterval(update,miliseconds_setinterval);

//===========================================================================================================

*/


ctx.font = '30px Arial'; //font used
var HEIGHT = 500;
var WIDTH = 500;
var message = 'Bouncing';
var enemy_message = 'Enemy Bouncing';
var miliseconds_setinterval = 80;

///////PLAYER
var player ={
    x:50,
    y:50,
    spdX : 40,
    spdY:11,
    name : 'P',
};

/////ENEMY
var enemy ={
    x:100,
    y:360,
    spdX : 50,
    spdY:20,
    name :'E',
    id: 'E1',
};

/////ENEMY2
var enemy2 ={
    x:230,
    y:400,
    spdX : 15,
    spdY:5,
    name :'2',
    id:'E2',
};

/////ENEMY3
var enemy3 ={
    x:230,
    y:40,
    spdX : 20,
    spdY:-5,
    name :'3',
    id:'E3',
};
///////////USING OBJECT TO LIST ENEMIES 
////important, quando usa uma chave para determinar um objeto
///inserir essa chave no objeto

var enemyList = {};

enemyList['E1'] = enemy;
enemyList['E2'] = enemy2;
enemyList['E3'] = enemy3;

/////////UPDATE ENTITY

function updateEntity(someEntity){
    someEntity.x += someEntity.spdX;
    someEntity.y += someEntity.spdY;

    ctx.fillText(someEntity.name,someEntity.x,someEntity.y);
   if(someEntity.x>WIDTH || someEntity.x<0){
      // console.log(enemy_message);
      someEntity.spdX = -someEntity.spdX;
   }
   if(someEntity.y>HEIGHT || someEntity.y<0){
       //console.log(enemy_message);
       someEntity.spdY = -someEntity.spdY;
   }
}


//////////UPDATING SCREEEN

function update(){
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    //player
    updateEntity(player);

    
     //enemy
    updateEntity(enemyList['E1']);
     //enemy2
     updateEntity(enemyList['E2']);


     // objetos podem ter iterações, usando for

     for(var key in enemyList){
         updateEntity(enemyList[key]);
     }
}

setInterval(update,miliseconds_setinterval);

//===========================================================================================================
///END OF VIDEO 4
//*/
/*
ctx.font = '30px Arial'; //font used
var HEIGHT = 500;
var WIDTH = 500;
var message = 'Bouncing';
var enemy_message = 'Enemy Bouncing';
var miliseconds_setinterval = 80;

///////PLAYER
var player ={
    x:50,
    y:50,
    spdX : 40,
    spdY:11,
    name : 'P',
};

//// listing 
var enemyList = {};

///////Add enemy to game

addEnemy('E1', 100,360,50,20);
addEnemy('E2', 230,400,15,5);
addEnemy('E3', 150,200,10,-5);


function addEnemy(id, x, y, spdX, spdY){
    var enemy ={
        x:x,
        y:y,
        spdX : spdX,
        spdY:spdY,
        name :id,
        id:id,
    };
  
    
    enemyList[id] = enemy;
}


/////////UPDATE ENTITY

function updateEntity(someEntity){
    someEntity.x += someEntity.spdX;
    someEntity.y += someEntity.spdY;

    ctx.fillText(someEntity.name,someEntity.x,someEntity.y);
   if(someEntity.x>WIDTH || someEntity.x<0){
      // console.log(enemy_message);
      someEntity.spdX = -someEntity.spdX;
   }
   if(someEntity.y>HEIGHT || someEntity.y<0){
       //console.log(enemy_message);
       someEntity.spdY = -someEntity.spdY;
   }
}


//////////UPDATING SCREEEN

function update(){
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    //player
    updateEntity(player);

    //iteration for enemy
     for(var key in enemyList){
         updateEntity(enemyList[key]);
     }
}

//setInterval(update,miliseconds_setinterval);

//===========================================================================================================
///*/
/////Adding colision
/*

ctx.font = '30px Arial'; //font used
var HEIGHT = 500;
var WIDTH = 500;
var message = 'Bouncing';
var enemy_message = 'Enemy Bouncing';
var miliseconds_setinterval = 500;

///////PLAYER
var player ={
    x:50,
    y:50,
    spdX : 40,
    spdY:11,
    name : 'P',
};

//// listing 
var enemyList = {};

///////Add enemy to game

addEnemy('E1', 100,360,50,20);
addEnemy('E2', 230,400,15,5);
addEnemy('E3', 150,200,10,-5);


function addEnemy(id, x, y, spdX, spdY){
    var enemy ={
        x:x,
        y:y,
        spdX : spdX,
        spdY:spdY,
        name :id,
        id:id,
    };
  
    
    enemyList[id] = enemy;
}
////////////// Testing colision

/*
podemos testar entre ponto -ponto
ponto - circulo
ponto -retangulo
circulo - circulo
circulo - retangulo
retangulo -retangulo
no nosso caso o player é um ponto porque tem posição x e y
e o inimigo tambem é um ponto porque tbm tem x e y
para testar a colisão pegaremos a distancia entre os dois
e se a distancia entre os dois pontos for menor que um valor
eles colidiram
*/
/*
function getDistanceBetweenEntity (entity1, entity2){
    //return distance number
    //pitagoras
    var vx=entity1.x -entity2.x;
    var vy = entity1.y-entity2.y;
    return Math.sqrt(vx*vx+vy*vy);
}

/// Testar colisão 

function testCollisionEntity(entity1, entity2){
    //return if colliding (True/false)
    var distance = getDistanceBetweenEntity(entity1,entity2);
    return distance<30;
}

/////////UPDATE ENTITY

function updateEntity(someEntity){
    someEntity.x += someEntity.spdX;
    someEntity.y += someEntity.spdY;

    ctx.fillText(someEntity.name,someEntity.x,someEntity.y);
   if(someEntity.x>WIDTH || someEntity.x<0){
      // console.log(enemy_message);
      someEntity.spdX = -someEntity.spdX;
   }
   if(someEntity.y>HEIGHT || someEntity.y<0){
       //console.log(enemy_message);
       someEntity.spdY = -someEntity.spdY;
   }
}


//////////UPDATING SCREEEN

function update(){
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    
    

    //iteration for enemy
     for(var key in enemyList){
         updateEntity(enemyList[key]);
         var isColliding = testCollisionEntity(player,enemyList[key] )
         if(isColliding){
             console.log('Player is Colliding with'+ enemyList[key].name);
         }
     }
    //player
     updateEntity(player);
}

setInterval(update,miliseconds_setinterval);

//===========================================================================================================
//////FIM VIDEO 5
*/
///////////////VIDEO 6 - verificar posição e hp do player de acordo com o mouse///////
/*
ctx.font = '30px Arial'; //font used
var HEIGHT = 500;
var WIDTH = 500;
var message = 'Bouncing';
var enemy_message = 'Enemy Bouncing';
var miliseconds_setinterval = 40;

///////PLAYER
var player ={
    x:50,
    y:50,
    spdX : 40,
    spdY:11,
    name : 'P',
    hp:10,
};

//// listing 
var enemyList = {};

///////Add enemy to game




addEnemy = function (id, x, y, spdX, spdY){
    var enemy ={
        x:x,
        y:y,
        spdX : spdX,
        spdY:spdY,
        name :id,
        id:id,
    };
  
    
    enemyList[id] = enemy;
}

addEnemy('E1', 100,360,50,20);
addEnemy('E2', 230,400,15,5);
addEnemy('E3', 150,200,10,-5);
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
    //return if colliding (True/false)
    var distance = getDistanceBetweenEntity(entity1,entity2);
    return distance<30;
}

///////
/*
Não podemos perguntar onde o mouse está para o browser
mas podemos perguntar ao browser onde o mouse está quando ele se move
pra isso temos uma função:
document.onmousemove
 = function (mouse){
     var mouseX = mouse.clientX;
     var mouseY = mouse.clientY;
 }

 sempre que o mouse mover podemos pegar a posição x e y dele 
*/

////// update player position using mouse 

/*
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

drawEntity = function(someEntity){

    ctx.fillText(someEntity.name,someEntity.x,someEntity.y);
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
                console.log('Player lost!');
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
/////////
/////adiciona contagem de tempo que o player sobreviveu
/*
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
};

//// listing 
var enemyList = {};

///////Add enemy to game

addEnemy = function (id, x, y, spdX, spdY){
    var enemy ={
        x:x,
        y:y,
        spdX : spdX,
        spdY:spdY,
        name :id,
        id:id,
    };
  
    
    enemyList[id] = enemy;
}

addEnemy('E1', 100,360,50,20);
addEnemy('E2', 230,400,15,5);
addEnemy('E3', 150,200,10,-5);

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
    //return if colliding (True/false)
    var distance = getDistanceBetweenEntity(entity1,entity2);
    return distance<30;
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

drawEntity = function(someEntity){

    ctx.fillText(someEntity.name,someEntity.x,someEntity.y);
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
///////END OF VIDEO 6
//===========================================================================================================
