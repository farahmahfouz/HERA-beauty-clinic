import { Component } from '@angular/core';
import { SlideupDirective } from "../../../../shared/directives/slideup.directive";

@Component({
  selector: 'app-diff',
  standalone: true,
  imports: [SlideupDirective],
  templateUrl: './diff.component.html',
  styleUrl: './diff.component.css'
})
export class DiffComponent {

}
