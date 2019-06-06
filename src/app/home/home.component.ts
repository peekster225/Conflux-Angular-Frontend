import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'
import { RegisterService } from './register.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private LoginService: LoginService,
              private RegisterService: RegisterService) {}

  loginForm= new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  registerForm= new FormGroup({
    Rusername: new FormControl(''),
    Rpassword: new FormControl(''),
  });

  public login(): void {
    this.LoginService.login(this.loginForm["value"]["username"], this.loginForm["value"]["password"]);
  }

  public register(): void {
    this.RegisterService.register(this.registerForm["value"]["Rusername"], this.registerForm["value"]["Rpassword"]);

    
  }
  ngOnInit() {
  }

  
}