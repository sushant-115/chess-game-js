class SoldierB {
    constructor(img, pX, pY) {
        this.pX = pX;
        this.pY = pY;
        this.img = img;
    }
    show() {
        image(this.img, (this.pX * 75) + 10, (this.pY * 75) + 10, 50, 50);
    }
    update(uX, uY) {
        this.pX = uX;
        this.pY = uY;
    }
    suggestion(){
        console.log('inside suggestion');
        let moves = [[-1,1],[1,0],[1,1]];
        let forwardX =[];
        forwardX.push(this.pX);
        forwardX.push(this.pY+1);
        return forwardX;
        
    }

}
class SoldierW {
    constructor(img, pX, pY) {
        this.pX = pX;
        this.pY = pY;
        this.img = img;
    }
    show() {
        image(this.img, (this.pX * 75) + 10, (this.pY * 75) + 10, 50, 50);
    }
    update(uX, uY) {
        this.pX = uX;
        this.pY = uY;
    }
    suggestion(pieces){
        let moves = [[0,1],[1,1] ,[1,0] ,[0,-1],[1,-1],[-1,-1],[-1,0],[-1,1]];
        let forwardX=[];
        forwardX.push(this.pX);
        forwardX.push(this.pY-1);
        return forwardX;
    }

}

class King {
    constructor(img, pX, pY) {
        this.pX = pX;
        this.pY = pY;
        this.img = img;
    }
    show() {
        image(this.img, (this.pX * 75) + 10, (this.pY * 75) + 10, 50, 50);
    }
    update(uX, uY) {
        this.pX = uX;
        this.pY = uY;
    }
    suggestion() {

    }
}
class Queen {
    constructor(img, pX, pY) {
        this.pX = pX;
        this.pY = pY;
        this.img = img;
    }
    show() {
        image(this.img, (this.pX * 75) + 10, (this.pY * 75) + 10, 50, 50);
    }
    update(uX, uY) {
        this.pX = uX;
        this.pY = uY;
    }
    suggestion() {

    }
}
class Camel {
    constructor(img, pX, pY) {
        this.pX = pX;
        this.pY = pY;
        this.img = img;
    }
    show() {
        image(this.img, (this.pX * 75) + 10, (this.pY * 75) + 10, 50, 50);
    }
    update(uX, uY) {
        this.pX = uX;
        this.pY = uY;
    }
    suggestion() {

    }
}
class Horse {
    constructor(img, pX, pY) {
        this.pX = pX;
        this.pY = pY;
        this.img = img;
    }
    show() {
        image(this.img, (this.pX * 75) + 10, (this.pY * 75) + 10,50,50);
    }
    update(uX, uY) {
        this.pX = uX;
        this.pY = uY;
    }
    suggestion(pieces) {
        let moves =[[-2,-1],[-2,1],[2,1],[2,-1],[-1,-2],[1,-2],[-1,2],[1,2]];
        let forwardX = [];
        for(let a=0;a<moves.length;a++){
            let x =this.pX+moves[a][0];
            let y=this.pY+moves[a][1];
            if(x>=0&&x<=7&&y>=0&&y<=7){
            let counter =0;
            for(let e=0;e<pieces.length;e++){
                if(pieces[e].pX==x&&pieces[e]==y) counter++;
            }
            if(counter==0){    
            forwardX.push([x,y]);
            }
                
            }
        }
        return forwardX;

    }
}
class Elephent {
    constructor(img, pX, pY) {
        this.pX = pX;
        this.pY = pY;
        this.img = img;
    }
    show() {
        image(this.img, (this.pX * 75) + 10, (this.pY * 75) + 10, 50, 50);
    }
    update(uX, uY) {
        this.pX = uX;
        this.pY = uY;
    }
    suggestion() {

    }
}
class HighLight {
    constructor(pX, pY) {
        this.pX = pX;
        this.pY = pY;
    }
    show() {
        stroke(83, 244, 66);
        strokeWeight(3);
        noFill();
        rect(this.pX * 75, this.pY * 75, 75, 75);
    }
    update(uX ,uY){
        this.pX =uX;
        this.pY =uY;
    }
}
