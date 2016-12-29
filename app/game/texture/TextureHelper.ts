/// <reference path="../../lib/pixi.js.d.ts" />

import PIXI = require('pixi');

class TextureHelper {
    public static fartherBackgroundTexture = '';
    public static nearerBackgroundTexture = '';

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
