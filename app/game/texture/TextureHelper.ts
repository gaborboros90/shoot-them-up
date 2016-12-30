/// <reference path="../../lib/pixi.js.d.ts" />

import PIXI = require('pixi');

class TextureHelper {
    public static fartherBackgroundTexture:string = './game/texture/images/farther-texture.PNG';
    public static nearerBackgroundTexture:string = './game/texture/images/nearer-texture.png';
    public static usersSpaceShip:string = './game/texture/images/users-spaceship.png';
    public static laserBolt:string = './game/texture/images/laser-bolt.png';
    public static enemy1:string = './game/texture/images/enemy-1.png';
    public static enemy2:string = './game/texture/images/enemy-2.png';

    private loader:PIXI.loaders.Loader = PIXI.loader;

    constructor() {
    }

    public loadTextures():PIXI.loaders.Loader {
        return this.loader
            .add([
                TextureHelper.fartherBackgroundTexture,
                TextureHelper.nearerBackgroundTexture,
                TextureHelper.usersSpaceShip
            ]);
    }
}

export = TextureHelper;
