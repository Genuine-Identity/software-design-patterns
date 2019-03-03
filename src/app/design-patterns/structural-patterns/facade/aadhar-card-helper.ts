import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Aadhar } from 'src/app/shared/models/aadhar';

@Injectable()
export class AadharCardHelper {
    private aadhar: Aadhar;
    private aadharList: Aadhar[];
    constructor(private http: HttpClient) {
    }
    public getAll(): Observable<Aadhar[]> {
        return this.http.get<Aadhar[]>("./assets/data/aadhar.json")
    }
    public getById(id: string): Observable<Aadhar> {
        return this.getAll()
            .map
            (
                (aadharList: Aadhar[]) => {
                    let matchedAadhar = aadharList.filter(aadhar => { return aadhar.aadharCardNumber == id; });
                    this.aadhar = matchedAadhar.length ? matchedAadhar[0] : null;
                    return this.aadhar;
                },
            );
    }
}