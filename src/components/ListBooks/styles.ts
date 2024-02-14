import styled from 'styled-components/native';
import {FlatList} from 'react-native';


export const ContainerSteamCleaning = styled.View`
`;

export const SteanCleaningList = styled(
  FlatList as new () => FlatList
  ).attrs({
  showsHorizontalScrollIndicator: false,
  horizontal:true

})`

`;