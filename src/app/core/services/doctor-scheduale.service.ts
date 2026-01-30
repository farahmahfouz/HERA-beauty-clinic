import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorSchedualeService {

  constructor(private httpClient: HttpClient) { }

  getAllDrsScheduals(){
    return this.httpClient.get<any>('doctor-schedule').pipe(
      map(res => {
        return res?.data?.schedules
      })
    )
  }
}
