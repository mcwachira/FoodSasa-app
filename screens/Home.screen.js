import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,


} from 'react-native-heroicons/solid';



const HomeScreen = () => {

  const navigation = useNavigation()
0
//as soon as the screen mount do something
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [])

  return (
    <SafeAreaView className='bg-white pt-5'>

        {/* Header */}
        <View className='flex-row pb-3 items-center mx-4  space-x-2'>
          <Image
            source={{ uri: 'https://links.papareact.com/wru' }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />

          <View className='flex-1'>
            <Text className='font-bold text-gray-500 text-xs'>Deliver now</Text>
            <Text className='font-bold text-x1'>
              Current Location
              <ChevronDownIcon size={20} color='#00ccbb' />
            </Text>
          </View>

          <UserIcon size={35} color='#00ccbb' />
        </View>

        {/* Search */}

        <View className='flex-row items-center space-x-2 pb-2 mx-4'>
          <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
            <MagnifyingGlassIcon color='gray' size={20} />

            <TextInput placeholder='Restaurant and cuisines' keyboardType='default' />
          </View>

          <AdjustmentsHorizontalIcon color='#00ccbb' />
        </View>

    </SafeAreaView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  
})