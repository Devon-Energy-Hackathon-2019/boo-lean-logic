import { TestBed } from '@angular/core/testing';

import { EventhubService } from './eventhub.service';

describe('EventhubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventhubService = TestBed.get(EventhubService);
    expect(service).toBeTruthy();
  });
});
