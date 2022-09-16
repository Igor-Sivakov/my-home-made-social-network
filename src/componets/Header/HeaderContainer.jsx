import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setUserData } from '../../redux/authReducer';
import { authAPI } from './../API/API';

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.getAuth().then((data) => {
      let { id, email, login } = data.data;
      if (data.resultCode === 0) {
        this.props.setUserData(id, email, login);
      }
    });
  }

  render() {
    return (
      <>
        <Header {...this.props} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
