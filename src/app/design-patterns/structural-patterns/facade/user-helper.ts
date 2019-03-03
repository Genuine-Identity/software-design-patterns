import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs-compat/operator/map';
import { first } from 'rxjs/operators';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Injectable()
export class UserHelper {
    private user: User;
    private users: User[];

    constructor(private http: HttpClient) { }

    public getAll(): Observable<User[]> {
        return this.http.get<User[]>("./assets/data/user.json")
    }

    public getById(id: string): Observable<User> {
        return this.getAll()
            .map
            (
                (users: User[]) => {
                    console.log(id)
                    let matchedUser = users.filter(user => { return user.id == id; });
                    this.user = matchedUser.length ? matchedUser[0] : null;
                    console.log(matchedUser)
                    return this.user;
                },
            );
    }




}