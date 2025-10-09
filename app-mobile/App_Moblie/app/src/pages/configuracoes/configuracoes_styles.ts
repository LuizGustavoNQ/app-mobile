import { COLORS } from "../../assets/colors/colors";
import { StyleSheet } from "react-native";


export const Configuracoes_Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.branco,
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: COLORS.cor_principal,
        textAlign: "center",
    },
    box: {
        width: "100%",
        backgroundColor: COLORS.branco,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingTop: 5,
        alignItems: "stretch",
    },
    opcao: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
        borderWidth: 1,
        borderColor: COLORS.placeholder_text,
        borderRadius: 10,
        paddingHorizontal: 20,
    },
    opcaoTexto: {
        fontSize: 16,
        color: "#333",
    },
    botao: {
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 10,
        alignItems: "center",
    },
    botaoVerde: {
        backgroundColor: COLORS.cor_principal,
    },
    botaoVermelho: {
        backgroundColor: "#F44336",
    },
    botaoTexto: {
        color: COLORS.branco,
        fontSize: 16,
        fontWeight: "bold",
    },
});