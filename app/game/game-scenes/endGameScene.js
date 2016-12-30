/// <reference path="../../lib/pixi.js.d.ts" />
define(["require", "exports", 'pixi', '../components/stage'], function (require, exports, PIXI, stage) {
    function endGameScene() {
        var gameOverText = new PIXI.Text("You've lost the game!", { fontFamily: "Arial", fontSize: 42, fill: "white" });
        stage.removeChildren(1);
        gameOverText.position.set(stage.width / 2 - gameOverText.width / 2, 300 - gameOverText.height / 2);
        stage.addChild(gameOverText);
        //window.cancelAnimationFrame();
    }
    return endGameScene;
});
//# sourceMappingURL=endGameScene.js.map