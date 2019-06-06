import { Injectable } from '@angular/core';
import { AuthenticationService } from '../_lib/AuthenticationService';

@Injectable()
export class RegisterService {
  constructor(private AuthenticationService: AuthenticationService) {}

  public register(username: string, password: string): void {
    this.AuthenticationService.register(username, password).subscribe(result => {
      console.log(result);
    });
}
}