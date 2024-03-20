import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FichaComponent } from './ficha/ficha.component';



export const routes: Routes = [
{ path:"", component: AppComponent },
{ path: 'formulario', component: FormularioComponent },
{ path: 'resultado', component: FichaComponent },
];



/*
DataService.forEach(d => {
    routes.push({
        path:d.name,
        component: FichaComponent ,
    })
}); 

*/

