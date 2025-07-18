import { Component, inject, signal } from '@angular/core';
import * as L from 'leaflet';
import { ThemeService } from '../../../../services/theme.service';
// import { SocialButtonComponent } from '../../../../components/social-button/social-button.component';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private theme = inject(ThemeService);

  socialIconSize = 24;

  currentTime = signal<string>('');
  public fullYear = new Date().getFullYear();
  private timer: any;

  private map!: L.Map;
  private tileLayer!: L.TileLayer;

  ngOnInit() {
    this.updateTime();
    this.timer = setInterval(() => this.updateTime(), 1000);

    this.theme.themeChanged$.subscribe((theme) => {
      const isDark = theme === 'dark-theme';
      this.addTileLayer(isDark);
    });
  }

  ngAfterViewInit(): void {
    const isDarkMode = this.theme.getCurrentTheme() === 'dark-theme';

    this.map = L.map('map').setView([56.9496, 24.1052], 13);

    this.addTileLayer(isDarkMode);

    this.map.on('click', (e: L.LeafletMouseEvent) => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;
      const url = `https://www.google.com/maps?q=${lat},${lng}`;
      window.open(url, '_blank');
    });
  }

  private addTileLayer(isDarkMode: boolean): void {
    if (this.tileLayer) {
      this.map.removeLayer(this.tileLayer);
    }

    const tileUrl = isDarkMode
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

    this.tileLayer = L.tileLayer(tileUrl, {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    });

    this.tileLayer.addTo(this.map);
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
