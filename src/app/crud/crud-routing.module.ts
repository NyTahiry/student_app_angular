import { NgModule } from '@angular/core';
import { UpdateComponent } from './update/update.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [

  {path: 'student/create', component: CreateComponent},
  {path: 'student/details/:productId', component: CreateComponent},
  {path: 'student/detail', component: DetailsComponent },
  {path: 'student/update/:productId', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],//
  exports: [RouterModule]
})
export class CrudRoutingModule { }
