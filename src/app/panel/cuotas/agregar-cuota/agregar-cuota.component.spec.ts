import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCuotaComponent } from './agregar-cuota.component';

describe('AgregarCuotaComponent', () => {
  let component: AgregarCuotaComponent;
  let fixture: ComponentFixture<AgregarCuotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarCuotaComponent]
    });
    fixture = TestBed.createComponent(AgregarCuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
