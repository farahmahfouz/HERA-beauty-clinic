import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { RatingsComponent } from "../ratings/ratings.component";

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [ButtonComponent, RatingsComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

}
