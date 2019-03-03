export class Pan {
    panCardNumber: string;
    isItReturned: string;
    documentID: string;
    constructor(_panCardNumber: string, _isItReturned: string, _documentID: string) {
        this.panCardNumber = _panCardNumber;
        this.isItReturned = _isItReturned;
        this.documentID = _documentID;

    }
}