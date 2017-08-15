import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { RkText } from 'react-native-ui-kitten';

import { NavBarDapurNgebul, CustomIngredient } from '../../components/dapurNgebulComponents';

const windowWidth = Dimensions.get('window').width;

export class CustomizeFood extends React.Component{
  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <NavBarDapurNgebul nav={this.props.navigation} title={params.title} left={null} right={null} />
        <CustomIngredient />
        <TouchableHighlight activeOpacity={0.8} onPress={() => null} underlayColor={'#eaa846'}>
          <View style={styles.buttonContainer}>
            <RkText style={{color: 'black'}} rkType='header4'>Order Now</RkText>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  buttonContainer: {
    height: 55,
    width: windowWidth,
    borderTopWidth: 1,
    borderTopColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center'
  }
});