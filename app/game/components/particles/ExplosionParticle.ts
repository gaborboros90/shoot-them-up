/// <reference path="../../../lib/pixi.js.d.ts" />

import PIXI = require('pixi');
import stage = require('../../components/stage');
import TextureHelper = require('../../texture/TextureHelper');

class ExplosionParticle {
    public static d:any = new Dust(PIXI);

    public static createExplosion(xPosition:number, yPosition: number):void {
        let particleContainer = new PIXI.particles.ParticleContainer(
            15000,
            {alpha: true, scale: true, rotation: true, uvs: true}
        );

        stage.addChild(particleContainer);

        ExplosionParticle.d.create(
            xPosition,
            yPosition,
            () => {
                let explosionParticle = new PIXI.Sprite(
                    PIXI.Texture.fromImage(TextureHelper.explosion)
                );

                explosionParticle.width = 16;
                explosionParticle.height = 16;

                return explosionParticle;
            },
            particleContainer,
            50,
            0.1,
            true,
            0, 6.28,
            32, 64
        );
    }
}

export = ExplosionParticle;
