import { Component, OnDestroy, OnInit } from '@angular/core';
import { RatingsComponent } from "../../../../shared/components/ratings/ratings.component";
import { NgClass, NgFor } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [RatingsComponent, NgClass, NgFor],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit, OnDestroy {
  reviews = [
    {
      name: 'Farah Mahfouz',
      text: 'Amazing! They are friendly and welcoming. Had my first laser session today. Would definitely recommend this clinic. Heba is really professional and friendly. She was fast too ... Thanks Heba.',
      rating: 5,
    },
    {
      name: 'Sara Ahmed',
      text: 'Very professional staff and great results.',
      rating: 4,
    },
    {
      name: 'Mona Ali',
      text: 'Clean clinic and smooth experience.',
      rating: 5,
    },
    {
      name: 'Nour Hassan',
      text: 'Loved the service, highly recommended!',
      rating: 5,
    },
    {
      name: 'Aya Mostafa',
      text: 'Friendly team and excellent care.',
      rating: 4,
    },
  ];

  activeIndex = 0;
  autoSlideSub!: Subscription;

  ngOnInit() {
    this.startAutoSlide();
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
    this.activeIndex =
      (this.activeIndex + 1) % this.reviews.length;
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
