import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {
  static propTypes = {
    name: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.array),
    selectItem: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  pushRoute(route, index) {
    this.props.selectItem(index);
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>

          <Title>{(this.props.name) ? this.props.name : 'COOKING BOOK'}</Title>

        </Header>

        <Content>
          <Grid style={styles.mt}>
            {this.props.list.map((row, i) => {
              return (
                <Row key={i}>
                  {row.map((col, j) => {
                    return (
                      <Col key={j} style={styles.col}>
                        <TouchableOpacity style={styles.item}
                          onPress={() => this.pushRoute('foodDetail', col.id)}>
                          <Image style={styles.colImage} source={{uri: col.imageUrl}}></Image>
                          <Row style={styles.caption}>
                            <Col size={2}><Text style={styles.title}>{col.title}</Text></Col>
                            <Col size={1}><Text style={styles.views}>{col.views} views</Text></Col>
                          </Row>
                        </TouchableOpacity>
                      </Col>
                    )
                  })}
                </Row>
              )
            })}
          </Grid>
        </Content>
      </Container>
    );
  }
}
export default Home;
