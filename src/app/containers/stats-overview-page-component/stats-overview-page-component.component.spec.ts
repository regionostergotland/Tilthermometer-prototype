import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsOverviewPageComponentComponent } from './stats-overview-page-component.component';

describe('StatsOverviewPageComponentComponent', () => {
  let component: StatsOverviewPageComponentComponent;
  let fixture: ComponentFixture<StatsOverviewPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsOverviewPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsOverviewPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
