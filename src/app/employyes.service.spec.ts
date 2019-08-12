import { TestBed } from '@angular/core/testing';

import { EmployyesService } from './employyes.service';

describe('EmployyesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployyesService = TestBed.get(EmployyesService);
    expect(service).toBeTruthy();
  });
});
