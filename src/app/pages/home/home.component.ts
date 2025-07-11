import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';
import { ScrollDownComponent } from '../../components/scroll-down/scroll-down.component';

@Component({
  selector: 'app-home',
  imports: [ScrollDownComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  public socialIconSize = 20;
  ngAfterViewInit() {}
}
