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

  ngAfterViewInit(): void {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // Set initial positions
    gsap.set([this.braceLeft.nativeElement, this.braceRight.nativeElement], {
      opacity: 0,
      x: (i: number) => (i === 0 ? -200 : 200),
    });

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

      // Braces fly in
      .to(
        this.braceLeft.nativeElement,
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
        },
        '+=0.3'
      )
      .to(
        this.braceRight.nativeElement,
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
        },
        '<'
      )

      // Background fades out
      .to(
        this.loader.nativeElement,
        {
          opacity: 0,
          pointerEvents: 'none',
          duration: 1,
          onComplete: () => {
            // Optional: remove loader from DOM or set a flag
          },
        },
        '+=0.5'
      );
  }
}
