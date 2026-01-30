import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Review } from '../../features/home/components/reviews/reviews';
import { environment } from '../utils/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private httpClient: HttpClient) { }

  getAllReviews(){
    return this.httpClient.get<any>(`review`).pipe(
      map(res => { 
        return res?.data?.reviews as Review[]
      })
    )
  }
}
