import React from 'react';
import { View, Text, StyleSheet,
  TextInput, Switch, ScrollView, Dimensions } from 'react-native';
import { RkText } from 'react-native-ui-kitten';

import {
  NavBarDapurNgebul,
  CustomIngredient,
  ModalDialog,
  BottomButtonDapurNgebul
} from '../../components/dapurNgebulComponents';

const windowWidth = Dimensions.get('window').width;
const items = [
  {label: 'Cheese', type: 'fill', unit: 'pcs', stateKey: 'cheese'},
  {label: 'Jumbo size?', type: 'switch', unit: null, stateKey: 'size'},
  {label: 'With chocolate topping?', type: 'switch', unit: null, stateKey: 'topping'},
  {label: 'With extra cheese?', type: 'switch', unit: null, stateKey: 'extraCheese'},
  {label: 'Extra notes', type: 'fill', unit: '', stateKey: 'notes'},
];
export class CustomizeFoodDapurNgebul extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      size: true,
      topping: false,
      extraCheese: false,
      cheese: '',
      notes: ''
    };
  }

  _inputType (type, stateKey) {
    if (type === 'fill') {
      if (stateKey === 'notes') {
        return (
          <TextInput
          style={styles.inputNotes}
          onChangeText={(text) => this.setState({notes: text})}
          value={this.state.notes}
          placeholder={'Enter custom notes <max 100 chars>'}
          multiline={true}
          maxLength = {100}
          numberOfLines = {4}
          />
        );
      } else {
        return (
          <TextInput
          style={styles.input}
          onChangeText={null}
          placeholder={'amount'}
          keyboardType='numeric'
          maxLength={2} />
        );
      }
    } else if (type === 'switch') {
      if (stateKey === 'size') {
        return (
          <View style={styles.switchContainer}>
          <Switch
            onValueChange={(value) => this.setState({size: value})}
            value={this.state.size}/>
          </View>
        );
      }
      if (stateKey === 'topping') {
        return (
          <View style={styles.switchContainer}>
          <Switch
            onValueChange={(value) => this.setState({topping: value})}
            value={this.state.topping}/>
          </View>
        );
      }
      if (stateKey === 'extraCheese') {
        return (
          <View style={styles.switchContainer}>
          <Switch
            onValueChange={(value) => this.setState({extraCheese: value})}
            value={this.state.extraCheese}/>
          </View>
        );
      }
    }
  }

  _renderCustomIngredient() {
    return (
      <ScrollView style={{marginTop: 10, marginLeft: 10}}>
      {items.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <RkText style={styles.titleIngredient} rkType='header5'>{item.label}</RkText>
          {this._inputType(item.type, item.stateKey)}
          <Text>{item.unit}</Text>
        </View>
      ))}
    </ScrollView>
    )
  };

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>

        <ModalDialog
          modalVisible={this.state.modalVisible}
          contentTitle="Thank You!"
          contentText="You've been purchased food with your own custom recipe. Now you may proceed to payment or continue browsing foods."
          orderText={`jumbo: ${this.state.size}, chocolate: ${this.state.topping}, extraCheese: ${this.state.extraCheese}, notes: ${this.state.notes}`}
        >
        </ModalDialog>

        <NavBarDapurNgebul nav={this.props.navigation} title={params.title} left={null} right={null} />
        <RkText style={styles.title} rkType='header4'>Please adjust the ingredients here:</RkText>
        {this._renderCustomIngredient()}
        <BottomButtonDapurNgebul text={'Order Now'} onPressFunc={() => this.setState({ modalVisible: true })}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 20
  },

  titleIngredient: {
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
  inputNotes: {
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 3,
    height: 200,
    width: windowWidth * 0.5,
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