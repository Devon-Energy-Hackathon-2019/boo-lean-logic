import { TestBed } from '@angular/core/testing';

import { ThinSectionService } from './thin-section.service';

describe('ThinSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThinSectionService = TestBed.get(ThinSectionService);
    expect(service).toBeTruthy();
  });
});
