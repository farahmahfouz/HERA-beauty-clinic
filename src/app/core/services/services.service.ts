import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private optionsCache: { [slug: string]: Observable<any> } = {};

  constructor(private httpClient: HttpClient) { }

  loadServices() {
    return this.httpClient.get<any>(`service`).pipe(
      map(res => {
        return res.data.services;
      }),
      shareReplay({ bufferSize: 1, refCount: true })
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
    if (!this.optionsCache[slug]) {
      this.optionsCache[slug] = this.httpClient.get<any>(`sub-service/${slug}/services`).pipe(
        map(res => res.data.options),
        shareReplay({ bufferSize: 1, refCount: true })
      );
    }
    return this.optionsCache[slug];
  }
}
