import { useState } from "react";
import { View, Text, Image, TouchableOpacity} from 'react-native'
import { filterArray } from "./bookGenreComponent";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function SortCategories() {
const [activeSort, setActiveSort] = useState('Popular');
return(
    <View className="space-y-5 pb-3">
    <View className="mx-5 flex-row justify-between items-center">
        <Text style={{fontSize: wp(4)}} className="font-semibold text-neutral-700">
            Книги
        </Text>
       
    </View>
    <View className={` flex-row p-1 px-4 justify-around items-center mx-3 bg-neutral-100 rounded-full`}>
        {
            filterArray.map((sort,index)=>{
                let isActive = sort == activeSort;
                let activeButtonClass = isActive ? 'bg-white shadow' : '';
                return(

                    <TouchableOpacity onPress = {() => setActiveSort(sort)} key={index} className={`p-3 px-4 rounded-full flex ${activeButtonClass}`}>
                        <Text className="font-semibold" style={{fontSize: wp(4), color: isActive ? 'orange' :'black'}}>{sort}</Text>
                    </TouchableOpacity>
                )
            })
        }

    </View>
    </View>
   
    
)

}