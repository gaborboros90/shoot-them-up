/// <reference path="lib/pixi.js.d.ts" />

import ShootThemUp = require('./game/ShootThemUp');

class ApplicationInstance {
    private splashScreenNode:HTMLElement = <HTMLElement>document.querySelector('.splash-screen');
    private applicationContainerNode:HTMLElement = <HTMLElement>document.querySelector('.application-container');
    private mainScreenNode:HTMLElement = <HTMLElement>document.querySelector('.main-screen');
    private gameScreenNode:HTMLElement = <HTMLElement>document.querySelector('.game-container');
    private shootThemUp: ShootThemUp;

    constructor() {
    }

    public init():void {
        this.removeSplashScreen();
        this.attachListeners();
    }

    private attachListeners():void {
        let startGameButtonNode: NodeList = document.querySelectorAll('.start-game-button'),
            exitGameButtonNode: HTMLElement = <HTMLElement>document.querySelector('.exit-game-button');

        for(let index = 0; index < startGameButtonNode.length; index++) {
            startGameButtonNode[index].addEventListener('click', () => {
                this.mainScreenNode.style.display = 'none';
                this.shootThemUp = new ShootThemUp(this.applicationContainerNode);
                this.shootThemUp.startGame();
            }, false);
        }

        exitGameButtonNode.addEventListener('click', () => {
            window.location.href = 'http://playngo.com';
        }, false);
    }

    private removeSplashScreen():void {
        window.setTimeout(() => {
            this.applicationContainerNode.removeChild(this.splashScreenNode);
        }, 2000);
    }
}

export = ApplicationInstance;
