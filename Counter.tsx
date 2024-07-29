import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, Text, TextInput, View } from "react-native";


const Counter = (): JSX.Element => {

    const [count,setCount]= useState(0)
    const handleIncrement = () : void=>{
        console.log('Increment button pressed');
        setCount(prevCount => prevCount + 1)
    }
    const handleDecrement = () : void =>{
        console.log('Decrement button pressed');
        setCount(prevCount => prevCount - 1)
    }

    //checking touch
    const handleReset = () : void =>{
        console.log('Counter was reset')
        setCount(0)
    }
    useEffect(()=>{
        console.log("rendered")
    },[])
  return (
    <SafeAreaView>
        <View>
            <Text>Counter App</Text>
            <Text>{count}</Text>
            <Button title="Increase" onPress={handleIncrement} />
            <Button title="Decrease" onPress={handleDecrement} />
            <Button disabled= {count === 0} title="Reset" onPress={handleReset} />
        </View>
    </SafeAreaView>

  )
}

export default Counter
