import { Component } from '@angular/core';
import { TipoActividadService } from '../../../core/services/tipo-actividad.service';
import { Router, RouterLink } from '@angular/router';
import { TipoActividad } from '../../../core/models/tipo-actividad';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-tipo-actividad',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './crear-tipo-actividad.component.html',
  styleUrl: './crear-tipo-actividad.component.css'
})
export class CrearTipoActividadComponent {

  formulario = new FormGroup({

    nombre: new FormControl(),
    
  });

  constructor(
    private service : TipoActividadService,
    private router : Router
  ){}


  enviar()
  {
    console.log(this.formulario.value);
    this.service.add(this.formulario.value as TipoActividad)
    .subscribe(data => {
      
      this.router.navigate(['/tipo-actividad/listar-tipo-actividades'])
    })
  }

}
