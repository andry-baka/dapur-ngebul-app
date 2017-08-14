import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
import _ from 'lodash';
import { NavigationActions } from 'react-navigation';
import {RkText, RkButton, RkStyleSheet} from 'react-native-ui-kitten';
import {UIConstants} from '../../config/appConstants';
import { FontAwesome } from '../../assets/icons';

export class NavBarDapurNgebul extends React.Component {
  constructor(props) {
    super(props);
    this.state = {width: undefined};
  }

  _renderRight(headerRight) {
    let windowWidth = Dimensions.get('window').width;
    const width = this.state.width
      ? windowWidth / 3
      : undefined;

    return headerRight && (
        <View style={[{width}, styles.right]}>
           <RkText rkType='awesome'>{headerRight}</RkText>
        </View>
      );
  }

  _renderLeft(drawer) {
    let windowWidth = Dimensions.get('window').width;
    const width = this.state.width
      ? (windowWidth - this.state.width) / 2
      : undefined;
      
    return (
      <View style={[{width}, styles.left]}>
        {drawer
        ? <RkButton
            rkType='clear'
            style={styles.menu}
            onPress={() => this.props.navigation.navigate('DrawerOpen')}>
            <RkText rkType='awesome'>{FontAwesome.bars}</RkText>
          </RkButton>
        : <RkButton
            rkType='clear'
            style={styles.menu}
            onPress={() => this.props.navigation.dispatch(new NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home' })]
            }))}>
            <RkText rkType='awesome hero'>{FontAwesome.chevronLeft}</RkText>
          </RkButton>}
      </View>
    )
  }

  _renderTitle(headerTitle) {
    const onLayout = (e) => {
      this.setState({
        width: e.nativeEvent.layout.width,
      });
    };

    return (
      <View style={styles.title} onLayout={onLayout}>
        <RkText>{headerTitle}</RkText>
      </View>
    )
  }

  render() {
    const { title, left, right } = this.props;
    
    return (
      <View style={styles.layout}>
        <View style={styles.container}>
          {this._renderTitle(title)}
          {this._renderLeft(left)}
          {this._renderRight(right)}
        </View>
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  layout: {
    backgroundColor: theme.colors.screen.base,
    paddingTop: UIConstants.StatusbarHeight,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border.base
  },
  container: {
    flexDirection: 'row',
    height: UIConstants.AppbarHeight,

  },
  left: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  },
  right: {
    position: 'absolute',
    right: 20,
    top: 0,
    bottom: 0,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: 40
  }
}));