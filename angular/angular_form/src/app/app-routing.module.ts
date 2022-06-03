import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '*',
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'form-group',
    component: FormGroupComponent,
  },
  {
    path: 'dynamic-form',
    component: FormDynamicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
