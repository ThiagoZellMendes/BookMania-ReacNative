import React from "react";
import { ImageProps } from "react-native-elements";
import {
  ContainerImgServices,
  ImgCardServices,
  NameBook,
  Author,
  ContainerStar,
  Star,
} from "./styles";

export interface CardProps  extends ImageProps{
  book_image?: string;
  title: string;
  author: string;
}

interface PropsCards {
  data: CardProps;
  onPress: () => void;
}

export function CardsBooks({ data, onPress, ...rest }: PropsCards) {
  return (
    <ContainerImgServices onPress={onPress}>
      <ImgCardServices source={{uri:data.book_image}} />
      <NameBook>{data.title}</NameBook>
      <Author>{data.author}</Author>
      <ContainerStar>
        <Star source={require("../../assets/Star.png")}/>
        <Star source={require("../../assets/Star.png")}/>
        <Star source={require("../../assets/Star.png")}/>
        <Star source={require("../../assets/Star.png")}/>
        <Star source={require("../../assets/Star.png")}/>
      </ContainerStar>
    </ContainerImgServices>
  );
}
