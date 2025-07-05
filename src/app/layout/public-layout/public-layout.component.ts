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
import { LoaderService } from '../../services/loader.service';

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
    // this.startLoader();
    // const tl = gsap.timeline({ delay: 0.3 });
    // gsap.to('.count', { opacity: 0, delay: 3.5, duration: 0.5 });
    // gsap.to('.spinner-container', { opacity: 0, delay: 3.5, duration: 0.5 });
    // tl.to('.pre-loader', {
    //   scaleX: window.innerWidth < 960 ? 0.9 : 0,
    //   scaleY: window.innerWidth < 960 ? 0.25 : 0,
    //   ease: 'power1.inOut',
    //   duration: 1.5,
    //   delay: 4.5,
    // });
    // const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    // const targetText = 'EDGARS';
    // const spans = document.querySelectorAll('.scramble-text .char');
    // spans.forEach((span, i) => {
    //   const originalChar = targetText[i];
    //   let interval: any;
    //   const scrambleDuration = gsap.utils.random(0.8, 2); // different duration per letter
    //   const scrambleSpeed = 0.05; // time between char changes
    //   interval = setInterval(() => {
    //     const randomChar = chars[Math.floor(Math.random() * chars.length)];
    //     span.textContent = randomChar;
    //   }, scrambleSpeed * 1000);
    //   // After delay, reveal correct letter
    //   gsap.delayedCall(scrambleDuration, () => {
    //     clearInterval(interval);
    //     span.textContent = originalChar;
    //   });
    // });
  }

  //   onStart: () => {
  //     this.loaderService.finish();
  //   },

  private startLoader() {
    let counterElement = document.querySelector('.count p');
    let currentValue = 0;

    function updateCounter() {
      if (currentValue < 100) {
        let increment = Math.floor(Math.random() * 10 + 1);
        currentValue = Math.min(currentValue + increment, 100);
        counterElement!.textContent = currentValue.toString();

        let delay = Math.floor(Math.random() * 200) + 25;
        setTimeout(updateCounter, delay);
      }
    }
    updateCounter();
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
