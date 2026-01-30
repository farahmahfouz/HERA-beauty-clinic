import { Component, DestroyRef, OnInit } from '@angular/core';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserInfoComponent } from "./components/user-info/user-info.component";
import { UserBookingsComponent } from "./components/user-bookings/user-bookings.component";
import { ChangePasswordComponent } from './components/change-password/change-password.component';

import { AuthService } from './../../core/services/auth.service';
import { BookingService } from '../../core/services/booking.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ChangePasswordComponent, SidebarComponent, UserInfoComponent, UserBookingsComponent, NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private bookingService: BookingService, private destroyRef: DestroyRef) { }
  user: any;
  bookings: any[] = [];
  activeTab: string = 'profile';

  ngOnInit() {
    this.getMe();
    this.getMyBookings();
  }

  getMe() {
    this.authService.getMe().subscribe({
      next: (res) => {
        this.user = res.data.user;
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      }
    });
  }

  getMyBookings() {
    this.bookingService.getMyBookings().subscribe({
      next: (res) => {
        this.bookings = res;
      },
      error: (err) => {
        console.error('Error fetching bookings:', err);
      }
    });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
