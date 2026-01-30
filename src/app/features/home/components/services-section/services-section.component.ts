import { Component, DestroyRef, OnInit } from '@angular/core';
import { ServicesService } from '../../../../core/services/services.service';
import { RouterLink } from '@angular/router';
import { RatingsComponent } from "../../../../shared/components/ratings/ratings.component";

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RouterLink, RatingsComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css',
})
export class ServicesSectionComponent implements OnInit {
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
}

