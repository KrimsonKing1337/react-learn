export type TIncrement = {
  type: 'INCREMENT' | 'INCREMENT_ASYNC';
}

export function increment() {
  return {
    type: 'INCREMENT',
  } as TIncrement;
}

export function incrementAsync() {
  return {
    type: 'INCREMENT_ASYNC'
  } as TIncrement;
}

export type TActions = TIncrement;
