/// <reference path="../../lib/pixi.js.d.ts" />
define(["require", "exports", '../components/stage', '../components/sprites/parallaxBackground', '../components/sprites/usersSpaceShip', '../utils/BoundaryLimiter', '../components/sprites/fireBolts'], function (require, exports, stage, parallaxBackground, usersSpaceShip, BoundaryLimiter, fireBolts) {
    function playScene() {
        var spaceShipDimensions = {
            width: usersSpaceShip.width,
            height: usersSpaceShip.height
        }, boundaryLimiter = new BoundaryLimiter(0, 0, 800, 600, spaceShipDimensions);
        parallaxBackground.fartherBackgroundTexture.tilePosition.x -= 0.64;
        parallaxBackground.nearerBackground.tilePosition.x -= 1.4;
        usersSpaceShip.position.x = boundaryLimiter.limitHorizontally(usersSpaceShip.position.x, usersSpaceShip.vx);
        usersSpaceShip.position.y = boundaryLimiter.limitVertically(usersSpaceShip.position.y, usersSpaceShip.vy);
        moveFireBolts(fireBolts);
        spaceShipDimensions = null;
        boundaryLimiter = null;
    }
    function moveFireBolts(fireBolts) {
        fireBolts = fireBolts.filter(function (bolt) {
            if (bolt.position.x > 800) {
                stage.removeChild(bolt);
                return false;
            }
            else {
                bolt.position.x += 10;
                return true;
            }
        });
    }
    return playScene;
});
//# sourceMappingURL=playScene.js.map