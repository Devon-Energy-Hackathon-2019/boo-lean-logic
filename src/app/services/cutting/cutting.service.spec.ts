import { TestBed } from '@angular/core/testing';

import { CuttingService } from './cutting.service';

describe('CuttingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuttingService = TestBed.get(CuttingService);
    expect(service).toBeTruthy();
  });
});
