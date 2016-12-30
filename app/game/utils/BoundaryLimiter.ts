import ComponentDimension = require('../components/types/ComponentDimension');

class BoundaryLimiter {
    constructor(private xMin:number, private yMin:number, private xMax:number, private yMax:number, private targetDimensions: ComponentDimension) {
    }

    public limitHorizontally(currentPosition: number, diff: number) {
        let horizontalValue:number = currentPosition;

        if(currentPosition + diff < this.xMin) {
            horizontalValue  = this.xMin;
        }
        else if(currentPosition + this.targetDimensions.width + diff > this.xMax) {
            horizontalValue = this.xMax - this.targetDimensions.width;
        }
        else {
            horizontalValue += diff;
        }

        return horizontalValue;
    }

    public limitVertically(currentPosition: number, diff: number) {
        let verticalValue:number = currentPosition;

        if(currentPosition + diff < this.yMin) {
            verticalValue  = this.yMin;
        }
        else if(currentPosition + this.targetDimensions.height + diff > this.yMax) {
            verticalValue = this.yMax - this.targetDimensions.height;
        }
        else {
            verticalValue += diff;
        }

        return verticalValue;
    }
}

export = BoundaryLimiter;
