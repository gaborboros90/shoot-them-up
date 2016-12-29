/// <reference path="../../../lib/pixi.js.d.ts" />

import PIXI = require('pixi');

interface ParallaxBackground {
    nearerBackground: PIXI.extras.TilingSprite;
    fartherBackgroundTexture: PIXI.extras.TilingSprite;
}

export = ParallaxBackground;
