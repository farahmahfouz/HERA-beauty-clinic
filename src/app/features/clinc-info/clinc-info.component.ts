import { Component, DestroyRef, OnInit } from '@angular/core';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { LocationMapComponent } from './components/location-map/location-map.component';
import { WorkingHoursComponent } from './components/working-hours/working-hours.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { ClinicHeaderComponent } from './components/clinic-header/clinic-header.component';
import { ClinicInfo } from './clinic-info';
import { SettingsService } from '../../core/services/settings.service';

@Component({
  selector: 'app-clinc-info',
  standalone: true,
  imports: [
    ContactInfoComponent,
    LocationMapComponent,
    WorkingHoursComponent,
    SocialLinksComponent,
    ClinicHeaderComponent
  ],
  templateUrl: './clinc-info.component.html',
  styleUrl: './clinc-info.component.css'
})
export class ClincInfoComponent implements OnInit {
  clinicData?: ClinicInfo;
  isLoading = true;
  error?: string;

  constructor(private settingsService: SettingsService, private destroyRef: DestroyRef) { }

  ngOnInit() {
    const subscription = this.settingsService.loadSettings().subscribe({
      next: (data) => {
        this.clinicData = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading settings:', error);
        this.error = 'Error loading settings';
        this.isLoading = false;
      }
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
