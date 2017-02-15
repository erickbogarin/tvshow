import React from 'react';
import classnames from 'classnames';

const ListPagination = props => {
  const { currentPage, handlePage, totalPages } = props;
  if (totalPages <= 1) {
    return null;
  }
  
  const limit = (currentPage + 5) > totalPages ? totalPages - 1 : currentPage + 5;

  const range = [];
  for (let i = currentPage ; i <= limit; i++) {
    range.push(i);
  }

  const previous = currentPage > 1 ?
    (<li className="item"
        onClick={() => handlePage(currentPage - 1)}>
        {'<'}
    </li>) : null;
  
  const next = (<li className="item"
      onClick={() => handlePage(currentPage + 1)}>
      {'>'}
  </li>)

  return(
    <nav className="pagination-box">      
      <ul className="page-list">
        {previous}
        {
          range.map(page => 
            <li 
              key={page}
              className={classnames('item', {active: currentPage === page})} 
              onClick={() => handlePage(page)}>
              { page }
            </li>
          )
        }
        {next}
      </ul>
    </nav>
  );
}

export default ListPagination;
