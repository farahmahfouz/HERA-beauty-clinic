import { Component } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { LogoComponent } from './components/logo/logo.component';
import { LaserMachineComponent } from './components/laser-machine/laser-machine.component';
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { FillerComponent } from './components/filler/filler.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, ServicesSectionComponent, LogoComponent, LaserMachineComponent, ReviewsComponent, FillerComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
