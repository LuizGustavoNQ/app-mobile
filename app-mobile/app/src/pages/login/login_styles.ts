import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors/colors";

export const Login_Styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: COLORS.branco,
      },
      login_box: {
            width: '90%',
            height: '50%',
            alignItems: 'center',
            gap: 15,
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: COLORS.placeholder_text,
            backgroundColor: '#f4f4f4',
            borderRadius: 10,
            marginTop: '40%',
      },
      inputs: {
            width: '90%',
            height: 50,
            backgroundColor: '#ebeaea',
            borderRadius: 30,
            paddingLeft: 20,
      },
      acessar: {
            width: '90%',
            height: 50,
            backgroundColor: COLORS.cor_principal,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
      },
      acessar_text: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
      },
});
