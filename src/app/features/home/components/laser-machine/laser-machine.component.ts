import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { SlideupDirective } from '../../../../shared/directives/slideup.directive';

@Component({
  selector: 'app-laser-machine',
  standalone: true,
  imports: [NgOptimizedImage, SlideupDirective],
  templateUrl: './laser-machine.component.html',
  styleUrl: './laser-machine.component.css'
})
export class LaserMachineComponent {}
