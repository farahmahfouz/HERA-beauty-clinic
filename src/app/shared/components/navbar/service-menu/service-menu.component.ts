import { Component, DestroyRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicesService } from '../../../../core/services/services.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-service-menu',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './service-menu.component.html',
  styleUrl: './service-menu.component.css'
})
export class ServiceMenuComponent implements OnInit {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  // services: any[] = [];
  isLoading = true;
  error?: string;

  fallbackServices = [
    {
      id: 'ultra-skin-care',
      name: 'Ultra Skin Care',
      subServices: [
        { id: 'classic-treatment', name: 'Classic Treatment', slug: 'classic-treatment' }
      ]
    },
    {
      id: 'dermatology',
      name: 'Dermatology',
      subServices: [
        { id: 'fillers', name: 'Fillers', slug: 'fillers' }
      ]
    },
    {
      id: 'laser-treatment',
      name: 'Laser Treatment',
      subServices: [
        { id: 'laser-hair-removal', name: 'Laser Hair Removal', slug: 'laser-hair-removal' }
      ]
    },
    {
      id: 'hair-treatment',
      name: 'Hair Treatment',
      subServices: [
        { id: 'oil-therapy', name: 'Oil Therapy', slug: 'oil-therapy' }
      ]
    }
  ];

  services: any[] = this.fallbackServices; 

  constructor(private serviceService: ServicesService, private destroyRef: DestroyRef) { }
  
  ngOnInit() {
    const subscription = this.serviceService.loadServices().subscribe({
      next: (service) => {
        this.services = service;
        this.isLoading = false;
      },
      error: (err) => {
        this.services = this.fallbackServices;
        this.isLoading = false;
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onClose() {
    this.close.emit();
  }
}
