import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Pan } from 'src/app/shared/models/pan';

@Injectable()
export class PanCardHelper {
    private pan: Pan;
    private panList: Pan[];

    constructor(private http: HttpClient) {
        console.log("PanCardHelper");
    }
    public getAll(): Observable<Pan[]> {
        return this.http.get<Pan[]>("./assets/data/pan.json")
    }
    public getById(id: string): Observable<Pan> {
        return this.getAll()
            .map
            (
                (panList: Pan[]) => {
                    let matchedPan = panList.filter(pan => { return pan.panCardNumber == id; });
                    this.pan = matchedPan.length ? matchedPan[0] : null;
                    return this.pan;
                },
            );
    }
}