import React from 'react';
import { View, Text, StyleSheet, TextInput, Switch, ScrollView, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const items = [
  {label: 'Label 1', type: 'fill', unit: 'pcs'},
  {label: 'Label 2', type: 'fill', unit: 'pcs'},
  {label: 'Label 3', type: 'fill', unit: 'pcs'},
  {label: 'Label 4', type: 'switch', unit: null},
];

export const CustomIngredient = ({ data = items }) => {
  function inputType(type) {
    if (type === 'fill') {
      return (
        <TextInput
          style={styles.input}
          onChangeText={null}
          placeholder={'amount'} />
      );
    } else if (type === 'switch') {
      return (
        <Switch
          onValueChange={(value) => console.log('changed')}/>
      );
    }
  }

  return (
    <ScrollView>
      {data.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text>{item.label}</Text>
          {inputType(item.type)}
          <Text>{item.unit}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderRadius: 3,
    height: windowWidth * 0.1,
    width: windowWidth * 0.2,
    paddingHorizontal: 8,
    fontSize: windowWidth * 0.035
  }
});