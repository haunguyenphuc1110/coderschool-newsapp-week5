import React from 'react';
import { connect } from 'react-redux';

import { getNewsAction, resetNewsAction } from '../../store/actions/getNewsAction';

import HomeView from './Home.view';

const HomeScreen = props => <HomeView {...props} />;

const mapStateToProps = state => {
  return {
    news: state.getNews.articles,
    pending: state.getNews.pending,
    error: state.getNews.error
  }
};

const mapDispatchToProps = dispatch => ({
  getNews: (pageNumber) => dispatch(getNewsAction(pageNumber)),
  reset: () => dispatch(resetNewsAction())
});

HomeScreen.navigationOptions = {
  header: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
