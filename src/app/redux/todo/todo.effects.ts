import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Services } from "src/app/services/services";
import { AddTodo, CHEK_AGE, TodoError } from './todo.actions'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { of } from "rxjs";


@Injectable()
export class todoEffects {
  constructor(
    private actions$ : Actions,
    private serv: Services
    ) {}

  CheckAge$ = createEffect(() => this.actions$.pipe(
    ofType(CHEK_AGE),
    mergeMap((payload: any) => this.serv.getAgeName(payload.add)
    .pipe(
      map((response: any) => AddTodo({ profile: response })),
      catchError(() => of(TodoError()))
    ))
  ));

}
