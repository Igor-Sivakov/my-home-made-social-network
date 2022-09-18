import { connect } from 'react-redux';
import React from 'react';
import { Navigate } from 'react-router-dom';

let mapDispatchToPropsForReNavigate = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthReNavigate = (Component) => {
  class ReNavigateComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to={'/Login'} />;
      return <Component {...this.props} />;
    }
  }

  let ConnectedAuthReNavigateComponent = connect(
    mapDispatchToPropsForReNavigate
  )(ReNavigateComponent);

  return ConnectedAuthReNavigateComponent;
};
