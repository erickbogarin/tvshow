import React from 'react';
import classnames from 'classnames';

import ListPagination from './ListPagination';
import PageItem from './PageItem';

const Paginator = props => {
  const { currentPage, handlePageChanges, totalPages } = props;
  
  if (totalPages <= 1) {
    return null;
  }

  const range = [];
  let itemsLimit = 6;

  const renderPagination = (list, previous, next) => {
    return(
      <ListPagination>
        {previous}
        { list.map(page => <PageItem 
            key={page}
            currentPage={currentPage}
            label={page}
            pageNumber={page} 
            handlePageChanges={handlePageChanges} />) }
        {next}
      </ListPagination>
    );
  };

  if (totalPages <= itemsLimit) {
    for (let i = 1 ; i <= totalPages; i++) {
      range.push(i);
    }
    return renderPagination(range);    
  }

  const lastPagesIndex = totalPages - itemsLimit;
  const previousPageNode = currentPage > 1 ?
    <PageItem 
      key={currentPage - 1}
      currentPage={currentPage}
      label="<"
      pageNumber={currentPage - 1} 
      handlePageChanges={handlePageChanges} /> : null;  

  if (currentPage > lastPagesIndex) {
    for (let i = lastPagesIndex + 1; i <= totalPages; i++) {
      range.push(i);
    }
    return renderPagination(range, previousPageNode);    
  }
  itemsLimit -= 1;

  const currentLastPagesIndex = currentPage + itemsLimit;
  const pagesLimit = currentLastPagesIndex > totalPages ? 
    totalPages - 1 : currentLastPagesIndex;
  
  for (let i = currentPage ; i <= pagesLimit; i++) {
    range.push(i);
  }

  const nextPageNode = <PageItem 
    key={currentPage + 1}
    currentPage={currentPage}
    label=">"
    pageNumber={currentPage + 1} 
    handlePageChanges={handlePageChanges} />;

  return renderPagination(range, previousPageNode, nextPageNode);
}

export default Paginator;
