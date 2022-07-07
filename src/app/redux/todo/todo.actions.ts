import { createAction, props } from "@ngrx/store";

export const ADD_TODO = '[TODO] Add Todo';
export const CHEK_AGE = '[TODO] Check Age Todo';
export const ERROR = '[TODO] Error';

export const AddTodo = createAction(ADD_TODO,props<{ profile : any}>());
export const CheckAge = createAction(CHEK_AGE, props<{ add: string }>());


export const TodoError = createAction(ERROR);
