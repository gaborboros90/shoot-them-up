/// <reference path="../../lib/pixi.js.d.ts" />
define(["require", "exports"], function (require, exports) {
    var TextureHelper = (function () {
        function TextureHelper() {
        }
        TextureHelper.fartherBackgroundTexture = './game/texture/images/farther-texture.PNG';
        TextureHelper.nearerBackgroundTexture = './game/texture/images/nearer-texture.png';
        TextureHelper.usersSpaceShip = './game/texture/images/users-spaceship.png';
        TextureHelper.laserBolt = './game/texture/images/laser-bolt.png';
        TextureHelper.enemy1 = './game/texture/images/enemy-1.png';
        TextureHelper.enemy2 = './game/texture/images/enemy-2.png';
        TextureHelper.explosion = './game/texture/images/explosion-particle.png';
        return TextureHelper;
    })();
    return TextureHelper;
});
//# sourceMappingURL=TextureHelper.js.map