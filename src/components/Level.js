import Player from "./Player";
import Walls from "./Walls";
import Map from "./Map";
import Lift from "./Lift";
import Scena from "./Scena";
export default class Level {
  player = new Player("player");
  map = new Map("bg", "./asset/level.png");
  walls = new Walls("platform");
  pointB = new Walls("pointBottom");
  pointT = new Walls("pointTop");
  liftPoint = new Walls("liftPoint");
  lift = new Lift("lift");
  lift2 = new Lift("lift2");
  lift3 = new Lift("lift3");
  lift4 = new Lift("lift4");
  scena = new Scena("./asset/scena.json");

  preload(p5) {
    this.player.loadImg(p5);
    this.scena.preload(p5);
    this.lift.speedCalculation(p5);
  }

  create(world, engine) {
    this.scena.create();
    this.player.createEllipse(world);
    this.walls.createRect(world);
    this.lift.createRect(world);
    this.lift2.createRect(world);
    this.lift3.createRect(world);
    this.lift4.createRect(world);
    this.lift.setup(engine);
    this.pointB.createRect(world);
    this.pointT.createRect(world);
    this.pointB.sensor = true;
    this.pointT.sensor = true;
    //this.map.create();
  }

  view(p5) {
    p5.background(102, 98, 97);
    p5.rectMode(p5.CENTER);
    this.player.translates(p5);
    //  this.map.view(p5);
    this.walls.viewRect(p5);
    this.player.view(p5);
    this.lift.viewRect(p5);
    this.lift2.viewRect(p5);
    this.lift3.viewRect(p5);
    this.lift4.viewRect(p5);
    this.pointB.viewRect(p5);
    this.pointT.viewRect(p5);
    this.lift.view(p5);
    this.lift2.view(p5);
    this.lift3.view(p5);
    this.lift4.view(p5);
  }

  pressed(e) {
    if (e.key === "ArrowRight") {
      this.player.speed = 0.1;
    } else if (e.key === "ArrowLeft") {
      this.player.speed = -0.1;
    }
  }
  rePressed(e) {
    if (e.key === "ArrowRight") {
      this.player.speed = 0;
    } else if (e.key === "ArrowLeft") {
      this.player.speed = 0;
    }
  }
}
