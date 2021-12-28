import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useBooks } from '../../hooks/books'

import { CardsBooks } from '../../../src/components/CardsBooks';
import { ContainerSteamCleaning, SteanCleaningList  } from './styles';


interface PropsTypeList extends TouchableOpacityProps{
  onClick: () => void;
  data: 'data1' | 'data2';
}


export function ListBooks({ data, onClick} : PropsTypeList) {
  const booksList = useBooks()
  let dados;
  if(data === 'data1'){
    dados = booksList[1]
  }else if(data === 'data2'){
    dados = booksList[0]
  }
  return (
    <ContainerSteamCleaning>
      <SteanCleaningList 
        data={booksList}
        keyExtractor={item => item.rank}
        renderItem={({item}) => <CardsBooks onPress={onClick} data={item}/>}
      />
    </ContainerSteamCleaning>
  );
}