import { Component, OnInit, Type } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetTodos } from 'src/app/redux/todo';


@Component({
  selector: 'app-todo-table',
  template: `
    <table class="table">
        <thead>
            <tr class="ml-3 bg-dark text-white text-center">
                <th>Nombre<th>
                <th>Edad<th>
            </tr>
        </thead>
        <tbody>
          <tr *ngFor="let value of (listTodo | async), let i = index">
            <td class="text-center">{{ value.name }}</td>
            <td>{{ value?.age }}</td>
          </tr>
        </tbody>
    </table>

  `,
})
export class TodoTableComponent implements OnInit {

  listTodo: Observable<any> = this.store.select(GetTodos);
  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {

  }

}
