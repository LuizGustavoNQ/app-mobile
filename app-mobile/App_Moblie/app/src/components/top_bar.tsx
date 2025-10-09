import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { COLORS } from "../assets/colors/colors";

interface Top_BarProps {
    title: string;
}

export const Top_Bar: React.FC<Top_BarProps> = ({ title }) => {
    return (
        <View style={Top_Bar_Styles.sus_agendamento}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Text style={{ color: COLORS.branco, fontSize: 40 }}>{title}</Text>
            </View>
        </View>
    );
}

const Top_Bar_Styles = StyleSheet.create({
    sus_agendamento: {
        backgroundColor: COLORS.cor_principal,
        width: '100%',
        height: '15%',
        top: 0,
        alignItems: 'center',
        paddingTop: 60,
    },
});
