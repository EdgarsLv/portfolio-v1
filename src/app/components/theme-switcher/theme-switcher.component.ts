import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import gsap from 'gsap';

@Component({
  selector: 'app-theme-switcher',
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.css',
})
export class ThemeSwitcherComponent {
  public theme = inject(ThemeService);

  ngAfterContentChecked(): void {}
}
