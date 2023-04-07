import logo from "./logo.svg";
import "./App.css";
import Sketch from "react-p5";
import Matter from "matter-js";
import { scenaWidth, size } from "./action";
import Player from "./components/Player";
import Walls from "./components/Walls";
import Map from "./components/Map";
import Lift from "./components/Lift";
function App() {
  let Engine = Matter.Engine;
  let engine, world;
  let player = new Player("player");
  let map = new Map("bg", "./asset/level.png");
  let walls = new Walls("platform");
  let block = new Walls("block");
  let liftPoint = new Walls("liftPoint");
  let lift = new Lift("lift");
  const preload = (p5) => {
    player.loadImg(p5);
    map.loadImg(p5);
  };
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth * 2, window.innerHeight * 2).parent(
      canvasParentRef
    );

    // p5.frameRate(this.fr);
    engine = Engine.create();
    engine.gravity.y = 2;
    world = engine.world;
    Engine.run(engine);
    player.createEllipse(world);
    walls.createRect(world);
    block.createTrapezoid(world);
    map.create(); 
    lift.createRect(world);
    lift.setup(engine);
    liftPoint.createRect(world);
    liftPoint.sensor = true;
    //liftPoint.static = false;
  };

  const draw = (p5) => {
    p5.background(255);

    
    p5.rectMode(p5.CENTER);
    player.translates(p5);
    player.view(p5);
    // map.view(p5, 0, 0, 1250, 1250);
    walls.viewRect(p5);
    block.viewVertices(p5);
    lift.view(p5);
    liftPoint.viewRect(p5)
  };

  const keyPressed = (e) => {
    if (e.key === "ArrowRight") {
      player.speed = 0.1;
    } else if (e.key === "ArrowLeft") {
      player.speed = -0.1;
    }
  };

  const keyReleased = (e) => {
    if (e.key === "ArrowRight") {
      player.speed = 0;
    } else if (e.key === "ArrowLeft") {
      player.speed = 0;
    }
  };

  return (
    <div
      style={{
        overflow: "hidden",
        width: 100 + "%",
        height: window.innerHeight - 25 + "px",
      }}
    >
      <Sketch
        setup={setup}
        draw={draw}
        preload={preload}
        keyPressed={keyPressed}
        keyReleased={keyReleased}
      />
    </div>
  );
}

export default App;
