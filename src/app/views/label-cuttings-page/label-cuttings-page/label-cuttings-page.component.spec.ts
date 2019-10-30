import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelCuttingsPageComponent } from './label-cuttings-page.component';

describe('LabelCuttingsPageComponent', () => {
  let component: LabelCuttingsPageComponent;
  let fixture: ComponentFixture<LabelCuttingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelCuttingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelCuttingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
