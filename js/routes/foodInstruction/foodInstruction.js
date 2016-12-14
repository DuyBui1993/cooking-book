import React, {Component} from 'react';
import {Container,Header,Button,Icon,Content} from 'native-base';
import {View, Image, Text} from 'react-native';
import Swiper from 'react-native-swiper';

class FoodInstruction extends Component {
  constructor (props) {
    super(props);
    this.state = {
      food: {
          id: 1,
          title: 'Sườn xào chua ngọt',
          views: 0,
          imageUrl: 'http://comnha24h.com/wp-content/uploads/2014/07/suon-xao-chua-ngot-2.jpg',
          recipes: '<ul><li>2 dẻ sườn non</li><li>Cà chua: 2 quả nhỏ hoặc 1 quả lớn</li><li>1 củ hành khô, hành lá</li><li>Gia vị bao gồm : Mắm, muối, đường, tiêu</li></ul>',
          notes: '<ul style="text-align: justify;"><li>Sườn chín mềm, màu vàng đều đẹp và bóng, không bị tróc rời thịt và xương sườn.</li><li>Vị chua cay mặn ngọt &nbsp;hoà quyện vừa phải, nước cạn sền sệt quện đều vào miếng sườn.</li><li>Món ăn dậy mùi chua thơm nhè nhẹ của cà chua.</li><li>Nước sốt bóng đẹp bao ngoài miếng sườn, cắn miếng sườn có vị đậm đà ngấm vào bên trong chứ không chỉ có vị nước sốt bên ngoài.</li></ul>'
          steps: [
            {
              header: 'Ướp thịt heo',
              content: '1'
            },
            {
              header: 'Chần sườn heo',
              content: '2'
            },
            {
              header: '3',
              content: '3'
            },
            {
              header: '4',
              content: '4'
            },
            {
              header: '5',
              content: '5'
            },
            {
              header: '6',
              content: '6'
            },
            {
              header: '7',
              content: '7'
            },
            {
              header: '8',
              content: '8'
            },
            {
              header: '9',
              content: '9'
            },
            {
              header: '10',
              content: '10'
            },
            {
              header: '11',
              content: '11'
            },
            {
              header: '12',
              content: '12'
            }
          ]
        }
      }
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }


  render() {
    <Container>
      <Header>
        <Button transparent onPress={() => this.popRoute()}>
          <Icon name="ios-arrow-back" />
        </Button>
        <Title>{this.state.food.title ? this.state.food.title : 'Food Instruction'}</Title>
      </Header>
      <Content>
        <Swiper paginationStyle={styles.paginationStyle} loop={false}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}>
          {
            this.state.food.steps.map((step, i) => (
              <View style={styles.slide} key={i}>
                <Text>{i}</Text>
                <Text>{step.header}</Text>
                <Text>{step.content}</Text>
              </View>
            ))
          }
        </Swiper>
      </Content>
    </Container>
  }
}

export default FoodInstruction;
