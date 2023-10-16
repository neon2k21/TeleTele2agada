import { View, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground, Platform, Keyboard } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { theme } from '../../theme';
import {UserCircleIcon} from 'react-native-heroicons/solid'
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SearchBar } from 'react-native-screens';
import { photoData } from '../../constants/ImageForGallery'




export default function gallery(){

    return(
        <View className="space-y-5 pb-3">
            <View className="mx-5 flex-row justify-between items-center">
                <Text style={{fontSize: wp(4)}} className="font-semibold text-neutral-700">
                    Галерея
                </Text>
               
            </View>
            <ScrollView
            horizontal
            contentContainerStyle={{paddingHorizontal: 15}}
            className="space-x-4"
            showsHorizontalScrollIndicator={false}>
            {
                photoData.map((img, index) => {
                    return (
                        <TouchableOpacity key={index} className="flex items-center space-y-2">
                           <Image source={img.image} style={{height: wp(40), width: wp(60)}} className='rounded-3xl'/>
                        </TouchableOpacity>
                    )
                    })
            }

            </ScrollView>
        </View>

    )
}