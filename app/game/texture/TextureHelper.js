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
                TextureHelper.nearerBackgroundTexture,
                TextureHelper.usersSpaceShip
            ]);
        };
        TextureHelper.fartherBackgroundTexture = './game/texture/images/farther-texture.PNG';
        TextureHelper.nearerBackgroundTexture = './game/texture/images/nearer-texture.png';
        TextureHelper.usersSpaceShip = './game/texture/images/users-spaceship.png';
        TextureHelper.laserBolt = './game/texture/images/laser-bolt.png';
        return TextureHelper;
    })();
    return TextureHelper;
});
//# sourceMappingURL=TextureHelper.js.map