import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { signOut } from '../../redux/reducers/authReducer';
import {
  getAuthId,
  getAuthLogin,
  getIsAuth,
} from '../../redux/selectors/authSelectors';

class HeaderContainer extends React.Component {
  render() {
    return (
      <>
        <Header {...this.props} signOut={this.props.signOut} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: getIsAuth(state),
    authLogin: getAuthLogin(state),
    authId: getAuthId(state),
  };
};

export default connect(mapStateToProps, { signOut })(HeaderContainer);
