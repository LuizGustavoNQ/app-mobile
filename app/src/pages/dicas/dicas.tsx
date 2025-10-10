import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { DicasStyles } from "./dicas_styles";

const dicas = [
  { nome: "Alface", emoji: "🥬", texto: "De hoje até a próxima semana é ideal para iniciar o plantio.", tipo: "claro" },
  { nome: "Cenoura", emoji: "🥕", texto: "De hoje até a próxima semana é boa época para semear.", tipo: "claro" },
  { nome: "Couve", emoji: "🥬", texto: "De hoje até a próxima semana as condições estão favoráveis.", tipo: "claro" },
  { nome: "Cebolinha", emoji: "🌿", texto: "Na próxima semana começa o tempo ideal de plantio.", tipo: "escuro" },
  { nome: "Beterraba", emoji: "🍠", texto: "Na próxima semana inicia-se o período de cultivo recomendado.", tipo: "escuro" },
];

export const Dicas = () => {
  return (
    <View style={DicasStyles.container}>
      <Text style={DicasStyles.titulo}>Dicas de Cultivo</Text>
      <ScrollView style={DicasStyles.scroll} contentContainerStyle={{ paddingBottom: 20 }}>
        {dicas.map((dica, index) => (
          <View
            key={index}
            style={[
              DicasStyles.card,
              dica.tipo === "claro" ? DicasStyles.cardClaro : DicasStyles.cardEscuro,
            ]}
          >
            <Text style={DicasStyles.nome}>
              {dica.nome} {dica.emoji}
            </Text>
            <Text style={DicasStyles.texto}>{dica.texto}</Text>
          </View>
        ))}
        <TouchableOpacity style={DicasStyles.botao}>
          <Text style={DicasStyles.botaoTexto}>Ver Mais Dicas</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};