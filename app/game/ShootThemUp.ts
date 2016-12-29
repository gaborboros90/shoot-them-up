/// <reference path="../lib/pixi.js.d.ts" />

import TextureHelper = require('./texture/TextureHelper');
import GameSetup = require('./GameSetup');
import stage = require('./components/stage');
import renderer = require('./components/renderer');
import PIXI = require('pixi');

class ShootThemUp {
    private textureHelper:TextureHelper;
    private gameSetup:GameSetup;

    constructor(private containerElem:HTMLElement) {
        this.gameSetup = new GameSetup();
        this.textureHelper = new TextureHelper();
    }

    public startGame():void {
        this.initRenderer();
        this.textureHelper.loadTextures()
            .load(this.gameSetup.init);
    }

    private initRenderer(): void {
        this.containerElem.appendChild(renderer.view);
    }
}

export = ShootThemUp;
