import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutComponent } from "./components/about/about.component";
import { BenefitsComponent } from "./components/benefits/benefits.component";
import { HowItWorksComponent } from "./components/how-it-works/how-it-works.component";
import { FaqsComponent } from './components/faqs/faqs.component';
import { PricingComponent } from "./components/pricing/pricing.component";
import { ReviewComponent } from "../../shared/components/review/review.component";

@Component({
  selector: 'app-laser-hair-removal',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, AboutComponent, BenefitsComponent, HowItWorksComponent, FaqsComponent, PricingComponent, ReviewComponent],
  templateUrl: './laser-hair-removal.component.html',
  styleUrl: './laser-hair-removal.component.css'
})
export class LaserHairRemovalComponent {

}
