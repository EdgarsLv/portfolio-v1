import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import CustomEase from 'gsap/CustomEase';
import { LoaderService } from '../../services/loader.service';

CustomEase.create('hop', '0.9, 0, 0.1, 1');

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.css',
})
export class PublicLayoutComponent implements OnInit, AfterViewInit, OnDestroy {
  socialIconSize = 24;

  currentTime = signal<string>('');
  private timer: any;

  @ViewChild('count') count!: ElementRef;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.updateTime();
    this.timer = setInterval(() => this.updateTime(), 1000);

    document.body.classList.add('dark-theme');
  }

  ngAfterViewInit(): void {
    const tl = gsap.timeline({ delay: 0.3, defaults: { ease: 'hop' } });
    const counts = document.querySelectorAll('.count');
    counts.forEach((count, index) => {
      const digits = count.querySelectorAll('.digit h1');
      tl.to(digits, { y: '0%', duration: 0.5, stagger: 0.075 }, index * 1);
      if (index < counts.length) {
        tl.to(
          digits,
          { y: '-100%', duration: 0.5, stagger: 0.075 },
          index * 1 + 1
        );
      }
    });
    tl.to('.spinner', { opacity: 0, duration: 0.3 });
    tl.to('.word h1', { y: '0%', opacity: 1, duration: 1 }, '<');
    tl.to('.divider', {
      scaleY: '100%',
      duration: 1,
      onComplete: () => {
        gsap.to('.divider', { opacity: 0, duration: 0.4, delay: 0.3 });
      },
    });
    tl.to('#word-1 h1', { y: '100%', opacity: 0, duration: 1, delay: 0.3 });
    tl.to('#word-2 h1', { y: '-100%', opacity: 0, duration: 1 }, '<');
    tl.to('.block', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 1,
      stagger: 0.1,
      delay: 0.75,
      onStart: () => {
        this.loaderService.finish();
      },
    });
    tl.to('.loader', {
      display: 'none',
    });
  }

  updateTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Europe/Riga',
      timeZoneName: undefined,
    });

    const offset = -now.getTimezoneOffset() / 60;
    const gmtOffset = `GMT${offset >= 0 ? '+' : ''}${offset}`;

    this.currentTime.set(`${timeStr} ${gmtOffset}`);
  }

  toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
  }

  shareNative() {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          text: 'Check this out!',
          url: window.location.href,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing', error));
    }
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
