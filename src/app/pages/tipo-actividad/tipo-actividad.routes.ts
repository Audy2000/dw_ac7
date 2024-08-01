import { Routes } from '@angular/router';
import { ListarTipoActividadComponent } from './listar-tipo-actividad/listar-tipo-actividad.component';
import { EditarTipoActividadComponent } from './editar-tipo-actividad/editar-tipo-actividad.component';
import { CrearTipoActividadComponent } from './crear-tipo-actividad/crear-tipo-actividad.component';

export const routes: Routes = [
    {
        path:'listar-tipo-actividades',
        component:ListarTipoActividadComponent
    },
    {
        path:'editar-tipo-actividad/:id',
        component:EditarTipoActividadComponent
    },
    {
        path:'crear-tipo-actividad',
        component:CrearTipoActividadComponent
    }
];
