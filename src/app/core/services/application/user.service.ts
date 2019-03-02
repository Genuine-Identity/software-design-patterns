import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';
import 'rxjs/add/operator/mergeMap'
import { User } from '../../../shared/models/index';

@Injectable()
export class UserService {
    users: User[];
    constructor(private http: HttpClient) { }

     
    getById(id: number) {
        return this.http.get(`/users/` + id);
    }

     
}