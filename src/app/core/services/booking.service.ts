import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private httpClient = inject(HttpClient);

  private bookings$ = this.httpClient.get<any>('booking/my-bookings').pipe(
    map(res => res.data.bookings),
    shareReplay(1)
  );

  createBooking(data: any) {
    return this.httpClient.post<any>('booking', data).pipe(
      map(res => res.data.booking),
      tap(() => {
        this.bookings$ = this.httpClient.get<any>('booking/my-bookings').pipe(
          map(res => res.data.bookings),
          shareReplay(1)
        );
      })
    );
  }

  getMyBookings() {
    return this.bookings$;
  }
}