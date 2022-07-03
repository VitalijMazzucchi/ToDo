import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/service/lista.service';
import { Todo } from 'src/app/interfacce/todo';
@Component({
  selector: 'app-lista-todo',
  templateUrl: './lista-todo.component.html',
  styleUrls: ['./lista-todo.component.scss'],
})
export class ListaTodoComponent implements OnInit {
  listacompletati!: Todo[];
  constructor(private listaService: ListaService) {}

  ngOnInit(): void {
    this.listacompletati = this.listaService
      .getTodoList()
      .filter((ele) => ele.completed === true);
  }

  del(ele: Todo): void {
    setTimeout(() => {
      alert('Cancellato');
      this.listaService.removeArray(ele);
      this.listacompletati = this.listaService
        .getTodoList()
        .filter((ele) => ele.completed === true);
    }, 2000);
  }
  spunta(): void {
    this.listacompletati = this.listaService
      .getTodoList()
      .filter((ele) => ele.completed === true);
  }
}
