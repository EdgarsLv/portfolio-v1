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
import { LoaderService } from '../../services/loader.service';
import { LoaderScreenComponent } from '../../components/loader-screen/loader-screen.component';

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet, RouterModule, LoaderScreenComponent],
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

  ngAfterViewInit(): void {}

  //   onStart: () => {
  //     this.loaderService.finish();
  //   },

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
