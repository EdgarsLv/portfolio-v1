import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopImageComponent } from './desktop-image.component';

describe('DesktopImageComponent', () => {
  let component: DesktopImageComponent;
  let fixture: ComponentFixture<DesktopImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
