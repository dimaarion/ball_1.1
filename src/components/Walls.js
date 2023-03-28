import Matter from "matter-js";
import { getObjects, size } from "../action";
export default function Walls(props) {
    let body = [{}];
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
    let getObj = getObjects(props.name);
    let image =
        "..asset/scena.png";
    let frame = 1;


    if (props.fs === "setup") {

        body = getObj.map((b) => Matter.Bodies.rectangle(size(b.x + b.width / 2), size(b.y + b.height / 2), size(b.width), size(b.height), {width:size(b.width),height:size(b.height),label: b.name, isStatic: true }));
        Matter.World.add(props.world, body);

    } else if (props.fs === "draw") {
        props.p5.fill(110);
        props.p5.rectMode(props.p5.CENTER);
        if (props.world !== undefined) {
            props.world.bodies.filter((f) => f.label === props.name).map((b) => props.p5.rect(b.position.x, b.position.y, b.width, b.height))
        }


    }

}