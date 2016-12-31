/// <reference path="../../lib/pixi.js.d.ts" />

import PIXI = require('pixi');
import stage = require('../components/stage');
import state = require('../components/state');
import parallaxBackground = require('../components/sprites/parallaxBackground');
import usersSpaceShip = require('../components/sprites/usersSpaceShip');
import BoundaryLimiter = require('../utils/BoundaryLimiter');
import hitTestRectangle = require('../utils/hitTestRectangle');
import ComponentDimension = require('../components/types/ComponentDimension');
import FireBolts = require('../components/sprites/FireBolts');
import EnemiesSpaceShips = require('../components/sprites/EnemiesSpaceShips');
import endGameScene = require('./endGameScene');
import Timer = require('../utils/Timer');
import CanvasDimensions = require('../utils/CanvasDimensions');

function playScene() {
    let spaceShipDimensions:ComponentDimension = {
            width: usersSpaceShip.width,
            height: usersSpaceShip.height
        },
        boundaryLimiter = new BoundaryLimiter(0, 0, CanvasDimensions.width, CanvasDimensions.height, spaceShipDimensions);

    parallaxBackground.fartherBackgroundTexture.tilePosition.x -= 0.64;
    parallaxBackground.nearerBackground.tilePosition.x -= 1.4;

    usersSpaceShip.position.x = boundaryLimiter.limitHorizontally(usersSpaceShip.position.x, usersSpaceShip.vx);
    usersSpaceShip.position.y = boundaryLimiter.limitVertically(usersSpaceShip.position.y, usersSpaceShip.vy);
    FireBolts.fireBoltsList = moveFireBolts();
    EnemiesSpaceShips.spaceShipsList = moveEnemiesSpacehips();
    detectEnemySpaceShipDestroy();
    detectUsersSpaceShipDestroy();

    spaceShipDimensions = null;
    boundaryLimiter = null;
}

function moveFireBolts():PIXI.Sprite[] {
    return FireBolts.fireBoltsList.filter((bolt) => {
        if (bolt.position.x > CanvasDimensions.width) {
            stage.removeChild(bolt);

            return false;
        }
        else {
            bolt.position.x += 10;

            return true;
        }
    });
}

function moveEnemiesSpacehips():PIXI.Sprite[] {
    return EnemiesSpaceShips.spaceShipsList.filter((spaceShip) => {
        if (spaceShip.position.x < -1 * spaceShip.width || spaceShip.position.y < -1 * spaceShip.height || spaceShip.position.y > CanvasDimensions.width) {
            stage.removeChild(spaceShip);

            return false;
        }
        else {
            spaceShip.position.x -= 4;

            if (spaceShip.move === 'up') {
                spaceShip.position.y += 0.5;
            }
            else if (spaceShip.move === 'down') {
                spaceShip.position.y -= 0.5;
            }

            return true;
        }
    });
}

function detectEnemySpaceShipDestroy():void {
    EnemiesSpaceShips.spaceShipsList.forEach((ship) => {
        FireBolts.fireBoltsList.forEach((bolt) => {
            if (hitTestRectangle(ship, bolt)) {
                stage.removeChild(ship);
                stage.removeChild(bolt);

                ship.position.set(-1000,-1000);
                bolt.position.set(-1000,-1000);
            }
        });
    });
}

function detectUsersSpaceShipDestroy():void {
    EnemiesSpaceShips.spaceShipsList.forEach((ship) => {
        if(hitTestRectangle(usersSpaceShip,ship)){
            stage.removeChild(ship);
            stage.removeChild(usersSpaceShip);
            usersSpaceShip.position.set(CanvasDimensions.width,CanvasDimensions.height);

            state.actualScene = endGameScene;
            window.clearInterval(Timer.timerId);
        }
    });
}

export = playScene;
