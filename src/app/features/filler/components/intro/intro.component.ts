import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {

}
