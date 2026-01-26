import { Component, Input } from '@angular/core';
interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  @Input() faqs: Faq[] = [];
}
