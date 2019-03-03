export class Aadhar {
    public aadharCardNumber: string;
    private address: string;
    private dateOfBirth: string;
    private gender: string;
    constructor(aadhar: string, address: string, gender: string, dob: string) {
        this.aadharCardNumber = aadhar;
        this.address = address;
        this.dateOfBirth = dob;
        this.gender = gender;
    }
}