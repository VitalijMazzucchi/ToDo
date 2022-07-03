import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfacce/todo';
import { ListaService } from 'src/app/service/lista.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  valore!: string;
  constructor(private listaService: ListaService) {}

  ngOnInit(): void {}

  add() {
    let obj: Todo = { id: 0, title: this.valore, completed: false };
    setTimeout(() => {
      alert('Aggiunto alla TODOlist');
      if (this.valore.trim().length == 0) {
        alert('Inserisci un testo');
      } else {
        this.listaService.addArray(obj);
        this.valore = '';
      }
    }, 2000);
  }
}
