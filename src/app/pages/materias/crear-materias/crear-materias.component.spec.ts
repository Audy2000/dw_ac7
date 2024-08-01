import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMateriasComponent } from './crear-materias.component';

describe('CrearMateriasComponent', () => {
  let component: CrearMateriasComponent;
  let fixture: ComponentFixture<CrearMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearMateriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
