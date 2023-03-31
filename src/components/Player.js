import Matter from "matter-js";
import { getObjects, size } from "../action";
import Animate from "./Animate";
export default class Player {
  body = {};
  scena = {};
  m = {};
  x = 100;
  y = 100;
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
  loadImg(p5) {
    this.p5 = p5;
    this.animate.setup(p5);
    this.animate.animateE(this.image);
  }

  create(world) {
    this.world = world;
    this.getObj = getObjects("player");
    this.body = this.getObj.map((b) =>
      Matter.Bodies.rectangle(
        size(b.x),
        size(b.y + b.height / 2),
        size(b.width),
        size(b.height),
        {
          width: size(b.width),
          height: size(b.height),
          label: "player",
          isStatic: false,
        }
      )
    )[0];
    Matter.World.add(this.world, this.body);
    this.animate.setupAnimate();
  }

  view(p5) {
    this.animate.params();
    p5.fill(110);
    p5.rectMode(p5.CENTER);
    if (this.world !== undefined) {
      /* this.world.bodies
        .filter((f) => f.label === "player")
        .map((b) => p5.rect(b.position.x, b.position.y, b.width, b.height));
*/
      this.world.bodies
        .filter((f) => f.label === "player")
        .map((b) =>
          p5.image(
            this.animate.sprite(),
            b.position.x - b.width / 2,
            b.position.y - b.height / 2,
            b.width,
            b.height
          )
        );
    }
  }
}
