/// <reference path="../../lib/pixi.js.d.ts" />
define(["require", "exports", '../components/stage', '../components/state', '../components/sprites/parallaxBackground', '../components/sprites/usersSpaceShip', '../utils/BoundaryLimiter', '../utils/hitTestRectangle', '../components/sprites/FireBolts', '../components/sprites/EnemiesSpaceShips', './endGameScene', '../utils/Timer', '../utils/CanvasDimensions'], function (require, exports, stage, state, parallaxBackground, usersSpaceShip, BoundaryLimiter, hitTestRectangle, FireBolts, EnemiesSpaceShips, endGameScene, Timer, CanvasDimensions) {
    function playScene() {
        var spaceShipDimensions = {
            width: usersSpaceShip.width,
            height: usersSpaceShip.height
        }, boundaryLimiter = new BoundaryLimiter(0, 0, CanvasDimensions.width, CanvasDimensions.height, spaceShipDimensions);
        parallaxBackground.fartherBackgroundTexture.tilePosition.x -= 0.64;
        parallaxBackground.nearerBackground.tilePosition.x -= 1.4;
        usersSpaceShip.position.x = boundaryLimiter.limitHorizontally(usersSpaceShip.position.x, usersSpaceShip.vx);
        usersSpaceShip.position.y = boundaryLimiter.limitVertically(usersSpaceShip.position.y, usersSpaceShip.vy);
        FireBolts.fireBoltsList = moveFireBolts();
        EnemiesSpaceShips.spaceShipsList = moveEnemiesSpacehips();
        detectEnemySpaceShipDestroy();
        detectUsersSpaceShipDestroy();
        spaceShipDimensions = null;
        boundaryLimiter = null;
    }
    function moveFireBolts() {
        return FireBolts.fireBoltsList.filter(function (bolt) {
            if (bolt.position.x > CanvasDimensions.width) {
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
            if (spaceShip.position.x < -1 * spaceShip.width || spaceShip.position.y < -1 * spaceShip.height || spaceShip.position.y > CanvasDimensions.width) {
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
    function detectEnemySpaceShipDestroy() {
        EnemiesSpaceShips.spaceShipsList.forEach(function (ship) {
            FireBolts.fireBoltsList.forEach(function (bolt) {
                if (hitTestRectangle(ship, bolt)) {
                    stage.removeChild(ship);
                    stage.removeChild(bolt);
                    ship.position.set(-1000, -1000);
                    bolt.position.set(-1000, -1000);
                }
            });
        });
    }
    function detectUsersSpaceShipDestroy() {
        EnemiesSpaceShips.spaceShipsList.forEach(function (ship) {
            if (hitTestRectangle(usersSpaceShip, ship)) {
                stage.removeChild(ship);
                stage.removeChild(usersSpaceShip);
                usersSpaceShip.position.set(CanvasDimensions.width, CanvasDimensions.height);
                state.actualScene = endGameScene;
                window.clearInterval(Timer.timerId);
            }
        });
    }
    return playScene;
});
//# sourceMappingURL=playScene.js.map