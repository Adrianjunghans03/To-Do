import { createAction, props } from '@ngrx/store';

export const adding = createAction('[Counter Component] Adding Items',
props<{ id: number, value:string }>());
export const deleting = createAction('[Counter Component] Deleting Items',
props<{ id: number}>());
export const reset = createAction('[Counter Component] Reset');
