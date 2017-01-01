/// <reference path="./../lib/pixi.js.d.ts" />

import PIXI = require('pixi');
import state = require('./components/state');
import renderer = require('./components/renderer');
import stage = require('./components/stage');
import RequestAnimHelper = require('./utils/RequestAnimHelper');
import ExplosionParticle = require('./components/particles/ExplosionParticle');

function gameLoop() {
    RequestAnimHelper.ID = window.requestAnimationFrame(gameLoop);

    ExplosionParticle.d.update();
    state.actualScene();

    renderer.render(stage);
}

export = gameLoop;
