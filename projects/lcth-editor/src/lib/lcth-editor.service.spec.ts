import { TestBed } from '@angular/core/testing';

import { LcthEditorService } from './lcth-editor.service';

describe('LcthEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LcthEditorService = TestBed.get(LcthEditorService);
    expect(service).toBeTruthy();
  });
});
