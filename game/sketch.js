  let horseB,
    camelB,
    elephentB,
    kingB,
    queenB,
    soldierB,
    horseW,
    camelW,
    elephentW,
    kingW,
    queenW,
    soldierW;
  let pieces = [];
  let piecesPositions = [];
  let highL;
  let target = [];
  let turnPredictor = [];
  let turn = 0;;
  let PieceSelected = [];
  let newPieces;
  let firstChance;
  let team;
 let ref ;


  function preload() {
    horseB = loadImage('../blackicons/horse.jpg');
    camelB = loadImage('../blackicons/camel.jpg');
    elephentB = loadImage('/blackicons/elephant.jpg');
    kingB = loadImage('../blackicons/king.jpg');
    queenB = loadImage('../blackicons/queen.jpg');
    soldierB = loadImage('/blackicons/soldier.jpg');
    horseW = loadImage('../whiteicons/horse.jpg');
    camelW = loadImage('../whiteicons/camel.jpg');
    elephentW = loadImage('/whiteicons/elephant.jpg');
    kingW = loadImage('../whiteicons/king.jpg');
    queenW = loadImage('../whiteicons/queen.jpg');
    soldierW = loadImage('../whiteicons/soldier.jpg');
      team = prompt('Enter your team','0 for white and 1 for black');
    firstChance = 0;

  }

  function setup() {
    createCanvas(602, 602);
    background(255);
      ref = firebase.database().ref('players/');
    let posX = 0;
    let posY = 0;
    let lenX = width / 8;
    turnPredictor = [];
    turn = 0;
    PieceSelected = [];
    let lenY = height / 8;
    highL = new HighLight(0, 0);
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        stroke(0);
        strokeWeight(3);
        if (i % 2 == 0) {
          if (j % 2 == 0) {
            fill(255);
          } else {
            fill(0);
          }
        } else {
          if (j % 2 == 0) {
            fill(0);
          } else {
            fill(255);
          }
        }

        /*rect(posX ,posY , lenY ,lenX);*/

        if (i == 1) {
          /*image(soldierB ,posX+10 ,posY+10 , 50 ,50); */
          let sol = new SoldierB(soldierB, j, i, 'B');
          sol.color = 'B';
          pieces.push(sol);
          piecesPositions.push([j, i]);

        }
        if (i == 6) {
          let sol = new SoldierW(soldierW, j, i, 'W');
          sol.color = 'W';
          pieces.push(sol);
          piecesPositions.push([j, i]);

        }
        /*image(soldierW ,posX+10 ,posY+10 , 50 ,50);*/
        if (i == 0 && j == 0 || i == 0 && j == 7) {
          let ele = new Elephent(elephentB, j, i, 'B');
          ele.color = 'B';
          pieces.push(ele);
          piecesPositions.push([j, i]);
          /* image(elephentB ,posX+10 ,posY+10 , 50 ,50);*/
        }
        if (i == 7 && j == 0 || i == 7 && j == 7) {
          let ele = new Elephent(elephentW, j, i, 'W');
          ele.color = 'W';
          pieces.push(ele);
          piecesPositions.push([j, i]);
        } /*image(elephentW ,posX+10 ,posY+10 , 50 ,50);*/
        if (i == 0 && j == 1 || i == 0 && j == 6) {
          let ele = new Horse(horseB, j, i, 'B');
          ele.color = 'B';
          pieces.push(ele);
          piecesPositions.push([j, i]);
        } /* image(horseB ,posX+10 ,posY+10 , 50 ,50);*/
        if (i == 7 && j == 1 || i == 7 && j == 6) {
          let ele = new Horse(horseW, j, i, 'W');
          ele.color = 'W';
          pieces.push(ele);
          piecesPositions.push([j, i]);
        } /*image(horseW ,posX+10 ,posY+10 , 50 ,50);*/
        if (i == 0 && j == 2 || i == 0 && j == 5) /*image(camelB ,posX+10 ,posY+10 , 50 ,50);*/ {
          let ele = new Camel(camelB, j, i, 'B');
          ele.color = 'B';
          pieces.push(ele);
          piecesPositions.push([j, i]);

        }
        if (i == 7 && j == 2 || i == 7 && j == 5) /*image(camelW ,posX+10 ,posY+10 , 50 ,50);*/ {
          let ele = new Camel(camelW, j, i, 'W');
          ele.color = 'W';
          pieces.push(ele);
          piecesPositions.push([j, i]);
        }
        if (i == 0 && j == 4) /*image(kingB ,posX+10 ,posY+10 , 50 ,50);*/ {
          let ele = new King(kingB, j, i, 'B');
          ele.color = 'K';
          pieces.push(ele);
          piecesPositions.push([j, i]);
        }
        if (i == 7 && j == 3) /*image(queenW ,posX+10 ,posY+10 , 50 ,50);*/ {
            let ele = new Queen(queenW, j, i, 'W');
          ele.color = 'W';
          pieces.push(ele);
          piecesPositions.push([j, i]);
          
        }
        if (i == 0 && j == 3) /* image(queenB ,posX+10 ,posY+10 , 50 ,50);*/ {
          let ele = new Queen(queenB, j, i, 'B');
          ele.color = 'B';
          pieces.push(ele);
          piecesPositions.push([j, i]);
        }
        if (i == 7 && j == 4) /* image(kingW ,posX+10 ,posY+10 , 50 ,50);*/ {
          let ele = new King(kingW, j, i, 'W');
          ele.color = 'K';
          pieces.push(ele);
          piecesPositions.push([j, i]);
        }
        posX += lenX;
        if (posX == width) posX = 0;
      }
      posY += lenY;
      if (posY == height) posY = 0;

    }
    newPieces = pieces.slice();
  }

  function targetShow(pX, pY) {
    stroke(65, 244, 211);
    strokeWeight(3);
    noFill();
    rect(pX * 75, pY * 75, 72, 72);
  }

  function turnShow(pieces) {
    if (team == 'w') {
      turnPredictor = [];
      for (let x = 0; x < pieces.length; x++) {
        if (pieces[x].col == 'W') {
          let turnTarget = pieces[x].suggestion(pieces);
          if (turnTarget.length > 0) {
            turnPredictor.push([pieces[x].pX, pieces[x].pY]);
          }
        }
      }
    }
    if (team == 'b') {
      turnPredictor = [];
      for (let x = 0; x < pieces.length; x++) {
        if (pieces[x].col == 'B') {
          let turnTarget = pieces[x].suggestion(pieces);
          if (turnTarget.length > 0) {
            turnPredictor.push([pieces[x].pX, pieces[x].pY]);
          }
        }
      }
    }
  }

  function mousePressed() {
    newPieces = pieces.slice();
    let pX = Math.floor(mouseX / 75);
    let pY = Math.floor(mouseY / 75);
    /*console.log(pX + '  ' + pY);*/
    if (turnPredictor) {
      if (turnPredictor.includes([pX, pY])) {
        PieceSelected.push(pX, pY);
      }
    }
    if (target) {
      if (!Array.isArray(target[0])) {
        if (pX == target[0] && pY == target[1]) {
          let length = newPieces.length;
          for (let i = 0; i < pieces.length; i++) {
            /*console.log(pieces[i].pX+'  '+i+'  '+pieces[i].pY);*/
            if (pieces[i].pX == highL.pX && pieces[i].pY == highL.pY) {
              highL.update(pX, pY);
              /*console.log('on orange');
              console.log('this is' + pieces[i].pX + '   ' + piecesPositions[i][0])*/
              for (let y = 0; y < pieces.length; y++) {
                if (pieces[y].pX == pX && pieces[y].pY == pY) {
                  if (pieces[y].color == 'K') {
                    noLoop();
                    if (pieces[y].col = 'B') alert('White won');
                    else alert('Black won');
                  }
                  pieces.splice(y, 1);
                  console.log('deleted  ' + y);

                  pieces[i].update(pX, pY);
                  console.log(length + '  ' + pieces.length);
                }
              }

              if (length == pieces.length);
              pieces[i].update(pX, pY);
              /* console.log(pieces[i].pX + '   ' + piecesPositions[i][0])*/
              piecesPositions[i][0] = pX;
              piecesPositions[i][1] = pY;

              target = [];
              if (turn == 0) turn = 1;
              else turn = 0;
              return;
            }
          }
          for (let i = 0; i < pieces.length; i++) {
            /*console.log(pieces[i].pX+'  '+i+'  '+pieces[i].pY);*/
            if (pieces[i].pX == pX && pieces[i].pY == pY) {
              highL.update(pX, pY);
              if (turnPredictor.includes([pX, pY]))
                target = pieces[i].suggestion(pieces);


              return;
            }
          }
        }
      }
      if (Array.isArray(target[0]))
        for (let c = 0; c < target.length; c++) {

          if (pX == target[c][0] && pY == target[c][1]) {
            let length = newPieces.length;

            for (let i = 0; i < pieces.length; i++) {
              /*console.log(pieces[i].pX+'  '+i+'  '+pieces[i].pY);*/
              if (pieces[i].pX == highL.pX && pieces[i].pY == highL.pY) {
                highL.update(pX, pY);
                /* console.log('on orange');*/
                for (let y = 0; y < pieces.length; y++) {
                  if (pieces[y].pX == pX && pieces[y].pY == pY) {
                    if (pieces[i].col != pieces[y]) {
                      if (pieces[y].color == 'K') {
                        noLoop();
                        if (pieces[y].col = 'B') alert('White won');
                        else alert('Black won');
                      }
                      pieces.splice(y, 1);
                    }
                    console.log('deleted  ' + y);
                    if (pieces[i].col == 'B')
                      pieces[i].update(pX, pY);
                    else pieces[i - 1].update(pX, pY);

                    console.log(length + '  ' + pieces.length);
                    break;
                  }
                }
                if (length == pieces.length)
                  pieces[i].update(pX, pY);
                piecesPositions[i][0] = pX;
                piecesPositions[i][1] = pY;

                target = [];
                if (turn == 0) turn = 1;
                else turn = 0;
                return;
              }
            }
          }
        }
      for (let i = 0; i < pieces.length; i++) {
        /*console.log(pieces[i].pX+'  '+i+'  '+pieces[i].pY);*/
        if (pieces[i].pX == pX && pieces[i].pY == pY) {
          highL.update(pX, pY);
          for (let r = 0; r < turnPredictor.length; r++) {
            if (turnPredictor[r][0] == pX && turnPredictor[r][1] == pY)
              target = pieces[i].suggestion(pieces);

          }



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

  function grid() {
    let posX = 0;
    let posY = 0;
    let lenX = width / 8;
    let lenY = height / 8;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        stroke(0);
        strokeWeight(3);
        if (i % 2 == 0) {
          if (j % 2 == 0) {
            fill(255);
          } else {
            fill(0);
          }
        } else {
          if (j % 2 == 0) {
            fill(0);
          } else {
            fill(255);
          }
        }

        rect(posX, posY, lenY, lenX);
        posX += lenX;
        if (posX == width) posX = 0;
      }
      posY += lenY;
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
    let posX = 0;
    let posY = 0;
    let lenX = width / 8;
    let lenY = height / 8;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        stroke(0);
        strokeWeight(3);
        if (i % 2 == 0) {
          if (j % 2 == 0) {
            fill(255);
          } else {
            fill(0);
          }
        } else {
          if (j % 2 == 0) {
            fill(0);
          } else {
            fill(255);
          }
        }

        rect(posX, posY, lenY, lenX);
        posX += lenX;
        if (posX == width) posX = 0;
      }
      posY += lenY;
    }

    for (let i = 0; i < pieces.length; i++) {
      pieces[i].show();
    }

    turnShow(pieces);
    if (turnPredictor)
      highL.turnShow(turnPredictor);
    if (PieceSelected) {
      /*highL.show(PieceSelected[0] ,PieceSelected[1]);*/
    }
    if (target) {
      if (!Array.isArray(target[0])) {
        targetShow(target[0], target[1]);
      }
      if (Array.isArray(target[0]))
        for (let c = 0; c < target.length; c++) {

          targetShow(target[c][0], target[c][1]);
        }
    }
  }