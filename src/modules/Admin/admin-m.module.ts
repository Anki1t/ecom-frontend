import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMRoutingModule } from './admin-m-routing.module';
import { AdminPComponent } from './admin-p/admin-p.component';
import { SharedModuleModule } from 'src/shared_modules/sh_modules/shared-module/shared-module.module';

@NgModule({
  declarations: [AdminPComponent],
  imports: [AdminMRoutingModule ,SharedModuleModule,
    CommonModule
  ]
})
export class AdminMModule { }
