import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Isvg from 'react-inlinesvg';

import * as Actions from '../actions';

const Header = ({ active, resetSearch }) => {
  return(
    <Link
      onClick={() => resetSearch()}
      className="nav-link" to="/">
      <h1 className={classnames('header-top', {active})}>
        <Isvg className="logo" src={require(`../../../assets/media/icons/play.svg`)} />
        <span className="label">IdaTV</span>
      </h1>
    </Link>
  );
};

export default connect(null, Actions)(Header);
