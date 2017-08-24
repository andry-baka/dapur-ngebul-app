import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

let windowWidth = Dimensions.get('window').width;
const dummy = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

export const ShowcaseList = function({ backColor, data = dummy, onPressFunc }) {
  return (
    <ScrollView style={{marginVertical: 15}} horizontal={true}>
      {data.map((item, index) => (
        <TouchableOpacity key={index} onPress={onPressFunc}>
          <View style={styles.itemContainer}>
            {/*<View style={[styles.itemUpperContainer, {backgroundColor: backColor}]}>
              <Text style={{fontWeight: '500', color: 'white'}}>Photo</Text>
            </View>*/}
            <Image rkCardImg source={require("../../data/img/photo18.png")} />
            <View style={styles.itemLowerContainer}>
              <Text style={{fontWeight: '300', fontStyle: 'italic'}}>Title</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: windowWidth * 0.45,
    height: windowWidth * 0.6,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#efefef',
    padding: 5,
    marginHorizontal: 5
  },
  itemUpperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3
  },
  itemlowerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});