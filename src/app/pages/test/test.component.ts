import { Component } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  ngAfterViewInit(): void {
    const phrases = ['WELCOME', 'WELCOME', 'FROM', 'GSAP'];
    const scrambleElement = document.querySelector('.scramble');
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    phrases.forEach((phrase) => {
      timeline.to(scrambleElement, {
        duration: 2,
        scrambleText: {
          text: phrase,
          chars: 'upperCase', // could also use "upperCase", "symbols", or custom
          revealDelay: 0.3,
          speed: 0.3,
        },
        ease: 'power1.inOut',
        delay: 1.5, // wait before changing to next
      });
    });

    // ScrollTrigger.create({
    //   trigger: '.banner',
    //   start: 'top center',
    //   markers: true,
    //   onEnter: () => {
    //     (document.querySelector('.banner') as HTMLElement)?.style.setProperty(
    //       '--mask-url',
    //       `url('/assets/images/reveal.gif?${timestamp}')`
    //     );
    //   },
    //   onLeaveBack: () => {
    //     (document.querySelector('.banner') as HTMLElement)?.style.setProperty(
    //       '--mask-url',
    //       `url('/assets/images/cover.gif?${timestamp}')`
    //     );
    //   },
    // });
  }
}
