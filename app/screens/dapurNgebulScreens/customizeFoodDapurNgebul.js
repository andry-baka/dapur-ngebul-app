import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RkText } from 'react-native-ui-kitten';

import {
  NavBarDapurNgebul,
  CustomIngredient,
  ModalDialog,
  BottomButtonDapurNgebul
} from '../../components/dapurNgebulComponents';

export class CustomizeFoodDapurNgebul extends React.Component{
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>

        <ModalDialog
          modalVisible={this.state.modalVisible}
          contentTitle="Thank You!"
          contentText="You've been purchased food with your own custom recipe. Now you may proceed to payment or continue browsing foods.">
        </ModalDialog>

        <NavBarDapurNgebul nav={this.props.navigation} title={params.title} left={null} right={null} />
        <RkText style={styles.title} rkType='header4'>Adjust the ingredients:</RkText>
        <CustomIngredient />
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
  }
});