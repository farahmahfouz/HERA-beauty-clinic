import { Component, Input, ViewChild } from '@angular/core';
import { BookingComponent } from '../../../../../shared/components/booking/booking.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [BookingComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  @ViewChild('bookingModal') bookingComponent!: BookingComponent;
  @Input() options: any[] = [];

  openBookingModal(option: any) {
    this.bookingComponent?.open(option);
  }
}
