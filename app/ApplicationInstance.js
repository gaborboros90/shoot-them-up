/// <reference path="lib/pixi.js.d.ts" />
define(["require", "exports", './game/ShootThemUp'], function (require, exports, ShootThemUp) {
    var ApplicationInstance = (function () {
        function ApplicationInstance() {
            this.splashScreenNode = document.querySelector('.splash-screen');
            this.applicationContainerNode = document.querySelector('.application-container');
            this.mainScreenNode = document.querySelector('.main-screen');
        }
        ApplicationInstance.prototype.init = function () {
            this.showMainScreen();
            this.removeSplashScreen();
            this.attachListeners();
        };
        ApplicationInstance.prototype.attachListeners = function () {
            var _this = this;
            var startGameButtonNode = document.querySelectorAll('.start-game-button'), exitGameButtonNode = document.querySelector('.exit-game-button');
            for (var index = 0; index < startGameButtonNode.length; index++) {
                startGameButtonNode[index].addEventListener('click', function () {
                    _this.mainScreenNode.style.display = 'none';
                    _this.shootThemUp = new ShootThemUp(_this.applicationContainerNode);
                    _this.shootThemUp.startGame();
                }, false);
            }
            exitGameButtonNode.addEventListener('click', function () {
                window.location.href = 'http://playngo.com';
            }, false);
        };
        ApplicationInstance.prototype.removeSplashScreen = function () {
            var _this = this;
            window.setTimeout(function () {
                _this.applicationContainerNode.removeChild(_this.splashScreenNode);
            }, 1500);
        };
        ApplicationInstance.prototype.showMainScreen = function () {
            this.mainScreenNode.style.display = 'block';
        };
        return ApplicationInstance;
    })();
    return ApplicationInstance;
});
//# sourceMappingURL=ApplicationInstance.js.map