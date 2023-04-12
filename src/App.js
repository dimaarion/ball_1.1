import "./App.css";
import Sketch from "react-p5";
import Matter from "matter-js";
import Level from "./components/Level";
import Player from "./components/Player";
import Walls from "./components/Walls";
import Map from "./components/Map";
import Lift from "./components/Lift";
function App() {
  let Engine = Matter.Engine;
  let engine, world;
  let level = new Level();
  const preload = (p5) => {
    level.preload(p5);
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
    level.create(world, engine);
  };

  const draw = (p5) => {
    level.view(p5);
  };

  const keyPressed = (e) => {
    level.pressed(e);
  };

  const keyReleased = (e) => {
    level.rePressed(e);
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
