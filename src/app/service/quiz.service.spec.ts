import { TestBed } from '@angular/core/testing';

import { QuizService } from './quiz.service';

describe('QuizService', () => {
  let service: QuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(QuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
