import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Moviments from "../../components/Moviments";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: 'boleto conta luz',
    value: '390,00',
    date: '17/09/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '22/09/2022',
    type: 1 // entrada
  },
  {
    id: 3,
    label: 'Salario',
    value: '7.200,00',
    date: '29/09/2022',
    type: 1 // entrada
  }
]

export default function Home(){
  return(
    <View style={styles.container}>
      <Header name="Lucas Felix"/>
      
      <Balance saldo="9.250.90" gastos="-570,00"/>

      <Actions/>

      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id) }
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Moviments data={item} /> }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list:{
    marginStart: 14,
    marginEnd: 14
  }
})