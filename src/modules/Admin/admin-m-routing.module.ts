import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPComponent } from './admin-p/admin-p.component';
const routes: Routes = [{path:'admin-p', component: AdminPComponent}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AdminMRoutingModule {}