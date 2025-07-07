import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollDownComponent } from './scroll-down.component';

describe('ScrollDownComponent', () => {
  let component: ScrollDownComponent;
  let fixture: ComponentFixture<ScrollDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollDownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
