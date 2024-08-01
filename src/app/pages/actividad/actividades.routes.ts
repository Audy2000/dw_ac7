import { Routes } from '@angular/router';
import { ListarActividadesComponent } from './listar-actividades/listar-actividades.component';
import { CrearActividadesComponent } from './crear-actividades/crear-actividades.component';
import { EditarActividadesComponent } from './editar-actividades/editar-actividades.component';

export const routes: Routes = [
    {
        path:'listar-actividades',
        component:ListarActividadesComponent
    },
    {
        path:'crear-actividad',
        component:CrearActividadesComponent
    },
    {
        path:'editar-actividad/:id',
        component:EditarActividadesComponent
    },
];
