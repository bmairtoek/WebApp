import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent implements OnInit {

  public login: string = "";
  public password: string = "";
  constructor() { }

  ngOnInit() {
  }

  submitLogin(): void {
    console.log("login: " + this.login);
    console.log("password: " + this.password);
  }
}
