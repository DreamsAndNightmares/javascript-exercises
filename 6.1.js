class Circle {
  constructor(yPos, xPos, rad) {
    this.yPos = yPos;
    this.xPos = xPos;
    this.rad = rad;
  }
  get yPosition() {
    return this.yPos[0];
  }
  set yPosition(val) {
    this.yPos[0] = val;
  }
  get xPosition() {
    return this.xPos[0];
  }
  set xPosition(val) {
    this.xPos[0] = val;
  }
  get radius() {
    return this.rad[0];
  }
  set radius(val) {
    this.rad[0] = val;
  }
  surface(val) {
    return this.rad * this.rad * Math.PI;
  }
}

let circle = new Circle([5, 7, 10]);
console.log(circle.surface());

/*return this.rad * this.rad * Math.PI;
let x = new Circle(0, 0, 0);
console.log(x.set(yPos)[0]);*/
