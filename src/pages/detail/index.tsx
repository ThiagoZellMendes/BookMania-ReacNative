import React from 'react';
import { Header } from 'react-native-elements';
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
  navigation: any;
}

export function Detail(props: Props){
  const handleBack = () => {
    props.navigation.navigate('Home');
  };
  return(
    <Container>
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
          <ImagemBook source={require('../../assets/01.png')}/>
        </ContainerImagemBook>
        <HeaderTitle>
        <Title>{`Wonder Women:25 Mulheres Inovadoras,
Inventoras e Pioneiras que Fizeram a Diferença`}</Title>
        <Author>Sam Maggs</Author>
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
          {`Agora pense no quão especial alguém deve ser para
conseguir os mesmos resultados quando nada ao redor
conspira a seu favor.

Em “Wonder Women”, o leitor conhecerá mulheres além
de seu tempo. Pessoas brilhantes, que se recusaram a
se acomodar no papel de coadjuvantes e foram à luta,
tornando-se protagonistas de sua própria vida.
Cientistas, engenheiras, matemáticas, aventureiras e
inventoras cujos feitos mudaram os rumos da história.`}
        </TextDescription>
      </ContainerDescription>
      
      <ContainerButton>
        <SubmitButton title={'Ler Agora'}/>
      </ContainerButton>
    </Container>
  )
}