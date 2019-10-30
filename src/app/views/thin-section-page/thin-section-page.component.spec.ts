import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinSectionPageComponent } from './thin-section-page.component';

describe('ThinSectionPageComponent', () => {
  let component: ThinSectionPageComponent;
  let fixture: ComponentFixture<ThinSectionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThinSectionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinSectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
