import styled from 'styled-components/native';

export const ContainerImgServices = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  background-color: ${({theme})=> theme.colors.backgroundColor};
  height: 230px;
  width: 104px;
  align-items:center;
  margin-left: 12px;
`;

export const NameBook = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.primary};
  width: 100%;
  font-weight: bold;
  `;

export const Author = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.colors.CTPolitica};
  width: 100%;
  `;

export const ContainerStar = styled.View`
  flex-direction: row;
  height: 10px;
  width: 100px;
  margin-top: 4px;
  `;
export const Star = styled.Image`
  height: 10px;
  width: 10px;
  `;

export const ImgCardServices = styled.Image`
  height: 160px;
  width: 104px;
  border-radius: 4px;

  
`;