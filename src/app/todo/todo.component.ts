import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddTodo, CheckAge, GetTodos } from '../redux/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  item = new FormControl('');
  constructor(
    private store : Store
  ) { }
  ngOnInit(): void {

  }

  addTodo() {
    this.store.dispatch(CheckAge({ add: this.item.value }));
  }

}
