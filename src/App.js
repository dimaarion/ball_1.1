import logo from "./logo.svg";
import "./App.css";
import Sketch from "react-p5";
import Matter from "matter-js";
import { scenaWidth } from "./action";
import Player from "./components/Player";
import Walls from "./components/Walls";
import Map from "./components/Map";
function App() {
  let Engine = Matter.Engine;
  let Render = Matter.Render;
  let Runner = Matter.Runner;
  let Composite = Matter.Composite;
  let Composites = Matter.Composites;
  let Common = Matter.Common;
  let MouseConstraint = Matter.MouseConstraint;
  let Mouse = Matter.Mouse;
  let Bodies = Matter.Bodies;
  let engine, world;
  let player = new Player();
  let map = new Map("bg", "./asset/level.png");

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
    engine.gravity.y = 0.5;
    world = engine.world;
    Engine.run(engine);
    player.create(world);
    Walls({ fs: "setup", world: world, p5: p5, name: "platform" });
    map.create();
    // console.log(scenaWidth);
  };

  const draw = (p5) => {
    p5.background(255);
    map.view(p5, 0, 0, 1250, 1250);
    player.view(p5);
    Walls({ fs: "draw", world: world, p5: p5, name: "platform" });
  };

  const keyPressed = (e) => {};

  const keyReleased = (e) => {};

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
