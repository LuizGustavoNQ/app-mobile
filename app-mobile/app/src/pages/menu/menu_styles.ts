import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4fff4", // tom de verde bem claro
  },

  header: {
    backgroundColor: "#4CAF50", // verde principal
    paddingVertical: 20,
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 3, // leve sombra no Android
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },

  appName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  title: {
    fontSize: 18,
    color: "#3a7f2e",
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingBottom: 30,
  },

  card: {
    backgroundColor: "#e7f8e7",
    borderRadius: 14,
    width: "40%",
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
  },

  cardText: {
    marginTop: 10,
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
  },
});