import { UserHelper } from './user-helper';
import { PanCardHelper } from './pan-card-helper';
import { PassportHelper } from './passport-helper';
import { AadharCardHelper } from './aadhar-card-helper';

export class Facade {
    private userHelper: UserHelper
    private panCardHelper: PanCardHelper;
    private passportHelper: PassportHelper;
    private aadharCardHelper: AadharCardHelper;

    constructor() {
        this.aadharCardHelper = new AadharCardHelper();
        this.panCardHelper = new PanCardHelper();
        this.passportHelper = new PassportHelper();
    }

    public getUserDetails(id: number) {
        this.userHelper.getUserDetails(id);
    }
}