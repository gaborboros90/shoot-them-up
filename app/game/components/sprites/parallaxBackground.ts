/// <reference path="../../../lib/pixi.js.d.ts" />

import PIXI = require('pixi');
import ParallaxBackground = require('../types/ParallaxBackground');

let nearerBackground:PIXI.extras.TilingSprite,
    fartherBackground:PIXI.extras.TilingSprite,
    parallaxBackground: ParallaxBackground = {
            nearerBackground: nearerBackground,
            fartherBackgroundTexture: fartherBackground
        };

export = parallaxBackground;

