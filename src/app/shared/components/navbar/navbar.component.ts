import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ServiceMenuComponent } from "./service-menu/service-menu.component";
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { ConfirmModalComponent } from "../confirm-modal/confirm-modal.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ServiceMenuComponent, RouterModule, NgIf, ConfirmModalComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  @Output() openSignup = new EventEmitter<void>();
  @Output() openLogin = new EventEmitter<void>();
  isMenuOpen = false;
  isScrolled = false;
  isServicesOpen = false;
  isLoggedIn = false;
  showLogoutConfirm = false;

  constructor(public auth: AuthService) { }

  navLinks = [
    { label: 'Home', route: '/', type: 'link' },
    { label: 'Services', route: '/services', type: 'services' },
    { label: 'About', route: '/about', type: 'link' },
  ];

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }

  logout() {
    this.auth.logout().subscribe();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
    this.isServicesOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  openSignupModal() {
    this.openSignup.emit();
  }

  openLoginModal() {
    this.openLogin.emit();
  }

  toggleServices(event: Event) {
    event.preventDefault();
    this.isServicesOpen = !this.isServicesOpen;
  }

  openLogoutConfirm() {
    this.showLogoutConfirm = true;
  }

  confirmLogout() {
    this.auth.logout().subscribe();
    this.showLogoutConfirm = false;
  }

  cancelLogout() {
    this.showLogoutConfirm = false;
  }

}
