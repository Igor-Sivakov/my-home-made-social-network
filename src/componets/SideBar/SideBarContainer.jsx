import { connect } from 'react-redux';
import SideBar from './SideBar';
import React from 'react';
import { getFriends } from './../../redux/sideBarReducer';

class SideBarConainer extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <>
        <SideBar {...this.props} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar,
  };
};

export default connect(mapStateToProps, { getFriends })(SideBarConainer);
