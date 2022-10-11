import { Button, Center, HStack } from 'native-base';
import React from 'react'
import { HomeProps, StackParamList } from '../@types/types';

const HomeScreen = ({ navigation }: HomeProps) => {
  return (
    <Center
      _dark={{ bg: "dark.200" }}
      _light={{ bg: "light.200" }}
      px={4}
      flex={1}
    >
      <HStack space={4}>
        <Button onPress={() => navigation.navigate('Expenses')}>Expenses</Button>
        <Button onPress={() => navigation.navigate('Incomes')}>Incomes</Button>
      </HStack>
    </Center>
  );
}

export default HomeScreen;