import {View, Text, StyleSheet} from 'react-native';

const ItemTodo = ({text}) => {
    return (
            <View style={stylosDoItem.viewItem}>
                
                <View style={stylosDoItem.viewText}>
                    <View style={stylosDoItem.itemQuadrado}></View>
                    <Text style={stylosDoItem.textItem}>{text}</Text>
                </View>
                <View style={stylosDoItem.itemCirculo}></View>
            </View>
    )
};

const stylosDoItem = StyleSheet.create({
    viewItem:{
        width:370,
        height:65,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#F6F6F6',
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    viewText:{
        flexDirection:'row',
        width:'90%',
        height:'100%',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    textItem:{
        fontSize:14,
        fontFamily:'Roboto',
        fontWeight:'400',
        lineHeight:16.41,
        textAlign:'justify', 
        width:'85%'      

    },
    itemQuadrado:{
        width:24,
        height:24,
        backgroundColor:'rgba(85, 188, 246, 0.4)',
        borderRadius:5,
        marginRight:16
    },
    itemCirculo:{
        width:12,
        height:12,
        borderRadius:5,
        backgroundColor:'#fff',
        borderWidth:2,
        borderColor:'rgba(85, 188, 246, 1)',


    }
})

export default ItemTodo;