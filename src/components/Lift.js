import Matter from "matter-js";
import { getObjectsType, collideRectRect,collidePointRect, size, sizeX, sizeY } from "../action";
import Animate from "./Animate";
import Body from "./Body";
export default class Lift extends Body {
  body = {};
  scena = {};
  m = {};
  x = 100;
  y = 100;
  static = true;
  width = 50;
  height = 50;
  radius = 50;
  mass = 1;
  speed = 3;
  friction = 1;
  getObj;
  image = "./asset/player.png";
  frame = 1;
  img;
  world;
  p5;
  engine;
  direction = 0
  liftPlayer = [{}];
  animate = new Animate();
  constructor(props) {
    super(props);
  }
  loadImg(p5) {
    //  this.p5 = p5;
    // this.animate.setup(p5);
    // this.animate.animateE(this.image);
  }
  setup(engine) {
    this.engine = engine;
    this.slope = .6;
    // console.log(this.world) 
    
  }

  view(p5) {
    this.viewVertices(p5);
    if (this.body.length > 0) {
      this.world.bodies.filter((f) => f.label === "liftPoint").map((b) => {
        if (b.typeObject === "1" && collideRectRect(this.body[0].position.x, this.body[0].position.y, this.body[0].width, this.body[0].height, b.position.x, b.position.y - b.height / 2, b.width, b.height)) {
          this.direction = 1;
        }
        if (b.typeObject === "4" && collideRectRect(this.body[0].position.x, this.body[0].position.y, this.body[0].width, this.body[0].height, b.position.x, b.position.y - b.height / 2, b.width, b.height)) {
          this.direction = 4;
        }
        if (b.typeObject === "0" && collideRectRect(this.body[0].position.x, this.body[0].position.y, this.body[0].width, this.body[0].height, b.position.x, b.position.y - b.height / 2, b.width, b.height)) {
          this.direction = 0;
        }
      })

      if (this.direction === 1) {
        Matter.Body.translate(this.body[0],{x:0,y:-0.5})
      } else if (this.direction === 4) {
         Matter.Body.translate(this.body[0],{x:-0.5,y:0})
      }else if (this.direction === 0) {
        Matter.Body.translate(this.body[0],{x:0,y:0})
     }else if (this.direction === 0) {
     // Matter.Body.translate(this.body[0],{x:0,y:0})
   }



    }
  }
}
