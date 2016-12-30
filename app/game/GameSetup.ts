/// <reference path="../lib/pixi.js.d.ts" />

import PIXI = require('pixi');
import stage = require('./components/stage');
import state = require('./components/state');
import gameLoop = require('./gameLoop');
import playScene = require('./game-scenes/playScene');
import parallaxBackground = require('./components/sprites/parallaxBackground');
import usersSpaceShip = require('./components/sprites/usersSpaceShip');
import FireBolts = require('./components/sprites/FireBolts');
import EnemiesSpaceShips = require('./components/sprites/EnemiesSpaceShips');
import TextureHelper = require('./texture/TextureHelper');
import keyboard = require('./utils/keyboard');
import Timer = require('./utils/Timer');
import renderer = require('./components/renderer');

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

    private fireWithSpaceShip(sprite:PIXI.Sprite):void {
        renderer.view.addEventListener('click',() => {
            let bolt = new PIXI.Sprite(PIXI.Texture.fromImage(TextureHelper.laserBolt));

            bolt.scale.set(0.1,0.1);
            bolt.position.set(sprite.position.x + sprite.width + 5, sprite.position.y + (sprite.height / 2) - (bolt.height /2));
            stage.addChild(bolt);

            FireBolts.fireBoltsList.push(bolt);
        },false);
    }

    private emitEnemySpaceShips(): void {
        Timer.timerId = window.setInterval(() => {
            let spaceShip = Math.random() > 0.5 ? new PIXI.Sprite(PIXI.Texture.fromImage(TextureHelper.enemy1)) : new PIXI.Sprite(PIXI.Texture.fromImage(TextureHelper.enemy2));

            spaceShip.width = 96;
            spaceShip.height = 48;
            spaceShip.position.set(800, Math.random() * (400 - 100) + 100);

            stage.addChild(spaceShip);

            EnemiesSpaceShips.spaceShipsList.push(spaceShip);
        }, 2000);
    }

    public init():void {
        parallaxBackground.fartherBackgroundTexture = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage(TextureHelper.fartherBackgroundTexture), 800, 600);
        parallaxBackground.fartherBackgroundTexture.position.set(0, 0);
        parallaxBackground.fartherBackgroundTexture.tilePosition.set(0, 0);

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
        this.fireWithSpaceShip(usersSpaceShip);
        this.emitEnemySpaceShips();

        state.actualScene = playScene;
        gameLoop();
    }
}

export = GameSetup;
