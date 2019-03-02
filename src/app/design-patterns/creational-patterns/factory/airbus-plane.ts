import { IPlane } from "./IPlane";

export class AirbusPlane implements IPlane {
  _name: String;
  get name() {
    return this._name;
  }
  constructor() {
    this._name = 'AirBus';
  }
  land(): string {
    return `*** ${this.name} is Landing  ***`;
  }
  fly(): string {
    return `*** ${this.name} is Flying ***`;
  }
}