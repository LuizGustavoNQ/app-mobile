import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import React, { useState } from "react";
import { Cadastro_Styles } from "./cadastro_styles";
import { COLORS } from "../../assets/colors/colors";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Top_Bar } from "../../components/top_bar";
import { TextInput as PaperInput, Provider as PaperProvider } from 'react-native-paper';


export default function Cadastro() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <PaperProvider>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} 
            >
            <View style={Cadastro_Styles.container}>
                <Top_Bar title="Cadastro " />

                <View style={Cadastro_Styles.cadastro_box}>
                    <Text style={Cadastro_Styles.title}>Crie sua conta </Text>
                    <Text style={Cadastro_Styles.subtitle}>Preencha os dados abaixo </Text>

                    {/* Nome */}
                    <PaperInput
                        mode="outlined"
                        label="Nome"
                        value={name}
                        onChangeText={setName}
                        placeholder="Nome"
                        placeholderTextColor={COLORS.placeholder_text}
                        activeOutlineColor={COLORS.cor_principal}
                        outlineColor={COLORS.placeholder_text}
                        textColor={COLORS.preto}
                        left={<PaperInput.Icon icon={() => (<MaterialCommunityIcons name="account-outline" size={24} color={COLORS.preto} />)} />}
                        style={Cadastro_Styles.inputs}
                    />

                    {/* Email */}
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
                        style={Cadastro_Styles.inputs}
                    />

                    {/* Senha */}
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
                                    <MaterialCommunityIcons
                                        name={passwordVisible ? "lock-open-outline" : "lock-outline"}
                                        size={24}
                                        color={COLORS.preto}
                                    />
                                )}
                                onPress={() => setPasswordVisible(!passwordVisible)}
                            />
                        }
                        style={Cadastro_Styles.inputs}
                    />

                    {/* Confirmar Senha */}
                    <PaperInput
                        mode="outlined"
                        label="Confirmar Senha"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholder="Confirmar Senha"
                        placeholderTextColor={COLORS.placeholder_text}
                        activeOutlineColor={COLORS.cor_principal}
                        outlineColor={COLORS.placeholder_text}
                        textColor={COLORS.preto}
                        secureTextEntry={!confirmPasswordVisible}
                        left={
                            <PaperInput.Icon
                                icon={() => (
                                    <MaterialCommunityIcons
                                        name={confirmPasswordVisible ? "lock-open-outline" : "lock-outline"}
                                        size={24}
                                        color={COLORS.preto}
                                    />
                                )}
                                onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                            />
                        }
                        style={Cadastro_Styles.inputs}
                    />

                    {/* Botão Cadastrar */}
                    <TouchableOpacity style={Cadastro_Styles.cadastrar} onPress={() => { }} activeOpacity={0.7}>
                        <Text style={Cadastro_Styles.cadastrar_text}>Cadastrar</Text>
                    </TouchableOpacity>

                    {/* Link para Login */}
                    <TouchableOpacity activeOpacity={0.7} style={{ marginTop: 10 }}>
                        <Text style={Cadastro_Styles.links}>Já tem conta? Faça login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </KeyboardAvoidingView>
        </PaperProvider>
    );
}
