import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground, Platform, Keyboard } from 'react-native'
import React, { useState } from 'react'
import {UserCircleIcon} from 'react-native-heroicons/solid'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Gallery from '../component/Homescreen/gallery'
import SortCategories from '../component/Homescreen/sortGenre'
import SearchBar from '../component/Homescreen/SearchBar';


const ios = Platform.OS==='ios';
const topMargin = ios ? 'mt-3': 'mt-10';


export default function HomeScreen() {

  const [searchResult, setSearchResult] = useState('');
  const getDataFromSearchBar = (result) => {
    searchResult(result);
  }



  return(
   
  <SafeAreaView className='pt-6 flex-1 bg-white'>
    <StatusBar style='light'/>
    <ScrollView showsVerticalScrollIndicator={false} className={"space-y-6"+topMargin}>
      <View className="mx-5 flex-row justify-between itens-center mb-10">
        <Text className='font-bold text-neutral-700' style={{fontSize: wp(7)}}>
          Главная
      </Text>
      <UserCircleIcon size={wp(10)} color={'orange'} />
      </View>
      
       
          
         
      <Gallery/>
      <SortCategories/>

      


    </ScrollView>
  </SafeAreaView>
  )
}
