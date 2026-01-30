import { Component, Input } from '@angular/core';

export interface NavItem {
  label: string;
  sectionId: string;
}

@Component({
  selector: 'app-mini-navbar',
  standalone: true,
  imports: [],
  templateUrl: './mini-navbar.component.html',
  styleUrl: './mini-navbar.component.css'
})
export class MiniNavbarComponent {
  @Input() items: NavItem[] = [];

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    document.getElementById(sectionId)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
