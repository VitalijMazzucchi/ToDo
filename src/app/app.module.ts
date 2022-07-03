import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosPage } from './page/todos/todos.page';
import { CompletatiPage } from './page/completati/completati.page';
import { ListaComponent } from './componenti/lista/lista.component';
import { HeaderComponent } from './componenti/header/header.component';
import { FormComponent } from './componenti/form/form.component';
import { ListaTodoComponent } from './componenti/lista-todo/lista-todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodosPage,
    CompletatiPage,
    ListaComponent,
    HeaderComponent,
    FormComponent,
    ListaTodoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
