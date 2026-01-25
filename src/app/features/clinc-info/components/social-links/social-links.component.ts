import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.css'
})
export class SocialLinksComponent {
  @Input() facebook: string = '';
  @Input() instagram: string = '';
  @Input() tiktok: string = '';
  @Input() whatsapp: string = '';

  hasAnySocial(): boolean {
    return !!(this.facebook || this.instagram || this.tiktok || this.whatsapp);
  }
}
