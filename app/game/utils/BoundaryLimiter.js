define(["require", "exports"], function (require, exports) {
    var BoundaryLimiter = (function () {
        function BoundaryLimiter(xMin, yMin, xMax, yMax, targetDimensions) {
            this.xMin = xMin;
            this.yMin = yMin;
            this.xMax = xMax;
            this.yMax = yMax;
            this.targetDimensions = targetDimensions;
        }
        BoundaryLimiter.prototype.limitHorizontally = function (currentPosition, diff) {
            var horizontalValue = currentPosition;
            if (currentPosition + diff < this.xMin) {
                horizontalValue = this.xMin;
            }
            else if (currentPosition + this.targetDimensions.width + diff > this.xMax) {
                horizontalValue = this.xMax - this.targetDimensions.width;
            }
            else {
                horizontalValue += diff;
            }
            return horizontalValue;
        };
        BoundaryLimiter.prototype.limitVertically = function (currentPosition, diff) {
            var verticalValue = currentPosition;
            if (currentPosition + diff < this.yMin) {
                verticalValue = this.yMin;
            }
            else if (currentPosition + this.targetDimensions.height + diff > this.yMax) {
                verticalValue = this.yMax - this.targetDimensions.height;
            }
            else {
                verticalValue += diff;
            }
            return verticalValue;
        };
        return BoundaryLimiter;
    })();
    return BoundaryLimiter;
});
//# sourceMappingURL=BoundaryLimiter.js.map