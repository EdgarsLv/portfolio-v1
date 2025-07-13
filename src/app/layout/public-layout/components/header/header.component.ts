import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrandLogoComponent } from '../../../../components/brand-logo/brand-logo.component';
import { ThemeSwitcherComponent } from '../../../../components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule, BrandLogoComponent, ThemeSwitcherComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
