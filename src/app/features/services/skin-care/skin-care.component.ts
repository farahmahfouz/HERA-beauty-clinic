import { Component, Input } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { MiniNavbarComponent } from "../../../shared/components/mini-navbar/mini-navbar.component";
import { FaqsComponent } from "../../../shared/components/faqs/faqs.component";
import { ReviewComponent } from '../../../shared/components/review/review.component';
import { PricingComponent } from '../../../shared/components/pricing/pricing.component';
import { IntroComponent } from "../skin-care/components/intro/intro.component";

@Component({
  selector: 'app-skin-care',
  standalone: true,
  imports: [HeaderComponent, MiniNavbarComponent, FaqsComponent, ReviewComponent, PricingComponent, IntroComponent],
  templateUrl: './skin-care.component.html',
  styleUrl: './skin-care.component.css'
})
export class SkinCareComponent {
  @Input() options: any[] = [];

  navItems = [
    { label: 'about', sectionId: 'about' },
    { label: 'benefits', sectionId: 'benefits' },
    { label: 'how it works', sectionId: 'how-it-works' },
    { label: 'pricing', sectionId: 'pricing' },
    { label: 'review', sectionId: 'review' },
    { label: 'faqs', sectionId: 'faqs' },
  ];

  faqs = [
    {
      question: 'Is a hydration & restoration treatment right for me?',
      answer:
        'Hydration & restoration treatments are ideal if you’re looking to improve skin texture, boost hydration levels, and restore a healthy, radiant appearance.'
    },
    {
      question: 'Do I need a consultation before the treatment?',
      answer:
        'Yes. We recommend booking a consultation with a SILK Aesthetic Nurse to assess your skin, discuss your concerns, and answer all your questions.'
    },
    {
      question: 'What can I expect after a consultation?',
      answer:
        'After your consultation, you’ll receive a personalized treatment plan tailored to your skin needs, including treatment details, expected results, and aftercare advice.'
    },
    {
      question: 'How much do hydration & restoration treatments cost?',
      answer:
        'The cost varies depending on the treatment type and your individual skin needs. Exact pricing will be discussed during your consultation.'
    }
  ];


}
