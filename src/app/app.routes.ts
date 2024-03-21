import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FichaComponent } from './ficha/ficha.component';
import { FrameComponent } from './frame/frame.component';
import { DataService } from './data/data.Service';
import { Tarjeta } from './models/modelo.ficha';



export const routes: Routes = [   
{ path:"", component: FrameComponent },
{ path: 'formulario', component: FormularioComponent },
{ path: Tarjeta.name , component: FichaComponent },
{ path: 'resultado', component: FichaComponent },
];




DataService.forEach(d => {
    routes.push({
        path:d.name,
        component: FichaComponent ,
    })
}); 


