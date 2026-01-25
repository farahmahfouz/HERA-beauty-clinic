import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent {
  benefits = [
  {
    title: 'Safe + Precise',
    description: 'Our clinics use medical grade Candela GentleLASE PRO, YAG and GMAX lasers, the world’s most effective lasers for hair removal. Our experienced SILK technicians are highly trained to perform laser hair removal treatments safely and comprehensively.',
    img: '/images/safe.webp'
  },
  {
    title: 'Proven Effective',
    description: 'Laser hair removal damages your hair follicles. The follicles are located just below the skin and are responsible for producing new strands of hair. When the follicles are destroyed, hair production is disabled.',
    img: '/images/proven.webp'
  },
  {
    title: 'Say Goodbye to Ingrowns',
    description: 'As laser hair removal destroys the follicle, it reduces ingrown hairs and helps prevent irritation. This is because laser hair removal goes straight to the source of the problem; the root or hair follicle.',
    img: '/images/ingrowns.webp'
  },
  {
    title: 'Cost Effective',
    description: 'You save money in the long run! Laser hair removal eliminates the need for endless razors, shaving cream and waxing appointments. Treatments become less frequent over time, making it financially smarter with longer lasting results.',
    img: '/images/cost.webp'
  },
  {
    title: 'Get Your Time Back',
    description: 'Waxing and shaving take up a lot of time each week. Laser hair removal gives you that time back with no hairy patches or spots—just silky smooth skin for days, months and years.',
    img: '/images/time.webp'
  }
];
}
