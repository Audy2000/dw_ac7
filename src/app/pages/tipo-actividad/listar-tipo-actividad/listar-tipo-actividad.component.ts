import { Component } from '@angular/core';
import { TipoActividad } from '../../../core/models/tipo-actividad';
import { TipoActividadService } from '../../../core/services/tipo-actividad.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-tipo-actividad',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listar-tipo-actividad.component.html',
  styleUrl: './listar-tipo-actividad.component.css'
})
export class ListarTipoActividadComponent {
  constructor(
    private service : TipoActividadService
  ){}

  tipoActividades !: TipoActividad[];

  ngOnInit()
  {
    this.getData();
  }

  getData()
  {
    this.service.getAll().subscribe({
      next: data => this.tipoActividades = data
    });
  }
  elimiar(codigo:any)
  {
    this.service.delete(codigo).subscribe(()=>{
      this.getData();
      alert('Registro Eliminado')
    });
  }
}
