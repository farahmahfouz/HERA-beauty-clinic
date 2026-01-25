import { Component } from '@angular/core';
import { SectionContainerComponent } from "../../../../shared/components/section-container/section-container.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionContainerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
