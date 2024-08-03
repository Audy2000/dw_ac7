import { Component } from '@angular/core';
import { MateriaService } from '../../../core/services/materia.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Materia } from '../../../core/models/materia';

@Component({
  selector: 'app-editar-materias',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './editar-materias.component.html',
  styleUrl: './editar-materias.component.css'
})
export class EditarMateriasComponent {
  constructor(
    private service : MateriaService,
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
    this.service.edit(this.codigo,this.formulario.value as Materia)
    .subscribe(() => {
      
      this.router.navigate(['/materia/listar-materias'])
    })
  }
}
