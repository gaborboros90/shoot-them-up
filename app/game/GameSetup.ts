/// <reference path="../lib/pixi.js.d.ts" />

import stage = require('./components/stage');
import state = require('./components/state');
import gameLoop = require('./gameLoop');
import playScene = require('./game-scenes/playScene');
import parallaxBackground = require('./components/sprites/parallaxBackground');
import TextureHelper = require('./texture/TextureHelper');

class GameSetup {
    constructor(){}

    public init(): void {
        parallaxBackground.fartherBackgroundTexture = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage(TextureHelper.fartherBackgroundTexture), 800, 600);
        parallaxBackground.fartherBackgroundTexture.position.set(0,0);
        parallaxBackground.fartherBackgroundTexture.tilePosition.set(0,0)

        stage.addChild(parallaxBackground.fartherBackgroundTexture);

        parallaxBackground.nearerBackground = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage(TextureHelper.nearerBackgroundTexture), 800, 600);
        parallaxBackground.nearerBackground.position.set(0,212);
        parallaxBackground.nearerBackground.tilePosition.set(0,0);

        stage.addChild(parallaxBackground.nearerBackground);

        state.actualScene = playScene;
        gameLoop();
    }
}

export = GameSetup;
