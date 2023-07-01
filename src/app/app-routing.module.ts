import { RouterModule, Routes } from '@angular/router';

import { MakeListComponent } from './components/make-list/make-list.component';
import { ModelListComponent } from './components/model-list/model-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MakeListComponent },
  { path: 'make/:id', component: ModelListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
