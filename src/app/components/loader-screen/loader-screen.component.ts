import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-loader-screen',
  imports: [],
  templateUrl: './loader-screen.component.html',
  styleUrl: './loader-screen.component.css',
})
export class LoaderScreenComponent implements AfterViewInit {
  @ViewChild('ep') ep!: ElementRef;
  @ViewChild('braceLeft') braceLeft!: ElementRef;
  @ViewChild('braceRight') braceRight!: ElementRef;
  @ViewChild('loader') loader!: ElementRef;
  @ViewChild('logoWrapper') logoWrapper!: ElementRef;

  ngAfterViewInit() {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // Set up initial positions
    gsap.set([this.braceLeft.nativeElement, this.braceRight.nativeElement], {
      opacity: 0,
      x: (i: number) => (i === 0 ? -200 : 200),
    });

    // Scramble EP
    tl.to(this.ep.nativeElement, {
      duration: 2,
      scrambleText: {
        text: 'EP',
        chars: 'upperCase',
        revealDelay: 0.3,
        speed: 0.3,
      },
      ease: 'power1.inOut',
    })

      // Braces slide in
      .to(
        this.braceLeft.nativeElement,
        { x: 0, opacity: 1, duration: 0.5 },
        '+=0.2'
      )
      .to(
        this.braceRight.nativeElement,
        { x: 0, opacity: 1, duration: 0.5 },
        '<'
      )

      // Move + scale logoWrapper to top-left
      .to(
        this.logoWrapper.nativeElement,
        {
          scale: 0.09,
          opacity: 0,
          x: -window.innerWidth / 2 + 51,
          y: -window.innerHeight / 2 + 31,
          duration: 1,
          ease: 'power3.inOut',
        },
        '+=0.4'
      )

      // Fade out loader background
      .to(
        this.loader.nativeElement,
        {
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.8,
        },
        '-=0.5'
      );
  }
}
