import { Directive, ElementRef, HostBinding, NgZone, OnInit } from '@angular/core';

@Directive({
  selector: '[appSlideup]',
  standalone: true
})
export class SlideupDirective implements OnInit {

  @HostBinding('class.slide-up-visible') get isVisible() {
    return this.visible;
  }

  private visible = false;

  constructor(
    private el: ElementRef,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.ngZone.run(() => {
            this.visible = true;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement);
  }
}
