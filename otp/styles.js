import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: { fontSize: 32, marginBottom: 20, fontWeight: 'bold' },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    flexWrap: "wrap",
    marginTop: 28,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "grey",
    textAlign: "center",
    fontSize: 20,
    marginTop: 8,
  },
  verifyButton: {
    padding: 12,
    marginTop: 30,
    borderRadius: 5,
    width: "60%",
    alignItems: "center",
  },
  verifyText: { color: "white", fontSize: 16 },
  headingText: {
    color: "grey",
    fontSize: 16,
  },
  resendText1: {
    color: "grey",
    marginStart: 4,
  },
  resendText2: {
    color: "grey",
    marginStart: 4,
    fontWeight: "bold",
  },
  resendTextView: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
  },
});
