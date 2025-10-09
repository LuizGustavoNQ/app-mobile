import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Login_Styles } from "./login_styles";
import { COLORS } from "../../assets/colors/colors";
import Fontisto from '@expo/vector-icons/Fontisto';
import { Top_Bar } from "../../components/top_bar";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TextInput as PaperInput, Provider as PaperProvider } from 'react-native-paper';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <View style={Login_Styles.container}>
            <Top_Bar title="Login " />
            <View style={Login_Styles.login_box}>
                <Text style={{ fontSize: 25, color: COLORS.cor_principal, fontWeight: 'bold' }}>Bem-vindo! </Text>
                <Text style={{ fontStyle: 'normal', fontSize: 15 }}>Entre com sua conta </Text>
                <PaperInput
                    mode="outlined"
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    placeholderTextColor={COLORS.placeholder_text}
                    activeOutlineColor={COLORS.cor_principal}
                    outlineColor={COLORS.placeholder_text}
                    textColor={COLORS.preto}
                    left={<PaperInput.Icon icon={() => (<MaterialCommunityIcons name="email-outline" size={24} color={COLORS.preto} />)} />}
                    style={Login_Styles.inputs}
                />
                <PaperInput
                    mode="outlined"
                    label="Senha"
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Senha"
                    placeholderTextColor={COLORS.placeholder_text}
                    activeOutlineColor={COLORS.cor_principal}
                    outlineColor={COLORS.placeholder_text}
                    textColor={COLORS.preto}
                    secureTextEntry={!passwordVisible}
                    left={
                        <PaperInput.Icon
                            icon={() => (
                                <MaterialCommunityIcons name={passwordVisible ? "lock-open-outline" : "lock-outline"}
                                    size={24}
                                    color={COLORS.preto}
                                />
                            )}
                            onPress={() => setPasswordVisible(!passwordVisible)}
                        />
                    }
                    style={Login_Styles.inputs}
                />

                <TouchableOpacity style={Login_Styles.acessar} onPress={() => { /* ação do botão */ }} activeOpacity={0.7}>
                    <Text style={Login_Styles.acessar_text}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { /* ação para recuperar senha */ }} activeOpacity={0.7}>
                    <Text style={{ fontStyle: 'normal' }}>Esqueci minha senha </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} >
                    <Text style={{ color: COLORS.cor_principal, fontWeight: 'bold', }}>Não tem conta? Cadastre-se </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
