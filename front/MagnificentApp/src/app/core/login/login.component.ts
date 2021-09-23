import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public displayLoginModal: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public OpenLoginPopup(): void {
    this.displayLoginModal = !this.displayLoginModal;
  }

  public closeWindow(): void {
    this.displayLoginModal = false;
  }
}
