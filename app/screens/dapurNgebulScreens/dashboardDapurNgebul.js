import React from 'react';
import { View, Text, SectionList, StyleSheet, ToastAndroid, Dimensions, StatusBar } from 'react-native';
import { RkTextInput, RkText } from 'react-native-ui-kitten';

import { FontAwesome } from '../../assets/icons';
import {
  NavBarDapurNgebul,
  ShowcaseList,
  ShowcaseListDrink,
  ShowcaseListSpicy,
  BottomButtonDapurNgebul
} from '../../components/dapurNgebulComponents';

let windowWidth = Dimensions.get('window').width;

const longText = [
  "Our top seller Marble Taro is a sweet bread made with mixed grains and filled with signature taro filling. The idea of marbling two different colored batters into a cake originated in nineteenth century Germany. Marble cakes made their way to America with German immigrants before the Civil War. Originally the cakes were marbled with molasses and spices",
  "Text dua",
  "Text tiga"
];

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
      {title: 'Cake and Sweet', data: [<ShowcaseList backColor={'#48a9a6'} onPressFunc={() => this.props.navigation.navigate('FoodDetail', {title: 'Cake and Sweet', detailText: longText[0], imageSrc: require('../../data/img/cake1.jpg')})} />]},
      {title: 'Drink', data: [<ShowcaseListDrink backColor={'#731dd8'} onPressFunc={() => this.props.navigation.navigate('FoodDetail', {title: 'Drink', detailText: longText[1], imageSrc: require('../../data/img/cake2.jpg')})} />]},
      {title: 'Spicy', data: [<ShowcaseListSpicy backColor={'#c1666b'} onPressFunc={() => this.props.navigation.navigate('FoodDetail', {title: 'Spicy', detailText: longText[2], imageSrc: require('../../data/img/taro.jpg')})} />]},
    ];

    return (
      <View style={styles.container}>
        <NavBarDapurNgebul nav={this.props.navigation} title={'Foods'} left={FontAwesome.bars} right={FontAwesome.search} />
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
        <BottomButtonDapurNgebul text={'Add Custom Recipe'} onPressFunc={() => this.props.navigation.navigate('CustomRecipe', {title: 'Your own recipe'})}/>
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