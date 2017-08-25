import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

let windowWidth = Dimensions.get('window').width;

const dummy = [
  {title: 'Taro marble cake', image: require('../../data/img/taro.jpg')},
  {title: 'Bday cake', image: require('../../data/img/cake2.jpg')},
  {title: 'Mango cake', image: require('../../data/img/Image 6.png')},
  {title: 'Pandan cake', image: require('../../data/img/cake1.jpg')},
];

export const ShowcaseList = function({ backColor, data = dummy, onPressFunc }) {
  return (
    <ScrollView style={{marginVertical: 15}} horizontal={true}>
      {data.map((item, index) => (
        <TouchableOpacity key={index} onPress={onPressFunc}>
          <View style={styles.itemContainer}>
            <Image 
              rkCardImg 
              style={styles.imageContainer}
              source={item.image}
            />
            <View style={styles.itemLowerContainer}>
              <Text style={{fontWeight: '300', fontStyle: 'italic'}}> {item.title} </Text>
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
  },
  imageContainer: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  }
});