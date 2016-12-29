/// <reference path="../lib/pixi.js.d.ts" />
define(["require", "exports", './components/stage', './components/state', './gameLoop', './game-scenes/playScene', './components/sprites/parallaxBackground', './texture/TextureHelper'], function (require, exports, stage, state, gameLoop, playScene, parallaxBackground, TextureHelper) {
    var GameSetup = (function () {
        function GameSetup() {
        }
        GameSetup.prototype.init = function () {
            parallaxBackground.fartherBackgroundTexture = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage(TextureHelper.fartherBackgroundTexture), 800, 600);
            parallaxBackground.fartherBackgroundTexture.position.set(0, 0);
            parallaxBackground.fartherBackgroundTexture.tilePosition.set(0, 0);
            stage.addChild(parallaxBackground.fartherBackgroundTexture);
            parallaxBackground.nearerBackground = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage(TextureHelper.nearerBackgroundTexture), 800, 600);
            parallaxBackground.nearerBackground.position.set(0, 212);
            parallaxBackground.nearerBackground.tilePosition.set(0, 0);
            stage.addChild(parallaxBackground.nearerBackground);
            state.actualScene = playScene;
            gameLoop();
        };
        return GameSetup;
    })();
    return GameSetup;
});
//# sourceMappingURL=GameSetup.js.map