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
let teamPlayer;
let ref;
let opponent;



function preload() {
  /*horseB = loadImage('../blackicons/horse.jpg');
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
  soldierW = loadImage('../whiteicons/soldier.jpg');*/
  teamPlayer = prompt('Enter your team', 'w for white and b for black');
  firstChance = 0;

}

function setup() {
  createCanvas(602, 602);
  background(255);
  ref = firebase.database().ref('players/');
  ref.set({
    move: {
      team: 'b'
    }

  });
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
        let ele = new Queen(queenB, j, i, 'B');
        ele.color = 'B';
        pieces.push(ele);
        piecesPositions.push([j, i]);
      }
      if (i == 7 && j == 3) /*image(queenW ,posX+10 ,posY+10 , 50 ,50);*/ {

        let ele = new King(kingW, j, i, 'W');
        ele.color = 'K';
        pieces.push(ele);
        piecesPositions.push([j, i]);

      }
      if (i == 0 && j == 3) /* image(queenB ,posX+10 ,posY+10 , 50 ,50);*/ {


        let ele = new King(kingB, j, i, 'B');
        ele.color = 'K';
        pieces.push(ele);
        piecesPositions.push([j, i]);


      }
      if (i == 7 && j == 4) /* image(kingW ,posX+10 ,posY+10 , 50 ,50);*/ {
        let ele = new Queen(queenW, j, i, 'W');
        ele.color = 'W';
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
  turnPredictor = [];

  if (teamPlayer == 'w' && opponent == 'b') {
    let prePiece;
    ref.on('value', function (snapshot) {
      prePiece = snapshot.val().move;
    });
    if (prePiece.delete >= 0) {
      turnPredictor = [];
      pieces.splice(prePiece.delete, 1);
      ref.set({
        move: {
          'preCol': prePiece.preCol,
          'preRow': prePiece.preRow,
          'team': opponent,
          'newRow': prePiece.newRow,
          'newCol': prePiece.newCol,
          'delete': -1,
          'counter': prePiece.counter - 1
        }
      });


    }
    turnPredictor = [];
    for (let x = 0; x < pieces.length; x++) {
      if (pieces[x].pX == prePiece.preCol && pieces[x].pY == prePiece.preRow) {
        /*if(prePiece.delete){
            pieces[x-1].update(prePiece.newRow ,prePiece.newCol);
        } else*/
        pieces[x].update(prePiece.newCol, prePiece.newRow);


      }

      if (pieces[x].col == 'W') {
        let turnTarget = pieces[x].suggestion(pieces);
        if (turnTarget.length > 0) {
          turnPredictor.push([pieces[x].pX, pieces[x].pY]);
        }
      }
    }
  }
  if (teamPlayer == 'b' && opponent == 'w') {
    let prePiece;
    ref.on('value', function (snapshot) {
      prePiece = snapshot.val().move;
    });
    if (prePiece.delete >= 0) {
      pieces.splice(prePiece.delete, 1);
      turnPredictor = [];
      turnPredictor = [];
      ref.set({
        move: {
          'preCol': prePiece.preCol,
          'preRow': prePiece.preRow,
          'team': opponent,
          'newRow': prePiece.newRow,
          'newCol': prePiece.newCol,
          'delete': -1,
          'counter': prePiece.counter - 1
        }
      });
    }
    for (let x = 0; x < pieces.length; x++) {
      if (pieces[x].pX == prePiece.preCol && pieces[x].pY == prePiece.preRow) {
        if (prePiece.counter) {
          pieces[x - 1].update(prePiece.newCol, prePiece.newRow);
        } else
          pieces[x].update(prePiece.newCol, prePiece.newRow);

      }
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
          if (pieces[i].pX == highL.pX && pieces[i].pY == highL.pY) {
            highL.update(pX, pY);
            for (let y = 0; y < pieces.length; y++) {
              if (pieces[y].pX == pX && pieces[y].pY == pY) {
                if (pieces[y].color == 'K') {
                  noLoop();
                  if (pieces[y].col = 'B') alert('White won');
                  else alert('Black won');
                }
                pieces.splice(y, 1);
                pieces[i].update(pX, pY);
              }
            }

            if (length == pieces.length) {


              pieces[i].update(pX, pY);
            }
            piecesPositions[i][0] = pX;
            piecesPositions[i][1] = pY;

            target = [];
            if (turn == 0) turn = 1;
            else turn = 0;


            return;
          }
        }
        for (let i = 0; i < pieces.length; i++) {
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
            if (pieces[i].pX == highL.pX && pieces[i].pY == highL.pY) {
              highL.update(pX, pY);
              for (let y = 0; y < pieces.length; y++) {
                if (pieces[y].pX == pX && pieces[y].pY == pY) {
                  if (pieces[i].col != pieces[y].col) {
                    if (pieces[y].color == 'K') {
                      noLoop();
                      if (pieces[y].col = 'B') alert('White won');
                      else alert('Black won');
                    }
                    let delEl;
                    ref.on('value', function (snapshot) {
                      delEl = snapshot.val().move;
                    });
                    ref.set({
                      move: {
                        'preCol': delEl.preCol,
                        'preRow': delEl.preRow,
                        'team': teamPlayer,
                        'newRow': delEl.newRow,
                        'newCol': delEl.newCol,
                        'delete': y,
                        counter: 2
                      }
                    });
                    pieces.splice(y, 1);
                  }
                  if (pieces[i].col == 'B') {
                    if (teamPlayer == 'w') {
                      ref.set({
                        move: {
                          'preCol': pieces[i].pX,
                          'preRow': pieces[i].pY,
                          'team': teamPlayer,
                          'newRow': pY,
                          'newCol': pX,
                          'delete': y,
                          counter: 2
                        }
                      });
                      turnPredictor = [];
                    } else {
                      ref.set({
                        move: {
                          'preCol': pieces[i].pX,
                          'preRow': pieces[i].pY,
                          'team': teamPlayer,
                          'newRow': pY,
                          'newCol': pX,
                          'delete': y,
                          counter: 2
                        }
                      });
                      turnPredictor = [];
                    }

                    pieces[i].update(pX, pY);

                  } else {
                    if (teamPlayer == 'w') {
                      ref.set({
                        move: {
                          'preCol': pieces[i].pX,
                          'preRow': pieces[i].pY,
                          'team': teamPlayer,
                          'newRow': pY,
                          'newCol': pX,
                          'delete': y,
                          counter: 2
                        }
                      });
                      turnPredictor = [];
                    } else {
                      ref.set({
                        move: {
                          'preCol': pieces[i].pX,
                          'preRow': pieces[i].pY,
                          'team': team,
                          'newRow': pY,
                          'newCol': pX,
                          'delete': y,
                          counter: 2
                        }
                      });
                      turnPredictor = [];
                    }
                    pieces[i - 1].update(pX, pY);

                  }

                  break;
                }
              }
              if (length == pieces.length) {
                if (teamPlayer == 'w') {
                  ref.set({
                    move: {
                      'preCol': pieces[i].pX,
                      'preRow': pieces[i].pY,
                      'team': teamPlayer,
                      'newRow': pY,
                      'newCol': pX,

                    }
                  });
                  turnPredictor = [];
                } else {
                  ref.set({
                    move: {
                      'preCol': pieces[i].pX,
                      'preRow': pieces[i].pY,
                      'team': teamPlayer,
                      'newRow': pY,
                      'newCol': pX,


                    }
                  });
                  turnPredictor = [];
                }
                pieces[i].update(pX, pY);
                piecesPositions[i][0] = pX;
                piecesPositions[i][1] = pY;

              }

              target = [];
              if (turn == 0) turn = 1;
              else turn = 0;


              return;
            }
          }
        }
      }
    for (let i = 0; i < pieces.length; i++) {
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
          fill(111, 168, 55, 200);
        } else {
          fill(229, 224, 160, 199);
        }
      } else {
        if (j % 2 == 0) {
          fill(229, 224, 160, 199);
        } else {
          fill(111, 168, 55, 200);
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
  ref.on('value', function (snapshot) {
    opponent = snapshot.val().move.team;
  });
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