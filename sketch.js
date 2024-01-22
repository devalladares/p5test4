let c1;
let refresh;
let c = [];
let ringNumber = 3
const gap = 15
const emptySpace = 5
const emptySpace2 = 2;
let circles = [];
let lowercircles = [];
let circleNumber;
let xSpeed = 5;

let deader = -60;
let deader2;
let scaler = 0.9;

let outerRadius = ringNumber * gap + emptySpace2;
let yHeight = outerRadius;

function setup() {
  createCanvas(540,510);

  runSketch();

  randomboi = createButton("Randomise");
  randomboi.mousePressed(runSketch);
  randomboi.size(width, 40);

}

function runSketch() {
  for (let i = 0; i < ringNumber; i++) {
    c[i] = new circleRing(i * gap + emptySpace, ringNumber * gap + emptySpace);
  }
}

function draw() {
  background(0);
  // print(frameRate())

  push();
  translate(width / 2, height / 2);
  scale(1.3)

  // circleUp()

  for (let i = 1; i < c.length; i++) {
    c[i].update();
  }

  pop();

  // if (frameCount % 100 === 0) {
  //   runSketch()
  // }
}

class circleRing {
  constructor(radius, bigRadius) {
    //general
    this.random = random(0, 13)


    //cirler
    this.bigRadius = bigRadius
    this.rotate = 0.0005
    // this.rotate = 0.00025
    this.r = 12
    this.r2 = 24
    this.num = round(random(15, 20))
    this.circNum = round(random(15, 20))
    this.radius = radius
    this.angle = TAU / this.num
    this.circAngle = TAU / this.circNum

    //liner
    this.lineNum = random(1, 10)
    this.lineStroke = 5

    //radianter
    this.lineLength = 30
    this.radius1 = this.radius + this.lineLength / 5
    this.radius2 = this.radius - this.lineLength / 5

    //petaler
    this.petNum = round(random(10, 50))
    // this.petNum = round(random(1,10))
    this.petSize = random(2, 20)
    this.petAngle = TAU / this.petNum
    this.petRadius = random(5, 20)
    this.petStroke = this.petRadius / 2

    //squarer
    this.squareNum = round(random(6, 12))
    this.squareSize = 10
    this.squareAngle = TAU / this.squareNum
    this.squareRand = random(0, 2)

  }

  style() {
    // stroke(this.stroke)
    // fill(this.fill)
    noStroke()
    fill(255)
    // stroke(0)
    // noFill()
  }


  update(pos) {

    this.style()

    if (this.random < 3) {
      this.circler()
    } else if (this.random > 3 && this.random < 7) {
      this.liner()
    } else if (this.random > 7 && this.random < 10) {
      this.radianter()
    } else if (this.random > 10 && this.random < 13) {
      this.squarer()
    }

    // this.radianter()
    this.outliner()
  }

  //cirler////cirler////cirler////cirler////cirler////cirler//
  circler() {
    rotate(frameCount * this.rotate)

    noStroke()
    fill(255)

    for (let i = 0; i < this.circNum; i++) {

      this.x = sin(i * this.circAngle) * this.radius
      this.y = cos(i * this.circAngle) * this.radius

      ellipse(this.x, this.y, this.r)
    }
  }

  //liner////liner////liner////liner////liner////liner//
  liner() {

    stroke(255)
    noFill()
    strokeWeight(this.lineStroke)

    for (let i = 0; i < this.lineNum; i++) {

      circle(0, 0, (this.radius * 2) - (i * this.lineNum / 2) + (i * this.lineNum / 2))

    }
  }

  //radianter////radianter////radianter////radianter////radianter////radianter//
  radianter() {

    rotate(frameCount * this.rotate)
    stroke(255)
    strokeWeight(this.lineStroke)
    strokeCap(SQUARE)

    for (let i = 0; i < this.num; i++) {

      this.x1 = cos(i * this.angle) * this.radius1
      this.y1 = sin(i * this.angle) * this.radius1
      this.x2 = cos(i * this.angle) * this.radius2
      this.y2 = sin(i * this.angle) * this.radius2

      line(this.x1, this.y1, this.x2, this.y2)
    }
  }

  //squarer////squarer////squarer////squarer////squarer////squarer//
  squarer() {

    fill(255)
    noStroke()
    rectMode(CENTER)

    for (let i = 0; i < this.squareNum; i++) {

      push()
      translate(this.radius, 0)
      if (this.squareRand <= 1) {
        rotate(radians(45))
      }
      // console.log(this.squareRand)
      rect(0, 0, this.squareSize, this.squareSize)

      pop()
      rotate(this.squareAngle)
    }
  }

  outliner() {
    strokeWeight(this.lineStroke)
     noFill()
    stroke(255)
    circle(0, 0, this.bigRadius * 2)
  
  }
}
