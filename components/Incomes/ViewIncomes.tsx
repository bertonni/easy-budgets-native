import { Text, View } from 'native-base';
import React from 'react'

const ViewIncomes = () => {
  return (
    <View
      _dark={{ bg: "dark.200" }}
      _light={{ bg: "light.200" }}
      px={4}
      flex={1}
    >
      <Text>ViewIncomes</Text>
    </View>
  );
}

export default ViewIncomes