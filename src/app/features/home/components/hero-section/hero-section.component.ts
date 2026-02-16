import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { LetterPipe } from '../../../../core/pipes/letter.pipe';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ButtonComponent, LetterPipe, AsyncPipe, NgOptimizedImage],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}
