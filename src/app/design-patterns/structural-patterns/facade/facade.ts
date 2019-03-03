import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserHelper } from './user-helper';
import { User } from 'src/app/shared/models';
import { PanCardHelper } from './pan-card-helper';
import { PassportHelper } from './passport-helper';
import { Account } from 'src/app/shared/models/account';
import { AadharCardHelper } from './aadhar-card-helper';

@Injectable()
export class Facade {
    private user: User;
    private account: Account;
    constructor(private aadharCardHelper: AadharCardHelper,
        private panCardHelper: PanCardHelper,
        private passportHelper: PassportHelper,
        private userHelper: UserHelper,
        private http: HttpClient) {
    }
    getAccountDetails(id): Observable<any> {
        return this.userHelper.getById(id)
            .map((res: any) => res)
            .flatMap((user: any) => {
                if (!(user == null)) {
                    return Observable.forkJoin(
                        Observable.of(user),
                        this.aadharCardHelper.getById(user.aadharCardNumber).map((c: any) => c),
                        this.panCardHelper.getById(user.panCardNumber).map((c: any) => c),
                        this.passportHelper.getById(user.passportNumber).map((c: any) => c),
                    )
                        .map((data: any) => {
                            let user = data[0];
                            let aadhar = data[1];
                            let pan = data[2];
                            let passport = data[3];
                            this.account = new Account(aadhar, pan, user, passport);
                            return this.account;
                        });
                }
            });
    }
}