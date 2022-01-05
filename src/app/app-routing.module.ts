import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjudaComponent } from './ajuda/ajuda.component';

import { SectionComponent } from './section/section.component';


const routes: Routes = [

  {path: '', component: SectionComponent},
  {path:'/ajuda',component:AjudaComponent}  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
