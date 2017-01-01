/// <reference path="./../lib/pixi.js.d.ts" />
define(["require", "exports", './components/state', './components/renderer', './components/stage', './utils/RequestAnimHelper', './components/particles/ExplosionParticle'], function (require, exports, state, renderer, stage, RequestAnimHelper, ExplosionParticle) {
    function gameLoop() {
        RequestAnimHelper.ID = window.requestAnimationFrame(gameLoop);
        ExplosionParticle.d.update();
        state.actualScene();
        renderer.render(stage);
    }
    return gameLoop;
});
//# sourceMappingURL=gameLoop.js.map