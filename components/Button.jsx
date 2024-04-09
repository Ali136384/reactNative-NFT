import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";

export default function Butt({
  pressHandler,
  Icon,
  styleText,
  title,
  styleButton,
}) {
  const RenderButtonContent = () => {
    if (!Icon) return <Text style={styleButton}>{title && title}</Text>;
    return Icon;
  };
  return (
    <TouchableOpacity onPress={pressHandler}>
      <RenderButtonContent />
    </TouchableOpacity>
  );
}
