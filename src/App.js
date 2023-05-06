import "./App.css";
import Sketch from "react-p5";
import Matter from "matter-js";
import Level from "./components/Level";
import { scenaSize, size } from "./action/index";
function App() {
  let Engine = Matter.Engine;
  let engine, world;
  let level = new Level();
  const preload = (p5) => {
    level.preload(p5);
  };
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);

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
