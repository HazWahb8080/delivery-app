import { SafeAreaView, Text} from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn';

const HomeScreen = () => {
  const tw = useTailwind();
  return (
    <SafeAreaView>
      <Text style={tw("text-xl font-bold text-gray-600 ")}>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen;