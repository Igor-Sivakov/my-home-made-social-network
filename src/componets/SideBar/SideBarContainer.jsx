import { connect } from 'react-redux';
import SideBar from './SideBar';
import React from 'react';
import { getFriends } from './../../redux/sideBarReducer';
import { getUserProfile } from './../../redux/profileReducer';

class SideBarConainer extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <>
        <SideBar {...this.props} getUserProfile={this.props.getUserProfile} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar,
  };
};

export default connect(mapStateToProps, { getFriends, getUserProfile })(
  SideBarConainer
);
