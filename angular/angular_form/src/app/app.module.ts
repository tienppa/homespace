import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';

@NgModule({
  declarations: [AppComponent, FormComponent, FormGroupComponent, FormDynamicComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
