import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { FormComponent } from './form/form.component';
import { CrudComponent } from './crud/crud.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreatestudentComponent } from './crud/createstudent/createstudent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor } from 'src/app/_interceptors/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    FormComponent,
    CrudComponent,
    CreatestudentComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
