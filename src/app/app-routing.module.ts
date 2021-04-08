import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { FormComponent } from './form/form.component';
import { CrudComponent } from './crud/crud.component';

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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
