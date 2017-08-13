import React from 'react';
import {
  TouchableHighlight,
  View,
  ScrollView,
  Image,
  Platform,
  StyleSheet
} from 'react-native';
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';
import { FontAwesome } from '../../assets/icons';

export class SideMenuDapurNgebul extends React.Component {
  render() {
    let menu = this.props.items.map((route, index) => {
      return (
        <TouchableHighlight
          style={styles.container}
          key={index}
          underlayColor={'#efefef'}
          activeOpacity={1}
          onPress={() => this.props.navigation.navigate(route.routeName)}>
          <View style={styles.content}>
            <View style={styles.content}>
              <RkText>{route.routeName}</RkText>
            </View>
            <RkText rkType='awesome secondaryColor small'>{FontAwesome.chevronRight}</RkText>
          </View>
        </TouchableHighlight>
      )
    });

    return (
      <View style={styles.root}>
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <View style={[styles.container, styles.content]}>
            <Image style={styles.icon} source={require('../../assets/images/DapurNgebulLogoSmall.png')}/>
            <RkText rkType='logo'>Dapur Ngebul</RkText>
          </View>
          {menu}
        </ScrollView>
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  container: {
    height: 80,
    paddingHorizontal: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base
  },
  root: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: theme.colors.screen.base
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 13,
    resizeMode: 'cover',
    height: 40,
    width: 40
  }
}));