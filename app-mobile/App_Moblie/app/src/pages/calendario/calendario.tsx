import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Calendario_Styles } from "./calendario_styles";

const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const diasMes = Array.from({ length: 30 }, (_, i) => i + 1);

export const Calendario = () => {
  return (
    <View style={Calendario_Styles.container}>
      <Text style={Calendario_Styles.titulo}>Calendário de Plantio</Text>

      <TouchableOpacity style={Calendario_Styles.adicionarButton}>
        <Text style={Calendario_Styles.adicionarText}>Adicionar Nova Tarefa</Text>
      </TouchableOpacity>

      <Text style={Calendario_Styles.mes}>Setembro 2023</Text>

      <View style={Calendario_Styles.semana}>
        {diasSemana.map((dia, idx) => (
          <Text key={idx} style={Calendario_Styles.diaSemana}>{dia}</Text>
        ))}
      </View>

      <View style={Calendario_Styles.diasContainer}>
        {diasMes.map((dia, idx) => (
          <TouchableOpacity
            key={idx}
            style={[
              Calendario_Styles.dia,
              dia === 5 ? Calendario_Styles.diaHoje : null, // destaca o dia 5
            ]}
          >
            <Text style={Calendario_Styles.diaText}>{dia}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={Calendario_Styles.tarefasHoje}>
        <Text style={Calendario_Styles.tituloTarefas}>Tarefas de Hoje</Text>
        <View style={Calendario_Styles.tarefaBox}>
          <Text style={Calendario_Styles.tarefaTitulo}>Plantio de Milho</Text>
          <Text style={Calendario_Styles.tarefaHora}>Área Norte - 08:00 às 10:00</Text>
        </View>
        <View style={Calendario_Styles.tarefaBox}>
          <Text style={Calendario_Styles.tarefaTitulo}>Adubação do Feijão</Text>
          <Text style={Calendario_Styles.tarefaHora}>Área Sul - 14:00 às 15:30</Text>
        </View>
      </View>
    </View>
  );
};