import { Routes } from '@angular/router'
import { AboutComponent } from 'src/app/components/about/about.component'
import { MainComponent } from 'src/app/components/main/main.component'

export const appRoutes: Routes= [
    {path : 'about', component : AboutComponent},
    {path : 'main', component : MainComponent},
    //{path : 'main/:id', component : MainComponent},
    {path : '', redirectTo : 'main', pathMatch:'full'}
];