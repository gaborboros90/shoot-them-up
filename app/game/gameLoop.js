/// <reference path="./../lib/pixi.js.d.ts" />
define(["require", "exports", './components/state', './components/renderer', './components/stage', './components/RequestAnimHelper'], function (require, exports, state, renderer, stage, RequestAnimHelper) {
    function gameLoop() {
        RequestAnimHelper.ID = window.requestAnimationFrame(gameLoop);
        state.actualScene();
        renderer.render(stage);
    }
    return gameLoop;
});
//# sourceMappingURL=gameLoop.js.map