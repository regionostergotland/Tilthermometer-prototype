import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsOverviewPageComponent } from './stats-overview-page.component';

describe('StatsOverviewPageComponent', () => {
  let component: StatsOverviewPageComponent;
  let fixture: ComponentFixture<StatsOverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
