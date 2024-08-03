import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MateriaService } from '../../../core/services/materia.service';
import { Materia } from '../../../core/models/materia';

@Component({
  selector: 'app-crear-materias',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './crear-materias.component.html',
  styleUrl: './crear-materias.component.css'
})
export class CrearMateriasComponent {
  formulario = new FormGroup({

    nombre: new FormControl(),
    
  });

  constructor(
    private service : MateriaService,
    private router : Router
  ){}


  enviar()
  {
    console.log(this.formulario.value);
    this.service.add(this.formulario.value as Materia)
    .subscribe(data => {
      
      this.router.navigate(['/materia/listar-materias'])
    })
  }
  
}
