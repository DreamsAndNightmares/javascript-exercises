class Rectangle1 {
  constructor(leftXPos, leftYPos, wid, leng) {
    this.leftXPos = leftXPos;
    this.leftYPos = leftYPos;
    this.wid = wid;
    this.leng = leng;
  }
  get topLeftXPos() {
    return this.leftXPos[0];
  }
  set topLeftXPos(val) {
    this.leftXPos[0] = val;
  }
  get topLeftYPos() {
    return this.leftYPos[0];
  }
  set topLeftYPos(val) {
    this.leftYPos[0] = val;
  }
  get width() {
    return this.wid[0];
  }
  set width(val) {
    this.wid[0] = val;
  }
  get length() {
    return this.leng[0];
  }
  set length(val) {
    this.leng[0] = val;
  }
}

class Rectangle2 {
  constructor(leftXPos, leftYPos, wid, leng) {
    this.leftXPos = leftXPos;
    this.leftYPos = leftYPos;
    this.wid = wid;
    this.leng = leng;
  }
  get topLeftXPos() {
    return this.leftXPos[0];
  }
  set topLeftXPos(val) {
    this.leftXPos[0] = val;
  }
  get topLeftYPos() {
    return this.leftYPos[0];
  }
  set topLeftYPos(val) {
    this.leftYPos[0] = val;
  }
  get width() {
    return this.wid[0];
  }
  set width(val) {
    this.wid[0] = val;
  }
  get length() {
    return this.leng[0];
  }
  set length(val) {
    this.leng[0] = val;
  }
}

//Create rectangle
let rectangle1 = new Rectangle1(1, 20, 10, 10);
let rectangle2 = new Rectangle1(1, 20, 10, 10);

function checkcollide(rectangle1, rectangle2){

}
