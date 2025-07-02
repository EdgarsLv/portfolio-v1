import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';
import CustomEase from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, CustomEase, ScrollTrigger);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
