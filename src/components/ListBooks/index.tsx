import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useBooks } from '../../hooks/books'

import { CardsBooks } from '../../../src/components/CardsBooks';
import { ContainerSteamCleaning, SteanCleaningList  } from './styles';


interface PropsTypeList extends TouchableOpacityProps{
  dados: 'data1' | 'data2';
  onClick: () => void;
}



export function ListBooks({ dados, onClick} : PropsTypeList) {
  const booksList = useBooks()
  let data
  if(dados === 'data1'){
    data = booksList[0]
  }else if(dados === 'data2'){
    data = booksList[1]
  }
  return (
    <ContainerSteamCleaning>
      <SteanCleaningList 
        data={data}
        keyExtractor={item => item.rank}
        renderItem={({item}) => <CardsBooks onPress={onClick} data={item}/>}
      />
    </ContainerSteamCleaning>
    
   );
   console.log(dados) 
}
