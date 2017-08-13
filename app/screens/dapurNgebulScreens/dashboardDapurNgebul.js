import React from 'react';
import { View, Text, SectionList, StyleSheet, ToastAndroid, Dimensions, StatusBar } from 'react-native';
import { RkTextInput, RkText } from 'react-native-ui-kitten';

import { FontAwesome } from '../../assets/icons';
import { NavBarDapurNgebul } from '../../components/index';
import { UIConstants } from '../../config/appConstants';

export class DashboardDapurNgebul extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempSearchBar: ''
    };
  }

  componentDidMount() {
    StatusBar.setHidden(false, 'slide');
  }

  /**
   * Temporary method just to spawn a toast with changed text from the search bar.
   * Change it when it will be used to search something.
   * @param {string} text - changed text from the text input
   */
  _filter(text) {
    this.setState({tempSearchBar: text});
    ToastAndroid.show(this.state.tempSearchBar, ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <NavBarDapurNgebul navigation={this.props.navigation} title={'Foods'} left={FontAwesome.bars} right={FontAwesome.search} />
        <View style={styles.searchBarContainer}>
          <RkTextInput
            autoCapitalize='none'
            autoCorrect={false}
            onChange={(event) => this._filter(event.nativeEvent.text)}
            label={<RkText rkType='awesome'>{FontAwesome.search}</RkText>}
            rkType='row'
            placeholder='Search'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    width: Dimensions.get('window').width,
    height: 60 + UIConstants.AppbarHeight
  },
  searchBarContainer: {
    backgroundColor: '#efefef',
    paddingHorizontal: 16,
    paddingVertical: 10,
    height: 60,
    alignItems: 'center'
  }
});