import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>This</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>is </Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Horizontal</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Bar</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>⏭️</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 9,
    },
    container: {
        padding: 8,
    },
    card: {
        width: 100,
        height: 100,
        backgroundColor: '#F8EDE3',
        // color : "#F8EDE3",
        padding: 10,
        margin: 10,
        borderRadius: 8,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    cardElevated: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    }

})