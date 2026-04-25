import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private httpClient = inject(HttpClient);
  private optionsCache: { [slug: string]: Observable<any> } = {};

  private services$ = this.httpClient.get<any>('service').pipe(
    map(res => res.data.services),
    shareReplay({ bufferSize: 1, refCount: false }) 
  );

  loadServices() {
    return this.services$;
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
