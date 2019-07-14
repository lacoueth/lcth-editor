import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcthEditorComponent } from './lcth-editor.component';

describe('LcthEditorComponent', () => {
  let component: LcthEditorComponent;
  let fixture: ComponentFixture<LcthEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcthEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcthEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
