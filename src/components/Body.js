import Matter from "matter-js";
import { getObjects, size } from "../action";
export default class Body {
  name;
  world;
  getObj;
  body;
  static = true;
  sensor = false;
  scale = 1;
  slope = 0.9;
  n = 0;
  constructor(name) {
    this.name = name;
  }

  main(world) {
    this.world = world;
  }

  timer(num) {
    if (this.n > num) {
      this.n = 0;
    }
    return this.n++;
  }

  translates(p5) {
    if (this.world !== undefined) {
      this.world.bodies
        .filter((f) => f.label === this.name)
        .map((b) =>
          p5.translate(
            -b.position.x + (p5.windowWidth / 2 - b.width),
            -b.position.y + (p5.windowHeight / 2 - b.width)
          )
        );
    }
  }

  setRotate() {
    if (this.world !== undefined) {
      this.world.bodies
        .filter((f) => f.label === this.name)
        .map((b) => Matter.Body.setAngularVelocity(b, this.speed));
    }
  }

  createRect(world) {
    this.world = world;
    this.getObj = getObjects(this.name);
    this.body = this.getObj.map((b) =>
      Matter.Bodies.rectangle(
        size(b.x + b.width / 2, this.scale),
        size(b.y + b.height / 2, this.scale),
        size(b.width, this.scale),
        size(b.height, this.scale),
        {
          width: size(b.width, this.scale),
          height: size(b.height, this.scale),
          label: this.name,
          isStatic: this.static,
          isSensor: this.sensor,
          typeObject: b.type,
        }
      )
    );
    Matter.World.add(this.world, this.body);
  }

  createEllipse(world) {
    this.world = world;
    this.getObj = getObjects(this.name);
    this.body = this.getObj.map((b) =>
      Matter.Bodies.circle(
        size(b.x + b.width / 2, this.scale),
        size(b.y + b.height / 2, this.scale),
        size(b.width / 2, this.scale),
        {
          width: size(b.width, this.scale),
          label: this.name,
          isStatic: this.static,
          isSensor: this.sensor,
          typeObject: b.type,
        }
      )
    );
    Matter.World.add(this.world, this.body);
  }

  createTrapezoid(world) {
    this.world = world;
    this.getObj = getObjects(this.name);
    this.body = this.getObj.map((b) =>
      Matter.Bodies.trapezoid(
        size(b.x + b.width / 2, this.scale),
        size(b.y + b.height / 2, this.scale),
        size(b.width, this.scale),
        size(b.height, this.scale),
        this.slope,
        {
          width: size(b.width, this.scale),
          height: size(b.height, this.scale),
          label: this.name,
          isStatic: this.static,
          isSensor: this.sensor,
          typeObject: b.type,
        }
      )
    );
    Matter.World.add(this.world, this.body);
  }

  createVertices(world) {
    let a = [{}];
    this.world = world;
    this.getObj = getObjects(this.name);
    this.body = this.getObj.map((b) =>
      Matter.Bodies.fromVertices(
        size(b.x, this.scale),
        size(b.y, this.scale),
        b.polygon.map((v, i) => {
          a[i] = {
            x: size(v.x, this.scale),
            y: size(v.y, this.scale),
          };
          return a;
        }),
        {
          width: size(b.width, this.scale),
          height: size(b.height, this.scale),
          label: this.name,
          isStatic: this.static,
          isSensor: this.sensor,
          typeObject: b.type,
        }
      )
    );
    Matter.World.add(this.world, this.body);
  }

  viewRect(p5) {
    if (this.world !== undefined) {
      p5.rectMode(p5.CENTER);
      this.world.bodies
        .filter((f) => f.label === this.name)
        .map((b) => p5.rect(b.position.x, b.position.y, b.width, b.height));
    }
  }
  viewEllipse(p5) {
    if (this.world !== undefined) {
      p5.ellipseMode(p5.RADIUS);
      this.world.bodies
        .filter((f) => f.label === this.name)
        .map((b) =>
          p5.ellipse(b.position.x, b.position.y, b.circleRadius, b.circleRadius)
        );
    }
  }

  viewVertices(p5) {
    if (this.world !== undefined) {
      p5.rectMode(p5.CENTER);
      this.world.bodies
        .filter((f) => f.label === this.name)
        .map((b) => {
          p5.beginShape();
          b.vertices.map((v) => p5.vertex(v.x, v.y));
          p5.endShape(p5.CLOSE);
        });
    }
  }
}
