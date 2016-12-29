/// <reference path="../lib/pixi.js.d.ts" />
define(["require", "exports", './components/stage', './components/state', './gameLoop', './game-scenes/playScene', './components/sprites/parallaxBackground', './components/sprites/usersSpaceShip', './texture/TextureHelper'], function (require, exports, stage, state, gameLoop, playScene, parallaxBackground, usersSpaceShip, TextureHelper) {
    var GameSetup = (function () {
        function GameSetup() {
        }
        GameSetup.prototype.init = function () {
            parallaxBackground.fartherBackgroundTexture = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage(TextureHelper.fartherBackgroundTexture), 800, 480);
            parallaxBackground.fartherBackgroundTexture.position.set(0, 0);
            parallaxBackground.fartherBackgroundTexture.tilePosition.set(0, 0);
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
        };
        return GameSetup;
    })();
    return GameSetup;
});
//# sourceMappingURL=GameSetup.js.map