import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  createBooking(data: any){
    return this.httpClient.post<any>('booking', data).pipe(
      map(res => console.log(res))
    )
  }

  getMyBookings(){
    return this.httpClient.get<any>('booking/my-bookings').pipe(
      map(res => {
        console.log(res);
        return res.data.bookings;
      })
    )
  }
}
