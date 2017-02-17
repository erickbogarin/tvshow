import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Isvg from 'react-inlinesvg';
import * as Actions from '../actions';

import SeachForm from '../components/SearchForm';
import MovieList from '../components/MovieList';
import Paginator from '../components/common/paginator';
import ListErrors from '../components/common/ListErrors';

class SearchPage extends Component {
  state = {    
    loading: false,
    errors: {}
  };
  
  componentDidMount() {    
    ReactDOM.findDOMNode(this).addEventListener('keyup', (e) => {
      if (e.which === 27) {
        this.resetSearch(e);
      }
    });
  }

  resetSearch = e => {
    e.preventDefault();
    
    this.setState({      
      errors: {}
    });
    this.props.resetSearch();    
  }

  handleSubmit = e => {
    e.preventDefault();

    let errors = {};
    if (this.props.title === '') {
      errors.title = 'Por favor, informe um título.';
    }
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      this.setState({ loading: true });    
      this.props.fetchSearchMovie(this.props.title)
        .then(() => this.setState({ loading: false }))
        .catch(() => this.setState({ loading: false }));
    }    
  }

  handleChange = e => {    
    if (this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.props.setTitle(e.target.value);
      this.setState({        
        errors
      });
    } else {      
      this.props.setTitle(e.target.value);
    }    
  };

  handlePageChanges = page => {
    this.setState({ loading: true });
    window.scrollTo(0, 0);

    this.props.fetchSearchMovie(
      this.props.title,
      page
    ).then(() => this.setState({ loading: false }));
  }

  render() {    
    const active = this.props.movies.length; 
    const { currentPage, totalResults } = this.props;

    return(            
      <div className={classnames('container search-box', {fullscreen: !active})}>        
        <div className={classnames('search-header', {active: active})}>          
          <h1>
            <Isvg className="logo" src={require(`../../../assets/media/icons/play.svg`)} />
            <span className="label">Search</span>
          </h1>          
          <SeachForm            
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleReset={this.resetSearch}
            title={this.props.title}
            disabled={this.state.loading} />                      
        </div>                 
        <ListErrors errors={this.state.errors} />

        { !active ? null :
          currentPage > 1 ?
            <h6 className="info">Page {currentPage} of about {totalResults} results</h6> :
            <h6 className="info">About {totalResults} results</h6>            
        }  
        <MovieList movies={this.props.movies} />
        <Paginator 
          totalPages={this.props.totalPages}
          currentPage={this.props.currentPage}
          handlePageChanges={this.handlePageChanges} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  title: state.movieList.title,
  totalPages: state.movieList.totalPages,
  totalResults: state.movieList.totalResults,
  currentPage: state.movieList.currentPage
});

export default connect(mapStateToProps, Actions)(SearchPage);
