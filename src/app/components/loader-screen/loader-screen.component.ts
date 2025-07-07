import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-loader-screen',
  imports: [],
  templateUrl: './loader-screen.component.html',
  styleUrl: './loader-screen.component.css',
})
export class LoaderScreenComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.startLoader();

    const tl = gsap.timeline({ delay: 0.3 });

    tl.to('.count', {
      opacity: 0,
      delay: 3,
      duration: 0.5,
    });
    tl.to(
      '.check',
      {
        opacity: 1,
        duration: 0.5,
      },
      '-=0.5'
    );
    tl.to('.spinner-container', { opacity: 0, duration: 0.5, delay: 0.5 });
    tl.to(
      '.loader-text',
      {
        opacity: 0,
        duration: 0.5,
      },
      '<'
    );

    tl.to('.loader', {
      scaleX: window.innerWidth < 960 ? 0 : 1,
      scaleY: window.innerWidth < 960 ? 1 : 0,
      ease: 'power1.inOut',
      duration: 1,
    });

    tl.to(
      '.scramble-container',
      {
        opacity: 0,
        duration: 0.8,
      },
      '<'
    );

    tl.to('.loader', {
      display: 'none',
    });
    tl.to(
      '.scramble-container',
      {
        display: 'none',
      },
      '<'
    );

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    const targetText = 'EDGARS';
    const spans = document.querySelectorAll('.scramble-text .char');

    spans.forEach((span, i) => {
      const originalChar = targetText[i];
      let interval: any;

      const scrambleDuration = gsap.utils.random(0.8, 2); // different duration per letter
      const scrambleSpeed = 0.05; // time between char changes

      interval = setInterval(() => {
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        span.textContent = randomChar;
      }, scrambleSpeed * 1000);

      // After delay, reveal correct letter
      gsap.delayedCall(scrambleDuration, () => {
        clearInterval(interval);
        span.textContent = originalChar;
      });
    });
  }

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
}
