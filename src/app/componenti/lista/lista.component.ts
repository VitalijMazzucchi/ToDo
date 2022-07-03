import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfacce/todo';
import { ListaService } from 'src/app/service/lista.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  listaToDo!: Todo[];
  listanoncompletata!: Todo[];
  timer!: number;
  constructor(private listaService: ListaService) {}

  ngOnInit(): void {
    this.listaToDo = this.listaService.getTodoList();
  }

  del(ele: Todo): void {
    setTimeout(() => {
      alert('Cancellato');
      this.listaService.removeArray(ele);
    }, 2000);
  }

  modify(ele: Todo) {
    let x = prompt('modifica i dati', ele.title);
    setTimeout(() => {
      if (x !== null) {
        ele.title = x;
        this.listaService.modify(ele);
        alert('Modificato');
      }
    }, 2000);
  }
}
