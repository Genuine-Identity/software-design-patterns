export class Passport {
    public passportNumber: string;
    public dateOfExpiry: string;
    public documentID: string;
    constructor(_passportNumber: string, _dateOfExpiry: string, _documentID: string) {
        this.passportNumber = _passportNumber;
        this.dateOfExpiry = _dateOfExpiry;
        this.documentID = _documentID;
    }
}