import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDComponent } from './input-d.component';

describe('InputDComponent', () => {
  let component: InputDComponent;
  let fixture: ComponentFixture<InputDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
