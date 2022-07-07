import { ActionReducerMap } from "@ngrx/store";
import * as TodoRedux from "./todo";

//Aqui van los Store de los Reducers
interface ReduxStore {
  todo: TodoRedux.TodoState;
}

// Action Map de los Reducers Stores
export const reducers : ActionReducerMap<ReduxStore> = {
  todo: TodoRedux.TodoReducer
}

export {
  TodoRedux
}
