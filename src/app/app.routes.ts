import { Routes } from '@angular/router';
import { MainpageComponent } from './theme/mainpage/mainpage.component';

export const routes: Routes = [
    {
        path:'',
        component: MainpageComponent,
        children:[
            {
                path:'actividad',
                loadChildren: ()=> import('./pages/actividad/actividades.routes').then((r)=>r.routes )
            },
            {
                path:'tipo-actividad',
                loadChildren: ()=> import('./pages/tipo-actividad/tipo-actividad.routes').then((r)=>r.routes )
            },
            {
                path:'materia',
                loadChildren: ()=> import('./pages/materias/materias.routes').then((r)=>r.routes )
            },
        ]
    }
];
