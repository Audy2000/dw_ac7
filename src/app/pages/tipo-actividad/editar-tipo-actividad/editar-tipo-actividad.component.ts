import { Component } from '@angular/core';
import { TipoActividad } from '../../../core/models/tipo-actividad';
import { TipoActividadService } from '../../../core/services/tipo-actividad.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-tipo-actividad',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './editar-tipo-actividad.component.html',
  styleUrl: './editar-tipo-actividad.component.css'
})
export class EditarTipoActividadComponent {
  constructor(
    private service : TipoActividadService,
    private router : Router,
    private route:ActivatedRoute,
  ){}

  codigo !:any;

  formulario = new FormGroup({
    codigo: new FormControl(),
    nombre: new FormControl(),
    
  });

  ngOnInit()
  {
    this.route.params.subscribe(params => {
      this.codigo = params['id'];
      
      
      // Busqueda del objeto
      this.service.get(this.codigo).subscribe(data =>{
        console.log(data);
        
        this.formulario.setValue(data);
      });
    });
  }

  enviar()
  {
    console.log(this.formulario.value);
    this.service.edit(this.codigo,this.formulario.value as TipoActividad)
    .subscribe(() => {
      
      this.router.navigate(['/tipo-actividad/listar-tipo-actividades'])
    })
  }
}
