import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoaderService } from '../../services/loader.service';
import { BrandLogoComponent } from '../../components/brand-logo/brand-logo.component';
import { ThemeSwitcherComponent } from '../../components/theme-switcher/theme-switcher.component';
import { LoaderScreenComponent } from '../../components/loader-screen/loader-screen.component';

@Component({
  selector: 'app-public-layout',
  imports: [
    RouterOutlet,
    RouterModule,
    BrandLogoComponent,
    ThemeSwitcherComponent,
    LoaderScreenComponent,
  ],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.css',
})
export class PublicLayoutComponent implements OnInit, AfterViewInit, OnDestroy {
  socialIconSize = 24;

  currentTime = signal<string>('');
  private timer: any;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.updateTime();
    this.timer = setInterval(() => this.updateTime(), 1000);
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
