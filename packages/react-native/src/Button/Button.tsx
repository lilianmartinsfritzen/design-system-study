import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md";
  children: React.ReactNode;
  isDisabled?: boolean;
  onPress?: () => void;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  isDisabled,
  onPress,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        styles[size],
        isDisabled && styles.disabled,
      ]}
      disabled={isDisabled}
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 14,
    fontSize: 14,
    fontWeight: "500",
    minWidth: 120,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  text: {
    fontFamily: "Nunito-Regular",
  },
  primary: {
    backgroundColor: "#0096c7",
    color: "#fff",
  },
  secondary: {
    borderColor: "#0096c7",
    borderWidth: 2,
    color: "#48cae4",
  },
  tertiary: {
    borderColor: "#7c7c8a",
    borderWidth: 2,
    color: "#7c7c8a",
  },
  disabled: {
    backgroundColor: "#a9a9b2",
  },
  sm: {
    height: 38,
  },
  md: {
    height: 46,
  },
});
