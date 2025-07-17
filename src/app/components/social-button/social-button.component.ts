import { Component, input } from '@angular/core';

@Component({
  selector: 'app-social-button',
  imports: [],
  templateUrl: './social-button.component.html',
  styleUrl: './social-button.component.css',
})
export class SocialButtonComponent {
  public text = input.required();
}
