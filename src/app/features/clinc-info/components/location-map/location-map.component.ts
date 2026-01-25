import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-location-map',
  standalone: true,
  imports: [],
  templateUrl: './location-map.component.html',
  styleUrl: './location-map.component.css'
})
export class LocationMapComponent {
  @Input() address: string = '';
  @Input() googleMapLink: string = '';
  @Input() coordinates: [number, number] = [0, 0]; // [longitude, latitude]

  constructor(private sanitizer: DomSanitizer) {}

  get mapEmbedUrl(): SafeResourceUrl | string {
    if (this.googleMapLink) {
      // If it's already an embed URL, sanitize and return it
      if (this.googleMapLink.includes('/embed')) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.googleMapLink);
      }
      // If it's a regular Google Maps link, use coordinates if available
      if (this.coordinates && this.coordinates.length === 2 && this.coordinates[0] !== 0 && this.coordinates[1] !== 0) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.generateEmbedFromCoordinates());
      }
      return '';
    }
    
    // Generate embed URL from coordinates
    if (this.coordinates && this.coordinates.length === 2 && this.coordinates[0] !== 0 && this.coordinates[1] !== 0) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.generateEmbedFromCoordinates());
    }
    
    return '';
  }

  private generateEmbedFromCoordinates(): string {
    // Generate embed URL using coordinates (latitude, longitude)
    const lat = this.coordinates[1];
    const lng = this.coordinates[0];
    // Use a simple embed format that works with Google Maps
    return `https://www.google.com/maps?q=${lat},${lng}&output=embed`;
  }

  openInGoogleMaps(): void {
    if (this.googleMapLink && !this.googleMapLink.includes('/embed')) {
      window.open(this.googleMapLink, '_blank');
    } else if (this.coordinates && this.coordinates.length === 2 && this.coordinates[0] !== 0 && this.coordinates[1] !== 0) {
      const lat = this.coordinates[1];
      const lng = this.coordinates[0];
      window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
    } else if (this.address) {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.address)}`, '_blank');
    }
  }
}
