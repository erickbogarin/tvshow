import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Isvg from 'react-inlinesvg';
import * as Actions from '../actions';

import SeachForm from '../components/SearchForm';
import MovieList from '../components/MovieList';
import Paginator from '../components/common/paginator';
import ListErrors from '../components/ListErrors';

class SearchPage extends Component {
  state = {
    title: '',
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
      title: '',
      errors: {}
    });
    this.props.resetSearch();    
  }

  handleSubmit = e => {
    e.preventDefault();

    let errors = {};
    if (this.state.title === '') {
      errors.title = 'Por favor, informe um título.';
    }
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      this.setState({ loading: true });    
      this.props.fetchSearchMovie(this.state.title)
        .then(() => this.setState({ loading: false }))
        .catch(() => this.setState({ loading: false }));
    }    
  }

  handleChange = e => {
    if (this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }    
  };

  handlePageChanges = page => {
    this.setState({ loading: true });

    this.props.fetchSearchMovie(
      this.state.title,
      page
    ).then(() => this.setState({ loading: false }));
  }

  render() {    
    const active = this.props.movies.length; 
    return(            
      <div className={classnames('search-box', {fullscreen: !active})}>        
        <div className={classnames('search-header', {active: active})}>          
          <h1>
            <Isvg className="logo" src={require(`../../../assets/media/icons/play.svg`)} />
            <span>Search</span>
          </h1>          
          <SeachForm            
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleReset={this.resetSearch}
            title={this.state.title}
            disabled={this.state.loading} />                      
        </div>                 
        <ListErrors errors={this.state.errors} />
        
        <Paginator 
          totalPages={this.props.totalPages}
          currentPage={this.props.currentPage}
          handlePageChanges={this.handlePageChanges} />
        <MovieList movies={this.props.movies} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  totalPages: state.movieList.totalPages,
  currentPage: state.movieList.currentPage
});

export default connect(mapStateToProps, Actions)(SearchPage);
