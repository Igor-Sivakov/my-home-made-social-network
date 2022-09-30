import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { signOut } from '../../redux/authReducer';

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
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { signOut })(HeaderContainer);
