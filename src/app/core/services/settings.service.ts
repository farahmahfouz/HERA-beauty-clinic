import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ClinicInfo } from '../../features/clinc-info/clinic-info';
import { environment } from '../utils/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private httpClient: HttpClient) { }

  loadSettings() {
    return this.httpClient.get<any>(`settings`).pipe(
      map(res => res?.data?.settings[0] as ClinicInfo)
    );
  }
}
