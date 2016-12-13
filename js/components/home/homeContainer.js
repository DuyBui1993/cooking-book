import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';
import Home from './home';

const { reset, pushRoute } = actions;

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'login' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Home);
