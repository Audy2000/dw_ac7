import { Component } from '@angular/core';
import { ActividadesService } from '../../../core/services/actividades.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Actividad } from '../../../core/models/actividad';
import { MateriaService } from '../../../core/services/materia.service';
import { TipoActividadService } from '../../../core/services/tipo-actividad.service';
import { TipoActividad } from '../../../core/models/tipo-actividad';
import { Materia } from '../../../core/models/materia';

@Component({
  selector: 'app-editar-actividades',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './editar-actividades.component.html',
  styleUrl: './editar-actividades.component.css'
})
export class EditarActividadesComponent {
  constructor(
    private service : ActividadesService,
    private router : Router,
    private route:ActivatedRoute,
    private matService : MateriaService,
    private tipoService:TipoActividadService,
  ){}

  codigo !:any;
  materias!: Materia[];
  tipo_actividad !:TipoActividad[];

  formulario = new FormGroup({
    codigo: new FormControl(),
    descripcion: new FormControl(),
    comentario: new FormControl(),
    apertura: new FormControl(),
    vencimiento: new FormControl(),
    id_materia: new FormControl(),
    id_tipo_actividad: new FormControl(),
    
  });

  ngOnInit()
  {
    this.route.params.subscribe(params => {
      this.codigo = params['id'];
      
      this.matService.getAll().subscribe(
        {
          next: materias =>{
            this.materias = materias;
            this.tipoService.getAll().subscribe({
              next: tipoActiv => {
                this.tipo_actividad = tipoActiv;
                  // Busqueda del objeto
                  this.service.get(this.codigo).subscribe(data =>{
                    this.formulario.setValue(data);
                  });
              }
            })
          }
        });
      
      
    });
  }

  enviar()
  {
    
    this.service.edit(this.codigo,this.formulario.value as Actividad)
    .subscribe(() => {
      
      this.router.navigate(['/actividad/listar-actividades'])
    })
  }
}
