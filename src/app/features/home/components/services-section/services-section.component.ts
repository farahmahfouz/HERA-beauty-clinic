import { Component, DestroyRef, OnInit } from '@angular/core';
import { ServicesService } from '../../../../core/services/services.service';
import { RouterLink } from '@angular/router';
import { RatingsComponent } from "../../../../shared/components/ratings/ratings.component";
import { SlideupDirective } from '../../../../shared/directives/slideup.directive';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RouterLink, RatingsComponent, SlideupDirective],
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css']
})
export class ServicesSectionComponent implements OnInit {
  services: any[] = [];
  isLoading = true;
  error?: string;

  constructor(private serviceService: ServicesService, private destroyRef: DestroyRef) { }

  ngOnInit() {
    const subscription = this.serviceService.loadServices().subscribe({
      next: (services) => {
        this.services = services;
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
