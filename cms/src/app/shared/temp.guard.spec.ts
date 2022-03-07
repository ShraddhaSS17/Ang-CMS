import { TestBed } from '@angular/core/testing';

import { TempGuard } from './temp.guard';

describe('TempGuard', () => {
  let guard: TempGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TempGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
