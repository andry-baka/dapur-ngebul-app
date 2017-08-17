import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { RkText } from 'react-native-ui-kitten';

import { NavBarDapurNgebul, BottomButtonDapurNgebul } from '../../components/dapurNgebulComponents';

let windowWidth = Dimensions.get('window').width;

export class CustomRecipeDapurNgebul extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      ingredientsData: [1, 2],
      text: '',
      height: 0
    }

    this._addIngredient = this._addIngredient.bind(this);
    this._deleteIngredient = this._deleteIngredient.bind(this);
    this._renderIngredients = this._renderIngredients.bind(this);
    this._renderInstructions = this._renderInstructions.bind(this);
  }

  _addIngredient() {
    let content = this.state.ingredientsData;
    let filler = 0;

    filler = content[content.length-1];
    content.push(filler);
    this.setState({
      ingredientsData: content
    })
  }

  _deleteIngredient() {
    let content = this.state.ingredientsData;
    
    content.pop();
    this.setState({
      ingredientsData: content
    })
  }

  _renderIngredients() {
    return (
      <View style={{flex: 1.5}}>
        <ScrollView>
          {this.state.ingredientsData.map((item, index) => (
            <View key={index} style={styles.inputIngredientContainer}>
              <TextInput
                style={styles.inputIngredient}
                underlineColorAndroid={'transparent'}
                onChangeText={null}
                placeholder={'ingredient'} />
              <RkText rkType='header5'>:</RkText>
              <TextInput
                style={styles.inputAmount}
                underlineColorAndroid={'transparent'}
                onChangeText={null}
                placeholder={'amount and unit'} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.buttonIngredientContainer}>
          <TouchableOpacity onPress={this._addIngredient}>
            <View style={styles.leftButtonIngredient}>
              <RkText rkType='header2'>+</RkText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._deleteIngredient}>
            <View style={styles.rightButtonIngredient}>
              <RkText rkType='header2'>-</RkText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _renderInstructions() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <TextInput
          style={[styles.inputInstruction, {height: Math.max(35, this.state.height)}]}
          underlineColorAndroid={'transparent'}
          multiline={true}
          maxLength={500}
          onChange={(event) => {
            this.setState({
              text: event.nativeEvent.text,
              height: event.nativeEvent.contentSize.height,
            });
          }}
          value={this.state.text}
        />
      </View>
    );
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <NavBarDapurNgebul nav={this.props.navigation} title={params.title} left={null} right={null} />
        <RkText style={styles.title} rkType='header4'>Pick the ingredients:</RkText>
        {this._renderIngredients()}
        <RkText style={styles.title} rkType='header4'>Cooking instructions:</RkText>
        {this._renderInstructions()}
        <BottomButtonDapurNgebul text={'Done'} onPressFunc={() => null}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  inputIngredientContainer: {
    width: windowWidth,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputIngredient: {
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 3,
    height: windowWidth * 0.1,
    width: windowWidth * 0.5,
    paddingHorizontal: 6,
    marginRight: 10,
    fontSize: windowWidth * 0.035
  },
  inputAmount: {
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 3,
    height: windowWidth * 0.1,
    width: windowWidth * 0.3,
    paddingHorizontal: 6,
    marginLeft: 5,
    fontSize: windowWidth * 0.035
  },
  inputInstruction: {
    width: windowWidth * 0.9,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 15,
    fontFamily: 'monospace'
  },
  title: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 20
  },
  buttonIngredientContainer: {
    width: windowWidth,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  leftButtonIngredient: {
    backgroundColor: '#efefef',
    borderRadius: 20,
    width: windowWidth * 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightButtonIngredient: {
    backgroundColor: '#efefef',
    borderRadius: 20,
    width: windowWidth * 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  }
});