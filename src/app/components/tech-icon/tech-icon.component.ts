import { Component, input } from '@angular/core';

export type Icon = {
  icon: string;
  name: string;
};

@Component({
  selector: 'app-tech-icon',
  imports: [],
  templateUrl: './tech-icon.component.html',
  styleUrl: './tech-icon.component.css',
})
export class TechIconComponent {
  public iconSize = input<number>(20);
  public icon = input<Icon>({ icon: '', name: '' });
}
