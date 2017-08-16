import React from 'react';
import { StyleSheet, View, Dimensions, TouchableHighlight } from 'react-native';
import { RkText } from 'react-native-ui-kitten';

const windowWidth = Dimensions.get('window').width;

export const BottomButtonDapurNgebul = ({ text, onPressFunc, extraStyle }) => {
  return (
    <TouchableHighlight activeOpacity={0.8} onPress={onPressFunc} underlayColor={'#eaa846'}>
      <View style={[styles.buttonContainer, extraStyle]}>
        <RkText style={{color: 'black'}} rkType='header4'>{text}</RkText>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 55,
    width: windowWidth,
    borderTopWidth: 2,
    borderTopColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center'
  }
});