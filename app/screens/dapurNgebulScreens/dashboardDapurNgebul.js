import React from 'react';
import { View, Text, SectionList, StyleSheet, ToastAndroid, Dimensions, StatusBar } from 'react-native';
import { RkTextInput, RkText } from 'react-native-ui-kitten';

import { FontAwesome } from '../../assets/icons';
import {
  NavBarDapurNgebul,
  ShowcaseList,
  ShowcaseListDrink,
  ShowcaseListExotic,
  BottomButtonDapurNgebul
} from '../../components/dapurNgebulComponents';

let windowWidth = Dimensions.get('window').width;

const longText = [
  "Our top seller Marble Taro is a sweet bread made with mixed grains and filled with signature taro filling. The idea of marbling two different colored batters into a cake originated in nineteenth century Germany. Marble cakes made their way to America with German immigrants before the Civil War. Originally the cakes were marbled with molasses and spices",
  "A simple pie like this easy fresh blueberry pie is often a forgotten dessert but one that will bring raves. A pie is a baked dish which is usually made of a pastry dough casing that covers or completely contains a filling of various sweet or savoury ingredients.",
  "The Bramble is a blackberry-based cocktail that’s rather simple to make and is nicely balanced in its sweet and sour tones. The cocktail is on its way to modern classic status, if it hasn’t already reached it, frequenting more bars than Ernest Hemingway and Oliver Reed combined. This is a drink best reserved for the end of summer, when that big yellow ball hangs lower in the sky and blackberries are readily available to be plucked from the bush and dolloped into your glass. However, with a few nifty substitutions, it can be transformed into a drink to match the Autumnal season, more on this below…"
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
      {title: 'Cake and Sweet', data: [<ShowcaseList backColor={'#48a9a6'} onPressFunc={() => this.props.navigation.navigate('FoodDetail', {title: 'Cake and Sweet', detailText: longText[0], imageSrc: require('../../data/img/taro.jpg')})} />]},
      {title: 'Exotic', data: [<ShowcaseListExotic backColor={'#c1666b'} onPressFunc={() => this.props.navigation.navigate('FoodDetail', {title: 'Exotic', detailText: longText[1], imageSrc: require('../../data/img/photo18.png')})} />]},
      {title: 'Drink', data: [<ShowcaseListDrink backColor={'#731dd8'} onPressFunc={() => this.props.navigation.navigate('FoodDetail', {title: 'Drink', detailText: longText[2], imageSrc: require('../../data/img/photo48.png')})} />]},
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