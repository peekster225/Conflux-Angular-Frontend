import { Injectable } from '@angular/core';
import { AuthenticationService } from '../_lib/AuthenticationService';
@Injectable()
export class LoginService {
    constructor(private AuthenticationService: AuthenticationService) {}

    public token: string;
    public login(username: string, password: string): void {
        
        this.token = this.AuthenticationService.login(username, password);
    }
}