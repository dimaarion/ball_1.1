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
  animate = new Animate();
  constructor(props) {
    super(props);
  }
  loadImg(p5) {
    //  this.p5 = p5;
    // this.animate.setup(p5);
    // this.animate.animateE(this.image);
  }
  setup() {
    console.log(this.body);
  }

  view(p5) {
    this.slope = 0.4;
    this.viewVertices(p5);
    if (this.body.length > 0) {
      let t = this.timer(600);
      if (t < 300) {
        this.body
          .filter((f) => f.typeObject === "1")
          .map((b) => Matter.Body.translate(b, { x: 0, y: -1 }));
      } else {
        this.body
          .filter((f) => f.typeObject === "1")
          .map((b) => Matter.Body.translate(b, { x: 0, y: 1 }));
      }
      console.log(t);
    }
  }
}
