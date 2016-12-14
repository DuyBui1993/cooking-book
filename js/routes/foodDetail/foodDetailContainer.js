import FoodDetail from './foodDetail';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';

const { popRoute } = actions;

function bindAction(dispatch) {
  return {
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  index: state.list.selectedItemId,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(FoodDetail);
