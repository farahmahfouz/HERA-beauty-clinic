import { CurrencyPipe, DatePipe, NgClass, NgIf, TitleCasePipe } from '@angular/common';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { BookingService } from '../../../../core/services/booking.service';

export interface TimeSlot {
  start: string; 
  end: string; 
}

export interface User {
  name: string;
  phone: string;
}

export interface Service {
  name?: string;
  price?: number;
  serviceOptions?: string[];
}

export interface Booking {
  doctor: {
    name: string;
  };
  user: User;
  services: Service[];
  dateOfService: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  timeSlot: TimeSlot;
  totalPrice: number;
  createdAt?: string;
}

@Component({
  selector: 'app-user-bookings',
  standalone: true,
  imports: [DatePipe, NgClass, NgIf, CurrencyPipe, TitleCasePipe],
  templateUrl: './user-bookings.component.html',
  styleUrl: './user-bookings.component.css'
})
export class UserBookingsComponent implements OnInit {
  bookings: any[] = [];
  constructor(private bookingService: BookingService, private destroyRef: DestroyRef) { }

  ngOnInit() {
    this.getMyBookings();
  }

  getMyBookings() {
    const subscription = this.bookingService.getMyBookings().subscribe({
      next: (res) => {
        this.bookings = res;
      },
      error: (err) => {
        console.error('Error fetching bookings:', err);
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
