import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView
} from "react-native"
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";
function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
      </ScrollView>
    </SafeAreaView>
  )
}
export default App
