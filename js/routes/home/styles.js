import {StyleSheet, Dimensions} from 'react-native';
const {height: h, width: w} = Dimensions.get('window');
module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#F4E8D1',
  },
  ite: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  mt: {
    marginTop: 18,
  },
  colImage: {
    flex: 1,
    width: w/2 - 20,
    height: w/2 - 20,
    resizeMode: 'stretch'
  },
  col: {
    marginBottom: 20,
    marginHorizontal: 10,
    backgroundColor: '#fff',
  },
  'col:last-child': {
    marginBottom: 0
  },
  caption: {
    height: 24
  },
  title: {
    margin: 0,
    fontWeight: 'bold',
    paddingLeft: 10,
    fontSize: 10,
    lineHeight: 20
  },
  views: {
    textAlign: 'right',
    paddingRight: 5,
    fontSize: 8,
    lineHeight: 20,
    color: '#ccc'
  }
});
