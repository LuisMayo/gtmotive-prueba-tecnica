import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';

import { MakesResult } from '../models/makes-response';
import { ModelsResult } from '../models/models-response';

export const MakeActions = createActionGroup({
  source: '[Make List]',
  events: {
    'Filtered': props<{filter: string}>(),
    'Retrieved Make List': props<{ makes: ReadonlyArray<MakesResult> }>(),
    'Requested Make list': emptyProps()
  },
});


export const ModelActions = createActionGroup({
  source: '[Model List]',
  events: {
    'Retrieved Model List': props<{ models: ReadonlyArray<ModelsResult> }>(),
    'Requested Model list': props<{modelId: string}>(),
    'Filtered': props<{filter: string}>(),
    'Init Model List': emptyProps()
  },
});


// export const FilterActions = createActionGroup({
//   source: '[Filter Field]',
//   events: {
//     'Filter Input': props<{ text: string }>(),
//     'Cleared Filter': emptyProps()
//   },
// });