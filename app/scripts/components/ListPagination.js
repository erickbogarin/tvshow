import React from 'react';

const ListPagination = props => {
  const { currentPage, handlePage, totalPages } = props;
  if (totalPages <= 1) {
    return null;
  }
  
  const range = [];
  for (let i = 0 ; i < totalPages; i++) {
    range.push(i + 1);
  }

  return(
    <nav>      
      <ul>
        {
          range.map(page => 
            <li 
              key={page} 
              onClick={() => handlePage(page)}>
              { page }
            </li>
          )
        }
      </ul>
    </nav>
  );
}

export default ListPagination;
