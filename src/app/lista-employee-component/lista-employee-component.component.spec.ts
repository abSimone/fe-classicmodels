import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmployeeComponentComponent } from './lista-employee-component.component';

describe('ListaEmployeeComponentComponent', () => {
  let component: ListaEmployeeComponentComponent;
  let fixture: ComponentFixture<ListaEmployeeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEmployeeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEmployeeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
