import * as React from 'react';

import { store } from '@src/store';
import { incrementAsync } from '@store/actions';

import { Button } from '@components/Button';
import { Counter } from '@components/Counter';

interface Props {
  label?: string;
}

export const ButtonWrapper = ({ label = 'click me' }: Props) => {
  const [counter, setCounter] = React.useState<number>(0);

  store.subscribe(() => {
    setCounter(store.getState().counter)
  });

  function onClick() {
    store.dispatch(incrementAsync());
  }

  return (
    <div>
      <div>
        Button wrapper
      </div>

      <Button label={label} onClick={onClick} />

      <div>
        Counter 1
      </div>

      <Counter count={counter} />
    </div>
  );
};
