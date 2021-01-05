import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

export const routes: Routes =[
    {
        path: '',
        loadChildren: () => import('@ngrx-flow/people').then(mod => mod.PeopleModule)
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes,{
            scrollPositionRestoration:'enabled'
        })
    ],

    exports: [RouterModule]

})
export class AppRoutingModule {}