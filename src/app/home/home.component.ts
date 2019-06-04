import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'
import { RegisterService } from './register.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loginData: string;
  public registerData: string;
  constructor(private LoginService: LoginService) {}



  public login(): void {

  }

  public register(): void {
  }
  ngOnInit() {
  }

  
}