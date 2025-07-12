import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollDownComponent } from '../../components/scroll-down/scroll-down.component';
import { SectionHeadingsComponent } from '../../components/section-headings/section-headings.component';

@Component({
  selector: 'app-projects',
  imports: [ScrollDownComponent, SectionHeadingsComponent],
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

    gsap.to(firstMessage.words, {
      color: 'var(--text-main)',
      ease: 'power1.in',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.content-1',
        start: 'top center',
        end: 'bottom 70%',
        scrub: true,
      },
    });

    gsap.to(secondMessage.words, {
      color: 'var(--text-main)',
      ease: 'power1.in',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.content-2',
        start: 'top center',
        end: 'bottom 70%',
        scrub: true,
      },
    });

    gsap.to(thirdMessage.words, {
      color: 'var(--text-main)',
      ease: 'power1.in',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.content-3',
        start: 'top center',
        end: 'bottom 75%',
        scrub: true,
      },
    });

    // document.querySelectorAll('.panel').forEach((panel) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: 'top top',
    //     pin: true,
    //     pinSpacing: false,
    //     scrub: true,
    //   });
    // });
  }
}
