import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
  },
];

@NgModule({
  declarations: [FirstComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LazyModule {}
