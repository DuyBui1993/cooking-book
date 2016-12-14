import React, { Component } from 'react';
import { Content, Container, Header, Text, Button, Icon, Title } from 'native-base';
import myTheme from '../../themes/base-theme';
import styles from './style';

class SideBar extends Component {

  static propTypes = {
    // setIndex: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Container theme={myTheme}>
      <Header>
          <Button transparent onPress={() => this.navigateTo('home')}>
            <Icon name="ios-home" style={styles.icon} />
            <Text>Trang chủ</Text>
          </Button>
          <Text></Text>
      </Header>
      <Content style={styles.sidebar}>
        <Button transparent onPress={() => this.navigateTo('history')}>
          <Icon name="ios-time" style={styles.icon} />
          <Text>Lịch sử</Text>
        </Button>
        <Button transparent onPress={() => this.navigateTo('profile')}>
          <Icon name="ios-person" style={styles.icon} />
          <Text>Về bạn</Text>
        </Button>
      </Content>
    </Container>
    );
  }
}

export default SideBar;
