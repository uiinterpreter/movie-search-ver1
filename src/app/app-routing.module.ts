import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from './views/movies/movies.component'
import { DetailsComponent } from './views/details/details.component';
import { ErrorComponent } from './views/error/error.component';
const routes: Routes = [
  { path : '', redirectTo : 'movies',pathMatch : 'full'},
  { path : 'movies',  component: MoviesComponent},
  {path :'details/:id', component:DetailsComponent},
  {path : '**' , component:ErrorComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }