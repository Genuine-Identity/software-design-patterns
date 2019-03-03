import { Aadhar } from './aadhar';
import { Pan } from './pan';
import { User } from './user';
import { Passport } from './passport';

export class Account {
    public aadhar: Aadhar;
    public pan: Pan;
    public user: User;
    public passport: Passport
    constructor(_aadhar: Aadhar, _pan: Pan, _user: User, _passport: Passport) {
        this.aadhar = _aadhar;
        this.pan = _pan;
        this.user = _user;
        this.passport = _passport;
    }
}