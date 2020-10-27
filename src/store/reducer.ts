import { TActions } from './actions';
import { initialState } from './initialState';

export function reducer(state = initialState, action: TActions) {
  switch (action.type) {
    /*case 'SET_STATE':
      return state.merge(action.state);*/
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      };
    default:
      return state;
  }
}
