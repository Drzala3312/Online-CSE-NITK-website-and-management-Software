import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchEntryComponent } from './research-entry.component';

describe('ResearchEntryComponent', () => {
  let component: ResearchEntryComponent;
  let fixture: ComponentFixture<ResearchEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
