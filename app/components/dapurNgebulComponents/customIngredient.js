import React from 'react';
import { View, Text, StyleSheet, TextInput, Switch, ScrollView, Dimensions } from 'react-native';
import { RkText } from 'react-native-ui-kitten';

const windowWidth = Dimensions.get('window').width;
const items = [
  {label: 'Label 1', type: 'fill', unit: 'pcs'},
  {label: 'Label 2', type: 'fill', unit: 'pcs'},
  {label: 'Label 3', type: 'fill', unit: 'pcs'},
  {label: 'Label 4', type: 'switch', unit: null},
];

export class CustomIngredient extends React.Component {
  constructor() {
    super();
    this.state = {    // delete this later
      status: false
    };
  }

  _inputType(type) {
    if (type === 'fill') {
      return (
        <TextInput
          style={styles.input}
          onChangeText={null}
          placeholder={'amount'}
          keyboardType='numeric'
          maxLength={2} />
      );
    } else if (type === 'switch') {
      return (
        <View style={styles.switchContainer}>
        <Switch
          onValueChange={(value) => this.setState({status: value})}
          value={this.state.status}/>
        </View>
      );
    }
  }

  render() {
    const { data = items } = this.props;

    return (
      <ScrollView style={{marginTop: 10, marginLeft: 10}}>
        {data.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <RkText style={styles.title} rkType='header5'>{item.label}</RkText>
            {this._inputType(item.type)}
            <Text>{item.unit}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 7,
    width: windowWidth * 0.4
  },
  itemContainer: {
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10
  },
  input: {
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 3,
    height: windowWidth * 0.1,
    width: windowWidth * 0.2,
    paddingHorizontal: 8,
    marginRight: 10,
    fontSize: windowWidth * 0.035
  },
  switchContainer: {
    height: windowWidth * 0.1,
    width: windowWidth * 0.2,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});