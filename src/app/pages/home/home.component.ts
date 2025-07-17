import { Component } from '@angular/core';
import { ScrollDownComponent } from '../../components/scroll-down/scroll-down.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';

@Component({
  selector: 'app-home',
  imports: [ScrollDownComponent, SectionTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public socialIconSize = 20;
}
