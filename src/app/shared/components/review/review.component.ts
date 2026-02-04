import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { RatingsComponent } from "../ratings/ratings.component";
import { FormsModule } from '@angular/forms';
import { ReviewsService } from '../../../core/services/reviews.service';
import { ToastService } from '../../../core/services/toast.service';
import { SlideupDirective } from '../../directives/slideup.directive';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [ButtonComponent, RatingsComponent, FormsModule, SlideupDirective],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  @Input() serviceOptionId!: string;
  reviewText = '';
  rating = 0;
  isLoading = false;

  constructor(private reviewService: ReviewsService, private toast: ToastService) { }

  submitReview() {
    if (!this.reviewText || this.rating === 0) return;

    const payload = {
      review: this.reviewText,
      rating: this.rating,
      serviceOption: this.serviceOptionId
    };

    this.isLoading = true;
    this.reviewService.createReview(payload).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.toast.showSuccess('Review submitted successfully');
        this.reviewText = '';
        this.rating = 0;
      },
      error: (err) => {
        this.isLoading = false;
        this.toast.showError('Failed to submit review');
      }
    });
  }
}
