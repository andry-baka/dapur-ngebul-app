import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { RkCard, RkText } from 'react-native-ui-kitten';

import { Avatar } from '../../components';
import {
  NavBarDapurNgebul,
  BottomButtonDapurNgebul,
  ModalDialog
} from '../../components/dapurNgebulComponents';
import Modal from 'react-native-modal';

let windowWidth = Dimensions.get('window').width;
let longText = 'Our top seller Marble Taro is a sweet bread made with mixed grains and filled with signature taro filling. The idea of marbling two different colored batters into a cake originated in nineteenth century Germany. Marble cakes made their way to America with German immigrants before the Civil War. Originally the cakes were marbled with molasses and spices'

export class FoodDetailDapurNgebul extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
  }

  render() {
    const { params } = this.props.navigation.state;
    
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <NavBarDapurNgebul nav={this.props.navigation} title={params.title} left={null} right={null} />
        <ScrollView style={styles.root}>
          <RkCard rkType='article'>
            <Image rkCardImg source={require('../../data/img/taro.jpg')}/>
            <View rkCardHeader>
              <View>
                <RkText style={styles.title} rkType='header4'>By DapurNgebul team</RkText>
                <RkText rkType='secondary2 hintColor'>Recommended, Special price</RkText>
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

          <ModalDialog
            modalVisible={this.state.modalVisible}
            contentTitle="Thank You!"
            contentText="You've been purchased food with your own custom recipe. Now you may proceed to payment or continue browsing foods.">
          </ModalDialog>

          <BottomButtonDapurNgebul
            extraStyle={styles.leftButton}
            text={'Customize'}
            onPressFunc={() => this.props.navigation.navigate('CustomizeFood', {title: 'Adjust Ingredient'})} />
          <BottomButtonDapurNgebul
            extraStyle={styles.rightButton}
            text={'Order Now'}
            onPressFunc={() => this.setState({ modalVisible: true })}/>
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