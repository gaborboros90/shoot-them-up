/// <reference path="../../lib/pixi.js.d.ts" />

import PIXI = require('pixi');
import stage = require('../components/stage');
import parallaxBackground = require('../components/sprites/parallaxBackground');
import usersSpaceShip = require('../components/sprites/usersSpaceShip');
import BoundaryLimiter = require('../utils/BoundaryLimiter');
import ComponentDimension = require('../components/types/ComponentDimension');
import fireBolts = require('../components/sprites/fireBolts');

function playScene() {
    let spaceShipDimensions: ComponentDimension = {
            width: usersSpaceShip.width,
            height: usersSpaceShip.height
        },
        boundaryLimiter = new BoundaryLimiter(0,0,800,600, spaceShipDimensions);

    parallaxBackground.fartherBackgroundTexture.tilePosition.x -= 0.64;
    parallaxBackground.nearerBackground.tilePosition.x -= 1.4;

    usersSpaceShip.position.x = boundaryLimiter.limitHorizontally(usersSpaceShip.position.x, usersSpaceShip.vx);
    usersSpaceShip.position.y = boundaryLimiter.limitVertically(usersSpaceShip.position.y, usersSpaceShip.vy);
    moveFireBolts(fireBolts);

    spaceShipDimensions = null;
    boundaryLimiter = null;
}

function moveFireBolts(fireBolts: PIXI.Sprite[]) {
    fireBolts = fireBolts.filter((bolt) => {
        if(bolt.position.x > 800) {
            stage.removeChild(bolt);

            return false;
        }
        else {
            bolt.position.x += 10;

            return true;
        }
    });
}

export = playScene;
