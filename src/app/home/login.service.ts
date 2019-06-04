import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  public login(): string {
    return "Trying to login";
  }
}