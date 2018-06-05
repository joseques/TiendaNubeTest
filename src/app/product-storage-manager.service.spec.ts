import { TestBed, inject } from '@angular/core/testing';

import { ProductStorageManagerService } from './product-storage-manager.service';

describe('ProductStorageManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductStorageManagerService]
    });
  });

  it('should be created', inject([ProductStorageManagerService], (service: ProductStorageManagerService) => {
    expect(service).toBeTruthy();
  }));
});
