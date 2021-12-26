import React from "react";
import { Text, ImageProps } from "react-native";
import {
  ContainerImgServices,
  ImgCardServices,
  NameBook,
  Author,
  ContainerStar,
  Star,
} from "./styles";

export interface CardProps extends ImageProps {
  book_image: number;
  list_name: string;
}

interface PropsCards {
  data: CardProps;
  onPress: () => void;
}

export function CardsBooks({ data, onPress }: PropsCards) {
  return (
    <ContainerImgServices onPress={onPress}>
      <ImgCardServices source={require("../../assets/01.png")} />
      <NameBook>{`Rita Lee: Uma biografia`}</NameBook>
      <Author>Sam Maggs</Author>
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
