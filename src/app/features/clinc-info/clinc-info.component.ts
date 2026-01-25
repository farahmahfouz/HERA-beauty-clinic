import { Component } from '@angular/core';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { LocationMapComponent } from './components/location-map/location-map.component';
import { WorkingHoursComponent } from './components/working-hours/working-hours.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { ClinicHeaderComponent } from './components/clinic-header/clinic-header.component';
import { ClinicInfo } from './clinic-info';

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
export class ClincInfoComponent {
  // Sample data - replace with actual data from your service/API
  clinicData: ClinicInfo = {
    clinicName: 'HERA WOMEN CLINIC',
    email: 'info@clinic.com',
    phone: '+20 123 456 7890',
    location: {
      coordinates: [31.2357, 30.0444], // Cairo coordinates example
      address: '123 شارع التحرير، القاهرة، مصر',
      googleMapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI3JzAwLjAiTiAzMcKwMjcnMDAuMCJF!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg'
    },
    workingHours: {
      open: '09:00',
      close: '17:00'
    },
    social: {
      facebook: 'https://facebook.com/clinic',
      instagram: 'https://instagram.com/clinic',
      tiktok: 'https://tiktok.com/@clinic',
      whatsapp: 'https://wa.me/201234567890'
    },
    logo: '/images/logo.png',
    coverImage: '/images/hero2.jpg',
    gallery: [
      '/images/products.jpg',
      '/images/product.webp'
    ]
  };
}
