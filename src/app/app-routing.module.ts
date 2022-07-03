import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletatiPage } from './page/completati/completati.page';
import { TodosPage } from './page/todos/todos.page';

const routes: Routes = [
  {
    path: 'todos',
    component: TodosPage,
  },
  {
    path: 'completati',
    component: CompletatiPage,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
