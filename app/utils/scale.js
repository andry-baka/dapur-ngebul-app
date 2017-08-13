import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
// const guidelineBaseWidth = 350;
// const guidelineBaseHeight = 680;
const guidelineBaseWidth = Dimensions.get('window').width;
const guidelineBaseHeight = Dimensions.get('window').height;

const scale = size => width / guidelineBaseWidth * size;
const scaleVertical = size => height / guidelineBaseHeight * size;
const scaleModerate = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, scaleVertical, scaleModerate};