import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors/colors";

export const Calendario_Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.branco,
    alignItems: "center",
    padding: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: COLORS.cor_principal,
  },
  adicionarButton: {
    backgroundColor: COLORS.cor_principal,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  adicionarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  mes: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  semana: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  diaSemana: {
    width: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  diasContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  dia: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  diaHoje: {
    backgroundColor: COLORS.cor_principal,
  },
  diaText: {
    fontWeight: "bold",
    color: "#000",
  },
  tarefasHoje: {
    width: "100%",
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  tituloTarefas: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  tarefaBox: {
    marginBottom: 10,
  },
  tarefaTitulo: {
    fontWeight: "bold",
  },
  tarefaHora: {
    color: "#555",
  },
});