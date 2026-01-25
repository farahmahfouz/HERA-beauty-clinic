import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { SignupComponent } from './features/auth/signup/signup.component';
import { LoginComponent } from "./features/auth/login/login.component";
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SignupComponent, LoginComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showSignup = false;
  showLogin = false;

  onOpenSignup() {
    this.showSignup = true;
  }

  onCloseSignup() {
    this.showSignup = false;
  }
  onOpenLogin() {
    this.showLogin = true;
  }

  onCloseLogin() {
    this.showLogin = false;
  }
}
