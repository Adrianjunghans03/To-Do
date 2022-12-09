import { createReducer, on} from '@ngrx/store';
import { adding, deleting, reset} from './todo.actions';

export type RootState = {
  toDos:{id:number, value:string} []
}
export const initialState:RootState = {
  toDos: []
};

const _todoReducer = createReducer(
  initialState,
  on(adding, (state, newTodo) =>
   ({
    ...state,
    toDos: state.toDos.concat([{id: newTodo.id, value: newTodo.value}])
  })
  ),

  on(deleting, (state, toDoDelete) => ({
    ...state,
    toDos: state.toDos.filter(eachTodo => eachTodo.id !== toDoDelete.id)
  })),

  on(reset, (state) => ({
    ...state,
    toDos: []
  }))
)

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
