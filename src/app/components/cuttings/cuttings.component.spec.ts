import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingsComponent } from './cuttings.component';

describe('CuttingsComponent', () => {
  let component: CuttingsComponent;
  let fixture: ComponentFixture<CuttingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuttingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuttingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
