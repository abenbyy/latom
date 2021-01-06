import { TestBed } from '@angular/core/testing';

import { ApiMedicService } from './apimedic.service';

describe('ApimedicService', () => {
  let service: ApiMedicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMedicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
