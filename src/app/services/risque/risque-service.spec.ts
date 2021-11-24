import { TestBed } from '@angular/core/testing';

import { risqueService } from './risque.service';

describe('risqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: risqueService = TestBed.get(risqueService);
    expect(service).toBeTruthy();
  });
});