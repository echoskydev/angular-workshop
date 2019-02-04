import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private address = environment.apiUrl;

    constructor(
        private http: HttpClient,
        private _router: Router
    ) { }

    requestGet(url: string) {
        return this.http
            .get(`${this.address}${url}`)
            .pipe(catchError(err => this.handleError(err)));
    }

    requestPost(url: string, body: any) {
        return this.http
            .post(`${this.address}${url}`, body)
            .pipe(catchError(err => this.handleError(err)));
    }

    requestDelete(url: string) {
        return this.http
            .delete(`${this.address}${url}`)
            .pipe(catchError(err => this.handleError(err)));
    }

    requestPut(url: string, body: any) {
        return this.http
            .put(`${this.address}${url}`, body)
            .pipe(catchError(err => this.handleError(err)));
    }

    private handleError(errResponse: HttpErrorResponse): Observable<any> {
        errResponse['Message'] = errResponse.message;
        if (errResponse.error && errResponse.error.message) {
            errResponse['Message'] = errResponse.error.message;
        }
        throw errResponse;
    }
}
