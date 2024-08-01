import { Routes } from '@angular/router';
import { ListarMateriasComponent } from './listar-materias/listar-materias.component';
import { CrearMateriasComponent } from './crear-materias/crear-materias.component';
import { EditarMateriasComponent } from './editar-materias/editar-materias.component';

export const routes: Routes = [
    {
        path:'listar-materias',
        component:ListarMateriasComponent
    },
    {
        path:'crear-materia',
        component:CrearMateriasComponent
    },
    {
        path:'editar-materia/:id',
        component:EditarMateriasComponent
    },
];
