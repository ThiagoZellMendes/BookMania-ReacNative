import React, { useState } from "react";
import { ScrollView, StatusBar, TextInput, TouchableOpacity } from "react-native";
import { ListBooks } from "../../components/ListBooks";
import { Ionicons } from "@expo/vector-icons";
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
} from "./styles";

interface Props {
  navigation: any;
}

export function Home(props: Props) {
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
            style={{ paddingLeft: 16, width: "85%", color: "black" }}
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
          <ListBooks onClick={handleNavigationDetail} />
        </ContainerListBooks>

        <ContainerTitleBooks>
          <TitleBooks>Os mais lidos da semana</TitleBooks>
        </ContainerTitleBooks>
        <ContainerListBooks style={{ marginBottom: 40 }}>
          <ListBooks onClick={handleNavigationDetail} />
        </ContainerListBooks>
      </ScrollView>
    </Container>
  );
}
