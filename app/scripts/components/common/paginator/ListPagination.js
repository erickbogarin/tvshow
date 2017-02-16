import React, {Component} from 'react';

class ListPaginator extends Component {
  render() {
    return(
      <nav className="pagination-box">        
        <ul className="page-list">        
          {this.props.children}
        </ul>
      </nav>
    );
  }  
};

export default ListPaginator;
