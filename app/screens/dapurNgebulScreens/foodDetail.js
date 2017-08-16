import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { RkCard, RkText } from 'react-native-ui-kitten';

import { Avatar } from '../../components';
import { NavBarDapurNgebul, BottomButtonDapurNgebul } from '../../components/dapurNgebulComponents';

let windowWidth = Dimensions.get('window').width;
let longText = 'Some of the core team will be working directly on GitHub. These changes will be public from the beginning. Other changesets will come via a bridge with Facebook\'s internal source control. This is a necessity as it allows engineers at Facebook outside of the core team to move fast and contribute from an environment they are comfortable in. When a change made on GitHub is approved, it will first be imported into Facebook\'s internal source control. The change will eventually sync back to GitHub as a single commit once it has passed all internal tests.'

export class FoodDetail extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <NavBarDapurNgebul nav={this.props.navigation} title={params.title} left={null} right={null} />
        <ScrollView style={styles.root}>
          <RkCard rkType='article'>
            <Image rkCardImg source={require('../../data/img/photo18.png')}/>
            <View rkCardHeader>
              <View>
                <RkText style={styles.title} rkType='header4'>Food Creator Name</RkText>
                <RkText rkType='secondary2 hintColor'>Sometime ago</RkText>
              </View>
              <TouchableOpacity onPress={null}>
                <Avatar rkType='circle' img={require('../../data/img/avatars/Image 5.png')}/>
              </TouchableOpacity>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary3 bigLine'>{longText}</RkText>
              </View>
            </View>
          </RkCard>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <BottomButtonDapurNgebul
            extraStyle={styles.leftButton}
            text={'Customize'}
            onPressFunc={() => this.props.navigation.navigate('CustomizeFood', {title: 'Adjust Ingredient'})} />
          <BottomButtonDapurNgebul extraStyle={styles.rightButton} text={'Order Now'} onPressFunc={() => null}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    marginBottom: 5
  },
  buttonContainer: {
    height: 55,
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  leftButton: {
    width: windowWidth * 0.5,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: '#efefef'
  },
  rightButton: {
    width: windowWidth * 0.5,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: '#efefef'
  }
});