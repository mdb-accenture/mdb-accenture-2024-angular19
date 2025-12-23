import { TestBed } from '@angular/core/testing';

import { ContactJsonServerService } from './contact-json-server.service';

describe('ContactJsonServerService', () => {
  let service: ContactJsonServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactJsonServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
