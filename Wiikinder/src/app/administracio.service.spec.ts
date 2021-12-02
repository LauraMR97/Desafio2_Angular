import { TestBed } from '@angular/core/testing';

import { AdministracioService } from './administracio.service';

describe('AdministracioService', () => {
  let service: AdministracioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministracioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
