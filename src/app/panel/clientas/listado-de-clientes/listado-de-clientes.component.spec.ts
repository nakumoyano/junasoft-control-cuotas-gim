import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeClientesComponent } from './listado-de-clientes.component';

describe('ListadoDeClientesComponent', () => {
  let component: ListadoDeClientesComponent;
  let fixture: ComponentFixture<ListadoDeClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoDeClientesComponent]
    });
    fixture = TestBed.createComponent(ListadoDeClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
