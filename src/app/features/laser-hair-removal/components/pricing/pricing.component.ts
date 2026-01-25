import { Component, ViewChild } from '@angular/core';
import { BookingComponent } from '../../../../shared/components/booking/booking.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [BookingComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  @ViewChild('bookingModal') bookingComponent!: BookingComponent;

  openBookingModal() {
    this.bookingComponent?.open();
  }


  laserServiceOptions = [
    {
      optionName: "Brazilian (ex rear) + Underarms",
      price: 158,
      type: "session",
      notes:
        "Targets the hair 2cm from the bikini line, on the pubic bone and underneath (Excludes the rear), plus underarms"
    },
    {
      optionName: "Half Legs, Brazilian (ex rear) + Underarms",
      price: 398,
      type: "session",
      notes:
        "Targets the hair on half legs, Brazilian (excludes the rear) and underarms."
    },
    {
      optionName: "Brazilian (inc rear) + Underarms",
      price: 188,
      type: "session",
      notes:
        "Targets the hair 2cm from the bikini line, on the pubic bone and underneath (includes the rear), plus underarms"
    },
    {
      optionName: "Chin + Lip",
      price: 118,
      type: "session",
      notes:
        "Treat lip and chin hairs with medical grade laser technology."
    },
    {
      optionName: "Face - Full",
      price: 178,
      type: "session",
      notes:
        "Targets the hair on the lip, chin, cheeks, sides, nose, forehead and mid-brow."
    },
    {
      optionName: "Chest + Stomach",
      price: 398,
      type: "session",
      notes:
        "Treat chest and stomach with medical grade laser technology."
    },
    {
      optionName: "Full Legs, Brazilian (ex rear) + Underarms",
      price: 478,
      type: "session",
      notes:
        "Targets the hair on full legs, Brazilian (excludes the rear) and underarms. Includes feet and toes."
    },
    {
      optionName: "Full Legs, Brazilian (inc rear) + Underarms",
      price: 508,
      type: "session",
      notes:
        "Targets the hair on full legs, Brazilian (includes the rear), and underarms. Includes feet and toes."
    },
    {
      optionName: "Half Legs, Brazilian (inc rear) + Underarms",
      price: 418,
      type: "session",
      notes:
        "Targets the hair on half legs, Brazilian (including the rear) and underarms."
    },
    {
      optionName: "Full Back + Shoulders",
      price: 498,
      type: "session",
      notes:
        "Treat full back and shoulders with medical grade laser technology."
    }
  ];

}
