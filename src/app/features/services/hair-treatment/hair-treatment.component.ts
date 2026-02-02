import { Component, Input } from '@angular/core';
import { BenefitsComponent } from '../../../shared/components/benefits/benefits.component';
import { ReviewComponent } from "../../../shared/components/review/review.component";
import { FaqsComponent } from '../../../shared/components/faqs/faqs.component';
import { HeaderComponent } from './components/header/header.component';
import { MiniNavbarComponent } from '../../../shared/components/mini-navbar/mini-navbar.component';
import { SectionContainerComponent } from '../../../shared/components/section-container/section-container.component';
import { PricingComponent } from '../../../shared/components/pricing/pricing.component';

@Component({
  selector: 'app-hair-treatment',
  standalone: true,
  imports: [BenefitsComponent, ReviewComponent, FaqsComponent, HeaderComponent, MiniNavbarComponent, SectionContainerComponent, PricingComponent],
  templateUrl: './hair-treatment.component.html',
  styleUrl: './hair-treatment.component.css'
})
export class HairTreatmentComponent {
  @Input() options: any[] = [];
  faqs = [
    {
      question: 'What is a hair treatment?',
      answer: `Hair treatments are professional procedures designed to improve the health of your hair and scalp.
They target concerns such as dryness, damage, frizz, hair loss and scalp issues, helping restore strength,
shine and manageability.`
    },
    {
      question: 'Who is suitable for hair treatments?',
      answer: `Hair treatments are suitable for all hair types and textures. Whether your hair is dry, damaged,
colour-treated, thinning or frizzy, a consultation will help determine the most suitable treatment
based on your hair condition and goals.`
    },
    {
      question: 'How do hair treatments work?',
      answer: `Hair treatments work by delivering active ingredients such as proteins, vitamins, oils and
hydrating agents deep into the hair shaft and scalp. These ingredients repair damage, strengthen
the hair structure and improve overall hair health.`
    },
    {
      question: 'Are hair treatments safe?',
      answer: `Yes. Our hair treatments use professionally approved products and techniques. All treatments
are performed by trained specialists to ensure safety, effectiveness and optimal results.`
    },
    {
      question: 'How many sessions will I need?',
      answer: `The number of sessions depends on your hair condition and desired results. Some treatments
show immediate improvement, while others require a series of sessions for long-term repair
and hair growth support.`
    },
    {
      question: 'How often should I get a hair treatment?',
      answer: `Treatment frequency varies depending on the type of treatment and hair condition. Your specialist
will recommend a personalised schedule during your consultation.`
    },
    {
      question: 'Will hair treatments help with hair loss?',
      answer: `Certain hair treatments can help reduce hair fall and stimulate healthier growth by improving
scalp health and strengthening hair follicles. Results may vary depending on the cause of hair loss.`
    },
    {
      question: 'Is there any downtime after a hair treatment?',
      answer: `Most hair treatments have little to no downtime. You can usually return to your daily routine
immediately, depending on the specific treatment performed.`
    },
    {
      question: 'Can I colour my hair after a treatment?',
      answer: `Some treatments require waiting before colouring your hair. Your specialist will advise you on
the appropriate timing to protect your hair and maintain treatment results.`
    },
    {
      question: 'How should I care for my hair after treatment?',
      answer: `Use recommended hair care products, avoid excessive heat styling and follow aftercare advice
provided by your specialist to prolong results and maintain healthy hair.`
    }
  ];

    navItems = [
    { label: 'about', sectionId: 'about' },
    { label: 'benefits', sectionId: 'benefits' },
    { label: 'how it works', sectionId: 'how-it-works' },
    { label: 'pricing', sectionId: 'pricing' },
    { label: 'review', sectionId: 'review' },
    { label: 'faqs', sectionId: 'faqs' },
  ];

  benefits = [
  {
    title: 'Stronger, Healthier Hair',
    description: 'Hair treatments strengthen the hair shaft, reduce breakage and improve overall hair resilience from root to tip.',
    img: '/images/safe.webp'
  },
  {
    title: 'Deep Nourishment',
    description: 'Professional formulas deliver essential nutrients, vitamins and hydration directly to the hair and scalp for long-lasting nourishment.',
    img: '/images/proven.webp'
  },
  {
    title: 'Reduced Hair Fall',
    description: 'Targeted scalp and hair treatments help minimise hair shedding by supporting healthier follicles and scalp balance.',
    img: '/images/ingrowns.webp'
  },
  {
    title: 'Improved Shine & Texture',
    description: 'Hair treatments smooth the hair cuticle, enhancing natural shine, softness and manageability.',
    img: '/images/cost.webp'
  },
  {
    title: 'Customised Solutions',
    description: 'Each treatment is tailored to your unique hair concerns, ensuring personalised care and visible results.',
    img: '/images/time.webp'
  }
];

}
