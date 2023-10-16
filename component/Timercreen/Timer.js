import { TouchableOpacity,View,Text } from "react-native";



const formatNumber = number => `0${number}` . slice(-2);
const getRemaining = () => {
    const minutes = Math.floor(time/60);
    const seconds = time - minutes * 60;
    return {minutes: formatNumber(minutes), seconds: formatNumber(seconds)}

}

const createArray = length => {

    const arr = [];
    let i = 0;
    while(i<length){
        arr.push(i.toString);
        i++;
    }
    return arr;
}

const AVAILABLE_Minutes = createArray(10);
const AVAILABLE_Seconds = createArray(60);


export default function Timerlocal(){

    state = {
            remainingSeconds: 5,
            isRunning: false,
            selectedMinutes: "0",
            selectedSeconds: "0"
    }

    interval = null;

    componentDidUpdate = (prevProp, prevState) => {

        if(this.state.remainingSeconds === 0 && prevState.remainingSeconds !== 0) {
            this.stop();
        }

    }

    componentWillUnmount=()=>{
        
    
        if(this.interval){
            clearInterval(this.interval);
        }
    }

    start = () => {
            this.setState(state => ({
                remainingSeconds:
                parseInt(state.selectedMinutes,10) * 60 + parseInt(state.selectedSeconds,30),
                isRunning: true
            }));
            this.interval = setInterval(() => {
                this.setState(state => ({
                    remainingSeconds: state.remainingSeconds - 1
                }));
            }, 1000);
    }

    stop = () => {
        clearInterval(this.interval);
        this.interval = null;
        this.setState({
            remainingSeconds:5,
            isRuning: false
        })

    }

renderPickers = ()=>(
<View style={style.pickerContainer}>
        <Picker
        style={styles.picker}
            itemStyle={styles.pickerItem}
            selectedValues={this.state.selectedMinutes}
            onValueChange={itemValue => {
                this.setState({selectedMinutes: itemValue});
                mode="dropDown"}}>
                    {
                        AVAILABLE_Minutes.map(value => (
                            <Picker.Item key={value} label={value} value={value}/>
                        ))
                    }
                 </Picker>
                 <Text > Мин.</Text>
   
  
    <Picker
    style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValues={this.state.selectedSeconds}
        onValueChange={itemValue => {
            this.setState({selectedSeconds: itemValue});
            mode="dropDown"}}>
                {
                    AVAILABLE_Seconds.map(value => (
                        <Picker.Item key={value} label={value} value={value}/>
                    ))
                }
             </Picker>
             <Text > Сек.</Text>
             </View>
);
    


    render=()=>{
        const {minutes,seconds} = getRemaining(this.state.remainingSeconds);
        return(

            <View>
                {
                    this.state.isRunning ? (
                        <Text>
                            {`${minutes}:${seconds}`}
                        </Text>
                    ) : (
                        this.renderPickers()
                    )
                }
                {
                    this.state.isRunning ? (
                        <TouchableOpacity
                        onPress={this.stop}
    
                        >
                            <Text>Стоп</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                        onPress={this.start}
    
                        >
                            <Text>Старт</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
    
        )
    }
   

}