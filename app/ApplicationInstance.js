/// <reference path="lib/pixi.js.d.ts" />
define(["require", "exports"], function (require, exports) {
    var ApplicationInstance = (function () {
        function ApplicationInstance() {
            this.splashScreenNode = document.querySelector('.splash-screen');
            this.applicationContainerNode = document.querySelector('.application-container');
            this.mainScreenNode = document.querySelector('.main-screen');
            this.gameScreenNode = document.querySelector('.game-container');
        }
        ApplicationInstance.prototype.init = function () {
            this.removeSplashScreen();
            this.attachListeners();
            this.preLoadTextures();
        };
        ApplicationInstance.prototype.attachListeners = function () {
            var _this = this;
            var startGameButtonNode = document.querySelectorAll('.start-game-button'), exitGameButtonNode = document.querySelector('.exit-game-button');
            for (var index = 0; index < startGameButtonNode.length; index++) {
                startGameButtonNode[index].addEventListener('click', function () {
                    _this.mainScreenNode.style.display = 'none';
                }, false);
            }
            exitGameButtonNode.addEventListener('click', function () {
                window.location.href = 'http://playngo.com';
            }, false);
        };
        ApplicationInstance.prototype.preLoadTextures = function () {
        };
        ApplicationInstance.prototype.removeSplashScreen = function () {
            var _this = this;
            window.setTimeout(function () {
                _this.applicationContainerNode.removeChild(_this.splashScreenNode);
            }, 2000);
        };
        return ApplicationInstance;
    })();
    return ApplicationInstance;
});
//# sourceMappingURL=ApplicationInstance.js.map