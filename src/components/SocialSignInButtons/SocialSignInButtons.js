import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
    const onSignInFacebook = () => {
        console.warn('onSignInFacebook');
    };

    const onSignInGoogle = () => {
        console.warn('onSignInGoogle');
    };

    const onSignInApple = () => {
        console.warn('onSignInApple');
    };

  return (
    <>
      <CustomButton 
            text="Sign In with Facebook" 
            onPress={onSignInFacebook}
            bgColor="#b0c4de" // E7EAF4
            fgColor="#4765A9"
        />
        <CustomButton 
            text="Sign In with Google" 
            onPress={onSignInGoogle}
            bgColor="#ffc6c4" // FAE9EA
            fgColor="#DD4D44"
        />
        <CustomButton 
            text="Sign In with Apple" 
            onPress={onSignInApple}
            bgColor="#c0c0c0" // e3e3e3
            fgColor="#363636"
        />
    </>
  );
};

export default SocialSignInButtons;