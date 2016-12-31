/// <reference path="../lib/pixi.js.d.ts" />
define(["require", "exports", './texture/TextureHelper', './GameSetup', './components/renderer'], function (require, exports, TextureHelper, GameSetup, renderer) {
    var ShootThemUp = (function () {
        function ShootThemUp(containerElem) {
            this.containerElem = containerElem;
            this.gameSetup = new GameSetup();
            this.textureHelper = new TextureHelper();
        }
        ShootThemUp.prototype.startGame = function () {
            this.initRenderer();
            this.gameSetup.init();
        };
        ShootThemUp.prototype.initRenderer = function () {
            this.containerElem.appendChild(renderer.view);
        };
        return ShootThemUp;
    })();
    return ShootThemUp;
});
//# sourceMappingURL=ShootThemUp.js.map