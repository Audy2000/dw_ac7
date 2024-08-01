import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoActividadComponent } from './editar-tipo-actividad.component';

describe('EditarTipoActividadComponent', () => {
  let component: EditarTipoActividadComponent;
  let fixture: ComponentFixture<EditarTipoActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTipoActividadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarTipoActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
