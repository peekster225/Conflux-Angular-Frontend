import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data: string;
  constructor(private LoginService: LoginService) {
  }

  public login(): void {
    this.data = this.LoginService.login();
  }

  ngOnInit() {
  }

  
}