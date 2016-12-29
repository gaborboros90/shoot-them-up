/// <reference path="../../lib/pixi.js.d.ts" />
define(["require", "exports", '../components/sprites/parallaxBackground'], function (require, exports, parallaxBackground) {
    function playScene() {
        parallaxBackground.fartherBackgroundTexture.tilePosition.x -= 0.64;
        parallaxBackground.nearerBackground.tilePosition.x -= 1.4;
    }
    return playScene;
});
//# sourceMappingURL=playScene.js.map