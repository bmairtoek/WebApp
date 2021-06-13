import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent {
  @Output() public closeWindowEvent: EventEmitter<void> = new EventEmitter();
  public login: string = "";
  public password: string = "";

  public submitLogin(): void {
    console.log("login: " + this.login);
    console.log("password: " + this.password);
  }

  public closeWindow(): void {
    console.log("close");
    this.closeWindowEvent.emit();
  }
}
