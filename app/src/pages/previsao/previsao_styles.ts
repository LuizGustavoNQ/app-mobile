import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors/colors";

export const PrevisaoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // fundo total escuro (igual no print)
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  header: {
    width: "100%",
    backgroundColor: COLORS.cor_principal,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },

  headerText: {
    color: COLORS.branco,
    fontSize: 22,
    fontWeight: "bold",
  },

  infoLocal: {
    alignItems: "center",
    marginBottom: 25,
  },

  cidade: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
    marginBottom: 5,
  },

  temperatura: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
  },

  descricao: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },

  bloco: {
    width: "100%",
    backgroundColor: COLORS.branco,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  subtitulo: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },

  texto: {
    fontSize: 15,
    color: "#333",
    marginBottom: 4,
  },

  botao: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },

  botaoVerde: {
    backgroundColor: COLORS.cor_principal,
  },

  botaoCinza: {
    backgroundColor: "#6E6E6E",
  },

  botaoTexto: {
    color: COLORS.branco,
    fontSize: 16,
    fontWeight: "bold",
  },
});
