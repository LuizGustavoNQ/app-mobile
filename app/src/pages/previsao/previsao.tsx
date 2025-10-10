import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { PrevisaoStyles } from "./previsao_styles";
import { FontAwesome5 } from "@expo/vector-icons";

export const Previsao = () => {
  return (
    <View style={PrevisaoStyles.container}>
      <View style={PrevisaoStyles.header}>
        <Text style={PrevisaoStyles.headerText}>Previsão do Tempo</Text>
      </View>

      <View style={PrevisaoStyles.infoLocal}>
        <Text style={PrevisaoStyles.cidade}>Dois Vizinhos - PR</Text>
        <FontAwesome5
          name="cloud-sun"
          size={60}
          color="#FDB813"
          style={{ marginBottom: 5 }}
        />
        <Text style={PrevisaoStyles.temperatura}>25°C</Text>
        <Text style={PrevisaoStyles.descricao}>Parcialmente Nublado</Text>
      </View>

      <View style={PrevisaoStyles.bloco}>
        <Text style={PrevisaoStyles.subtitulo}>Previsão para Hoje</Text>
        <Text style={PrevisaoStyles.texto}>Mín: 18°C / Máx: 27°C</Text>
        <Text style={PrevisaoStyles.texto}>Umidade: 65%</Text>
        <Text style={PrevisaoStyles.texto}>Chuva: 10%</Text>
      </View>

      <View style={PrevisaoStyles.bloco}>
        <Text style={PrevisaoStyles.subtitulo}>Próximos Dias</Text>
        <Text style={PrevisaoStyles.texto}>Amanhã - 26°C ☁️</Text>
        <Text style={PrevisaoStyles.texto}>Quinta-feira - 24°C 🌧️</Text>
        <Text style={PrevisaoStyles.texto}>Sexta-feira - 22°C 🌧️</Text>
        <Text style={PrevisaoStyles.texto}>Sábado - 25°C ⛅</Text>
      </View>

      <TouchableOpacity style={[PrevisaoStyles.botao, PrevisaoStyles.botaoVerde]}>
        <Text style={PrevisaoStyles.botaoTexto}>Atualizar Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[PrevisaoStyles.botao, PrevisaoStyles.botaoCinza]}>
        <Text style={PrevisaoStyles.botaoTexto}>Configurar Localização</Text>
      </TouchableOpacity>
    </View>
  );
};
