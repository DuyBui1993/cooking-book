import { connect } from 'react-redux';
import { setIndex } from '../../actions/list';
import navigateTo from '../../actions/sideBarNav';
import SideBar from './sidebar';

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(SideBar);
