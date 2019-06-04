import { HttpClient }                         from '@angular/common/http';
import { Injectable }                         from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class APIClient<T> {

    private config$: ReplaySubject<any> = new ReplaySubject(1);

    public constructor(private httpClient: HttpClient) {

        httpClient.get('/assets/config.json').subscribe(config => {

            console.log(config);

            this.config$.next(config);

        });
    }


    public get<T>(url: string): Observable<T> {

        let subject: Subject<T> = new Subject();

        this.config$.subscribe(config => {

            return this.httpClient.get<T>(`${ config.API_BASE }${ url }`).subscribe(r => subject.next(r));

        });

        return subject;

    }


    public post<T>(url: string, body?: any): Observable<T> {

        let subject: Subject<T> = new Subject();

        this.config$.subscribe(config => {

            try {

                return this.httpClient.post<T>(`${ config.API_BASE }${ url }`, body).subscribe(r => subject.next(r));

            } catch (e) {

                console.log(e);

            }

        });

        return subject;

    }

    public put<T>(url: string, body?: any): Observable<T> {

        let subject: Subject<T> = new Subject();

        this.config$.subscribe(config => {

            return this.httpClient.put<T>(`${ config.API_BASE }${ url }`, body).subscribe(r => subject.next(r));

        });

        return subject;

    }

    public delete<T>(url: string): Observable<T> {

        let subject: Subject<T> = new Subject();

        this.config$.subscribe(config => {

            this.httpClient.delete<T>(`${ config.API_BASE }${ url }`).subscribe(r => subject.next(r));

        });

        return subject;

    }

}