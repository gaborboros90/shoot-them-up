/// <reference path="lib/pixi.js.d.ts" />

class ApplicationInstance {
    private splashScreenNode:HTMLElement = <HTMLElement>document.querySelector('.splash-screen');
    private applicationContainerNode:HTMLElement = <HTMLElement>document.querySelector('.application-container');
    private mainScreenNode:HTMLElement = <HTMLElement>document.querySelector('.main-screen');
    private gameScreenNode:HTMLElement = <HTMLElement>document.querySelector('.game-container');

    constructor() {
    }

    public init():void {
        this.removeSplashScreen();
        this.attachListeners();
        this.preLoadTextures();
    }

    private attachListeners():void {
        let startGameButtonNode: NodeList = document.querySelectorAll('.start-game-button'),
            exitGameButtonNode: HTMLElement = <HTMLElement>document.querySelector('.exit-game-button');

        for(let index = 0; index < startGameButtonNode.length; index++) {
            startGameButtonNode[index].addEventListener('click', () => {
                this.mainScreenNode.style.display = 'none';
            }, false);
        }

        exitGameButtonNode.addEventListener('click', () => {
            window.location.href = 'http://playngo.com';
        }, false);
    }

    private preLoadTextures(): void {

    }

    private removeSplashScreen():void {
        window.setTimeout(() => {
            this.applicationContainerNode.removeChild(this.splashScreenNode);
        }, 2000);
    }
}

export = ApplicationInstance;
