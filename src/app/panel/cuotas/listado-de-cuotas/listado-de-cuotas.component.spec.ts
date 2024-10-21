import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeCuotasComponent } from './listado-de-cuotas.component';

describe('ListadoDeCuotasComponent', () => {
  let component: ListadoDeCuotasComponent;
  let fixture: ComponentFixture<ListadoDeCuotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoDeCuotasComponent]
    });
    fixture = TestBed.createComponent(ListadoDeCuotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
