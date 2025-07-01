import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('spanMiddle') spanMiddle!: ElementRef;
  @ViewChild('lastLetter') lastLetter!: ElementRef;
  @ViewChild('spanTop') spanTop!: ElementRef;
  @ViewChild('spanBottom') spanBottom!: ElementRef;

  ngAfterViewInit() {
    const tl = gsap.timeline();

    // Step 1: Animate EDGARS
    tl.from([this.spanMiddle.nativeElement, this.lastLetter.nativeElement], {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });

    // Step 2: Animate spanTop and spanBottom simultaneously
    tl.from(
      this.spanTop.nativeElement,
      {
        // y: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.2'
    ); // slight overlap

    tl.from(
      this.spanBottom.nativeElement,
      {
        // y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.2'
    ); // '<' means start at same time as previous
  }
}
