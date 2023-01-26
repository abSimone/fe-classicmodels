import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCustomerComponent } from './lista-customer.component';

describe('ListaCustomerComponent', () => {
  let component: ListaCustomerComponent;
  let fixture: ComponentFixture<ListaCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
