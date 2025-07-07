import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-scroll-down',
  imports: [],
  templateUrl: './scroll-down.component.html',
  styleUrl: './scroll-down.component.css',
})
export class ScrollDownComponent {
  ngAfterViewInit(): void {
    gsap.to('.scroll-indicator', {
      opacity: 0,
      y: -20,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top+=10',
        toggleActions: 'play none none reverse',
      },
      duration: 0.5,
    });
  }
}
