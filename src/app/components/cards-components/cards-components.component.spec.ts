import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponentsComponent } from './cards-components.component';

describe('CardsComponentsComponent', () => {
  let component: CardsComponentsComponent;
  let fixture: ComponentFixture<CardsComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
