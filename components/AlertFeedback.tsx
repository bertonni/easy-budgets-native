import {
  Alert,
  Collapse,
  VStack,
  HStack,
  Text,
  IconButton,
  Box,
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import { AlertProps } from "../@types/types";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { StyleSheet } from "react-native";

const AlertFeedback = ({ show, close, title, message, variant }: AlertProps) => {
  const closeAlert = () => {
    close();
  };
  const color = variant === "success" ? 'green' : variant === "error" ? "red" : "lightblue"
  const offset = useSharedValue(10);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(offset.value * 50) }],
    };
  });
  return (
    // <Animated.View style={[styles.box, animatedStyles]}>
      <Alert maxW="400" status={variant}>
        <VStack space={1} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text
                fontSize="md"
                fontWeight="medium"
                _dark={{
                  color: "coolGray.800",
                }}
              >
                {title}
              </Text>
            </HStack>
            <IconButton
              variant="unstyled"
              _focus={{
                borderWidth: 0,
              }}
              icon={
                <MaterialCommunityIcons
                  name="close"
                  color={color}
                  size={20}
                />
              }
              _icon={{
                color: "coolGray.600",
              }}
              onPress={closeAlert}
            />
          </HStack>
          <Box
            pl="6"
            _dark={{
              _text: {
                color: "coolGray.600",
              },
            }}
          >
            {message}
          </Box>
        </VStack>
      </Alert>
    // </Animated.View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: 160,
    backgroundColor: "#45d",
  },
});

export default AlertFeedback;
