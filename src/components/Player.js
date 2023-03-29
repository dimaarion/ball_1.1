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
    down = 6
    mass = 1;
    speed = 3;
    friction = 1;
    getObj;
    image = "./asset/player.png";
    frame = 1;
    img;
    world;
    p5;
    animate =  new Animate();
    loadImg(p5) {
        this.p5 = p5;
        this.animate.setup(p5);
        this.animate.animateE(this.image)
    }



    create(world) {
        this.world = world;
        this.getObj = getObjects("player");
        this.body = this.getObj.map((b) => Matter.Bodies.circle(size(b.x + b.width / 2), size(b.y + b.width / 2), size(b.width), { label: "player", isStatic: false }))[0];
        Matter.World.add(this.world, this.body);
        this.animate.setupAnimate()
    }



    view(p5) {
        this.animate.params();
        p5.fill(110);
        p5.ellipseMode(p5.RADIUS);
        if (this.world !== undefined) {
            this.world.bodies.filter((f) => f.label === "player").map((b) => p5.image(this.animate.sprite(),b.position.x, b.position.y, b.circleRadius, b.circleRadius))
        }
      
    }





}