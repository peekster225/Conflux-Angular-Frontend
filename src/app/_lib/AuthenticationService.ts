import { Injectable }    from '@angular/core';
import { Subject }       from 'rxjs';
import { APIClient }     from './APIClient';
import { RequestResult } from './RequestResult';

import { User } from './User';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    public constructor(private apiClient: APIClient<User>) {

    }

    public static getToken(): string {

        return localStorage.getItem('token');

    }

    public static isLoggedIn(): boolean {


        const token: string = localStorage.getItem('token');

        if (token) {
            return true;
        }

    }

    public isLoggedIn(): boolean {

        const token: string = localStorage.getItem('token');

        if (token) {
            return true;
        }

    }

    public login(username: string, password: string): any {

        localStorage.removeItem('token');

        let subject: Subject<RequestResult<any> | boolean> = new Subject();

        this.apiClient.post<any>(`/auth/login`, {

            username,
            password

        }).subscribe((result: any) => {

            if (!RequestResult.isError(result)) {

                localStorage.setItem('token', result.message);

            }

            subject.next(result);

        });

        return subject;

    }
    public register(username: string, password: string): any {

        localStorage.removeItem('token');

        let subject: Subject<RequestResult<any> | boolean> = new Subject();

        this.apiClient.post<any>(`/auth/register`, {

            username,
            password

        }).subscribe((result: any) => {

            if (!RequestResult.isError(result)) {

                localStorage.setItem('username', result.message);

            }

            subject.next(result);

        });

        return subject;

    }



    public logout() {

        console.log('AutenticationService.logout()');

        this.clear();

        location.href = '/login';

    }

    public clear(): void {

        localStorage.removeItem('token');

    }

}