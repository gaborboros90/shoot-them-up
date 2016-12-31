/// <reference path="../../lib/pixi.js.d.ts" />

import PIXI = require('pixi');
import stage = require('../components/stage');
import RequestAnimHelper = require('../utils/RequestAnimHelper');
import renderer = require('../components/renderer');
import FireBolts = require('../components/sprites/FireBolts');
import EnemiesSpaceShips = require('../components/sprites/EnemiesSpaceShips');

function endGameScene() {
    let gameOverText = new PIXI.Text(
        "You've lost the game!",
        {
            fontFamily: 'Arial',
            fontSize: 42, fill: 'white'
        }
    );

    stage.removeChildren(1);
    gameOverText.position.set(stage.width / 2 - gameOverText.width / 2, 300 - gameOverText.height / 2);
    stage.addChild(gameOverText);

    window.cancelAnimationFrame(RequestAnimHelper.ID);
    backToMainScreen();
}

function backToMainScreen():void {
    window.setTimeout(() => {
        let applicationContainerNode:HTMLElement = <HTMLElement>document.querySelector('.application-container'),
            mainScreenNode:HTMLElement = <HTMLElement>document.querySelector('.main-screen');

        applicationContainerNode.removeChild(renderer.view);
        cleanUpApplication();
        mainScreenNode.style.display = 'block';
    }, 5000);
}

function cleanUpApplication():void {
    EnemiesSpaceShips.spaceShipsList = [];
    FireBolts.fireBoltsList = [];
    stage.removeChildren();

    for (var texture in PIXI.utils.TextureCache) {
        var tmp = PIXI.Texture.removeTextureFromCache(texture);
        tmp.destroy(true);
    }

    for (var texture in PIXI.utils.BaseTextureCache) {
        PIXI.utils.BaseTextureCache[texture].destroy(true);
    }
}

export = endGameScene;
