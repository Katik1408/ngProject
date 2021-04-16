import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { FormComponent } from './form/form.component';
import { CrudComponent } from './crud/crud.component';
import { CreatestudentComponent } from './crud/createstudent/createstudent.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import {HttpGuard} from 'src/app/_guards/http.guard';

const routes: Routes = [
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'crud',
    component: CrudComponent,
    canDeactivate:[HttpGuard]
  },
  {
    path: 'createstudent',
    component: CreatestudentComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
