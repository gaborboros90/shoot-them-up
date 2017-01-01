/// <reference path="../../lib/pixi.js.d.ts" />

import PIXI = require('pixi');
import stage = require('../components/stage');
import CanvasDimensions = require('../utils/CanvasDimensions');
import RequestAnimHelper = require('../utils/RequestAnimHelper');
import renderer = require('../components/renderer');
import FireBolts = require('../components/sprites/FireBolts');
import EnemiesSpaceShips = require('../components/sprites/EnemiesSpaceShips');

/**
 * @method endGameScene
 * @description Publish the result of the game, and call backToMainScreen method
 */
function endGameScene() {
    let gameOverText = new PIXI.Text(
        "You've lost the game!",
        {
            fontFamily: 'Arial',
            fontSize: 42, fill: 'white'
        }
    );

    stage.removeChildren(1);
    gameOverText.position.set(stage.width / 2 - gameOverText.width / 2, CanvasDimensions.height / 2 - gameOverText.height / 2);
    stage.addChild(gameOverText);

    window.cancelAnimationFrame(RequestAnimHelper.ID);
    backToMainScreen();
}

/**
 * @method
 * @description Navigate back to main screen
 */
function backToMainScreen():void {
    window.setTimeout(() => {
        let applicationContainerNode:HTMLElement = <HTMLElement>document.querySelector('.application-container'),
            mainScreenNode:HTMLElement = <HTMLElement>document.querySelector('.main-screen');

        applicationContainerNode.removeChild(renderer.view);
        cleanUpApplication();
        mainScreenNode.style.display = 'block';
    }, 5000);
}

/**
 * @method cleanUpApplication
 * @description Clean up textures and game objects, when application ends
 */
function cleanUpApplication():void {
    EnemiesSpaceShips.spaceShipsList = [];
    FireBolts.fireBoltsList = [];
    stage.removeChildren();

    for (let texture in PIXI.utils.TextureCache) {
        var tmp = PIXI.Texture.removeTextureFromCache(texture);
        tmp.destroy(true);
    }

    for (let texture in PIXI.utils.BaseTextureCache) {
        PIXI.utils.BaseTextureCache[texture].destroy(true);
    }
}

export = endGameScene;
