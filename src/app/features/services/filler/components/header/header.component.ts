import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../../shared/components/button/button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    scrollToPricing() {
    document.getElementById('pricing')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
