/// <reference path="../../lib/pixi.js.d.ts" />

import PIXI = require('pixi');

class TextureHelper {
    public static fartherBackgroundTexture = './game/texture/images/farther-texture.PNG';
    public static nearerBackgroundTexture = './game/texture/images/nearer-texture.png';

    private loader:PIXI.loaders.Loader = PIXI.loader;

    constructor() {
    }

    public loadTextures():PIXI.loaders.Loader {
        return this.loader
            .add([
                TextureHelper.fartherBackgroundTexture,
                TextureHelper.nearerBackgroundTexture
            ]);
    }
}

export = TextureHelper;
