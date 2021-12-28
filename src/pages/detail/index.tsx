import React from 'react';
import { Header } from 'react-native-elements';
import { View } from 'react-native'
import { useBooks } from '../../hooks/books';
import { SubmitButton } from '../../components/Button';
import { 
  Container, 
  HeaderBook,
  HeaderTitle, 
  ContainerImagemBook,
  ImagemBook,
  Title,
  Author,
  ContainerCategory,
  TextCategory,
  ContainerButton,
  ContainerTextAbout,
  TextAbout,
  ContainerDescription,
  TextDescription,
  ContainerStar,
  Star,
  Rating,
} from './styles';

interface Props {
  data: PropsBooks
  navigation: any;
}

interface PropsBooks {
  title:string,
  author: String,
  description: String,
  book_image: number,
}

export function Detail( props : Props){
  let booksList = useBooks()

  let books = booksList[1]

  const handleBack = () => {
    props.navigation.navigate('Home');
  };
  return(
    <Container>
    <View style={{marginTop: 24}}>
      <Header
        placement='right'
        backgroundColor="transparent"
        statusBarProps={{barStyle: 'dark-content'}}
        containerStyle={{
          height: '15%',
          backgroundColor: '#FFFFFF',
          marginTop: 10
        }}
        leftComponent={{
          onPress: handleBack,
          icon: 'arrow-back',
          color: '#333333',
          size: 28,
        }}
        centerComponent={{
          onPress: () => {},
          icon: 'favorite-border',
          color: '#333333',
          size: 28,
        }}
        rightComponent={{
          onPress: () => {},
          icon: 'share',
          color: '#333333',
          size: 28,
        }}
      />
      <HeaderBook>
        <ContainerImagemBook>
          <ImagemBook source={{uri:books[1].book_image}}/>
        </ContainerImagemBook>
        <HeaderTitle>
        <Title>{books[1].title}</Title>
        <Author>{books[1].author}</Author>
        <ContainerStar>
        <Star source={require("../../assets/Star.png")}/>
        <Star source={require("../../assets/Star.png")}/>
        <Star source={require("../../assets/Star.png")}/>
        <Star source={require("../../assets/Star.png")}/>
        <Star source={require("../../assets/Star.png")}/>
        <Rating>36 Avaliações</Rating>
      </ContainerStar>
        <ContainerCategory>
          <TextCategory>Não Ficção</TextCategory>
        </ContainerCategory>
        <ContainerCategory>
          <TextCategory>Literatura estrangeira</TextCategory>
        </ContainerCategory>
        </HeaderTitle>
      </HeaderBook>

      <ContainerTextAbout>
        <TextAbout>Sobre esse livro</TextAbout>
      </ContainerTextAbout>

      <ContainerDescription>
        <TextDescription>
          {books[1].description}
        </TextDescription>
      </ContainerDescription>
      </View>
      <ContainerButton>
        <SubmitButton title={'Ler Agora'}/>
      </ContainerButton>
    </Container>
  )
}