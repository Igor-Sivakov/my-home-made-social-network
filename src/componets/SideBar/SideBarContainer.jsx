import { connect } from 'react-redux';
import SideBar from './SideBar';

let mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar,
  };
};

let SideBarConainer = connect(mapStateToProps)(SideBar);

export default SideBarConainer;
