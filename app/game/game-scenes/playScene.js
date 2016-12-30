/// <reference path="../../lib/pixi.js.d.ts" />
define(["require", "exports", '../components/stage', '../components/sprites/parallaxBackground', '../components/sprites/usersSpaceShip', '../utils/BoundaryLimiter', '../components/sprites/FireBolts', '../components/sprites/EnemiesSpaceShips'], function (require, exports, stage, parallaxBackground, usersSpaceShip, BoundaryLimiter, FireBolts, EnemiesSpaceShips) {
    function playScene() {
        var spaceShipDimensions = {
            width: usersSpaceShip.width,
            height: usersSpaceShip.height
        }, boundaryLimiter = new BoundaryLimiter(0, 0, 800, 600, spaceShipDimensions);
        parallaxBackground.fartherBackgroundTexture.tilePosition.x -= 0.64;
        parallaxBackground.nearerBackground.tilePosition.x -= 1.4;
        usersSpaceShip.position.x = boundaryLimiter.limitHorizontally(usersSpaceShip.position.x, usersSpaceShip.vx);
        usersSpaceShip.position.y = boundaryLimiter.limitVertically(usersSpaceShip.position.y, usersSpaceShip.vy);
        FireBolts.fireBoltsList = moveFireBolts();
        EnemiesSpaceShips.spaceShipsList = moveEnemiesSpacehips();
        spaceShipDimensions = null;
        boundaryLimiter = null;
    }
    function moveFireBolts() {
        return FireBolts.fireBoltsList.filter(function (bolt) {
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
    function moveEnemiesSpacehips() {
        return EnemiesSpaceShips.spaceShipsList.filter(function (spaceShip) {
            if (spaceShip.position.x < -1 * spaceShip.width || spaceShip.position.y < -1 * spaceShip.height || spaceShip.position.y > 800) {
                stage.removeChild(spaceShip);
                return false;
            }
            else {
                spaceShip.position.x -= 4;
                if (spaceShip.move === 'up') {
                    spaceShip.position.y += 0.5;
                }
                else if (spaceShip.move === 'down') {
                    spaceShip.position.y -= 0.5;
                }
                return true;
            }
        });
    }
    return playScene;
});
//# sourceMappingURL=playScene.js.map