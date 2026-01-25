import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent {
  @Input() clinicName: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';
}
