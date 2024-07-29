import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View  style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
        <Text>Red</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        // justifyContent:"center",
        // alignItems:"center",
    },
    
    headingText:{
        fontSize : 20,
        fontWeight : 'bold',
        // color : '#333',
        // color : "black",
        paddingHorizontal: 9,
    },
    
    card:{
        flex: 1,
        width: 100,
        height: 100,
        justifyContent:"center",
        alignItems:"center",
        margin:6,
    
        // backgroundColor: 'blue',
        // borderRadius: 10,
        // marginBottom: 10,
        // padding: 10,
        // backgroundColor: 'white',
        // borderRadius: 10,
        // marginBottom: 10,
        // padding: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // elevation: 2,
    },
    
    cardOne:{
        backgroundColor: '#ff0000',
        color : "#F8EDED",
        fontSize:20,


    },

})