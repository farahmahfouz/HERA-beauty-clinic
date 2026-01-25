import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clinic-header',
  standalone: true,
  imports: [],
  templateUrl: './clinic-header.component.html',
  styleUrl: './clinic-header.component.css'
})
export class ClinicHeaderComponent {
  @Input() clinicName: string = '';
  @Input() logo: string = '';
  @Input() coverImage: string = '';
}
