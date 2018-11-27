import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreObservationsComponent } from './explore-observations.component';

describe('ExploreObservationsComponent', () => {
  let component: ExploreObservationsComponent;
  let fixture: ComponentFixture<ExploreObservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreObservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
