import React from "react";
import { View, Text, Image } from "react-native";

import Capa from "./assets/capa.png";
import Profile from "./assets/foto-perfil.jpg";

export default function App() {
  return (
    <View>
      <Image source={Capa} />
      <View>
        <Image source={Profile} />
        <Text>Flávio Félix</Text>
        <Text>Desenvolvedor Mobile</Text>
      </View>
    </View>
  );
}
