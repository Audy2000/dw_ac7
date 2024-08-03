import { Component } from '@angular/core';
import { ActividadesService } from '../../../core/services/actividades.service';
import { Actividad } from '../../../core/models/actividad';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-actividades',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listar-actividades.component.html',
  styleUrl: './listar-actividades.component.css'
})
export class ListarActividadesComponent {


  constructor(private service: ActividadesService){}

  actividades!:Actividad[];
  ngOnInit()
  {
    this.getData();
  }


  eliminar(codigo: number) {
      this.service.delete(codigo).subscribe(()=>{
        
        this.getData();
        alert('Registro Eliminado')

      })
  }

    getData(){
      this.service.getAll().subscribe(
        {
          next: data => this.actividades= data
          
        }
      );
    }
}
