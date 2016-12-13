import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Button, Icon} from 'native-base';
import Swiper from 'react-native-swiper';
import styles from './styles';
import images from '../../config/images';
import themes from '../../themes/base-theme';

class Introduction extends Component {
  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    })
  }

  constructor (props) {
      super(props);
      this.state = {
        imgList: [
          {
            title: 'COOKING BOOK',
            description: 'Chào mừng bạn đến với thế giới nấu ăn của chúng tôi. Tại đây bạn có thể học cách làm các món ăn ngon để phục vụ cho những người thân yêu của mình. Chúc các bạn sẽ hài lòng khi sử dụng app nấu ăn này!!!!',
          },
          {
            title: 'COOKING BOOK 2',
            description: 'Chào mừng bạn đến với thế giới nấu ăn của chúng tôi. Tại đây bạn có thể học cách làm các món ăn ngon để phục vụ cho những người thân yêu của mình. Chúc các bạn sẽ hài lòng khi sử dụng app nấu ăn này!!!!',
          },
          {
            title: 'COOKING BOOK 3',
            description: 'Chào mừng bạn đến với thế giới nấu ăn của chúng tôi. Tại đây bạn có thể học cách làm các món ăn ngon để phục vụ cho những người thân yêu của mình. Chúc các bạn sẽ hài lòng khi sử dụng app nấu ăn này!!!!',
          },
          {
            title: 'COOKING BOOK 4',
            description: 'Chào mừng bạn đến với thế giới nấu ăn của chúng tôi. Tại đây bạn có thể học cách làm các món ăn ngon để phục vụ cho những người thân yêu của mình. Chúc các bạn sẽ hài lòng khi sử dụng app nấu ăn này!!!!',
          },
          {
            title: 'COOKING BOOK 5',
            description: 'Chào mừng bạn đến với thế giới nấu ăn của chúng tôi. Tại đây bạn có thể học cách làm các món ăn ngon để phục vụ cho những người thân yêu của mình. Chúc các bạn sẽ hài lòng khi sử dụng app nấu ăn này!!!!',
          }
        ]
      }
    }

    replaceRoute(route) {
      this.props.replaceAt('introduction', { key: route }, this.props.navigation.key);
    }

    render () {
        return (
            <Swiper paginationStyle={styles.paginationStyle} loop={false}
              dot={<View style={styles.dot} />}
              activeDot={<View style={styles.activeDot} />}>
              {
                this.state.imgList.map((item, i) => (
                  i !== this.state.imgList.length - 1 ?
                  <View style={styles.slide} key={i}>
                    <Image source={images.introduction[i]} style={styles.images}>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.description}>{item.description}</Text>
                    </Image>
                  </View> :
                  <View style={styles.slide} key={i}>
                    <Image source={images.introduction[i]} style={styles.images}>
                      <Button theme={themes} style={styles.btnContinue} primary iconRight
                        onPress={() => this.replaceRoute('home')}>
                        Vào màn hình chính
                        <Icon name='ios-arrow-forward' />
                      </Button>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.description}>{item.description}</Text>
                    </Image>
                  </View>
                ))
              }
            </Swiper>
        )
    }
}

export default Introduction
