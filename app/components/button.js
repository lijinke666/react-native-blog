/**
 * 测试一下组件
 */
import React,{
    StyleSheet,
    Component,
    View,
    Text,
    TouchableOpacity
} from "react-native"

//css module
const styles = StyleSheet.create({
    main:{
        display:"inline-block",
        fontWeight:500,
        textAlign:"center",
        touchAction: "manipulation",
        cursor: "pointer",
        backgroundImage: "none",
        border: "1px solid transparent",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        padding: "10px 30px",
        fontSize: 12,
        height: 38,
        userSelect: "none",
        position: "relative",
        color: "#fff",
        backgroundColor:"#108ee9",
        borderColor: "#e8e8e8",
        outline: "none"
    },
    button: {

    }
})

/**
 * 除了没css 之外 其他都感觉差不多..
 */
export default class Button extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        const {type} = this.props
        return (
            <View style={styles.main}>
                <Text>{this.props.children}</Text>
            </View>
        )
    }
}