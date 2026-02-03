import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.css'
})
export class RatingsComponent {
  @Input() value = 0;
  @Output() valueChange = new EventEmitter<number>();

  stars = [1, 2, 3, 4, 5];

  setRating(star: number) {
    this.value = star;
    this.valueChange.emit(star);
  }
}
