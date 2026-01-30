import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { SignupComponent } from './features/auth/signup/signup.component';
import { LoginComponent } from "./features/auth/login/login.component";
import { FooterComponent } from './shared/components/footer/footer.component';
import { AuthService } from './core/services/auth.service';
import { ToastComponent } from "./shared/components/toast/toast.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SignupComponent, LoginComponent, FooterComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  showSignup = false;
  showLogin = false;

  constructor(private authService: AuthService){}

  ngOnInit() {
    this.authService.getMe().subscribe({
      next: () => {
        // User is authenticated
      },
      error: () => {
        this.authService.user$.next(null);
      }
    });
  }

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
