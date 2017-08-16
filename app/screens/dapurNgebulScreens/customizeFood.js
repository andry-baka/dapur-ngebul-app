import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavBarDapurNgebul, CustomIngredient, BottomButtonDapurNgebul } from '../../components/dapurNgebulComponents';

export class CustomizeFood extends React.Component{
  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <NavBarDapurNgebul nav={this.props.navigation} title={params.title} left={null} right={null} />
        <CustomIngredient />
        <BottomButtonDapurNgebul text={'Order Now'} onPressFunc={() => null}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});