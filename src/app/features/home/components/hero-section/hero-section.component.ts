import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { LetterPipe } from '../../../../core/pipes/letter.pipe';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ButtonComponent, LetterPipe, AsyncPipe],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {

}
