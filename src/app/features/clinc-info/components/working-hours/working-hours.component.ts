import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-working-hours',
  standalone: true,
  imports: [],
  templateUrl: './working-hours.component.html',
  styleUrl: './working-hours.component.css'
})
export class WorkingHoursComponent {
  @Input() open: string = '';
  @Input() close: string = '';
}
