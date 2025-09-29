import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors/colors";

export const Cadastro_Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.branco,
    },
    cadastro_box: {
        width: '90%',
        height: '65%',
        alignItems: 'center',
        gap: 15,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.placeholder_text,
        backgroundColor: '#f4f4f4',
        borderRadius: 10,
        marginTop: '25%',
        paddingVertical: 20,
    },
    title: {
        fontSize: 25,
        color: COLORS.cor_principal,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 15,
        marginBottom: 15,
    },
    inputs: {
        width: '90%',
        height: 50,
        backgroundColor: '#ebeaea',
        borderRadius: 30,
        marginVertical: 5,
        color: COLORS.preto,
    },
    cadastrar: {
        width: '90%',
        height: 50,
        backgroundColor: COLORS.cor_principal,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    cadastrar_text: {
        color: COLORS.branco,
        fontSize: 18,
        fontWeight: 'bold',
    },
    links: {
        color: COLORS.cor_principal,
        fontSize: 12,
        fontWeight: 'bold',
    },
});
