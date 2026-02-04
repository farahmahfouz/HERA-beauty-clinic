import { Component, OnDestroy, OnInit } from '@angular/core';
import { RatingsComponent } from "../../../../shared/components/ratings/ratings.component";
import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { ReviewsService } from '../../../../core/services/reviews.service';
import { Review } from './reviews';
import { SlideupDirective } from '../../../../shared/directives/slideup.directive';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [RatingsComponent, NgClass, NgFor, NgOptimizedImage, SlideupDirective],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit, OnDestroy {
  constructor(private reviewsServices: ReviewsService) { }
  reviews?: Review[];
  isLoading = true;
  error?: string;
  activeIndex = 0;
  autoSlideSub!: Subscription;

  ngOnInit() {
    this.startAutoSlide();
    this.reviewsServices.getAllReviews().subscribe({
      next: (review) => {
        this.reviews = review;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading Reviews:', error);
        this.error = 'Error loading reviews';
        this.isLoading = false;
      }
    });
  }

  ngOnDestroy() {
    this.autoSlideSub?.unsubscribe();
  }

  startAutoSlide() {
    this.autoSlideSub = interval(5000).subscribe(() => {
      this.next();
    });
  }

  next() {
    if (!this.reviews || this.reviews.length === 0) {
      return;
    }
    this.activeIndex = (this.activeIndex + 1) % this.reviews.length;
  }

  goTo(index: number) {
    this.activeIndex = index;
    this.restartAutoSlide();
  }

  restartAutoSlide() {
    this.autoSlideSub?.unsubscribe();
    this.startAutoSlide();
  }
}