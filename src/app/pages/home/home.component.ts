import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('edgarText') edgarText!: ElementRef;
  @ViewChild('lastLetter') lastLetter!: ElementRef;
  @ViewChild('spanTop') spanTop!: ElementRef;
  @ViewChild('spanBottom') spanBottom!: ElementRef;

  ngAfterViewInit() {
    const split = new SplitText(this.edgarText.nativeElement, {
      type: 'chars',
    });
    const letters = split.chars;

    const tl = gsap.timeline();

    // Animate EDGAR letters from left
    tl.from(letters, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.1,
    });

    // Animate "S" from right
    tl.from(
      this.lastLetter.nativeElement,
      {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      },
      '-=0.5'
    ); // slight overlap

    // Step 3: Animate Portfolio by (drop from top)
    tl.from(
      this.spanTop.nativeElement,
      {
        y: -60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '<'
    ); // '<' = same time as next one

    // Step 4: Animate PUCENS (rise from bottom)
    tl.from(
      this.spanBottom.nativeElement,
      {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '<'
    ); // also same time
  }
}
