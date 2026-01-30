import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  loadServices() {
    return this.httpClient.get<any>(`service`).pipe(
      map(res => {
        return res.data.services;
      })
    );
  }

  loadSubServices() {
    return this.httpClient.get<any>(`sub-service`).pipe(
      map(res => {
        return res.data.subServices;
      })
    );
  }

  loadSubServiceOptions(slug: string) {
    return this.httpClient.get<any>(`sub-service/${slug}/services`).pipe(
      map(res => {
        return res.data.options
      })
    );
  }

}
