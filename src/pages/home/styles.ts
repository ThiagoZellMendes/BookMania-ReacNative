import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.backgroundColor};
  `;

export const HeaderHome = styled.View`
  width: 100%;
  height: 80px;
  background: ${({theme}) => theme.colors.backgroundColor};
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 30px;
`;

export const ContainerTextHeader = styled.View`
  height: 32px;
  margin-top: 36px;
  margin-left: 24px;
  
`;

export const TextHeader = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-weight: bold;
  font-size: 24px;
`;

export const ContainerAvatarHeader =styled.View`
  margin-right: 20px;
`;

export const Avatar =styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  margin-top: 36px;
  margin-left: 24px;
`;

export const ViewInput = styled.View`
margin-top: 16px
flex-direction: row;
border-width: 2px;
border-radius: 4px;
border-color: ${({theme}) => theme.colors.primary};
margin-left: 16px;
margin-right: 16px;
width:360px;
height:56px;
justify-content:space-between;
align-items: center;
`;

export const ContainerTitleBooks = styled.View`
  margin-top: 24px
  margin-left: 20px;
`;


export const TitleBooks = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size: 18.75px;
  font-weight: bold;
`;

export const ContainerViewCategorhys = styled.TouchableOpacity`
  height: 90px;
  width: 74px;
  margin-left:16px;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const ContainerListBooks = styled.View`
  margin-top: 16px;
`;




