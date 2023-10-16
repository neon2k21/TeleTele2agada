import { TouchableOpacity,View, Image  } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { photoData } from "../../constants/ImageForGallery";
import { LinearGradient } from "react-native-svg";

export default function BookCard() {
    return (
        <View className="mx-4 flex-row justify-between flex-wrap">
            {
            photoData.map((item, index)=>{
                return(

                    <BookCard item={item} key = {index}/>
                )
            })
        }
        </View>
    )
}

const Book = ({item}) => {
    return(
        <TouchableOpacity
        style={{width: wp(44), height:hp(65)}}
        className="flex justify-end relative p-4 py-6 space-y-2 mb-5">
                <Image source={item.image} className="h-full w-full absolute bottom-0 rounded-3xl"/>

                <LinearGradient
                colors={['transparent', 'rgba(3,105,161,0.8']}
                style={{width:wp(44), height:hp(15)}}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
                className = "absolute bottom-0"
                />
        </TouchableOpacity>
    )
}
