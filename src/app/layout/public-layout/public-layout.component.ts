import { AfterViewInit, Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoaderService } from '../../services/loader.service';
import { BrandLogoComponent } from '../../components/brand-logo/brand-logo.component';
import { ThemeSwitcherComponent } from '../../components/theme-switcher/theme-switcher.component';
import { FooterComponent } from './components/footer/footer.component';
// import { LoaderScreenComponent } from '../../components/loader-screen/loader-screen.component';

@Component({
  selector: 'app-public-layout',
  imports: [
    RouterOutlet,
    RouterModule,
    BrandLogoComponent,
    ThemeSwitcherComponent,
    FooterComponent,
    // LoaderScreenComponent,
  ],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.css',
})
export class PublicLayoutComponent implements AfterViewInit {
  constructor(private loaderService: LoaderService) {}

  ngAfterViewInit(): void {}

  //   onStart: () => {
  //     this.loaderService.finish();
  //   },
}
