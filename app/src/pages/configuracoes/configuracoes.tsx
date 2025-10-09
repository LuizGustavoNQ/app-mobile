import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch, ScrollView, StyleSheet } from "react-native";
import {Configuracoes_Styles} from "./configuracoes_styles";
import { Top_Bar } from "../../components/top_bar";
export default function Configuracoes() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [alertasChuva, setAlertasChuva] = useState(true);
  const [modoEscuro, setModoEscuro] = useState(false);

  return (
    <ScrollView contentContainerStyle={Configuracoes_Styles.container}>
        <Top_Bar title="configurações " />

      <View style={Configuracoes_Styles.box}>
        <Text style={Configuracoes_Styles.titulo}>Preferências</Text>

        <View style={Configuracoes_Styles.opcao}>
          <Text style={Configuracoes_Styles.opcaoTexto}>Notificações</Text>
          <Switch
            value={notificacoes}
            onValueChange={setNotificacoes}
            trackColor={{ false: "#ccc", true: "#4CAF50" }}
            thumbColor="#fff"
          />
        </View>

        <View style={Configuracoes_Styles.opcao}>
          <Text style={Configuracoes_Styles.opcaoTexto}>Alertas de Chuva</Text>
          <Switch
            value={alertasChuva}
            onValueChange={setAlertasChuva}
            trackColor={{ false: "#ccc", true: "#4CAF50" }}
            thumbColor="#fff"
          />
        </View>

        <View style={Configuracoes_Styles.opcao}>
          <Text style={Configuracoes_Styles.opcaoTexto}>Modo Escuro</Text>
          <Switch
            value={modoEscuro}
            onValueChange={setModoEscuro}
            trackColor={{ false: "#ccc", true: "#4CAF50" }}
            thumbColor="#fff"
          />
        </View>

        <TouchableOpacity style={[Configuracoes_Styles.botao, Configuracoes_Styles.botaoVerde]} activeOpacity={0.7}>
          <Text style={Configuracoes_Styles.botaoTexto}>Gerenciar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[Configuracoes_Styles.botao, Configuracoes_Styles.botaoVerde]}  activeOpacity={0.7}>  
          <Text style={Configuracoes_Styles.botaoTexto}>Sincronizar Dados</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[Configuracoes_Styles.botao, Configuracoes_Styles.botaoVerde]}  activeOpacity={0.7}>
          <Text style={Configuracoes_Styles.botaoTexto}>Backup</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[Configuracoes_Styles.botao, Configuracoes_Styles.botaoVerde]}  activeOpacity={0.7}>
          <Text style={Configuracoes_Styles.botaoTexto}>Ajuda e Suporte</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[Configuracoes_Styles.botao, Configuracoes_Styles.botaoVermelho]}  activeOpacity={0.7}>
          <Text style={Configuracoes_Styles.botaoTexto}>Sair do Aplicativo</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


