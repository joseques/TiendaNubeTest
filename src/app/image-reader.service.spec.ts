import { TestBed, inject } from '@angular/core/testing';

import { ImageReaderService } from './image-reader.service';

describe('ImageReaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageReaderService]
    });
  });

  it('should be created', inject([ImageReaderService], (service: ImageReaderService) => {
    expect(service).toBeTruthy();
  }));
});
