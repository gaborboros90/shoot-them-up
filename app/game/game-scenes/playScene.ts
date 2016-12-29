/// <reference path="../../lib/pixi.js.d.ts" />

import PIXI = require('pixi');
import parallaxBackground = require('../components/sprites/parallaxBackground');

function playScene() {
    parallaxBackground.fartherBackgroundTexture.tilePosition.x -= 0.64;
    parallaxBackground.nearerBackground.tilePosition.x -= 1.4;
}

export = playScene;
