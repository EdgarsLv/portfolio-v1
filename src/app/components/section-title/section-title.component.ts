import { Component, ElementRef, input, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.css',
})
export class SectionTitleComponent {
  public title = input<string>('');
  public lastChar = input<string>('');
  public topText = input<string>('');
  public bottomText = input<string>('');

  @ViewChild('titleRef', { static: true }) titleElement!: ElementRef;
  @ViewChild('topRef', { static: true }) topElement!: ElementRef;
  @ViewChild('bottomRef', { static: true }) bottomElement!: ElementRef;

  ngAfterViewInit(): void {
    const splitTop = SplitText.create(this.topElement.nativeElement, {
      type: 'chars',
    });
    const splitTitle = SplitText.create(this.titleElement.nativeElement, {
      type: 'chars',
    });
    const splitBottom = SplitText.create(this.bottomElement.nativeElement, {
      type: 'chars',
    });

    gsap.from(splitTop.chars, {
      opacity: 0,
      scale: 0.5,
      stagger: 0.05,
      ease: 'power2.out',
      duration: 1,
    });

    gsap.from(splitTitle.chars, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      ease: 'power2.out',
      duration: 1,
      delay: 0.3,
    });

    gsap.from(splitBottom.chars, {
      opacity: 0,
      scale: 0.5,
      stagger: 0.05,
      ease: 'power2.out',
      duration: 1,
      delay: 0.5,
    });
  }
}
