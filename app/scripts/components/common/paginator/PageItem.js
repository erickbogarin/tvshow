import React from 'react';
import classnames from 'classnames';

const PageItem = props => {
  const { currentPage, handlePageChanges, label, pageNumber } = props;
  return(
    <li 
      className={classnames('item', {active: currentPage === pageNumber})} 
      onClick={() => handlePageChanges(pageNumber)}>
      { label }
    </li>
  );
};

export default PageItem;
