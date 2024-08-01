import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoActividadComponent } from './listar-tipo-actividad.component';

describe('ListarTipoActividadComponent', () => {
  let component: ListarTipoActividadComponent;
  let fixture: ComponentFixture<ListarTipoActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTipoActividadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarTipoActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
