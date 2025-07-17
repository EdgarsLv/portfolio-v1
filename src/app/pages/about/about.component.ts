import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';
import { LoaderService } from '../../services/loader.service';
import { ScrollDownComponent } from '../../components/scroll-down/scroll-down.component';
import { TechIconComponent } from '../../components/tech-icon/tech-icon.component';
import { SectionHeadingsComponent } from '../../components/section-headings/section-headings.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';

type Icon = {
  icon: string;
  name: string;
};

@Component({
  selector: 'app-about',
  imports: [
    ScrollDownComponent,
    SectionTitleComponent,
    TechIconComponent,
    SectionHeadingsComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {
  iconSize = 40;

  iconsRow1: Icon[] = [];
  iconsRow2: Icon[] = [];

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    const shuffledIcons = this.shuffle(icons);
    this.iconsRow1 = this.shuffle(shuffledIcons);
    this.iconsRow2 = this.shuffle(shuffledIcons);
  }

  ngAfterViewInit(): void {
    const firstMessage = SplitText.create('.first-message', {
      type: 'lines',
    });

    gsap.to(firstMessage.lines, {
      color: 'var(--text-primary)',
      stagger: 0.2,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: '.about-me',
        start: 'top 65%',
        toggleActions: 'play none none reverse',
      },
    });

    const row1Track = document.querySelector('.row1') as HTMLElement;
    const row2Track = document.querySelector('.row2') as HTMLElement;

    const row1Width = row1Track.offsetWidth / 2;
    const row2Width = row2Track.offsetWidth / 2;

    // Row 1 - left to right
    gsap.fromTo(
      row1Track,
      { x: 0 },
      {
        x: -row1Width,
        ease: 'none',
        repeat: -1,
        duration: 70,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % row1Width),
        },
      }
    );

    // Row 2 - right to left
    gsap.fromTo(
      row2Track,
      { x: -row2Width },
      {
        x: 0,
        ease: 'none',
        repeat: -1,
        duration: 55,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % row2Width),
        },
      }
    );
  }

  private shuffle<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}

const icons = [
  { icon: 'angular', name: 'Angular' },
  { icon: 'react', name: 'React' },
  { icon: 'reactnative', name: 'React Native' },
  { icon: 'javascript', name: 'JavaScript' },
  { icon: 'typescript', name: 'TypeScript' },
  { icon: 'net', name: '.NET' },
  { icon: 'css', name: 'CSS3' },
  { icon: 'git', name: 'Git' },
  { icon: 'firebase', name: 'Firebase' },
  { icon: 'supabase', name: 'Supabase' },
  { icon: 'redux', name: 'Redux' },
  { icon: 'zustand', name: 'Zustand' },
  { icon: 'tailwind', name: 'Tailwind CSS' },
  { icon: 'mysql', name: 'MySQL' },
  { icon: 'postgresql', name: 'PostgreSQL' },
  { icon: 'inkscape', name: 'Inkscape' },
];
