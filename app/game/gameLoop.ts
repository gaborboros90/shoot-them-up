/// <reference path="./../lib/pixi.js.d.ts" />

import PIXI = require('pixi');
import state = require('./components/state');
import renderer = require('./components/renderer');
import stage = require('./components/stage');
import RequestAnimHelper = require('./components/RequestAnimHelper');

function gameLoop() {
    RequestAnimHelper.ID = window.requestAnimationFrame(gameLoop);

    state.actualScene();

    renderer.render(stage);
}

export = gameLoop;
