import { TestBed } from '@angular/core/testing';

import { CompetitionsService } from './competitions.service';
import { Competitions } from '../interfaces/competitions';

describe('CompetitionsService', () => {
  let service: CompetitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetitionsService);
  });

  it('#getByCompetition should return an Observable', (done: DoneFn) => {
    service.getByCompetition('PL').subscribe( value => {
      expect(value).toBe('observable value');
      done();
    })
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
