import { Directive, ElementRef, OnInit, OnDestroy, input } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollReveal implements OnInit, OnDestroy {
  readonly animation = input<'fade-up' | 'fade-left' | 'fade-right' | 'fade-in'>('fade-up', { alias: 'appScrollReveal' });
  readonly delay = input<number>(0);

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const element = this.el.nativeElement;
    element.style.opacity = '0';
    element.style.transition = `opacity 0.6s ease-out ${this.delay()}ms, transform 0.6s ease-out ${this.delay()}ms`;

    switch (this.animation()) {
      case 'fade-up':
        element.style.transform = 'translateY(30px)';
        break;
      case 'fade-left':
        element.style.transform = 'translateX(30px)';
        break;
      case 'fade-right':
        element.style.transform = 'translateX(-30px)';
        break;
      case 'fade-in':
        break;
    }

    if (typeof IntersectionObserver !== 'undefined') {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              element.style.opacity = '1';
              element.style.transform = 'translate(0, 0)';
              this.observer?.unobserve(element);
            }
          });
        },
        { threshold: 0.1 }
      );
      this.observer.observe(element);
    } else {
      element.style.opacity = '1';
      element.style.transform = 'translate(0, 0)';
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
