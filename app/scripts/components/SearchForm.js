import React from 'react';
import Isvg from 'react-inlinesvg';
import classnames from 'classnames';

const SearchForm = props => (  
  <form className="form-horizontal" onSubmit={props.handleSubmit}>
    <fieldset className="search-input" disabled={props.disabled}>            
      <input
        name="title"
        className="form-control input"
        placeholder="Procure seu filme"
        value={props.title}
        onChange={props.handleChange} 
        type="text" />                    
      <button 
        className={classnames('reset', { active: props.title })} 
        type="reset"
        onClick={props.handleReset}>
          <Isvg className="icon" src={require(`../../../assets/media/icons/close.svg`)} />
      </button>
    </fieldset>
    <button 
      className="button" 
      type="submit">
        <Isvg className="icon" src={require(`../../../assets/media/icons/search.svg`)} />
      </button>  
  </form>        
);

export default SearchForm;
