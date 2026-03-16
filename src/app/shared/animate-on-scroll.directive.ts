import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[animateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  /** CSS class(es) applied once the element is visible. Space-separated. */
  @Input('animateOnScroll') animationClass: string = 'anim-fade-up';
  /** Delay in milliseconds before the class is applied after visibility. */
  @Input() animDelay: number = 0;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Set the initial hidden state class
    this.renderer.addClass(this.el.nativeElement, 'anim-hidden');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              this.renderer.removeClass(this.el.nativeElement, 'anim-hidden');
              // Apply each animation class
              this.animationClass.split(' ').forEach((cls) => {
                if (cls) this.renderer.addClass(this.el.nativeElement, cls);
              });
            }, this.animDelay);
            this.observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.12 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
