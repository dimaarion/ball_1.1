import Player from "./Player";
import Walls from "./Walls";
import Map from "./Map";
import Lift from "./Lift";
export default class Level {
  player = new Player("player");
  map = new Map("bg", "./asset/level.png");
  walls = new Walls("platform");
  block = new Walls("block");
  liftPoint = new Walls("liftPoint");
  lift = new Lift("lift");

  preload(p5) {
    this.player.loadImg(p5);
    //  this.map.loadImg(p5);
  }

  create(world, engine) {
    this.player.createEllipse(world);
    this.walls.createRect(world);
    //this.map.create();
  }

  view(p5) {
    p5.background(102, 98, 97);
    p5.rectMode(p5.CENTER);
    this.player.translates(p5);
    //  this.map.view(p5);
    this.walls.viewRect(p5);
    this.player.view(p5);
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
