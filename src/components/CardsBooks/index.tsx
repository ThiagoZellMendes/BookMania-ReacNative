import React from "react";
import { ImageProps } from "react-native-elements";
import {
  ContainerImgbooks,
  ImgCardbooks,
  ContainerNameBooks,
  NameBook,
  ContainerAuthor,
  Author,
  ContainerStar,
  Star,
} from "./styles";

export interface CardProps extends ImageProps {
  book_image?: string;
  title: string;
  author: string;
}

interface PropsCards {
  data: CardProps;
  onPress: () => void;
}

export function CardsBooks({ data, onPress }: PropsCards) {
  function filterDesc(desc) {
    if (desc.length < 25) {
      return desc;
    }

    return `${desc.substring(0, 17)}...`;
  }
  return (
    <ContainerImgbooks onPress={onPress}>
      <ImgCardbooks source={{ uri: data.book_image }} />
      <ContainerNameBooks>
        <NameBook>{filterDesc(data.title)}</NameBook>
      </ContainerNameBooks>
      <ContainerAuthor>
      <Author>{filterDesc(data.author)}</Author>
      </ContainerAuthor>
      <ContainerStar>
        <Star source={require("../../assets/Star.png")} />
        <Star source={require("../../assets/Star.png")} />
        <Star source={require("../../assets/Star.png")} />
        <Star source={require("../../assets/Star.png")} />
        <Star source={require("../../assets/Star.png")} />
      </ContainerStar>
    </ContainerImgbooks>
  );
}
