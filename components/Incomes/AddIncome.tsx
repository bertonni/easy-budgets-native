import { Text, View } from 'native-base'
import React from 'react'

const AddIncome = () => {
  return (
    <View
      _dark={{ bg: "dark.200" }}
      _light={{ bg: "light.200" }}
      px={4}
      flex={1}
    >
      <Text>AddIncome</Text>
    </View>
  );
}

export default AddIncome;