import { Injectable } from '@angular/core';
import { IMember } from '../interfaces/members.interface';
import { HttpService } from '../shareds/services/http.service';

@Injectable({
    providedIn: 'root'
})
export class MembersService {

    constructor(
        private _http: HttpService
    ) { }

    create(data: IMember) {
        return this._http.requestPost('/api/v1/members', data)
            .toPromise() as Promise<IMember>;
    }

    update(date: IMember) { }

    findOne(id: number) {

    }

    findAll() {
        // return this._http.requestGet('api/v1/members');
        return this._http.requestGet('/api/v1/members')
            .toPromise() as Promise<IMember>;
    }

    delete(id: number) { }

}
