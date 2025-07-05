import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  ngAfterViewInit(): void {
    const firstMessage = SplitText.create('.first-message', { type: 'words' });
    const secondMessage = SplitText.create('.second-message', {
      type: 'words',
    });
    const thirdMessage = SplitText.create('.third-message', {
      type: 'words',
    });
    const firstSubtitle = SplitText.create('h3', {
      type: 'chars',
    });

    gsap.to(firstSubtitle.chars, {
      color: 'var(--text-color)',
      ease: 'power1.in',
      stagger: 0.15,
    });

    gsap.to(firstMessage.words, {
      color: 'var(--text-main)',
      ease: 'power1.in',
      stagger: 0.2,
      // scrollTrigger: {
      //   trigger: '.content-1',
      //   start: '30% 30%',
      //   end: '80% 40%',
      //   scrub: true,
      //   markers: true,
      // },
    });

    gsap.to(secondMessage.words, {
      color: 'var(--text-main)',
      ease: 'power1.in',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.content-2',
        start: 'top center',
        end: 'bottom 80%',
        scrub: true,
        markers: true,
      },
    });

    gsap.to(thirdMessage.words, {
      color: 'var(--text-main)',
      ease: 'power1.in',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.content-3',
        start: 'top center',
        end: 'bottom 90%',
        scrub: true,
        markers: true,
      },
    });
  }
}
