import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import Modal from 'react-native-modal';

import SmsAndroid from 'react-native-sms-android';

const windowWidth = Dimensions.get('window').width;

export class ModalDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: props.modalVisible };
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.modalVisible !== 'undefined') {
      this._displayModal(nextProps.modalVisible);
    }
  }

  _closeModal = () => {
    console.log('text: ',this.props.orderText);
    if (Platform.OS === 'android') {
      // SmsAndroid.sms(
      //   '087839186362', // phone number to send sms to 
      //   'Order from DapurNgebul! ' + this.props.orderText, // sms body 
      //   'sendDirect', // sendDirect or sendIndirect 
      //   (err, message) => {
      //     if (err){
      //       console.log("error");
      //       alert("error sending sms to 087839186362");
      //     } else {
      //       console.log(message); // callback message
      //     }
      //   }
      // );
      SmsAndroid.sms(
        '085738429606', // phone number to send sms to 
        'Order from DapurNgebul! ' + this.props.orderText, // sms body 
        'sendDirect', // sendDirect or sendIndirect 
        (err, message) => {
          if (err){
            console.log("error");
            alert("error sending sms to 081334272304");
          } else {
            console.log(message); // callback message
          }
        }
      );
    }
    this.setState({ modalVisible: false })
  };

  _displayModal = visible => this.setState({ modalVisible: visible });

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.actionButton}>
        <RkText style={{color: 'black'}} rkType='header4'>{text}</RkText>
      </View>
    </TouchableOpacity>

  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <View style={styles.contentTitle}>
        <RkText rkType='header4'>{this.props.contentTitle}</RkText>
      </View>
      <View style={styles.contentText}>
        <RkText rkType='primary3 bigLine'>{this.props.contentText}</RkText>
      </View>
      <View style={styles.actions}>
        {this._renderButton('Pay Now', this._closeModal)}
        {this._renderButton('Pay Now', this._closeModal)}
      </View>
    </View>
  );

  render() {
    const { modalVisible } = this.state;

    return (
      <Modal
        isVisible={modalVisible}
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
        onBackdropPress={this._closeModal}
      >
        {this._renderModalContent()}
      </Modal>
    );
  }
};

const styles = StyleSheet.create({
  modalContent: {
    height: 300,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    flex: 1,
    marginTop: 20,
  },
  contentText: {
    flex: 1,
    margin: 20,
    marginTop: -20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    maxHeight: 60,
  },
  actionButton: {
    flex: 1,
    width: windowWidth * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#efefef'
  }
});