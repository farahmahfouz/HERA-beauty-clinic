import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, ButtonComponent, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  images = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.png',
    '/images/img5.jpg',
    '/images/img6.jpg',
  ];
  
  scrollToPricing() {
    document.getElementById('pricing')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

}
