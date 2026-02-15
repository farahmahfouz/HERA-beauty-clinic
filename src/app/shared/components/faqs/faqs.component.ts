import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SlideupDirective } from '../../directives/slideup.directive';

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faqs',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SlideupDirective],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  @Input() faqs: Faq[] = [];
}
