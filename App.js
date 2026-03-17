import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  const diminuir = () => {
    setContador(contador - 1);
  };
  const aumentar = () => {
    setContador(contador + 1);
  };
  const diminuir2 = () => {
    setContador2(contador2 - 1);
  };
  const aumentar2 = () => {
    setContador2(contador2 + 1);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logounipar.png")}
        style={styles.minhaImagem}
      />

      <View style={[styles.containerLinha, { flexDirection: "row" }]}>
        <Text style={[styles.coluna, { fontSize: 40 }]}>Nós</Text>
        <Text style={[styles.coluna, { fontSize: 40 }]}>Eles</Text>
      </View>

      <View style={[styles.containerLinha, { flexDirection: "row" }]}>
        <Text style={[styles.coluna, { fontSize: 60}]}>{contador}</Text>
        <Text style={[styles.coluna, { fontSize: 60}]}>{contador2}</Text>
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botaoAumentar} onPress={aumentar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.botaoDiminuir,
            { marginRight: 30 },
          ]} /*aprendi que da pra botar um style e uma coisa especifica junto agora kkkk*/
          onPress={diminuir}
        >
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoAumentar} onPress={aumentar2}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoDiminuir} onPress={diminuir2}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View> //esses button aq tive ajuda do gpt e do gabriel pq eu tava perdido
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  containerLinha: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  coluna: {
    width: 140, // teste
    alignItems: "center",
  },
  textoNome: {
    fontSize: 35,
    marginRight: 10, // espaço entre os textos
  },
  minhaImagem: {
    width: 200,
    height: 200,
    resizeMode: "contain", //pra n cortar a imagem
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  botaoAumentar: {
    backgroundColor: "green",
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  botaoDiminuir: {
    backgroundColor: "red",
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  textoBotao: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
