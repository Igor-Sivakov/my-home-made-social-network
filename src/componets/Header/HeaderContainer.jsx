import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setUserData } from '../../redux/authReducer';
import axios from 'axios';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        let { id, email, login } = response.data.data;
        if (response.data.resultCode === 0) {
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
