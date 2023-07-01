import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MakeActions, ModelActions } from './actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { VehicleApiService } from '../services/vehicle-api.service';

@Injectable({ providedIn: 'root' })
export class Effects {
  loadMake$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MakeActions.requestedMakeList),
      exhaustMap(() =>
        this.vehicleApi.getAllMakes().pipe(
          map((make) => MakeActions.retrievedMakeList({makes: make.Results})),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadModel$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ModelActions.requestedModelList),
    exhaustMap(({modelId}) =>
      this.vehicleApi.getModelsByMake(modelId).pipe(
        map((make) => ModelActions.retrievedModelList({models: make.Results})),
        catchError(() => EMPTY)
      )
    )
  )
);

  constructor(
    private actions$: Actions,
    private vehicleApi: VehicleApiService
  ) {}
}
