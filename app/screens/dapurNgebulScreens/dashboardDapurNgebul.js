import React from 'react';
import { View, Text, SectionList, StyleSheet, ToastAndroid, Dimensions, StatusBar } from 'react-native';
import { RkTextInput, RkText } from 'react-native-ui-kitten';

import { FontAwesome } from '../../assets/icons';
import { NavBarDapurNgebul, ShowcaseList } from '../../components/dapurNgebulComponents';

let windowWidth = Dimensions.get('window').width;

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
   * Change this when it will be used to search something.
   * @param {string} text - changed text from the text input
   */
  _filter(text) {
    this.setState({tempSearchBar: text});
    ToastAndroid.show(this.state.tempSearchBar, ToastAndroid.SHORT);
  }

  _renderItem = function({item}) {
    return (
      <View>{item}</View>
    );
  }

  _renderSection = function({section}) {
    return (
      <Text style={styles.sectionHeader}>{section.title}</Text>
    );
  }

  render() {
    const listData = [
      {title: 'Category 1', data: [<ShowcaseList backColor={'#48a9a6'} onPressFunc={null} />]},
      {title: 'Category 2', data: [<ShowcaseList backColor={'#731dd8'} onPressFunc={null} />]},
      {title: 'Category 3', data: [<ShowcaseList backColor={'#c1666b'} onPressFunc={null} />]},
    ];

    return (
      <View style={styles.container}>
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
        <SectionList
          sections={listData}
          keyExtractor={function(index) {return index}}
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSection}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: windowWidth,
    justifyContent: 'center'
  },
  searchBarContainer: {
    backgroundColor: '#efefef',
    paddingHorizontal: 16,
    paddingVertical: 10,
    height: 60,
    alignItems: 'center'
  },
  sectionHeader: {
    marginTop: 10,
    marginLeft: 12,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
  }
});