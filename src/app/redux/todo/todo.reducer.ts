import { createFeatureSelector, createReducer,createSelector,on } from "@ngrx/store";
import { AddTodo } from "./todo.actions";



export interface TodoState {
  todos: any[];
  add : string;
}

export const initialState: TodoState = {
  todos: [],
  add: ''
}

const _TodoReducer = createReducer(
  initialState,
  on(AddTodo,(state : TodoState,payload : any) => _AddTodo(state,payload))
)

export function TodoReducer(state: any, action: any) {
  return _TodoReducer(state, action);
}


const _AddTodo = (state : TodoState, payload : any) => {
  const list = [...state.todos, payload.profile]
  return {
    todos : list,
    add: payload.add
  }
}

/*** Selector */

//Feature Selector
export const GetTodoStates = createFeatureSelector<TodoState>("todo");
//selectors de todos
export const GetTodos = createSelector(GetTodoStates,(state : TodoState) => state.todos);

