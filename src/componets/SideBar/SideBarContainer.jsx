import SideBar from './SideBar';

const SideBarConainer = (props) => {
  let state = props.store.getState().sideBar;
  return <SideBar state={state} />;
};

export default SideBarConainer;
