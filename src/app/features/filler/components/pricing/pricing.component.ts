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

  fillerData = [
    {
      id: 'f1',
      name: 'Lip Filler',
      image: '/images/filler/lips.jpg',
      options: [
        {
          id: 'f1-1',
          optionName: 'Juvederm',
          price: 2500,          // سعر 1 ml
          type: 'ml',
          notes: 'Natural look – price per 1 ml',
          stock: 20,
        },
        {
          id: 'f1-2',
          optionName: 'Restylane',
          price: 2300,
          type: 'ml',
          notes: 'Soft texture – price per 1 ml',
          stock: 15,
        },
      ],
    },

    {
      id: 'f2',
      name: 'Cheek Filler',
      image: '/images/filler/cheeks.jpg',
      options: [
        {
          id: 'f2-1',
          optionName: 'Juvederm Voluma',
          price: 2700,
          type: 'ml',
          notes: 'High lifting capacity – price per 1 ml',
          stock: 10,
        },
      ],
    },

    {
      id: 'f3',
      name: 'Jawline Filler',
      image: '/images/filler/jawline.jpg',
      options: [
        {
          id: 'f3-1',
          optionName: 'Stylage XL',
          price: 2600,
          type: 'ml',
          notes: 'Defines jawline – price per 1 ml',
          stock: 12,
        },
      ],
    },

    {
      id: 'f4',
      name: 'Nasolabial Filler',
      image: '/images/filler/nasolabial.jpg',
      options: [
        {
          id: 'f4-1',
          optionName: 'Restylane Lyft',
          price: 2400,
          type: 'ml',
          notes: 'Smile lines correction – price per 1 ml',
          stock: 8,
        },
      ],
    },
  ];

}