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
  services: any[] = [];
  isLoading = true;
  error?: string;

  constructor(private serviceService: ServicesService, private destroyRef: DestroyRef) { }
  
  ngOnInit() {
    const subscription = this.serviceService.loadServices().subscribe({
      next: (service) => {
        this.services = service;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load services';
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
