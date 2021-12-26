import styled from 'styled-components/native';

export const ContainerImgServices = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  background-color: ${({theme})=> theme.colors.backgroundColor};
  height: 226px;
  width: 104px;
  align-items:center;
  margin-left: 12px;



  
`;

export const ImgCardServices = styled.Image`
  height: 160px;
  width: 104px;
  border-radius: 4px;

  
`;