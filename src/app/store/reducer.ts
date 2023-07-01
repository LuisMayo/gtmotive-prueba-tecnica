import { MakeActions, ModelActions } from './actions';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';

import { MakesResult } from '../models/makes-response';
import { ModelsResult } from '../models/models-response';

type InitialType<T> = {
  filter: string;
  items: ReadonlyArray<T>;
};

export const initialMakeState: InitialType<MakesResult> = { filter: '', items: [] };
export const initialModelState: InitialType<ModelsResult> = { filter: '', items: [] };
export type StoreType = {
  items: any;
  makes: InitialType<MakesResult>;
  models: InitialType<ModelsResult>;
};

export const makeReducer = createReducer(
  initialMakeState,
  on(MakeActions.retrievedMakeList, (_state, { makes }) => {
    return { ..._state, items: makes };
  }),
  on(MakeActions.filtered, (_state, {filter}) => {
    return { ..._state, filter };
  })
);

export const modelReducer = createReducer(
  initialMakeState,
  on(ModelActions.retrievedModelList, (_state, { models }) => {
    return { ..._state, items: models };
  }),
  on(ModelActions.filtered, (_state, {filter}) => {
    return { ..._state, filter };
  }),
  on(ModelActions.initModelList, () => initialModelState)
);


