import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { ServicesService } from "../../core/services/services.service";
import { LaserHairRemovalComponent } from "./laser-hair-removal/laser-hair-removal.component";
import { FillerComponent } from "./filler/filler.component";
import { Component } from "@angular/core";
import { switchMap } from "rxjs";
import { NgIf } from "@angular/common";
import { SkinCareComponent } from "./skin-care/skin-care.component";
import { HairTreatmentComponent } from "./hair-treatment/hair-treatment.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [LaserHairRemovalComponent, FillerComponent, NgIf, SkinCareComponent, HairTreatmentComponent],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  type: 'laser' | 'filler' | 'classic-treatment' | 'oil-therapy' | 'default' = 'default';
  options: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private servicesService: ServicesService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const slug = params.get('slug')!;

          if (slug === 'laser-hair-removal') {
            this.type = 'laser';
          } else if (slug === 'fillers') {
            this.type = 'filler';
          } else if (slug === 'classic-treatment') {
            this.type = 'classic-treatment';
          } else if (slug === 'oil-therapy') {
            this.type = 'oil-therapy';
          } else {
            this.type = 'default';
          }

          return this.servicesService.loadSubServiceOptions(slug);
        })
      )
      .subscribe(options => {
        this.options = options;
      });
  }
}

export const resolveTitle: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
  const slug = activatedRoute.paramMap.get('slug')?.toUpperCase();
  if (!slug) {
    throw new Error('Route parameter "slug" is missing');
  }
  return slug;
}
