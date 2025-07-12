import { Component, ElementRef, input, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-desktop-image',
  imports: [],
  templateUrl: './desktop-image.component.html',
  styleUrl: './desktop-image.component.css',
})
export class DesktopImageComponent {
  public altText = input<string>('');
  public srcImg = input.required({
    transform: (val) => `/assets/images/${val}`,
  });

  @ViewChild('imageEl', { static: true }) imageEl!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    gsap.to(this.imageEl.nativeElement, {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      scale: 1,
      ease: 'power2.out',
      duration: 1.2,
      scrollTrigger: {
        trigger: this.imageEl.nativeElement,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
    });
  }
}
