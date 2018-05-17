  let horseB,
   camelB,
   elephentB,
   kingB ,
   queenB ,
   soldierB,
   horseW ,
   camelW ,
   elephentW,
   kingW,
   queenW,
   soldierW;
   let pieces =[];
   let piecesPositions =[];
   let highL;
   let target =[];

function preload(){
  horseB = loadImage('../blackicons/horse.jpg');
  camelB =loadImage('../blackicons/camel.jpg');
  elephentB=loadImage('/blackicons/elephant.jpg');
  kingB = loadImage('../blackicons/king.jpg');
  queenB =loadImage('../blackicons/queen.jpg');
  soldierB=loadImage('/blackicons/soldier.jpg');
  horseW = loadImage('../whiteicons/horse.jpg');
  camelW =loadImage('../whiteicons/camel.jpg');
  elephentW=loadImage('/whiteicons/elephant.jpg');
  kingW = loadImage('../whiteicons/king.jpg');
  queenW =loadImage('../whiteicons/queen.jpg');
  soldierW=loadImage('../whiteicons/soldier.jpg');
  
}
function setup() {
 createCanvas(602,602);
 background(255);
 let posX =0;
 let posY =0;
 let lenX =width/8;
 let lenY = height/8;
 highL =new HighLight(0 ,0);
 for(let i=0;i<8;i++){
   for(let j=0;j<8;j++){
     stroke(0);
     strokeWeight(3);
    if(i%2==0){
      if(j%2==0){
        fill(255);
      }else{
        fill(0);
      }
    }else{
      if(j%2==0){
        fill(0);
      }else{
        fill(255);
      }
    }

   /*rect(posX ,posY , lenY ,lenX);*/
   
   if(i==1){
     /*image(soldierB ,posX+10 ,posY+10 , 50 ,50); */
     let sol =new SoldierB(soldierB ,j ,i) ;
     pieces.push(sol);
     piecesPositions.push([j,i]);

   }
   if(i==6) {
    let sol =new SoldierW(soldierW ,j ,i) ;
    pieces.push(sol);
    piecesPositions.push([j,i]);

   }
   /*image(soldierW ,posX+10 ,posY+10 , 50 ,50);*/
   if(i==0&&j==0 || i==0&&j==7)
   {
     let ele =new Elephent(elephentB ,j ,i);
     pieces.push(ele);
     piecesPositions.push([j,i]);
     /* image(elephentB ,posX+10 ,posY+10 , 50 ,50);*/}
   if(i==7&&j==0 || i==7&&j==7)
   {
     let ele =new Elephent(elephentW ,j ,i);
     pieces.push(ele);
     piecesPositions.push([j,i]);
   } /*image(elephentW ,posX+10 ,posY+10 , 50 ,50);*/
   if(i==0&&j==1 || i==0&&j==6){
    let ele =new Horse(horseB ,j ,i);
    pieces.push(ele);
    piecesPositions.push([j,i]);
   }/* image(horseB ,posX+10 ,posY+10 , 50 ,50);*/
   if(i==7&&j==1 || i==7&&j==6) {
    let ele =new Horse(horseW ,j ,i);
    pieces.push(ele);
    piecesPositions.push([j,i]);
   }/*image(horseW ,posX+10 ,posY+10 , 50 ,50);*/
   if(i==0&&j==2 || i==0&&j==5) /*image(camelB ,posX+10 ,posY+10 , 50 ,50);*/
   {
    let ele =new Camel(camelB ,j ,i);
    pieces.push(ele);
    piecesPositions.push([j,i]);
    
   }
   if(i==7&&j==2 || i==7&&j==5) /*image(camelW ,posX+10 ,posY+10 , 50 ,50);*/
   {
    let ele =new Camel(camelW ,j ,i);
    pieces.push(ele);
    piecesPositions.push([j,i]);
   }
   if(i==0&&j==4) /*image(kingB ,posX+10 ,posY+10 , 50 ,50);*/
   {
    let ele =new King(kingB ,j ,i);
    pieces.push(ele);
    piecesPositions.push([j,i]);
   }
   if(i==7&&j==3) /*image(kingW ,posX+10 ,posY+10 , 50 ,50);*/
   {
    let ele =new King(kingW ,j ,i);
    pieces.push(ele);
    piecesPositions.push([j,i]);
   }
   if(i==0&&j==3)/* image(queenB ,posX+10 ,posY+10 , 50 ,50);*/
   {
    let ele =new Queen(queenB ,j ,i);
    pieces.push(ele);
    piecesPositions.push([j,i]);
   }
   if(i==7&&j==4)/* image(queenW ,posX+10 ,posY+10 , 50 ,50);*/
   {
    let ele =new Queen(queenW ,j ,i);
    pieces.push(ele);
    piecesPositions.push([j,i]);
   }
   posX+=lenX;
   if(posX==width) posX=0;
 }
 posY+=lenY;
 if(posY==height) posY=0;
 
}
}
function targetShow(pX ,pY){
  stroke(244, 65, 208);
  strokeWeight(4);
  noFill();
  rect(pX*75 ,pY*75 , 75 ,75);
}
function mousePressed(){
  let pX =Math.floor(mouseX/75);
  let pY =Math.floor(mouseY/75);
  console.log(pX+'  '+pY);

  if(target){
    if(!Array.isArray(target[0])){
      if(pX==target[0]&&pY==target[1]){
        for(let i=0;i<pieces.length;i++){
          /*console.log(pieces[i].pX+'  '+i+'  '+pieces[i].pY);*/
          if(pieces[i].pX==highL.pX &&pieces[i].pY ==highL.pY){
            highL.update(pX ,pY);
            console.log('on orange');
            console.log('this is'+pieces[i].pX+  '   ' +piecesPositions[i][0])
             pieces[i].update(pX ,pY);
             console.log(pieces[i].pX+  '   ' +piecesPositions[i][0])
             piecesPositions[i][0]=pX;
             piecesPositions[i][1]=pY;
    
            target=[];
            
            return;
          }
        }
        for(let i=0;i<pieces.length;i++){
          /*console.log(pieces[i].pX+'  '+i+'  '+pieces[i].pY);*/
          if(pieces[i].pX==pX &&pieces[i].pY ==pY){
            highL.update(pX ,pY);
            target =pieces[i].suggestion(pieces);
            
            
            return;
          }
        }
      }
    }
    if(Array.isArray(target[0]))
      for(let c =0;c<target.length;c++){
        
        if(pX==target[c][0]&&pY==target[c][1]){
          for(let i=0;i<pieces.length;i++){
            /*console.log(pieces[i].pX+'  '+i+'  '+pieces[i].pY);*/
            if(pieces[i].pX==highL.pX &&pieces[i].pY ==highL.pY){
              highL.update(pX ,pY);
              console.log('on orange');
               pieces[i].update(pX ,pY);
               piecesPositions[i][0]=pX;
               piecesPositions[i][1]=pY;
      
              target=[];
              
              return;
            }
          }
        }
      }
      for(let i=0;i<pieces.length;i++){
        /*console.log(pieces[i].pX+'  '+i+'  '+pieces[i].pY);*/
        if(pieces[i].pX==pX &&pieces[i].pY ==pY){
          highL.update(pX ,pY);
          target =pieces[i].suggestion(pieces);
          
          
          return;
        }
      }
  }

 /* console.log(pY+' '+pX);
  for(let i=0;i<pieces.length;i++){
    /*console.log(pieces[i].pX+'  '+i+'  '+pieces[i].pY);
    if(pieces[i].pX==pX &&pieces[i].pY ==pY){
      highL.update(pX ,pY);
      target =pieces[i].suggestion(pieces);
      
      
      return;
    }
  }*/
}
function grid(){
  let posX =0;
 let posY =0;
 let lenX =width/8;
 let lenY = height/8;
  for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
      stroke(0);
      strokeWeight(3);
     if(i%2==0){
       if(j%2==0){
         fill(255);
       }else{
         fill(0);
       }
     }else{
       if(j%2==0){
         fill(0);
       }else{
         fill(255);
       }
     }
 
    rect(posX ,posY , lenY ,lenX);
    posX+=lenX;
   if(posX==width) posX=0;
 }
 posY+=lenY;
    }
  }
 

/*function highlight(pX ,pY){
  if(k){
    stroke(0);
     strokeWeight(3);
     noFill();
    rect(previousHighLight[0] ,previousHighLight[1] ,75 ,75);
  }
  stroke(83, 244, 66);
strokeWeight(3);
noFill();
  rect(pX*75,pY*75,75,75);
  previousHighLight[0]=pX;
  previousHighLight[1]=pY;
  k=true;
}*/
function draw() {
  let posX =0;
  let posY =0;
  let lenX =width/8;
  let lenY = height/8;
   for(let i=0;i<8;i++){
     for(let j=0;j<8;j++){
       stroke(0);
       strokeWeight(3);
      if(i%2==0){
        if(j%2==0){
          fill(255);
        }else{
          fill(0);
        }
      }else{
        if(j%2==0){
          fill(0);
        }else{
          fill(255);
        }
      }
  
     rect(posX ,posY , lenY ,lenX);
     posX+=lenX;
    if(posX==width) posX=0;
  }
  posY+=lenY;
     }
    
  for(let i =0;i<pieces.length;i++){
    pieces[i].show();
  }
  
    
  
  highL.show();
  if(target){
    if(!Array.isArray(target[0])){
      targetShow(target[0],target[1]);
    }
    if(Array.isArray(target[0]))
      for(let c =0;c<target.length;c++){
        
        targetShow(target[c][0],target[c][1]);
      }
  }
}