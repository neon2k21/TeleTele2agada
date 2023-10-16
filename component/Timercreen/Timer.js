import { TouchableOpacity } from "react-native";



const formatNumber = "";
const getRemaining = () => {

}

const createArray = () => {

}

const AVAILABLE_Minutes = "";
const AVAILABLE_Seconds = "";


export default function Timer(){

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

    componentWillUnmount(){
        
    
        if(this.interval){
            clearInterval(this.interval);
        }
    }

    start = () => {
            this.setState(state => ({
                remainingSeconds:
                parseInt(state.selectedMinutes,10) * 60 + parseInt(state.selectedMinutes,30),
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