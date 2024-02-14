import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.CBiografia};
  elevation: 5;
`;

export const TextButton = styled.Text`
  font-size: 17px;
  color: ${({theme}) => theme.colors.backgroundColor}
`;
