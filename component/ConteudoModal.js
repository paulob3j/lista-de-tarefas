import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import ItemTodo from './itemDaLista';

export default ConteudoModal = ({textoDaAtividade, fecharModal, concluida, NaoConcluida})=>{
    return (
        <View style={estilosModal.viewPrincipal}>
            <TouchableOpacity onPress={fecharModal} style={estilosModal.opacite}></TouchableOpacity>
            <View style={estilosModal.acoes}>
                <Text style={estilosModal.textPergunta}>Deseja realmente marcar a atividade abaixo como concluida?</Text>
                <View style={estilosModal.item}>
                    <ItemTodo text={textoDaAtividade}/>
                </View>
                <View style={estilosModal.btnsAcoes}>
                    <TouchableOpacity onPress={concluida} style={estilosModal.btnSim}><Text style={estilosModal.textoBtn}>Sim</Text></TouchableOpacity>
                    <TouchableOpacity onPress={NaoConcluida} style={estilosModal.btnNao}><Text style={estilosModal.textoBtn}>Não</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const estilosModal = StyleSheet.create({
    viewPrincipal:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    acoes:{
        width:'100%',
        height:'35%',
        backgroundColor:'#fff',
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        alignItems:'center',
        justifyContent:'center',
        gap:20
    },
    opacite:{
        width:'100%',
        height:'65%',
    },
    textPergunta:{
        fontSize:18,
        fontWeight:'500',
        padding:5,
        textAlign:'center'
    },
    item:{
        borderColor:'rgba(85, 188, 246, 0.4)',
        borderWidth:3,
        borderRadius:10,
        backgroundColor:'rgba(85, 188, 246, 0.4)',
    },
    btnsAcoes:{
        flexDirection:'row',
        gap:25,
        width:'90%',
        alignItems:'center',
        justifyContent:'center'
    },
    btnSim:{
        width:150,
        height:45,
        backgroundColor:'rgba(85, 188, 246, 0.4)',
        borderRadius:20,
        justifyContent:'center'
    },
    btnNao:{
        width:150,
        height:45,
        backgroundColor:'rgba(85, 188, 246, 0.4)',
        borderRadius:20,
        justifyContent:'center'
    },
    textoBtn:{
        width:'100%',
        textAlign:'center',
        fontSize:17,
        fontWeight:'500'
    }
});