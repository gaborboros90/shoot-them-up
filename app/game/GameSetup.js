/// <reference path="../lib/pixi.js.d.ts" />
define(["require", "exports", './gameLoop', './game-scenes/playScene'], function (require, exports, gameLoop, playScene) {
    var GameSetup = (function () {
        function GameSetup() {
        }
        GameSetup.prototype.init = function () {
            var state = playScene;
            gameLoop();
        };
        return GameSetup;
    })();
    return GameSetup;
});
//# sourceMappingURL=GameSetup.js.map