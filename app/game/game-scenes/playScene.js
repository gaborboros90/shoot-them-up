/// <reference path="../../lib/pixi.js.d.ts" />
define(["require", "exports", '../components/sprites/parallaxBackground', '../components/sprites/usersSpaceShip'], function (require, exports, parallaxBackground, usersSpaceShip) {
    function playScene() {
        parallaxBackground.fartherBackgroundTexture.tilePosition.x -= 0.64;
        parallaxBackground.nearerBackground.tilePosition.x -= 1.4;
        usersSpaceShip.position.x += usersSpaceShip.vx;
        usersSpaceShip.position.y += usersSpaceShip.vy;
    }
    return playScene;
});
//# sourceMappingURL=playScene.js.map