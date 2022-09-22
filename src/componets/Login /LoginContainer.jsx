import { connect } from 'react-redux';
import Login from './Login';
import { signIn } from './../../redux/authReducer';
import React from 'react';
import { Navigate } from 'react-router-dom';

class LoginContainer extends React.Component {
  state = {
    rerender: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.authInfo !== this.props.authInfo) {
      this.setState({
        rerender: true,
      });
    } else if (prevState.render !== this.state.rerender) {
      this.render();
    }
  }

  render() {
    if (this.state.rerender) {
      return <Navigate to={'/Profile'} />;
    } else if (!this.state.rerender) {
      return <Login {...this.props} signIn={this.props.signIn} />;
    }
  }
}

let mapStateToProps = (state) => {
  return {
    authInfo: state.auth,
  };
};

export default connect(mapStateToProps, {
  signIn,
})(LoginContainer);
