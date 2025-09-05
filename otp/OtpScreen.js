import { useRef, useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "./styles";

 const OtpScreen = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);
  const isOtpFilled = otp?.every((digit) => digit !== "");

  const handleChange = (text, index) => {
    const newOtp = [...otp];

    if (text === "" || /^\d$/.test(text)) {
      newOtp[index] = text;
      setOtp(newOtp);

      if (text && index < 3) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const handleVerify = () => {
    const otpNum = otp?.join("");
    if (otpNum?.length === 4) {
      console.log("Entered OTP:", otpNum);
    } else {
      Alert.alert("Incomplete OTP", "Please enter all 4 digits.");
    }
  };

  const handleResend = () => {
    console.log("Resend code triggered");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>OTP Verification</Text>
        <Text style={styles.headingText}>
          Enter the verification code we just send you
        </Text>
        <View style={styles.otpContainer}>
          {otp?.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              autoFocus={index === 0}
            />
          ))}
        </View>

        <TouchableOpacity
          style={[
            styles.verifyButton,
            { backgroundColor: isOtpFilled ? "#007bff" : "#ccc" },
          ]}
          onPress={handleVerify}
        >
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>

        <View style={styles.resendTextView}>
          <Text style={styles.resendText1}>Didn't Received the code?</Text>
          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resendText2}>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default OtpScreen;