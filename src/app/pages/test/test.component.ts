import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  ngAfterViewInit(): void {
    const phrases = ['HELLO', 'WORLD', 'FROM', 'GSAP'];
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

    const panels = gsap.utils.toArray<HTMLElement>('.section');
    if (panels.length > 1) panels.pop(); // optional

    panels.forEach((panel) => {
      gsap.set(panel, {
        transformOrigin: 'center 75%',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'bottom bottom',
          pin: true,
          scrub: true,
          pinSpacing: false,
        },
      });

      tl.fromTo(
        panel,
        {
          y: 0,
          rotateX: 0,
          scale: 1,
          opacity: 1,
        },
        {
          y: 0,
          rotateX: 45,
          scale: 0.5,
          opacity: 0.5,
          ease: 'power1.out',
        }
      ).to(panel, {
        opacity: 0,
        duration: 0.1,
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
