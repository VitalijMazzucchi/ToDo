import { Injectable } from '@angular/core';
import { Todo } from '../interfacce/todo';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  numid: number = 0;
  private TodoList: Todo[] = [];

  constructor() {}

  getTodoList(): Todo[] {
    return this.TodoList;
  }

  addArray(ele: Todo) {
    this.numid++;
    ele.id = this.numid;
    this.TodoList.push(ele);
  }

  removeArray(ele: Todo) {
    this.TodoList.splice(this.TodoList.indexOf(ele), 1);
  }
  modify(ele: Todo) {
    let obj = this.TodoList.find((ele) => ele.id == ele.id);
    obj = ele;
  }
}
