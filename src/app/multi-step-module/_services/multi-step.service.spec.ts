import { TestBed, inject } from '@angular/core/testing';

import { MultiStepService } from './multi-step.service';

describe('MultiStepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultiStepService]
    });
  });

  it('should be created', inject([MultiStepService], (service: MultiStepService) => {
    expect(service).toBeTruthy();
  }));
});
