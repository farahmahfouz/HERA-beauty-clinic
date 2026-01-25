import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-container',
  standalone: true,
  imports: [NgFor],
  templateUrl: './section-container.component.html',
  styleUrl: './section-container.component.css'
})
export class SectionContainerComponent {
  @Input() title!: string;
  @Input() paragraphs!: string[];
  @Input() image!: string;
}
