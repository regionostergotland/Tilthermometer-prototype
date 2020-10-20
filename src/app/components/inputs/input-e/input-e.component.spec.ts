import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEComponent } from './input-e.component';

describe('InputEComponent', () => {
  let component: InputEComponent;
  let fixture: ComponentFixture<InputEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
