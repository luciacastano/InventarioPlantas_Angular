import { TestBed } from '@angular/core/testing';

import { GggggService } from './ggggg.service';

describe('GggggService', () => {
  let service: GggggService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GggggService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
