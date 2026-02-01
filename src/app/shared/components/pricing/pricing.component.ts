import { Component, Input, ViewChild } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { NgClass, NgIf } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [BookingComponent, NgIf, NgClass, ButtonComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  @ViewChild('bookingModal') bookingComponent!: BookingComponent;
  @Input() options: any[] = [];
   selectedServices: any[] = [];

   toggleService(option: any) {
    const exists = this.selectedServices.find(
      s => s._id === option._id
    );

    if (exists) {
      this.selectedServices = this.selectedServices.filter(
        s => s._id !== option._id
      );
    } else {
      this.selectedServices.push(option);
    }
  }

  isSelected(option: any): boolean {
    return this.selectedServices.some(
      s => s._id === option._id
    );
  }


  openBookingModal() {
    this.bookingComponent?.open(this.selectedServices);
  }
}
