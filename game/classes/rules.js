class SoldierB {
    constructor(img, pX, pY, col) {
        this.pX = pX;
        this.pY = pY;
        this.img = img;
        this.col = col;
    }
    show() {
        image(this.img, (this.pX * 75) + 10, (this.pY * 75) + 10, 50, 50);
    }
    update(uX, uY) {
        this.pX = uX;
        this.pY = uY;
    }
    suggestion(pieces) {
       /* console.log('inside suggestion');*/
        let moves = [
            [-1, 1],
            [1, 0],
            [1, 1]
        ];
        let forwardX = [];
        forwardX.push(this.pX);
        forwardX.push(this.pY + 1);
        return forwardX;

    }

}
class SoldierW {
    constructor(img, pX, pY, col) {
        this.pX = pX;
        this.pY = pY;
        this.img = img;
        this.col = col;
    }
    show() {
        image(this.img, (this.pX * 75) + 10, (this.pY * 75) + 10, 50, 50);
    }
    update(uX, uY) {
        this.pX = uX;
        this.pY = uY;
    }
    suggestion(pieces) {
        let moves = [
            [0, 1],
            [1, 1],
            [1, 0],
            [0, -1],
            [1, -1],
            [-1, -1],
            [-1, 0],
            [-1, 1]
        ];
        let forwardX = [];
        forwardX.push(this.pX);
        forwardX.push(this.pY - 1);
        return forwardX;
    }

}

class King {
    constructor(img, pX, pY, col) {
        this.pX = pX;
        this.pY = pY;
        this.img = img;
        this.col = col;
    }
    show() {
        image(this.img, (this.pX * 75) + 10, (this.pY * 75) + 10, 50, 50);
    }
    update(uX, uY) {
        this.pX = uX;
        this.pY = uY;
    }
    suggestion(pieces) {
        let moves = [
            [0, 1],
            [1, 1],
            [1, 0],
            [0, -1],
            [1, -1],
            [-1, -1],
            [-1, 0],
            [-1, 1]
        ];
        let forwardX1 = [];
        for (let a = 0; a < moves.length; a++) {
            var counter = 0;
            var x = this.pX + moves[a][0];
            var y = this.pY + moves[a][1];
            if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                var promise = new Promise(function (resolve, reject) {
                    for (let e = 0; e < pieces.length; e++) {
                        var x1 = pieces[e].pX;
                        var y1 = pieces[e].pY;
                        if (x == x1 & y == y1) {
                            counter = 1;
                            /*console.log('matched');*/
                        }
                    }
                });


                if (counter == 0) {
                    forwardX1.push([x, y]);
                }
            }
        }
        return forwardX1;
    }
}
class Queen {
    constructor(img, pX, pY , col) {
        this.pX = pX;
        this.pY = pY;
        this.img = img;
        this.col = col;
    }
    show() {
        image(this.img, (this.pX * 75) + 10, (this.pY * 75) + 10, 50, 50);
    }
    update(uX, uY) {
        this.pX = uX;
        this.pY = uY;
    }
    suggestion(pieces) {
        let movesRF = [
            [1, 1],
            [2, 2],
            [3, 3],
            [4, 4],
            [5, 5],
            [6, 6],
            [7, 7]
        ];
        let movesLF = [
            [-1, 1],
            [-2, 2],
            [-3, 3],
            [-4, 4],
            [-5, 5],
            [-6, 6],
            [-7, 7]
        ];
        let movesRB = [
            [1, -1],
            [2, -2],
            [3, -3],
            [4, -4],
            [5, -5],
            [6, -6],
            [7, -7]
        ];
        let movesLB = [
            [-1, -1],
            [-2, -2],
            [-3, -3],
            [-4, -4],
            [-5, -5],
            [-6, -6],
            [-7, -7]
        ];
        let moveR = [
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [7, 0]
        ];
        let moveL = [
            [-1, 0],
            [-2, 0],
            [-3, 0],
            [-4, 0],
            [-5, 0],
            [-6, 0],
            [-7, 0]
        ];
        let moveB = [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7]
        ];
        let moveT = [
            [0, -1],
            [0, -2],
            [0, -3],
            [0, -4],
            [0, -5],
            [0, -6],
            [0, -7]
        ];

        let forwardX1 = [];
        loop1:
            for (let a = 0; a < movesRF.length; a++) {
                var counter = 0;
                var x = this.pX + movesRF[a][0];
                var y = this.pY + movesRF[a][1];
                var bbb = false;
                if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    var promise = new Promise(function (resolve, reject) {
                        for (let e = 0; e < pieces.length; e++) {
                            var x1 = pieces[e].pX;
                            var y1 = pieces[e].pY;
                            if (x == x1 & y == y1) {
                                counter = 1;
                                bbb = true;
                                /*console.log('matched');*/
                            }
                        }
                    });
                    if (bbb) {
                        break loop1;
                    }

                    if (counter == 0) {
                        forwardX1.push([x, y]);
                    }
                } else {
                    break loop1;
                }
            }
        loop2:
            for (let a = 0; a < movesLF.length; a++) {
                var counter = 0;
                var x = this.pX + movesLF[a][0];
                var y = this.pY + movesLF[a][1];
                var bbb = false;
                if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    var promise = new Promise(function (resolve, reject) {
                        for (let e = 0; e < pieces.length; e++) {
                            var x1 = pieces[e].pX;
                            var y1 = pieces[e].pY;
                            if (x == x1 & y == y1) {
                                counter = 1;
                                bbb = true;
                                /*console.log('matched');*/
                            }
                        }
                    });
                    if (bbb) {
                        break loop2;
                    }

                    if (counter == 0) {
                        forwardX1.push([x, y]);
                    }
                } else {
                    break loop2;
                }
            }
        loop3:
            for (let a = 0; a < movesLB.length; a++) {
                var counter = 0;
                var x = this.pX + movesLB[a][0];
                var y = this.pY + movesLB[a][1];
                var bbb = false;
                if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    var promise = new Promise(function (resolve, reject) {
                        for (let e = 0; e < pieces.length; e++) {
                            var x1 = pieces[e].pX;
                            var y1 = pieces[e].pY;
                            if (x == x1 & y == y1) {
                                counter = 1;
                                bbb = true;
                               /* console.log('matched');*/
                            }
                        }
                    });
                    if (bbb) {
                        break loop3;
                    }
                    if (counter == 0) {
                        forwardX1.push([x, y]);
                    }
                } else {
                    break loop3;
                }
            }
        loop4:
            for (let a = 0; a < movesRB.length; a++) {
                var counter = 0;
                var x = this.pX + movesRB[a][0];
                var y = this.pY + movesRB[a][1];
                var bbb = false;
                if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    var promise = new Promise(function (resolve, reject) {
                        for (let e = 0; e < pieces.length; e++) {
                            var x1 = pieces[e].pX;
                            var y1 = pieces[e].pY;
                            if (x == x1 & y == y1) {
                                counter = 1;
                                bbb = true;
                                /*console.log('matched');*/
                            }
                        }
                    });
                    if (bbb) {
                        break loop4;
                    }

                    if (counter == 0) {
                        forwardX1.push([x, y]);
                    }
                } else {
                    break loop4;
                }
            }

        loop5:
            for (let a = 0; a < moveR.length; a++) {
                var counter = 0;
                var x = this.pX + moveR[a][0];
                var y = this.pY + moveR[a][1];
                var bbb = false;
                if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    var promise = new Promise(function (resolve, reject) {
                        for (let e = 0; e < pieces.length; e++) {
                            var x1 = pieces[e].pX;
                            var y1 = pieces[e].pY;
                            if (x == x1 & y == y1) {
                                counter = 1;
                                bbb = true;
                               /* console.log('matched');*/
                            }
                        }
                    });
                    if (bbb) {
                        break loop5;
                    }

                    if (counter == 0) {
                        forwardX1.push([x, y]);
                    }
                } else {
                    break loop5;
                }
            }
        loop6:
            for (let a = 0; a < moveL.length; a++) {
                var counter = 0;
                var x = this.pX + moveL[a][0];
                var y = this.pY + moveL[a][1];
                var bbb = false;
                if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    var promise = new Promise(function (resolve, reject) {
                        for (let e = 0; e < pieces.length; e++) {
                            var x1 = pieces[e].pX;
                            var y1 = pieces[e].pY;
                            if (x == x1 & y == y1) {
                                counter = 1;
                                bbb = true;
                                /*console.log('matched');*/
                            }
                        }
                    });
                    if (bbb) {
                        break loop6;
                    }

                    if (counter == 0) {
                        forwardX1.push([x, y]);
                    }
                } else {
                    break loop6;
                }
            }
        loop7:
            for (let a = 0; a < moveB.length; a++) {
                var counter = 0;
                var x = this.pX + moveB[a][0];
                var y = this.pY + moveB[a][1];
                var bbb = false;
                if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    var promise = new Promise(function (resolve, reject) {
                        for (let e = 0; e < pieces.length; e++) {
                            var x1 = pieces[e].pX;
                            var y1 = pieces[e].pY;
                            if (x == x1 & y == y1) {
                                counter = 1;
                                bbb = true;
                                /*console.log('matched');*/
                            }
                        }
                    });
                    if (bbb) {
                        break loop7;
                    }
                    if (counter == 0) {
                        forwardX1.push([x, y]);
                    }
                } else {
                    break loop7;
                }
            }
        loop8:
            for (let a = 0; a < moveT.length; a++) {
                var counter = 0;
                var x = this.pX + moveT[a][0];
                var y = this.pY + moveT[a][1];
                var bbb = false;
                if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    var promise = new Promise(function (resolve, reject) {
                        for (let e = 0; e < pieces.length; e++) {
                            var x1 = pieces[e].pX;
                            var y1 = pieces[e].pY;
                            if (x == x1 & y == y1) {
                                counter = 1;
                                bbb = true;
                                /*console.log('matched');*/
                            }
                        }
                    });
                    if (bbb) {
                        break loop8;
                    }

                    if (counter == 0) {
                        forwardX1.push([x, y]);
                    }
                } else {
                    break loop8;
                }
            }
        return forwardX1;

    }
}
class Camel {
    constructor(img, pX, pY, col) {
        this.pX = pX;
        this.pY = pY;
        this.img = img;
        this.col = col;
    }
    show() {
        image(this.img, (this.pX * 75) + 10, (this.pY * 75) + 10, 50, 50);
    }
    update(uX, uY) {
        this.pX = uX;
        this.pY = uY;
    }
    suggestion(pieces) {
        let movesRF = [
            [1, 1],
            [2, 2],
            [3, 3],
            [4, 4],
            [5, 5],
            [6, 6],
            [7, 7]
        ];
        let movesLF = [
            [-1, 1],
            [-2, 2],
            [-3, 3],
            [-4, 4],
            [-5, 5],
            [-6, 6],
            [-7, 7]
        ];
        let movesRB = [
            [1, -1],
            [2, -2],
            [3, -3],
            [4, -4],
            [5, -5],
            [6, -6],
            [7, -7]
        ];
        let movesLB = [
            [-1, -1],
            [-2, -2],
            [-3, -3],
            [-4, -4],
            [-5, -5],
            [-6, -6],
            [-7, -7]
        ];
        let forwardX1 = [];
        loop1:
            for (let a = 0; a < movesRF.length; a++) {
                var counter = 0;
                var x = this.pX + movesRF[a][0];
                var y = this.pY + movesRF[a][1];
                var bbb = false;
                if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    var promise = new Promise(function (resolve, reject) {
                        for (let e = 0; e < pieces.length; e++) {
                            var x1 = pieces[e].pX;
                            var y1 = pieces[e].pY;
                            if (x == x1 & y == y1) {
                                counter = 1;
                                bbb = true;
                               /* console.log('matched');*/
                            }
                        }
                    });
                    if (bbb) {
                        break loop1;
                    }

                    if (counter == 0) {
                        forwardX1.push([x, y]);
                    }
                } else {
                    break loop1;
                }
            }
        loop2:
            for (let a = 0; a < movesLF.length; a++) {
                var counter = 0;
                var x = this.pX + movesLF[a][0];
                var y = this.pY + movesLF[a][1];
                var bbb = false;
                if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    var promise = new Promise(function (resolve, reject) {
                        for (let e = 0; e < pieces.length; e++) {
                            var x1 = pieces[e].pX;
                            var y1 = pieces[e].pY;
                            if (x == x1 & y == y1) {
                                counter = 1;
                                bbb = true;
                                /*console.log('matched');*/
                            }
                        }
                    });
                    if (bbb) {
                        break loop2;
                    }

                    if (counter == 0) {
                        forwardX1.push([x, y]);
                    }
                } else {
                    break loop2;
                }
            }
        loop3:
            for (let a = 0; a < movesLB.length; a++) {
                var counter = 0;
                var x = this.pX + movesLB[a][0];
                var y = this.pY + movesLB[a][1];
                var bbb = false;
                if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    var promise = new Promise(function (resolve, reject) {
                        for (let e = 0; e < pieces.length; e++) {
                            var x1 = pieces[e].pX;
                            var y1 = pieces[e].pY;
                            if (x == x1 & y == y1) {
                                counter = 1;
                                bbb = true;
                                /*console.log('matched');*/
                            }
                        }
                    });
                    if (bbb) {
                        break loop3;
                    }
                    if (counter == 0) {
                        forwardX1.push([x, y]);
                    }
                } else {
                    break loop3;
                }
            }
        loop4:
            for (let a = 0; a < movesRB.length; a++) {
                var counter = 0;
                var x = this.pX + movesRB[a][0];
                var y = this.pY + movesRB[a][1];
                var bbb = false;
                if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    var promise = new Promise(function (resolve, reject) {
                        for (let e = 0; e < pieces.length; e++) {
                            var x1 = pieces[e].pX;
                            var y1 = pieces[e].pY;
                            if (x == x1 & y == y1) {
                                counter = 1;
                                bbb = true;
                                /*console.log('matched');*/
                            }
                        }
                    });
                    if (bbb) {
                        break loop4;
                    }

                    if (counter == 0) {
                        forwardX1.push([x, y]);
                    }
                } else {
                    break loop4;
                }
            }
        return forwardX1;



    }
}
class Horse {
    constructor(img, pX, pY, col) {
        this.pX = pX;
        this.pY = pY;
        this.img = img;
        this.col = col;
    }
    show() {
        image(this.img, (this.pX * 75) + 10, (this.pY * 75) + 10, 50, 50);
    }
    update(uX, uY) {
        this.pX = uX;
        this.pY = uY;
    }
    suggestion(pieces) {
        let moves = [
            [-2, -1],
            [-2, 1],
            [2, 1],
            [2, -1],
            [-1, -2],
            [1, -2],
            [-1, 2],
            [1, 2]
        ];
        let forwardX1 = [];
        for (let a = 0; a < moves.length; a++) {
            var counter = 0;
            var x = this.pX + moves[a][0];
            var y = this.pY + moves[a][1];
            if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                var promise = new Promise(function (resolve, reject) {
                    for (let e = 0; e < pieces.length; e++) {
                        var x1 = pieces[e].pX;
                        var y1 = pieces[e].pY;
                        if (x == x1 & y == y1) {
                            counter = 1;
                            /*console.log('matched');*/
                        }
                    }
                });

                if (counter == 0) {
                    forwardX1.push([x, y]);
                }
            }
        }
        return forwardX1;

    }
}
class Elephent {
    constructor(img, pX, pY, col) {
        this.pX = pX;
        this.pY = pY;
        this.img = img;
        this.col = col;
    }
    show() {
        image(this.img, (this.pX * 75) + 10, (this.pY * 75) + 10, 50, 50);
    }
    update(uX, uY) {
        this.pX = uX;
        this.pY = uY;
    }
    suggestion(pieces) {
        let moveR = [
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [7, 0]
        ];
        let moveL = [
            [-1, 0],
            [-2, 0],
            [-3, 0],
            [-4, 0],
            [-5, 0],
            [-6, 0],
            [-7, 0]
        ];
        let moveB = [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7]
        ];
        let moveT = [
            [0, -1],
            [0, -2],
            [0, -3],
            [0, -4],
            [0, -5],
            [0, -6],
            [0, -7]
        ];
        let forwardX1 = [];
        loop1:
            for (let a = 0; a < moveR.length; a++) {
                var counter = 0;
                var x = this.pX + moveR[a][0];
                var y = this.pY + moveR[a][1];
                var bbb = false;
                if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    var promise = new Promise(function (resolve, reject) {
                        for (let e = 0; e < pieces.length; e++) {
                            var x1 = pieces[e].pX;
                            var y1 = pieces[e].pY;
                            if (x == x1 & y == y1) {
                                counter = 1;
                                bbb = true;
                                /*console.log('matched');*/
                            }
                        }
                    });
                    if (bbb) {
                        break loop1;
                    }

                    if (counter == 0) {
                        forwardX1.push([x, y]);
                    }
                } else {
                    break loop1;
                }
            }
        loop2:
            for (let a = 0; a < moveL.length; a++) {
                var counter = 0;
                var x = this.pX + moveL[a][0];
                var y = this.pY + moveL[a][1];
                var bbb = false;
                if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    var promise = new Promise(function (resolve, reject) {
                        for (let e = 0; e < pieces.length; e++) {
                            var x1 = pieces[e].pX;
                            var y1 = pieces[e].pY;
                            if (x == x1 & y == y1) {
                                counter = 1;
                                bbb = true;
                               /* console.log('matched');*/
                            }
                        }
                    });
                    if (bbb) {
                        break loop2;
                    }

                    if (counter == 0) {
                        forwardX1.push([x, y]);
                    }
                } else {
                    break loop2;
                }
            }
        loop3:
            for (let a = 0; a < moveB.length; a++) {
                var counter = 0;
                var x = this.pX + moveB[a][0];
                var y = this.pY + moveB[a][1];
                var bbb = false;
                if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    var promise = new Promise(function (resolve, reject) {
                        for (let e = 0; e < pieces.length; e++) {
                            var x1 = pieces[e].pX;
                            var y1 = pieces[e].pY;
                            if (x == x1 & y == y1) {
                                counter = 1;
                                bbb = true;
                                /*console.log('matched');*/
                            }
                        }
                    });
                    if (bbb) {
                        break loop3;
                    }
                    if (counter == 0) {
                        forwardX1.push([x, y]);
                    }
                } else {
                    break loop3;
                }
            }
        loop4:
            for (let a = 0; a < moveT.length; a++) {
                var counter = 0;
                var x = this.pX + moveT[a][0];
                var y = this.pY + moveT[a][1];
                var bbb = false;
                if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    var promise = new Promise(function (resolve, reject) {
                        for (let e = 0; e < pieces.length; e++) {
                            var x1 = pieces[e].pX;
                            var y1 = pieces[e].pY;
                            if (x == x1 & y == y1) {
                                counter = 1;
                                bbb = true;
                                /*console.log('matched');*/
                            }
                        }
                    });
                    if (bbb) {
                        break loop4;
                    }

                    if (counter == 0) {
                        forwardX1.push([x, y]);
                    }
                } else {
                    break loop4;
                }
            }
        return forwardX1;

    }

}
class HighLight {
    constructor(pX, pY) {
        this.pX = pX;
        this.pY = pY;
    }
    turnShow(turnPredictor){
        for(let q=0;q<turnPredictor.length;q++){
            stroke(255, 244, 66);
        strokeWeight(3);
        noFill();
        rect(turnPredictor[q][0] * 75, turnPredictor[q][1] * 75, 75, 75);
        }
    }
    show(x ,y) {
        this.pX=x;
        this.pY =y;
        
        stroke(83, 244, 66);
        strokeWeight(3);
        noFill();
        rect(this.pX * 75, this.pY * 75, 75, 75);
        
    }
    update(uX, uY) {
        this.pX = uX;
        this.pY = uY;
    }
}