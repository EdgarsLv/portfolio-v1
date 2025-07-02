import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';
import { LoaderService } from '../../services/loader.service';

type Icon = {
  icon: string;
  name: string;
};

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {
  iconSize = 20;
  icons: Icon[] = icons;

  @ViewChild('aboutme') aboutme!: ElementRef;
  @ViewChild('aboutText') aboutText!: ElementRef;
  @ViewChild('experience') experience!: ElementRef;
  @ViewChildren('iconEl') iconEls!: QueryList<ElementRef>;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loaderService.loaderDone$.subscribe(() => {
      this.myAnimation();
    });
  }

  ngAfterViewInit(): void {
    this.myAnimation();
    // const aboutMeSplit = new SplitText(this.aboutme.nativeElement, {
    //   type: 'chars',
    // });
    // const experienceSplit = new SplitText(this.experience.nativeElement, {
    //   type: 'chars',
    // });
    // const aboutTextSplit = new SplitText(this.aboutText.nativeElement, {
    //   type: 'lines',
    //   mask: 'lines',
    // });
    // const icons = this.iconEls.toArray().map((el) => el.nativeElement);
    // const tl = gsap.timeline();
    // tl.from(aboutMeSplit.chars, {
    //   x: -50,
    //   opacity: 0,
    //   duration: 1,
    //   ease: 'power4.out',
    //   stagger: 0.1,
    // });
    // tl.from(
    //   aboutTextSplit.lines,
    //   {
    //     rotationX: -10,
    //     transformOrigin: '50% 50% -160px',
    //     opacity: 0,
    //     duration: 0.8,
    //     ease: 'power3',
    //     stagger: 0.25,
    //   },
    //   '-=0.4'
    // );
    // tl.from(
    //   experienceSplit.chars,
    //   {
    //     x: -50,
    //     opacity: 0,
    //     duration: 1,
    //     ease: 'power4.out',
    //     stagger: 0.07,
    //   },
    //   '-=0.5'
    // ); // starts slightly before previous ends
    // tl.from(
    //   icons,
    //   {
    //     y: 30,
    //     opacity: 0,
    //     scale: 0.8,
    //     duration: 0.6,
    //     ease: 'power3.out',
    //     stagger: 0.05, // animate one by one
    //   },
    //   '-=0.5'
    // );
  }

  private myAnimation(): void {
    const aboutMeSplit = new SplitText(this.aboutme.nativeElement, {
      type: 'chars',
    });
    const experienceSplit = new SplitText(this.experience.nativeElement, {
      type: 'chars',
    });
    const aboutTextSplit = new SplitText(this.aboutText.nativeElement, {
      type: 'lines',
      mask: 'lines',
    });

    const icons = this.iconEls.toArray().map((el) => el.nativeElement);

    const tl = gsap.timeline();

    tl.from(aboutMeSplit.chars, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.1,
    });

    tl.from(
      aboutTextSplit.lines,
      {
        rotationX: -10,
        transformOrigin: '50% 50% -160px',
        opacity: 0,
        duration: 0.8,
        ease: 'power3',
        stagger: 0.25,
      },
      '-=0.4'
    );

    tl.from(
      experienceSplit.chars,
      {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.07,
      },
      '-=0.5'
    ); // starts slightly before previous ends

    tl.from(
      icons,
      {
        y: 30,
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.05, // animate one by one
      },
      '-=0.5'
    );
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
