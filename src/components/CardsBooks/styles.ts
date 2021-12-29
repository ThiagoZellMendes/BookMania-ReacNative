import styled from 'styled-components/native';

export const ContainerImgbooks = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  background-color: ${({theme})=> theme.colors.backgroundColor};
  height: 240px;
  width: 118.6px;
  margin-left: 12px;
  border-width: 0.7px;
  border-radius: 4px;
  elevation: 5;
  `;
export const ImgCardbooks = styled.Image`
  height: 160px;
  width: 117px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  `;

export const ContainerNameBooks = styled.View`
  width: 104px;
  height: 32px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 4px;
  margin-bottom: 2px;
`;

export const NameBook = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: bold;
  `;

export const ContainerAuthor = styled.View`
  width: 104px;
  height: 14px;
  margin-left: 5px;
  margin-right: 5px
  margin-top: 2px;
  margin-bottom: 5px;
`;

export const Author = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.colors.secundary};
  `;

export const ContainerStar = styled.View`
  flex-direction: row;
  height: 10px;
  width: 100px;
  margin-left: 5px;
  margin-right: 5px
  margin-top: 3px
  margin-bottom: 3px;
  `;
export const Star = styled.Image`
  height: 10px;
  width: 10px;
  `;
