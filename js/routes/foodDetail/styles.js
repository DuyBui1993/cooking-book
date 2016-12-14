import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
import {getCorrectFontSizeForScreen} from '../../utils/multiResolution';
const {height: h, width: w} = Dimensions.get('window');
export default StyleSheet.create({
  tabView: {
    flex: 1,
    height: h / 2 - 15
  },
  card: {
    flex: 1,
    padding: 15,
    height: h / 2 - 15
  },
  image: {
    height: h/4,
    resizeMode: 'stretch'
  },
  footerStep: {
    color: '#FA9F0B',
    lineHeight: 42,
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w, h, 24)
  },
  btnStart: {
    alignSelf: 'flex-end',
    marginRight: 5,
    marginTop: 5,
  }
})
