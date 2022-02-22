import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PsmInsightComponent } from './psm-insight.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [  
  { path: '', component: PsmInsightComponent }  
 ]; 

@NgModule({
  declarations: [
    PsmInsightComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PsmInsightModule { }
