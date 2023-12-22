import {View, Text, TextInput, TouchableOpacity, Keyboard, Button, Modal, StyleSheet, StatusBar, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import React  from 'react';
import { useState, useEffect} from 'react';
import ItemTodo from './component/itemDaLista';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ConteudoModal from './component/ConteudoModal';

export default function App (){

  const [tarefa, setTarefa] = useState();
  const [tarefaItens, setTarefaItens] = useState([]);
  const [modalVisibilidade, setModalVisibilidade] = useState(false);
  const [texto, setTexto] = useState('');
  const [indexSelect, setIndexSelect] = useState(null);

  useEffect(() => {
    obterDados();
  }, []);

  useEffect(() => {
    armazenarDados(tarefaItens);
  }, [tarefaItens]);

  const armazenarDados = async (valor)=>{
      await AsyncStorage.setItem('dados',JSON.stringify(valor));
  };

  const obterDados = async () =>{
      const valor = await AsyncStorage.getItem('dados');
      if(valor!==null){
        setTarefaItens(JSON.parse(valor));
      }
  };

  const abrirModal =(indexClicado)=>{
    setModalVisibilidade(true);
    setIndexSelect(indexClicado);
    setTexto(tarefaItens[indexClicado])
  };

  const removerItem = (index) =>{
      let itemsCopy = [...tarefaItens];
      itemsCopy.splice(index, 1);
      setTarefaItens(itemsCopy);
      setModalVisibilidade(false);
      Alert.alert('Tarefa concluida com sucesso');
  };
  


  const addNovaTarefa = () =>{
    if(tarefa!=null){
      Keyboard.dismiss();
      setTarefaItens([...tarefaItens,tarefa]);
      setTarefa(null)
      Alert.alert('Tarefa cadastrada com sucesso');
    }
  };

  return (
    <View style={stylos.viewPrincipal}>
      <StatusBar
        backgroundColor={'#E8EAED'}
        barStyle={'dark-content'}
      />
      <Modal
        animationType="slide"  // Define a animação ao abrir/fechar o modal (pode ser 'slide', 'fade', ou 'none')
        transparent={true}     // Define se o modal deve ter um fundo transparente
        visible={modalVisibilidade}  // Controla a visibilidade do modal
        >
          <ConteudoModal
            textoDaAtividade={texto}
            fecharModal={()=>setModalVisibilidade(false)}
            concluida={()=>removerItem(indexSelect)}
            NaoConcluida={()=>setModalVisibilidade(false)}
          />


      </Modal>

      <Text style={stylos.titulo}>Tarefas de Hoje</Text>
      
        <ScrollView style={stylos.scroll} showsVerticalScrollIndicator = {false}>
          <View style={stylos.itemLista}>
          {
              tarefaItens.map((item, i) => {
                return (
                  <TouchableOpacity key={i}  onPress={() => abrirModal(i)}>
                    <ItemTodo text={item} /> 
                  </TouchableOpacity>
                )
              })
          }
          </View>
        </ScrollView>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={stylos.viewInput}>
        <TextInput multiline={true} value={tarefa} onChangeText={texto => setTarefa(texto)} style={stylos.input} placeholderTextColor={'rgba(192, 192, 192, 1)'} placeholder='Digite aqui sua tarefa'></TextInput>
        <TouchableOpacity  onPress={()=>addNovaTarefa()}>
        <Text style={stylos.textBtn}>+</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </View>

  )
};

const stylos = StyleSheet.create({
  viewPrincipal:{
    backgroundColor:'#E8EAED',
    width:'100%',
    height:'100%',
    flex:1,
    alignItems:'center',
    justifyContent:'flex-start',
  },
  titulo:{
    width:'100%',
    height:45,
    top:94,
    left: 20,
    fontSize:24,
    fontFamily:'Roboto',
    fontWeight:'700',
    lineHeight:28.13,
  },
  itemLista:{
    paddingBottom:10,
    paddingTop:10,
    alignItems:'center',
    justifyContent:'flex-start',
    gap:15,
  },
  viewInput:{
    flexDirection:'row',
    width:'100%',
    height:80,
    alignItems:'center',
    justifyContent:'space-around',
    padding:20,
  },
  input:{
    backgroundColor:'#fff',
    width:246,
    height:46,
    borderRadius:60,
    textAlign:'center'
  },
  textBtn:{
    color:'rgba(192, 192, 192, 1)',
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:50,
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:32,
  },
  scroll:{
    paddingTop:100,
    width:'100%',
    height:'100%',
  },
});