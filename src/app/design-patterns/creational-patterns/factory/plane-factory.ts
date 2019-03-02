import { IPlane } from "./IPlane";
import { PlaneType } from "./plane-type";
import { BoeingPlane } from "./boeing-plane";
import { AirbusPlane } from "./airbus-plane";

export class PlaneFactory {
    public static getPlaneInstance(planeType: PlaneType): IPlane {
        switch (planeType) {
            case PlaneType.AirBus:
                return new AirbusPlane();
                break;
            case PlaneType.Boeing:
                return new BoeingPlane();
                break;
            default:
                break;
        }
    }
    static getInstance<T>(context: Object, name: string, ...args: any[]): T {
        console.log(context);
        const instance = Object.create(context[name].prototype);
        instance.constructor.apply(instance, args);
        return <T>instance;
    }
}
