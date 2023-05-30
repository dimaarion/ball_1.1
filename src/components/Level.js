import Player from "./Player";
import Walls from "./Walls";
import Map from "./Map";
import Lift from "./Lift";
import Portal from "./Portal";
import Scena from "./Scena";
import Events from "./Events";
import Animate from "./Animate";
import { size, scale } from "../action/index";
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
  portal = new Portal("portal");
  scena = new Scena("./asset/level1/scena.json");
  animate = new Animate();
  event = new Events();
  preload(p5) {
    this.player.loadImg(p5);
    this.scena.preload(p5);
    this.animate.setup(p5);
    //this.map.loadImg(p5, "./asset/level.png");
  }

  create(world, engine) {
    this.scena.create();
    this.player.createEllipse(world, this.scena);
    this.walls.createRect(world, this.scena);
    this.lift.createRect(world, this.scena);
    this.lift2.createRect(world, this.scena);
    this.lift3.createRect(world, this.scena);
    this.lift4.createRect(world, this.scena);
    this.portal.createRect(world, this.scena);
    this.lift.setup(engine);
    this.pointB.createRect(world, this.scena);
    this.pointT.createRect(world, this.scena);
    this.pointB.sensor = true;
    this.pointT.sensor = true;
    this.portal.sensor = true;
    // this.map.create();
    this.event.collideStart(engine);
    this.animate.animateE("./asset/level1/Background.png");
  }

  view(p5) {
    p5.background(102, 98, 97);
    p5.rectMode(p5.CENTER);

    this.player.translates(p5);
    p5.image(
      this.animate.sprite(),
      -window.innerWidth / 2,
      -window.innerHeight / 2,
      size(this.scena.scenaWidth, scale) + window.innerWidth,
      size(this.scena.scenaHeigiht, scale) + window.innerHeight
    );
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
    this.portal.viewRect(p5);
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
