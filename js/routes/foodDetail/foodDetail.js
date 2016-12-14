import React, {Component} from 'react';
import {Image, Text, ScrollView, View, WebView} from 'react-native';
import {Container, Header, Footer, Content, Button, Icon, Title, Grid, Row, Col} from 'native-base';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class FoodDetail extends Component {
  constructor (props) {
    super(props);
    this.state = {
      food: {
          id: 1,
          title: 'Sườn xào chua ngọt',
          views: 0,
          imageUrl: 'http://comnha24h.com/wp-content/uploads/2014/07/suon-xao-chua-ngot-2.jpg',
          recipes: '<ul><li>2 dẻ sườn non</li><li>Cà chua: 2 quả nhỏ hoặc 1 quả lớn</li><li>1 củ hành khô, hành lá</li><li>Gia vị bao gồm : Mắm, muối, đường, tiêu</li></ul>',
          notes: '<ul style="text-align: justify;"><li>Sườn chín mềm, màu vàng đều đẹp và bóng, không bị tróc rời thịt và xương sườn.</li><li>Vị chua cay mặn ngọt &nbsp;hoà quyện vừa phải, nước cạn sền sệt quện đều vào miếng sườn.</li><li>Món ăn dậy mùi chua thơm nhè nhẹ của cà chua.</li><li>Nước sốt bóng đẹp bao ngoài miếng sườn, cắn miếng sườn có vị đậm đà ngấm vào bên trong chứ không chỉ có vị nước sốt bên ngoài.</li></ul>',
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
    return (
      <Container theme={myTheme}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>
          <Title>{this.state.food.title ? this.state.food.title : 'Food Detail'}</Title>
        </Header>
          <View>
            <Image style={styles.image} source={{uri: this.state.food.imageUrl}}></Image>
          </View>
          <View>
            <ScrollableTabView tabBarBackgroundColor={'#F4E8D1'}
              tabBarActiveTextColor={'#825526'} tabBarInactiveTextColor={'#825526'}
              tabBarUnderlineStyle={{backgroundColor:'#825526' , borderColor : '#825526' , borderBottomWidth : 0.1 , borderBottomColor : '#825526'}}>
            <ScrollView tabLabel='Nguyên liệu' style={styles.tabView}>
              <WebView style={styles.card}
                source={{html: '<body bgcolor="F4E8D1">' + this.state.food.recipes + '</body>'}}>
              </WebView>
            </ScrollView>

            <ScrollView tabLabel='Ghi chú' style={styles.tabView}>
              <WebView style={styles.card}
                source={{html: '<body bgcolor="F4E8D1">' + this.state.food.notes + '</body>'}}>
              </WebView>
            </ScrollView>
          </ScrollableTabView>

          </View>
          <Footer>
            <Grid style={{backgroundColor:'#fff'}}>
              <Col>
                <Text style={styles.footerStep}>{this.state.food.steps.length} Bước</Text>
              </Col>
              <Col>
                <Button style={styles.btnStart} primary>BẮT ĐẦU</Button>
              </Col>
            </Grid>
          </Footer>
        </Container>
    )
  }
}

export default FoodDetail;
