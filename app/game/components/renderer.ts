/// <reference path="../../lib/pixi.js.d.ts" />

import PIXI = require('pixi');
import CanvasDimensions = require('../utils/CanvasDimensions');

let renderer = PIXI.autoDetectRenderer(CanvasDimensions.width, CanvasDimensions.height);

export = renderer;
