import Introduction from './introduction';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';

const { replaceAt } = actions;

function bindActions(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key))
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(Introduction);
