import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "./menu_styles";

export default function Menu() {
  const buttons = [
    { label: "Calendário", icon: "calendar" },
    { label: "Previsão", icon: "sunny" },
    { label: "Plantas", icon: "leaf" },
    { label: "Pragas", icon: "bug" },
    { label: "Adubação", icon: "flask" },
    { label: "Agrotóxicos", icon: "medkit" },
    { label: "Dicas", icon: "book" },
    { label: "Config", icon: "settings" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>Nome do App</Text>
      </View>

      <Text style={styles.title}>Menu Principal</Text>

      <View style={styles.grid}>
        {buttons.map((btn, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Ionicons name={btn.icon} size={28} color="#3a7f2e" />
            <Text style={styles.cardText}>{btn.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
