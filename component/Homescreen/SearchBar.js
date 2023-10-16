import { useEffect, useState } from 'react'
import { View, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground, Platform, Keyboard, FlatList } from 'react-native'
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import * as booksApi from '../../BookApi/BookAPI';


export default function SearchBar(props){

    const [input, setInput] = useState('');
    const [item, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        getDataFromBooksAPI();
    },[getDataFromBooksAPI, props.callBackResult]);
    useEffect(()=>{
        setLoading(false);
    },[getDataFromBooksAPI, props.callBackResult]);

    const setChangeInput = text =>{
        setInput(text);
    }

    const getDataFromBooksAPI = async() => {
        try{
            const response = await booksApi.getBooks(input);
            setItems(response);
            const volumeInfo = getVolumeInfo(response.items)
            if(volumeInfo !== null){
               props.callBackResult(volumeInfo); 
            }
            else {
                props.callBackResult([]); 
            }

        }
            catch(error){
                console.log("err", error.toString);
            }
    }

    const getVolumeInfo = data => {
        return data.map(item => {
            console.log(item.volumeInfo);
            return item.volumeInfo;
        })
    }

    return(
        <View className="mx-5 mb-4">
        <View className='flex-row items-center bg-neutral-100 rounded-full p-2 space-x- pl-6'>
          <MagnifyingGlassIcon size={15} strokeWidth={3} color={'gray'}/>
          <TextInput
          placeholder='Название книги...'
          placeholderTextColor={'gray'}
          className='flex-1 text-base mb-1 pl-1 tracking-wider'
          value = {input}
          onChangeText={setChangeInput}
          />

        </View>
        {
              
                    <View className="absolute w-full bg-gray-300 top-16 rounded-3xl ">
                      {
                        item.map((item, index)=>{
                          let showBorder = index+1 != item.length;
                          let borderClass = showBorder? ' border-b-2 border-b-gray-400':'';
                          return (
                            <TouchableOpacity 
                              key={index}
                              className={"flex-row items-center border-0 p-3 px-4 mb-1 "+borderClass}>
                                <Text className="text-black text-lg ml-2">{item?.name}</Text>
                            </TouchableOpacity>
                          )
                        })
                      }
                    </View>
                  
                }
        
      </View>
    )

}