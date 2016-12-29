/// <reference path="../../lib/pixi.js.d.ts" />
define(["require", "exports", 'pixi'], function (require, exports, PIXI) {
    var TextureHelper = (function () {
        function TextureHelper() {
            this.loader = PIXI.loader;
        }
        TextureHelper.prototype.loadTextures = function () {
            return this.loader
                .add([
                TextureHelper.fartherBackgroundTexture,
                TextureHelper.nearerBackgroundTexture
            ]);
        };
        TextureHelper.fartherBackgroundTexture = '';
        TextureHelper.nearerBackgroundTexture = '';
        return TextureHelper;
    })();
    return TextureHelper;
});
//# sourceMappingURL=TextureHelper.js.map