import * as React from 'react';

import style from './Counter.scss';

interface Props {
  count: number;
}

export const Counter = ({ count }: Props) => {
  return <div className={style.counter}>{count}</div>;
};
