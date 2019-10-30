import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinSectionsComponent } from './thin-sections.component';

describe('ThinSectionsComponent', () => {
  let component: ThinSectionsComponent;
  let fixture: ComponentFixture<ThinSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThinSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
