import { Dimensions, Platform } from 'react-native';

export function isIphoneX() {
  const dim = Dimensions.get('window');
  
  let isIt = (
    // This has to be iOS
    Platform.OS === 'ios' &&
    
    // Check either, iPhone X or XR
    (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
  );

  console.log(isIt)
  return isIt;
}

export function isIPhoneXSize(dim) {
  return dim.height == 812 || dim.width == 812;
}

export function isIPhoneXrSize(dim) {
  return dim.height == 896 || dim.width == 896;
}