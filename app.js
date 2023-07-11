import { Application } from '@pixi/app';
import { Sprite } from '@pixi/sprite';
import { Assets } from '@pixi/assets';

let app = new Application({
  autoDensity: true,
  resolution: window.devicePixelRatio || 1,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

document.body.appendChild(app.view);

const texture = await Assets.load('assets/crab.png');
const crab = new Sprite(texture);

// position the crab
crab.x = app.screen.width / 2;
crab.y = app.screen.height / 2;

// rotate around the center
crab.anchor.x = 0.5;
crab.anchor.y = 0.5;

// add the crab to the stage
app.stage.addChild(crab);

// Add a variable to count up the seconds our demo has been running
let elapsed = 0.0;
// Tell our application's ticker to run a new callback every frame, passing
// in the amount of time that has passed since the last tick.
app.ticker.add((delta) => {
  // Add the delta time to our elapsed time
  elapsed += delta;
  // Update the crab's x position to match the elapsed time
  crab.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;

  crab.rotation += 0.0;
});
