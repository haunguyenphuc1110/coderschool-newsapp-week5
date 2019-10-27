import React from 'react';
import { connect } from 'react-redux';

import AuthorView from './Author.view';

const AuthorScreen = props => <AuthorView {...props} />;

const mapStateToProps = state => ({
  authors: state.getNews.authors
});

const mapDispatchToProps = dispatch => ({
  
});

AuthorScreen.navigationOptions = {
  header: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorScreen);