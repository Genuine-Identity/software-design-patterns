import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Passport } from 'src/app/shared/models/passport';

@Injectable()
export class PassportHelper {
    private passport: Passport;
    private passports: Passport[];
    constructor(private http: HttpClient) {
        console.log("PassportHelper");
    }
    public getAll(): Observable<Passport[]> {
        return this.http.get<Passport[]>("./assets/data/passport.json")
    }
    public getById(id: string): Observable<Passport> {
        return this.getAll()
            .map
            (
                (passports: Passport[]) => {
                    let matchedPassport = passports.filter(passport => { return passport.passportNumber == id; });
                    this.passport = matchedPassport.length ? matchedPassport[0] : null;
                    return this.passport;
                },
            );
    }
}