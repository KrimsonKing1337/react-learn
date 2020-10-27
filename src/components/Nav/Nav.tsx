import * as React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <section>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </section>
  );
};
