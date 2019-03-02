import { AlertType } from './alert-type';

export class Alert {
    public alertType: AlertType;
    public alertIconMessage: string;
    public alertBoxMessage: string;
    constructor(alertType, alertIconMessage, alertBoxMessage) {
        this.alertType = alertType;
        this.alertIconMessage = alertIconMessage;
        this.alertBoxMessage = alertBoxMessage;
    }
}