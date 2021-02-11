import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from './courses/courses.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CoursComponent} from './cours/cours.component';
const
routes: Routes = [
  {path: 'courses/:p1/:p2', component: CoursesComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/:p1/search', component: CoursesComponent},

  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},

  {path: 'cours/:id', component: CoursComponent},
  {path:'register',component:RegisterComponent}


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
