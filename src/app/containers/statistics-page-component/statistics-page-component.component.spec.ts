import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsPageComponentComponent } from './statistics-page-component.component';

describe('StatisticsPageComponentComponent', () => {
  let component: StatisticsPageComponentComponent;
  let fixture: ComponentFixture<StatisticsPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
