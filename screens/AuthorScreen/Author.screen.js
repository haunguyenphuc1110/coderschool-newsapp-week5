import React from 'react';
import { connect } from 'react-redux';

import AuthorView from './Author.view';

const AuthorScreen = props => <AuthorView {...props} />;

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  
});
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthorScreen);
AuthorScreen.navigationOptions = {
  header: null,
};
export default AuthorScreen;