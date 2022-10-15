import { connect } from 'react-redux';
import Login from './Login';
import { signIn } from '../../redux/reducers/authReducer';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from '../../redux/selectors/authSelectors';

class LoginContainer extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.authInfo !== this.props.authInfo) {
      this.render();
    }
  }

  render() {
    if (this.props.authInfo) {
      return <Navigate to={'/Profile'} />;
    } else if (!this.props.authInfo) {
      return <Login {...this.props} signIn={this.props.signIn} />;
    }
  }
}

let mapStateToProps = (state) => {
  return {
    authInfo: getIsAuth(state),
  };
};

export default connect(mapStateToProps, {
  signIn,
})(LoginContainer);
