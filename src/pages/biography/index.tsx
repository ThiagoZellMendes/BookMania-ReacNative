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

export function Biography(props: Props) {
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
        <ContainerListBooks>
          <ListBooks horizontal={false} onClick={handleNavigationDetail} />
        </ContainerListBooks>
      </ScrollView>
    </Container>
  );
}
