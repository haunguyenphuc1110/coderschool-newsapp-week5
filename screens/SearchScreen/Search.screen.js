import React from 'react';
import { connect } from 'react-redux';

import { searchNewsAction } from '../../store/actions/getNewsAction';

import SearchView from './Search.view';

const SearchScreen = props => <SearchView {...props} />;

const mapStateToProps = state => {
  return {
    news: state.getNews.searchingArticles,
    pending: state.getNews.pending,
    error: state.getNews.error
  }
};

const mapDispatchToProps = dispatch => ({
  searchNews: (search) => dispatch(searchNewsAction(search))
});

SearchScreen.navigationOptions = {
  header: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen);
