/// <reference path="../../lib/pixi.js.d.ts" />
define(["require", "exports", 'pixi', '../components/stage', '../utils/RequestAnimHelper', '../components/renderer', '../components/sprites/FireBolts', '../components/sprites/EnemiesSpaceShips'], function (require, exports, PIXI, stage, RequestAnimHelper, renderer, FireBolts, EnemiesSpaceShips) {
    /**
     * @method endGameScene
     * @description Publish the result of the game, and call backToMainScreen method
     */
    function endGameScene() {
        var gameOverText = new PIXI.Text("You've lost the game!", {
            fontFamily: 'Arial',
            fontSize: 42, fill: 'white'
        });
        stage.removeChildren(1);
        gameOverText.position.set(stage.width / 2 - gameOverText.width / 2, 300 - gameOverText.height / 2);
        stage.addChild(gameOverText);
        window.cancelAnimationFrame(RequestAnimHelper.ID);
        backToMainScreen();
    }
    /**
     * @method
     * @description Navigate back to main screen
     */
    function backToMainScreen() {
        window.setTimeout(function () {
            var applicationContainerNode = document.querySelector('.application-container'), mainScreenNode = document.querySelector('.main-screen');
            applicationContainerNode.removeChild(renderer.view);
            cleanUpApplication();
            mainScreenNode.style.display = 'block';
        }, 5000);
    }
    /**
     * @method cleanUpApplication
     * @description Clean up textures and game objects, when application ends
     */
    function cleanUpApplication() {
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
    return endGameScene;
});
//# sourceMappingURL=endGameScene.js.map