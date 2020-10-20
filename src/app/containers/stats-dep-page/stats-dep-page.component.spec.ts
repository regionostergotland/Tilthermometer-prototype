import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsDepPageComponent } from './stats-dep-page.component';

describe('StatsDepPageComponent', () => {
  let component: StatsDepPageComponent;
  let fixture: ComponentFixture<StatsDepPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsDepPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsDepPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
