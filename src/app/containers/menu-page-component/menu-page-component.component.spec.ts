import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPageComponentComponent } from './menu-page-component.component';

describe('MenuPageComponentComponent', () => {
  let component: MenuPageComponentComponent;
  let fixture: ComponentFixture<MenuPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
