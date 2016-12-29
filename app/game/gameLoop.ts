/// <reference path="./../lib/pixi.js.d.ts" />

import PIXI = require('pixi');
import state = require('./components/state');
import renderer = require('./components/renderer');
import stage = require('./components/stage');

function gameLoop() {
    requestAnimationFrame(gameLoop);

    state();

    renderer.render(stage);
}

export = gameLoop;
