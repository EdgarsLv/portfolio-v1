import {
  Component,
  ElementRef,
  input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-section-headings',
  imports: [],
  templateUrl: './section-headings.component.html',
  styleUrl: './section-headings.component.css',
})
export class SectionHeadingsComponent {
  public headingText = input<string>('');

  @ViewChild('headingEl') headingEl!: ElementRef<HTMLElement>;

  letters: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['headingText']) {
      this.letters = this.headingText().split('');
    }
  }

  ngAfterViewInit(): void {
    const heading = this.headingEl.nativeElement;
    const spans = heading.querySelectorAll('span');

    gsap.from(spans, {
      scrollTrigger: {
        trigger: heading,
        start: 'top 65%',
        toggleActions: 'play none none reverse',
      },
      y: 40,
      opacity: 0,
      stagger: 0.05,
      duration: 1.2,
      ease: 'power4.out',
    });
  }
}
