import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Button, TextButton} from './styles';

interface ButtonPros extends TouchableOpacityProps {
  title: string;
}

export function SubmitButton({title, ...rest}: ButtonPros) {
  return (
    <Button {...rest}>
      <TextButton>{title}</TextButton>
    </Button>
  );
}