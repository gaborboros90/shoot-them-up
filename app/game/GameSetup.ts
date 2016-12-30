/// <reference path="../lib/pixi.js.d.ts" />

import stage = require('./components/stage');
import state = require('./components/state');
import gameLoop = require('./gameLoop');
import playScene = require('./game-scenes/playScene');
import parallaxBackground = require('./components/sprites/parallaxBackground');
import usersSpaceShip = require('./components/sprites/usersSpaceShip');
import TextureHelper = require('./texture/TextureHelper');
import keyboard = require('./utils/keyboard');

class GameSetup {
    constructor() {
    }

    private moveSprite(sprite:PIXI.Sprite, speed:number):void {
        let left = keyboard(37),
            up = keyboard(38),
            right = keyboard(39),
            down = keyboard(40);

        left.press = () => {
            sprite.vx = -1 * speed;
            sprite.vy = 0;
        };

        left.release = () => {
            if (!right.isDown && sprite.vy === 0) {
                sprite.vx = 0;
            }
        };

        up.press = () => {
            sprite.vy = -1 * speed;
            sprite.vx = 0;
        };
        up.release = () => {
            if (!down.isDown && sprite.vx === 0) {
                sprite.vy = 0;
            }
        };

        right.press = () => {
            sprite.vx = speed;
            sprite.vy = 0;
        };
        right.release = () => {
            if (!left.isDown && sprite.vy === 0) {
                sprite.vx = 0;
            }
        };

        down.press = () => {
            sprite.vy = speed;
            sprite.vx = 0;
        };
        down.release = () => {
            if (!up.isDown && sprite.vx === 0) {
                sprite.vy = 0;
            }
        };
    }

    public init():void {
        parallaxBackground.fartherBackgroundTexture = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage(TextureHelper.fartherBackgroundTexture), 800, 600);
        parallaxBackground.fartherBackgroundTexture.position.set(0, 0);
        parallaxBackground.fartherBackgroundTexture.tilePosition.set(0, 0)

        stage.addChild(parallaxBackground.fartherBackgroundTexture);

        parallaxBackground.nearerBackground = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage(TextureHelper.nearerBackgroundTexture), 800, 480);
        parallaxBackground.nearerBackground.position.set(0, 240);
        parallaxBackground.nearerBackground.tilePosition.set(0, 0);

        stage.addChild(parallaxBackground.nearerBackground);

        usersSpaceShip.texture = PIXI.Texture.fromImage(TextureHelper.usersSpaceShip);
        usersSpaceShip.position.set(50, stage.height / 2 - usersSpaceShip.height / 2);
        usersSpaceShip.scale.set(0.25, 0.25);

        usersSpaceShip.vx = 0;
        usersSpaceShip.vy = 0;

        stage.addChild(usersSpaceShip);
        this.moveSprite(usersSpaceShip, 3.5);

        state.actualScene = playScene;
        gameLoop();
    }
}

export = GameSetup;
