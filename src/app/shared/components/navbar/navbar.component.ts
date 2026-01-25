import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { ServiceMenuComponent } from "./service-menu/service-menu.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ServiceMenuComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() openSignup = new EventEmitter<void>();
  @Output() openLogin = new EventEmitter<void>();
  isMenuOpen = false;
  isScrolled = false;
  isServicesOpen = false;

  navLinks = [
  { label: 'Home', route: '/', type: 'link' },
  { label: 'Services', route: '/services', type: 'services' },
  { label: 'About', route: '/about', type: 'link' },
  { label: 'Laser Hair Removal', route: '/laser-hair-removal', type: 'link' },
  { label: 'Filler', route: '/filler', type: 'link' },
];


  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
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
}
