import * as React from 'react';

import { store } from '@src/store';

import { ButtonWrapper } from '@components/ButtonWrapper';
import { Counter } from '@components/Counter';
import { Nav } from '@components/Nav';

export const Main = () => {
  const [counter, setCounter] = React.useState<number>(0);

  store.subscribe(() => {
    setCounter(store.getState().counter)
  });

  return (
    <div>
      <Nav />

      <ButtonWrapper />

      <div>
        Counter 2
      </div>

      <Counter count={counter} />
    </div>
  )
};
