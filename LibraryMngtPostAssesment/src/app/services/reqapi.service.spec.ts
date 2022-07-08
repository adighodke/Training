import { TestBed } from '@angular/core/testing';

import { ReqapiService } from './reqapi.service';

describe('ReqapiService', () => {
  let service: ReqapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
