import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-service-menu',
  standalone: true,
  imports: [],
  templateUrl: './service-menu.component.html',
  styleUrl: './service-menu.component.css'
})
export class ServiceMenuComponent {
   @Input() isOpen = false;
    @Output() close = new EventEmitter<void>();
   services = [
    {
      title: 'AESTHETIC DERMATOLOGY',
      items: [
        'Fillers',
        'Botox',
        'HIFU Face',
        'Peeling',
        'PRP',
        'Exosome Therapy',
      ],
    },
    {
      title: 'BODY CONTOURING',
      items: [
        'Mesotherapy Body',
        'HIFU Body',
        'Carboxy',
      ],
    },
    {
      title: 'LASER TREATMENTS',
      items: [
        'Laser Hair Removal',
        'Laser Skin Resurfacing',
        'Laser Vein Treatment',
      ],
    },
    {
      title: 'ULTRA SKIN CARE',
      items: [
        'ULTRA-Oil Controlling',
        'ULTRA-Hydrating',
        'ULTRA-Firming',
        'ULTRA-Lightening',
        'Classic Treatment',
      ],
    },
  ];
}
