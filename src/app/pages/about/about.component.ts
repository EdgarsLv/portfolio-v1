import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';
import { LoaderService } from '../../services/loader.service';
import { ScrollDownComponent } from '../../components/scroll-down/scroll-down.component';

type Icon = {
  icon: string;
  name: string;
};

@Component({
  selector: 'app-about',
  imports: [ScrollDownComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {
  iconSize = 20;
  icons: Icon[] = icons;

  constructor(private loaderService: LoaderService) {}

  ngAfterViewInit(): void {}
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
