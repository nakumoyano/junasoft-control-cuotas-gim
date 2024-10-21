import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDePlanesComponent } from './listado-de-planes.component';

describe('ListadoDePlanesComponent', () => {
  let component: ListadoDePlanesComponent;
  let fixture: ComponentFixture<ListadoDePlanesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoDePlanesComponent]
    });
    fixture = TestBed.createComponent(ListadoDePlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
