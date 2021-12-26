import React from 'react';
import {Text, ImageProps } from 'react-native'
import { 
  ContainerImgServices,  
  ImgCardServices,
} from './styles'

export interface CardProps extends ImageProps {
  book_image: number;
  list_name: string
}

interface PropsCards {
  data: CardProps;
  onPress: () => void;
}

export function CardsBooks( { data, onPress} : PropsCards) {
  return(
        <ContainerImgServices onPress={onPress}>
          <ImgCardServices source={require('../../assets/01.png')} />
          <Text style={{color: '#000000', fontSize:15}}>{data.list_name}</Text>
        </ContainerImgServices>
  )
}