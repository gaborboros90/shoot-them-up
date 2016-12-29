/// <reference path="../lib/pixi.js.d.ts" />

import stage = require('./components/stage');
import state = require('./components/state');
import gameLoop = require('./gameLoop');
import playScene = require('./game-scenes/playScene');

class GameSetup {
    constructor(){}

    public init(): void {
        state = playScene;

        gameLoop();
    }
}

export = GameSetup;
