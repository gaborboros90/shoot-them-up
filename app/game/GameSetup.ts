/// <reference path="../lib/pixi.js.d.ts" />

import stage = require('./components/stage');
import state = require('./components/state');
import gameLoop = require('./gameLoop');
import playScene = require('./game-scenes/playScene');
import parallaxBackground = require('./components/sprites/parallaxBackground');
import usersSpaceShip = require('./components/sprites/usersSpaceShip');
import TextureHelper = require('./texture/TextureHelper');

class GameSetup {
    constructor() {
    }

    public init():void {
        parallaxBackground.fartherBackgroundTexture = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage(TextureHelper.fartherBackgroundTexture), 800, 480);
        parallaxBackground.fartherBackgroundTexture.position.set(0, 0);
        parallaxBackground.fartherBackgroundTexture.tilePosition.set(0, 0)

        stage.addChild(parallaxBackground.fartherBackgroundTexture);

        parallaxBackground.nearerBackground = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage(TextureHelper.nearerBackgroundTexture), 800, 480);
        parallaxBackground.nearerBackground.position.set(0, 240);
        parallaxBackground.nearerBackground.tilePosition.set(0, 0);

        stage.addChild(parallaxBackground.nearerBackground);

        usersSpaceShip.texture = PIXI.Texture.fromImage(TextureHelper.usersSpaceShip);
        usersSpaceShip.position.set(50, stage.height / 2 - usersSpaceShip.height / 2);
        usersSpaceShip.scale.set(0.5, 0.5);

        stage.addChild(usersSpaceShip);

        state.actualScene = playScene;
        gameLoop();
    }
}

export = GameSetup;
