import { Component, Input } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ReviewComponent } from "../../../shared/components/review/review.component";
import { IntroComponent } from "./components/intro/intro.component";
import { FaqsComponent } from "../../../shared/components/faqs/faqs.component";
import { SectionContainerComponent } from "../../../shared/components/section-container/section-container.component";
import { BenefitsComponent } from "../../../shared/components/benefits/benefits.component";
import { PricingComponent } from "../../../shared/components/pricing/pricing.component";
import { MiniNavbarComponent } from '../../../shared/components/mini-navbar/mini-navbar.component';


@Component({
  selector: 'app-filler',
  standalone: true,
  imports: [HeaderComponent, ReviewComponent, IntroComponent, FaqsComponent, SectionContainerComponent, BenefitsComponent, PricingComponent, MiniNavbarComponent],
  templateUrl: './filler.component.html',
  styleUrl: './filler.component.css'
})
export class FillerComponent {
  @Input() options: any[] = [];

  fillerFaqs = [
    {
      question: 'How do I know what treatments are right for me?',
      answer: `As we age, the decline in collagen levels affects not just the elasticity and suppleness of our skin but also results in a loss of volume and thinning of our lips.

With this reduction in collagen, our skin’s structural integrity weakens, leading to a gradual decrease in overall volume, causing our lips to lose their fullness over time.

If you would like to discuss your lip shape and definition concerns during a consultation, our Aesthetic Nurses can review your cosmetic goals and answer all your questions.`
    },
    {
      question: 'Are all treatments suitable for everyone?',
      answer: `Not all cosmetic treatments are suitable for everyone. Suitability depends on individual factors such as medical history, skin condition, lifestyle, and aesthetic goals.

A consultation with one of our qualified Aesthetic Nurses ensures a personalised treatment plan that is safe and appropriate for you.`
    },
    {
      question: 'What to expect after a consultation?',
      answer: `During your consultation, we will assess your facial anatomy, discuss your concerns and desired outcomes, and explain the most suitable treatment options.

You will receive professional advice, realistic expectations, and a tailored treatment plan designed specifically for you.`
    },
    {
      question: 'How much does this cost?',
      answer: `The cost of treatment varies depending on the area treated, the type of filler used, and your individual treatment plan.

All pricing details will be discussed transparently during your consultation, ensuring you have a clear understanding before proceeding.`
    }
  ];


  benefits = [
    {
      title: 'Your Goals',
      description: 'Understanding your goals is part of your SILK Cosmetic Aesthetic consultation.',
      img: '/images/safe.webp'
    },
    {
      title: 'Balance',
      description: 'Aesthetic consultations to achieve balance and symmetry.',
      img: '/images/proven.webp'
    },
    {
      title: 'Softer and smoother lips',
      description: 'Soften and decrease the appearance of fine lines and wrinkles around the lips. Create smooth, hydrated and soft lips.',
      img: '/images/ingrowns.webp'
    },
  ]

  navItems = [
    { label: 'about', sectionId: 'about' },
    { label: 'benefits', sectionId: 'benefits' },
    { label: 'how it works', sectionId: 'how-it-works' },
    { label: 'pricing', sectionId: 'pricing' },
    { label: 'review', sectionId: 'review' },
    { label: 'faqs', sectionId: 'faqs' },
  ];


}
