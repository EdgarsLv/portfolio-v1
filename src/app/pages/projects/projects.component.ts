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
    //   const targets = document.querySelectorAll('.text');
    //   gsap.set(targets, { xPercent: -50 });
    //   let dur = 0.5;
    //   let hold = 0.25;
    //   targets.forEach((obj, i) => {
    //     let tl = gsap.timeline({
    //       delay: dur * i + hold * i,
    //       repeat: -1,
    //       repeatDelay: (targets.length - 1) * (dur + hold) - dur,
    //       defaults: {
    //         ease: 'none',
    //         duration: dur,
    //       },
    //     });
    //     tl.from(obj, { yPercent: -100, opacity: 0 });
    //     tl.to(obj, { yPercent: 100, opacity: 0 }, '+=' + hold);
    //   });
    // }
  }
}
