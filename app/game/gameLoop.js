/// <reference path="./../lib/pixi.js.d.ts" />
define(["require", "exports", './components/state', './components/renderer', './components/stage'], function (require, exports, state, renderer, stage) {
    function gameLoop() {
        requestAnimationFrame(gameLoop);
        state.actualScene();
        renderer.render(stage);
    }
    return gameLoop;
});
//# sourceMappingURL=gameLoop.js.map