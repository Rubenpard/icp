import { Routes } from '@angular/router';
import { AppComponent } from './app.component';



export const routes: Routes = [
{ path:"", component: AppComponent },
];

/*
DataService.forEach(d => {
    routes.push({
        path:d.name,
        component: FichaComponent ,
    })
}); 

*/

