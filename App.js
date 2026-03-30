import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Capa from "./assets/capa.png";
import Profile from "./assets/foto-perfil.jpg";

export default function App() {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Image source={Capa} style={estilos.fotoTopo} />
      <View style={estilos.boxDescricao}>
        <Image source={Profile} style={estilos.fotoPerfil} />
        <Text style={estilos.titulo}>Flávio Félix</Text>
        <Text style={estilos.cargo}>Desenvolvedor Mobile</Text>

        <Text style={estilos.descricao}>
          Transformando ideias em aplicativos incríveis. Especialista em React
          Native, criando código limpo e interfaces modernas.
        </Text>

        <View style={estilos.statsContainer}>
          <View style={estilos.statBox}>
            <Text style={estilos.statNumber}>15+</Text>
            <Text style={estilos.statLabel}>Projetos</Text>
          </View>
          <View style={estilos.statDivider} />
          <View style={estilos.statBox}>
            <Text style={estilos.statNumber}>7</Text>
            <Text style={estilos.statLabel}>Anos Exp.</Text>
          </View>
          <View style={estilos.statDivider} />
          <View style={estilos.statBox}>
            <Text style={estilos.statNumber}>50+</Text>
            <Text style={estilos.statLabel}>Clientes</Text>
          </View>
        </View>

        <TouchableOpacity style={estilos.botao}>
          <Text style={estilos.textoBotao}>Entrar em Contato</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  fotoTopo: {
    height: 250,
    width: "100%",
  },
  boxDescricao: {
    flex: 1,
    alignItems: "center",
  },
  fotoPerfil: {
    marginTop: 20,
    marginBottom: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  titulo: {
    marginBottom: 10,
    fontSize: 22,
  },
  cargo: {
    textAlign: "center",
    marginHorizontal: 15,
    fontSize: 16,
  },

  descricao: {
    textAlign: "center",
    marginHorizontal: 20,
    fontSize: 14,
    color: "#444",
    marginTop: 15,
    marginBottom: 25,
    lineHeight: 22,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    marginBottom: 30,
    backgroundColor: "#f4f4f4",
    paddingVertical: 15,
    borderRadius: 10,
  },
  statBox: {
    alignItems: "center",
    flex: 1,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: "#ddd",
  },
  botao: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
