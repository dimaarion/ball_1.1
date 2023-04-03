import Matter from "matter-js";
import { getObjects, size, sizeX, sizeY } from "../action";
export default class Body{
    name;
    world;
    getObj;
    body;
    static = true;
    scale = 5;
    constructor(name){
        this.name = name;
    }
    createRect(world) {
        this.world = world;
        this.getObj = getObjects(this.name);
        this.body = this.getObj.map((b) =>
          Matter.Bodies.rectangle(
            size(b.x + b.width / 2,this.scale),
            size(b.y + b.height / 2,this.scale),
            size(b.width,this.scale),
            size(b.height,this.scale),
            {
              width: size(b.width,this.scale),
              height: size(b.height,this.scale),
              label: this.name,
              isStatic: this.static,
            }
          )
        );
        Matter.World.add(this.world, this.body);
      }
    
}