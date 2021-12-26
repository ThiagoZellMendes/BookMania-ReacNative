import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import { PropsList } from '.';


export const ContainerSteamCleaning = styled.View`
`;

export const SteanCleaningList = styled(
  FlatList as new () => FlatList<PropsList>
  ).attrs({
  showsHorizontalScrollIndicator: false,
  horizontal:true

})`

`;