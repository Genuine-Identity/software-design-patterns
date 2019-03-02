import { IPlane } from "./IPlane";

export class BoeingPlane implements IPlane {
    _name: string;
    get name() {
        return this._name;
    }
    constructor() {
        this._name = 'Boeing';
    }
    land(): string {
        return `*** ${this.name} is Landing ***`;
    }
    fly(): string {
        return `*** ${this.name} is Flying ***`;
    }
}