// import React from "react";
// import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from "react-native"


// const AppPro = (): JSX.Element => {
//     const isDarkMode = useColorScheme() === "dark"
//     return (
//         <View style={localStyle .container}>
//             <Text style = {isDarkMode ? localStyle.whiteText : localStyle.blackText}>
//                 HI can you see this text?????? 
//              </Text>
//         </View>
//      )
// }

// const localStyle  = StyleSheet.create({
//     container: {
//         // flex: 1,
//         height:"100%",
//         alignItems: "center",
//         justifyContent:"center",
//         backgroundColor:"green",


//     },
//     whiteText: {
//         color: "green"
//     },
//     blackText: {
//         color: "black"
//     }
// })
// export default AppPro;

import { View, Text } from 'react-native'
import React from 'react'

const AppPro = () => {
  return (
    <View>
      <Text>AppPro</Text>
    </View>
  )
}

export default AppPro

