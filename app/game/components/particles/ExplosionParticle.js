/// <reference path="../../../lib/pixi.js.d.ts" />
define(["require", "exports", 'pixi', '../../components/stage', '../../texture/TextureHelper'], function (require, exports, PIXI, stage, TextureHelper) {
    var ExplosionParticle = (function () {
        function ExplosionParticle() {
        }
        ExplosionParticle.createExplosion = function (xPosition, yPosition) {
            var particleContainer = new PIXI.particles.ParticleContainer(15000, { alpha: true, scale: true, rotation: true, uvs: true });
            stage.addChild(particleContainer);
            ExplosionParticle.d.create(xPosition, yPosition, function () {
                var explosionParticle = new PIXI.Sprite(PIXI.Texture.fromImage(TextureHelper.explosion));
                explosionParticle.width = 16;
                explosionParticle.height = 16;
                return explosionParticle;
            }, particleContainer, 50, 0.1, true, 0, 6.28, 32, 64);
        };
        ExplosionParticle.d = new Dust(PIXI);
        return ExplosionParticle;
    })();
    return ExplosionParticle;
});
//# sourceMappingURL=ExplosionParticle.js.map