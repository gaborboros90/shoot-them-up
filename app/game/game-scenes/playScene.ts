/// <reference path="../../lib/pixi.js.d.ts" />

import PIXI = require('pixi');
import parallaxBackground = require('../components/sprites/parallaxBackground');
import usersSpaceShip = require('../components/sprites/usersSpaceShip');

function playScene() {
    parallaxBackground.fartherBackgroundTexture.tilePosition.x -= 0.64;
    parallaxBackground.nearerBackground.tilePosition.x -= 1.4;

    usersSpaceShip.position.x += usersSpaceShip.vx;
    usersSpaceShip.position.y += usersSpaceShip.vy;
}

export = playScene;
