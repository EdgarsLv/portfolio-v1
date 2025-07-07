import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'theme';
  private readonly light = 'light-theme';
  private readonly dark = 'dark-theme';

  constructor() {
    this.initTheme();
  }

  initTheme(): void {
    const savedTheme = localStorage.getItem(this.storageKey);
    const theme = savedTheme || this.dark;
    this.setTheme(theme);
  }

  toggleTheme(): void {
    const body = document.body;
    const currentTheme = body.classList.contains(this.light)
      ? this.light
      : this.dark;
    const newTheme = currentTheme === this.light ? this.dark : this.light;

    this.setTheme(newTheme);
  }

  private setTheme(theme: string): void {
    document.body.classList.remove(this.light, this.dark);
    document.body.classList.add(theme);
    localStorage.setItem(this.storageKey, theme);
  }

  getCurrentTheme(): string {
    return localStorage.getItem(this.storageKey) || this.dark;
  }
}
