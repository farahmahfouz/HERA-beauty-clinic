import { NgFor, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SlideupDirective } from '../../directives/slideup.directive';

@Component({
  selector: 'app-section-container',
  standalone: true,
  imports: [NgFor, NgOptimizedImage, SlideupDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section-container.component.html',
  styleUrl: './section-container.component.css'
})
export class SectionContainerComponent {
  @Input() title: string = '';
  @Input() paragraphs: string[] = [];
  @Input() image: string = '';
}
