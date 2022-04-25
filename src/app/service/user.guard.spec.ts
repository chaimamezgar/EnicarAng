import { TestBed } from '@angular/core/testing';

import { UserGuard } from './user.guard';

describe('UserGuard', () => {
  let guard: UserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.get(UserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
