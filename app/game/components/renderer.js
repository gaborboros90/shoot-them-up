/// <reference path="../../lib/pixi.js.d.ts" />
define(["require", "exports", 'pixi', '../utils/CanvasDimensions'], function (require, exports, PIXI, CanvasDimensions) {
    var renderer = PIXI.autoDetectRenderer(CanvasDimensions.width, CanvasDimensions.height);
    return renderer;
});
//# sourceMappingURL=renderer.js.map