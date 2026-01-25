import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-filler',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './filler.component.html',
  styleUrl: './filler.component.css'
})
export class FillerComponent {

}
