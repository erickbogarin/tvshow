import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import Isvg from 'react-inlinesvg';

const Header = ({ active }) => {
  return(
    <Link className="nav-link" to="/">
      <h1 className={classnames('header-top', {active})}>
        <Isvg className="logo" src={require(`../../../assets/media/icons/play.svg`)} />
        <span className="label">Search</span>
      </h1>
    </Link>
  );
};

export default Header;
