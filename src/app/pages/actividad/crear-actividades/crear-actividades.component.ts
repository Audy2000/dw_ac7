import { Component } from '@angular/core';
import { ActividadesService } from '../../../core/services/actividades.service';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Materia } from '../../../core/models/materia';
import { TipoActividad } from '../../../core/models/tipo-actividad';
import { MateriaService } from '../../../core/services/materia.service';
import { TipoActividadService } from '../../../core/services/tipo-actividad.service';
import { Actividad } from '../../../core/models/actividad';

@Component({
  selector: 'app-crear-actividades',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './crear-actividades.component.html',
  styleUrl: './crear-actividades.component.css'
})
export class CrearActividadesComponent {
  
  materias!: Materia[];
  tipo_actividad !:TipoActividad[];

  constructor(
    private service:ActividadesService,
    private matService : MateriaService,
    private tipoService:TipoActividadService,
    private roouter: Router
    ){}

  ngOnInit()
  {
    this.matService.getAll().subscribe(
      {
        next: materias =>{
          this.materias = materias;
          this.tipoService.getAll().subscribe({
            next: tipoActiv => this.tipo_actividad = tipoActiv
          })
        }
      });
  }


  formulario = new FormGroup({

    descripcion: new FormControl(),
    comentario: new FormControl(),
    apertura: new FormControl(new Date()),
    vencimiento: new FormControl(),
    id_materia: new FormControl(),
    id_tipo_actividad: new FormControl(),
    
  });


  enviar()
  {
    console.log(this.formulario.value);
    this.service.add(this.formulario.value as Actividad)
    .subscribe(() => {
      
      this.roouter.navigate(['/actividad/listar-actividades'])
    })
  }
}
