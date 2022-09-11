import { Image, SafeAreaView, Text, View} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useTailwind } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  },[])
  return (
    <SafeAreaView style={tw("pt-4")} >
      {/* header */}
      <Text>
      <View style={tw("flex-row pb-3 items-center mx-4")}>
        <Image 
        source = {{
          uri:"https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        }}
        style={tw("h-7 w-7 p-4 rounded-full bg-gray-300  mr-2")}
        />
      </View>
      <View>
        <Text style={tw("text-xs ")} >Deliver Now</Text>
        <Text  style={tw("font-bold text-xl")}>Current Location
        </Text>
      </View>
        </Text>
    </SafeAreaView>
  )
}

export default HomeScreen;