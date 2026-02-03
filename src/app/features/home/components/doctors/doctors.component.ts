import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { RouterLink } from "@angular/router";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [ButtonComponent, RouterLink, NgOptimizedImage],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {

}
