/// <reference path="../lib/pixi.js.d.ts" />
define(["require", "exports", 'pixi', './components/stage', './components/state', './gameLoop', './game-scenes/playScene', './components/sprites/parallaxBackground', './components/sprites/usersSpaceShip', './components/sprites/FireBolts', './components/sprites/EnemiesSpaceShips', './texture/TextureHelper', './utils/keyboard', './utils/Timer', './components/renderer'], function (require, exports, PIXI, stage, state, gameLoop, playScene, parallaxBackground, usersSpaceShip, FireBolts, EnemiesSpaceShips, TextureHelper, keyboard, Timer, renderer) {
    var GameSetup = (function () {
        function GameSetup() {
        }
        GameSetup.prototype.moveSprite = function (sprite, speed) {
            var left = keyboard(37), up = keyboard(38), right = keyboard(39), down = keyboard(40);
            left.press = function () {
                sprite.vx = -1 * speed;
                sprite.vy = 0;
            };
            left.release = function () {
                if (!right.isDown && sprite.vy === 0) {
                    sprite.vx = 0;
                }
            };
            up.press = function () {
                sprite.vy = -1 * speed;
                sprite.vx = 0;
            };
            up.release = function () {
                if (!down.isDown && sprite.vx === 0) {
                    sprite.vy = 0;
                }
            };
            right.press = function () {
                sprite.vx = speed;
                sprite.vy = 0;
            };
            right.release = function () {
                if (!left.isDown && sprite.vy === 0) {
                    sprite.vx = 0;
                }
            };
            down.press = function () {
                sprite.vy = speed;
                sprite.vx = 0;
            };
            down.release = function () {
                if (!up.isDown && sprite.vx === 0) {
                    sprite.vy = 0;
                }
            };
        };
        GameSetup.prototype.fireWithSpaceShip = function (sprite) {
            renderer.view.addEventListener('click', function () {
                var bolt = new PIXI.Sprite(PIXI.Texture.fromImage(TextureHelper.laserBolt));
                bolt.scale.set(0.1, 0.1);
                bolt.position.set(sprite.position.x + sprite.width + 5, sprite.position.y + (sprite.height / 2) - (bolt.height / 2));
                stage.addChild(bolt);
                FireBolts.fireBoltsList.push(bolt);
            }, false);
        };
        GameSetup.prototype.emitEnemySpaceShips = function () {
            Timer.timerId = window.setInterval(function () {
                var spaceShip = Math.random() > 0.5 ? new PIXI.Sprite(PIXI.Texture.fromImage(TextureHelper.enemy1)) : new PIXI.Sprite(PIXI.Texture.fromImage(TextureHelper.enemy2));
                spaceShip.width = 96;
                spaceShip.height = 48;
                spaceShip.position.set(800, Math.random() * (400 - 100) + 100);
                stage.addChild(spaceShip);
                EnemiesSpaceShips.spaceShipsList.push(spaceShip);
            }, 2000);
        };
        GameSetup.prototype.init = function () {
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
        };
        return GameSetup;
    })();
    return GameSetup;
});
//# sourceMappingURL=GameSetup.js.map