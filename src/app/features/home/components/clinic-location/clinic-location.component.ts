import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocationMapComponent } from '../../../clinc-info/components/location-map/location-map.component';

@Component({
  selector: 'app-clinic-location',
  standalone: true,
  imports: [LocationMapComponent, RouterLink],
  templateUrl: './clinic-location.component.html',
  styleUrl: './clinic-location.component.css'
})
export class ClinicLocationComponent {
  @Input() address: string = '';
  @Input() googleMapLink: string = '';
  @Input() coordinates: [number, number] = [0, 0];
}
