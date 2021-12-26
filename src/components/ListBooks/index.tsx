import React, { useState, useEffect } from 'react';
import { TouchableOpacityProps } from 'react-native';

import api from '../../services/api'
import { CardsBooks } from '../../../src/components/CardsBooks';
import { ContainerSteamCleaning, SteanCleaningList  } from './styles';


interface PropsTypeList extends TouchableOpacityProps{
  onClick: () => void;
}

export function ListBooks({onClick} : PropsTypeList) {
  const [bookList, setbookList] = useState([]);
  const [error, setError] = React.useState<string>('');


 useEffect(() =>  {
  const TestBooks = async () => {
    
   const response = await api.get('/svc/books/v3/lists/overview.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR')   
    let listBooks
    try {
     listBooks = response.data.results.lists;
  
     setbookList(listBooks)

    } catch (err) {
        let errorMessage = 'Não foi possivel exibir livros';
        if (err?.response?.data?.message) {
          //erro retornado do Back
          errorMessage = err?.response?.data?.message;
        }
        setError(errorMessage);
      }
      
    }
    TestBooks();
    
 }, []);
 
 console.log(bookList);
  // let lista
  // if(dados === 'data1'){
  //   lista = data1
  // }else if(dados === 'data2') {
  //   lista = data2
  // }
  return (
    <ContainerSteamCleaning>
      <SteanCleaningList 
        data={bookList}
        keyExtractor={item => item.list_id}
        renderItem={({item}) => <CardsBooks onPress={onClick} data={item}/>}
      />
    </ContainerSteamCleaning>
  );
}
