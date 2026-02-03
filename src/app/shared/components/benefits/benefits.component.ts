import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Benefits {
  img: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent {
  @Input() title!: string;
  @Input() benefits!: Benefits[];
}
