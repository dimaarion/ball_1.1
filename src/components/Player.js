import Matter from "matter-js";
import { getObjects, size } from "../action";
import Animate from "./Animate";
export default function Player(props) {
    let body = {};
    let scena = {};
    let m = {};
    let x = 100;
    let y = 100;
    let width = 50;
    let height = 50;
    let radius = 50;
    let left = 0;
    let right = 0;
    let up = 0;
    let down = 6
    let mass = 1;
    let speed = 3;
    let friction = 1;
    let getObj = getObjects("player");
    let image =
        "..asset/scena.png";
    let frame = 1;
    let animate = new Animate();

    if (props.fs === "setup") {

        body = getObj.map((b) => Matter.Bodies.circle(size(b.x + b.width / 2), size(b.y + b.width / 2), size(b.width), {label: "player", isStatic: false }))[0];
        Matter.World.add(props.world, body);
    //    console.log(body)


    } else if (props.fs === "draw") {
        props.p5.fill(110);
        props.p5.ellipseMode(props.p5.RADIUS);
        if (props.world !== undefined) {
            props.world.bodies.filter((f) => f.label === "player").map((b) => props.p5.ellipse(b.position.x, b.position.y, b.circleRadius, b.circleRadius))
        }


    }else if(props.fs === "preload"){

    }

}