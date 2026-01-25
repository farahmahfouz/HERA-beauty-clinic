import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  host: {
    '[class]': 'buttonClasses'
  }
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'tertiary' | 'fourthy' = 'primary';

  get buttonClasses(): string {
    const base =
      'cursor-pointer transition font-semibold mt-6 text-center rounded-full';

    const variants = {
      primary:
        'px-4 py-2 bg-dark w-full text-white hover:bg-gray-800',

      secondary:
        'px-4 py-2 bg-dark text-white',

      tertiary:
        'px-4 py-2 text-sm border border-dark hover:bg-gray-100',
      
      fourthy:
        'px-6 py-3 bg-orange-500/70 text-dark hover:bg-orange-600',
    };

    return `${base} ${variants[this.variant]}`;
  }
}
