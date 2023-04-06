import Matter from "matter-js";
import { getObjects, size, sizeX, sizeY } from "../action";
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
  left = 0;
  right = 0;
  up = 0;
  down = 6;
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
    this.slope = .2;
    this.liftPlayer = this.world.bodies.filter((f)=>f.label === "player");
    Matter.Events.on(this.engine,'collisionActive',(event)=>{
      var pairs = event.pairs;
      for (var i = 0, j = pairs.length; i != j; ++i) {
        var pair = pairs[i];
        if (pair.bodyA.label === "player") {

         // Matter.Body.setVelocity(pair.bodyA,{x:0,y:-10});// console.log(pair.bodyA)
        }
    }
      
    })

   
  }

  view(p5) {
    this.viewVertices(p5);
 let lift = {}
 let player = {}
    if (this.body.length > 0) {
      let t = false;
      
      if (t) {
        this.body
          .filter((f) => f.typeObject === "1")
          .map((b) => Matter.Body.translate(b, { x: 0, y: -0.1 }));
      } 
     
    }
  }
}
