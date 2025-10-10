import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors/colors";

export const DicasStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.branco,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.cor_principal,
    textAlign: "center",
    marginBottom: 20,
  },
  scroll: {
    flex: 1,
  },
  card: {
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.placeholder_text,
  },
  cardClaro: {
    backgroundColor: "#F9F9F9",
  },
  cardEscuro: {
    backgroundColor: "#E0E0E0",
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.cor_principal,
    marginBottom: 5,
  },
  texto: {
    fontSize: 15,
    color: "#333",
  },
  botao: {
    backgroundColor: COLORS.cor_principal,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    alignSelf: "center",
    width: "70%",
  },
  botaoTexto: {
    color: COLORS.branco,
    fontSize: 16,
    fontWeight: "bold",
  },
});