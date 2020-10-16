import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HollowButtonComponent } from './hollow-button.component';

describe('HollowButtonComponent', () => {
  let component: HollowButtonComponent;
  let fixture: ComponentFixture<HollowButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HollowButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HollowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
