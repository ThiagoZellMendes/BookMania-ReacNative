import React, { useState } from "react";
import { ScrollView, StatusBar, TextInput, View, Text } from "react-native";
import { ListBooks } from "../../components/ListBooks";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from 'styled-components';
import {
  Container,
  HeaderHome,
  ContainerTextHeader,
  TextHeader,
  ContainerAvatarHeader,
  Avatar,
  ViewInput,
  ContainerListBooks,
  ContainerTitleBooks,
  TitleBooks,
  ContainerViewCategorhys

} from "./styles";

interface Props {
  navigation: any;
}

export function Home(props: Props) {
  const theme = useTheme();
  const [search, setSearch] = useState("");

  const handleNavigationDetail = () => {
    props.navigation.navigate("Detail");
  };
  return (
    <Container>
      <StatusBar
        backgroundColor="#FFF"
        translucent={true}
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderHome>
          <ContainerTextHeader>
            <TextHeader>Bookshelf</TextHeader>
          </ContainerTextHeader>
          <ContainerAvatarHeader>
            <Avatar
              source={{
                uri: "https://avatars.githubusercontent.com/u/64324862?v=4",
              }}
            />
          </ContainerAvatarHeader>
        </HeaderHome>
        <ViewInput>
          <TextInput
            style={{ paddingLeft: 16, width: "90%", color: "black" }}
            placeholder="Qual livro você gostaria de ler hoje?"
            placeholderTextColor={"#9AA4AC"}
            keyboardType={"email-address"}
            value={search}
            autoCorrect={false}
            onChangeText={(search) => setSearch(search)}
          />
         
            <Ionicons
              name="search"
              color="#9AA4AC"
              size={17}
              style={{ marginRight: 19 }}
            />

        </ViewInput>
        <ContainerTitleBooks>
          <TitleBooks>Para você</TitleBooks>
        </ContainerTitleBooks>
        <ContainerListBooks>
          <ListBooks data={"data1"} onClick={handleNavigationDetail} />
        </ContainerListBooks>

        <ContainerTitleBooks>
          <TitleBooks>Categorias</TitleBooks>
        </ContainerTitleBooks>

        <ScrollView horizontal={true}>
          <ContainerViewCategorhys>
            <View style={
              {marginRight: 12, height: 74, width:74,backgroundColor:theme.colors.CBiografia, borderRadius:4}
              }/>
              <Text style={{fontSize:14, fontWeight:'bold'}}>Biografia</Text>
          </ContainerViewCategorhys>
          <ContainerViewCategorhys>
          <View style={
              {marginRight: 12, height: 74, width:74,backgroundColor:theme.colors.CTecnologia, borderRadius:4}
              }/>
              <Text style={{fontSize:14, fontWeight:'bold'}}>Tecnologia</Text>
          </ContainerViewCategorhys>
          <ContainerViewCategorhys>
          <View style={
              {marginRight: 12, height: 74, width:74,backgroundColor:theme.colors.CFiccao, borderRadius:4}
              }/>
              <Text style={{fontSize:14, fontWeight:'bold'}}>Ficção</Text>
          </ContainerViewCategorhys>
          <ContainerViewCategorhys>
          <View style={
              {marginRight: 12, height: 74, width:74,backgroundColor:theme.colors.CTPolitica, borderRadius:4}
              }/>
              <Text style={{fontSize:14, fontWeight:'bold'}}>Política</Text>
          </ContainerViewCategorhys>
          <ContainerViewCategorhys>
          <View style={
              {marginRight: 12, height: 74, width:74,backgroundColor:theme.colors.CAutoAjuda, borderRadius:4}
              }/>
          <Text style={{fontSize:14, fontWeight:'bold'}}>Auto Ajuda</Text>
          </ContainerViewCategorhys>
        </ScrollView>

        <ContainerTitleBooks>
          <TitleBooks>Os mais lidos da semana</TitleBooks>
        </ContainerTitleBooks>
        <ContainerListBooks style={{ marginBottom: 40 }}>
          <ListBooks data={"data2"} onClick={handleNavigationDetail} />
        </ContainerListBooks>
      </ScrollView>
    </Container>
  );
}


  
  