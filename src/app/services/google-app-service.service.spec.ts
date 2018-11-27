import { TestBed } from '@angular/core/testing';

import { GoogleAppServiceService } from './google-app-service.service';

describe('GoogleAppServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleAppServiceService = TestBed.get(GoogleAppServiceService);
    expect(service).toBeTruthy();
  });
});
