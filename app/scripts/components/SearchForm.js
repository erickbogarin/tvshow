import React from 'react';
import Isvg from 'react-inlinesvg';

const SearchForm = props => (
  <div>
    <form onSubmit={props.handleSubmit}>
    <fieldset disabled={props.disabled}>    
      <div className="form-group d-inline-flex">
        <input
          name="title"
          className="form-control"
          placeholder="Procure seu filme"
          value={props.title}
          onChange={props.handleChange} 
          type="text" />
      </div>      
      <button 
        className="btn btn-success btn-sm" 
        type="submit">
        <Isvg className="icon" src={require(`../../../assets/media/icons/search.svg`)} />
      </button>
    </fieldset>  
  </form>  
    <button onClick={props.handleReset}>
      reset
    </button>      
  </div>  
);

export default SearchForm;
