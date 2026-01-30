import { CurrencyPipe, DatePipe, NgClass, NgIf, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-bookings',
  standalone: true,
  imports: [DatePipe, NgClass, NgIf, CurrencyPipe, TitleCasePipe],
  templateUrl: './user-bookings.component.html',
  styleUrl: './user-bookings.component.css'
})
export class UserBookingsComponent {
  @Input() bookings: any[] = [];
}
