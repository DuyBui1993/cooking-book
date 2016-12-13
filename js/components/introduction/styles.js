import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
import {getCorrectFontSizeForScreen} from '../../utils/multiResolution';
import colors from '../../config/colors';
const {height: h, width: w} = Dimensions.get('window');

export default StyleSheet.create({
    slide: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'transparent'
    },
    title: {
        marginTop: h / 10,
        textAlign: 'center',
        fontSize: getCorrectFontSizeForScreen(PixelRatio, w, h, 28),
        marginBottom: 5,
        color: '#8D6437'
    },
    description: {
        paddingHorizontal: w / 10,
        textAlign: 'center',
        fontSize: getCorrectFontSizeForScreen(PixelRatio, w, h, 7),
        color: '#AE916B'
    },
    paginationStyle: {
        top: -h/3
    },
    images: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'stretch'
    },
    dot: {
        backgroundColor: '#fff',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    activeDot: {
        backgroundColor: '#E37B3E',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    btnContinue: {
      position: 'absolute',
      right: 5,
      top: 5
    }
});
