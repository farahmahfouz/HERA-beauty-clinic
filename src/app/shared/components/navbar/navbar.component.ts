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
  isUserMenuOpen = false;
  isLoggedIn = false;
  showLogoutConfirm = false;
  userInitial: string = '?';

  constructor(public auth: AuthService) { }

  navLinks = [
    { label: 'Home', route: '/', type: 'link' },
    { label: 'Services', route: '/services', type: 'services' },
    { label: 'About', route: '/about', type: 'link' },
    { label: 'Contact', route: '/contact', type: 'link' },
  ];

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.isLoggedIn = !!user;

      if (user && user.name) {
        this.userInitial = user.name.charAt(0).toUpperCase();
      } else {
        this.userInitial = '?';
      }
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

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  closeUserMenu() {
    this.isUserMenuOpen = false;
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

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('button') && !target.closest('.relative')) {
      this.isUserMenuOpen = false;
    }
  }

}
