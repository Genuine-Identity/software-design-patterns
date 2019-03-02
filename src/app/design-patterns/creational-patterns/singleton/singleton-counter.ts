export class SingletonCounter {
    private static instance: SingletonCounter;
    private _temperature: number;
    private constructor() { }
    public static getInstance() {
        if (!SingletonCounter.instance) {
            SingletonCounter.instance = new SingletonCounter();
            SingletonCounter.instance._temperature = 0;
        }
        return SingletonCounter.instance;
    }
    get temperature(): number {
        return this._temperature;
    }
    set temperature(score) {
        this._temperature = score;
    }
    public increaseTemperature(): number {
        return this._temperature += 1;
    }
    public decreaseTemperature(): number {
        return this._temperature -= 1;
    }
}