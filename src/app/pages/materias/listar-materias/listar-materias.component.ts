import { Component } from '@angular/core';
import { MateriaService } from '../../../core/services/materia.service';
import { Materia } from '../../../core/models/materia';
import { NotExpr } from '@angular/compiler';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-materias',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listar-materias.component.html',
  styleUrl: './listar-materias.component.css'
})
export class ListarMateriasComponent {
  
  materias !: Materia[];

  constructor(
    private service: MateriaService
  ) {}

  ngOnInit()
  {
    this.getData();
  }

  getData()
  {
    this.service.getAll().subscribe({
      next: data => {
        console.log(data);
        
        this.materias= data
      }
    })
  }
  elimiar(codigo:any)
  {
    this.service.delete(codigo).subscribe(()=>
    {
      this.getData();
      alert('Registro Eliminado')
    })
  }
}
