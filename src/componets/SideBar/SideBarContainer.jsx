import { connect } from 'react-redux';
import SideBar from './SideBar';
import React from 'react';
import { getPeoples } from './../../redux/reducers/sideBarReducer';
import { getUserProfile } from './../../redux/reducers/profileReducer';
import { getIsAuth } from '../../redux/selectors/authSelectors';
import { getPeopleYouMayNow } from '../../redux/selectors/sideBarSelectors';

class SideBarConainer extends React.Component {
  componentDidMount() {
    this.props.getPeoples();
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
    peoples: getPeopleYouMayNow(state),
    isAuth: getIsAuth(state),
  };
};

export default connect(mapStateToProps, { getPeoples, getUserProfile })(
  SideBarConainer
);
